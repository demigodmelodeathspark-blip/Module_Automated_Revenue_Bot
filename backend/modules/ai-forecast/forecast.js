function forecastRevenue(data){
    const avg = data.reduce((a,b)=>a+b,0)/data.length;
    const growthProjection = avg * 1.18;
    const riskAdjusted = growthProjection * 0.95;
    return {
        forecast: riskAdjusted,
        growthRate: '18%',
        riskAdjustment: '5%'
    };
}
module.exports = forecastRevenue;
