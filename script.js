window.onload = () => {
	let comments = document.getElementById('comments');
	let timeCodes = comments.querySelectorAll(
		'div:nth-child(2) > \
		div:nth-child(1) > \
		div.pure-u-20-24.pure-u-md-22-24 > \
		p:nth-child(2) > a'
	);
	timeCodes.forEach(elem => {
		const id = window.location.search.split('=')[1];
		const length = nodeTimes.length - 1;
		let nodeTimes = elem.textContent.split(':');
		let timeSec = nodeTimes.reduceRight((res, curr, i) => {
			return res + parseInt(curr) * Math.pow(60, length -  i);
		}, 0);		
		elem.href = `potplayer://https://youtu.be/${id}?t=${timeSec}`;
	});
};
