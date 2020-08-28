window.onload = () => {
	let timeCodes = document.querySelectorAll('[data-onclick="jump_to_time"]');
	timeCodes.forEach(elem => {
		const id = window.location.search.split('=')[1];
		let nodeTimes = elem.textContent.split(':');
		const length = nodeTimes.length - 1;
		let timeSec = nodeTimes.reduceRight((res, curr, i) => {
			return res + parseInt(curr) * Math.pow(60, length - i);
		}, 0);
		elem.href = `potplayer://https://youtu.be/${id}?t=${timeSec}`;
	});
};
