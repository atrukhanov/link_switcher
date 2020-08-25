window.onload = () => {
	let comments = document.getElementById('comments');
	let timeCodes = comments.querySelectorAll('div:nth-child(2) > div:nth-child(1)\
	 > div.pure-u-20-24.pure-u-md-22-24 > p:nth-child(2) > a');
	timeCodes.forEach(elem => {
		let signs = ['h','m','s'];
		let nodeTimes = elem.textContent.split(':');
		let timeFormat = nodeTimes.reduceRight((res, curr) => {
			return signs.pop() + curr + res;
		}, '');
		elem.href = 'potplayer://https://youtu.be/' +
			window.location.search.split('=')[1] +
			'?/t=' +
			timeFormat;
	});
};
