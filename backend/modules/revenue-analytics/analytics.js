function calculateMRR(transactions){
    return transactions.reduce((a,b)=>a+b.amount,0);
}
function calculateARR(mrr){
    return mrr * 12;
}
module.exports = { calculateMRR, calculateARR };
