window.onload = () => {
	let timeCodes = document.querySelectorAll('[data-onclick="jump_to_time"]');
	timeCodes.forEach(elem => {
		const id = window.location.search.split('=')[1];
		let nodeTimes = elem.textContent.split(':');
		let timeSec = nodeTimes.reduceRight((res, curr, i) => {
			return res + parseInt(curr) * Math.pow(60, nodeTimes.length - i - 1);
		}, 0);
		elem.href = `potplayer://https://youtu.be/${id}?t=${timeSec}`;
	});
};
