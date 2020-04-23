let data = [
{ principal : 2500, time : 1.8 },
{ principal : 1000, time : 5 },
{ principal : 3000, time : 1 },
{ principal : 2000, time : 3 },
]
function interestCalculator(para){
	for (var i = 0; i < para.length; i++) {
		if(para[i].principal >= 2500 || para[i].time < 3) {
			para[i].rate = 3;
		} else if (para[i].principal < 2500 || para[i].time <- 1) {
			para[i].rate = 2;
		} else {
			para[i].rate = 1;
		// } for (let 1 = 0; i < para[1].length; i++) {
			para[i].interest = para[i].principal *  para[i].time * para
			[i].rate / 100;
		}
		let interestData = [para];
		console.log(interestData);
		return interestData;
	}
}
interestCalculator(data);