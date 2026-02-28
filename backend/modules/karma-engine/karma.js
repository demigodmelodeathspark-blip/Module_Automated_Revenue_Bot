function calculateKarma(actions){
    const positiveWeight = 12;
    const score = actions.length * positiveWeight;
    const tier = score > 500 ? 'Master' :
                 score > 200 ? 'Elite' : 'Standard';
    return { karmaPoints:score, tier };
}
module.exports = calculateKarma;
