// Shared client-side predictor — mirrors the sklearn pipeline exactly
function buildVector(input, M){
  const num = new Set(M.numeric);
  return M.feature_columns.map(fc=>{
    if(num.has(fc)) return Number(input[fc]);
    const i=fc.indexOf('_'); const field=fc.slice(0,i), val=fc.slice(i+1);
    return String(input[field])===val ? 1 : 0;
  });
}
function evalTree(t, x){
  let n=0;
  while(t.cl[n]!==-1){ n = x[t.f[n]] <= t.t[n] ? t.cl[n] : t.cr[n]; }
  return t.v[n];
}
function predict(input, M){
  const x=buildVector(input,M);
  const lin = M.linear.coef.reduce((s,c,i)=>s+c*x[i], M.linear.intercept);
  const dt = evalTree(M.dt, x);
  const rf = M.rf.reduce((s,t)=>s+evalTree(t,x),0)/M.rf.length;
  return {linear_regression:+lin.toFixed(2), decision_tree:+dt.toFixed(2), random_forest:+rf.toFixed(2)};
}
if(typeof module!=='undefined') module.exports={predict,buildVector,evalTree};
