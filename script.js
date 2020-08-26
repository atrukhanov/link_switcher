window.onload = () => {
  let comments = document.getElementById('comments');
  let timeCodes = comments.querySelectorAll(
    'div:nth-child(2) > \
    div:nth-child(1) > \
    div.pure-u-20-24.pure-u-md-22-24 > \
    p:nth-child(2) > \
    a'
  );
  timeCodes.forEach(elem => {
    let nodeTimes = elem.textContent.split(':');
    let timeFormat = nodeTimes.reduceRight((res, curr, i) => {
      return res + parseInt(curr) * (nodeTimes.length - i);
    }, 0);
    elem.href = [
      'potplayer://https://youtu.be/',
      window.location.search.split('=')[1],
      '?t=',
      timeFormat
      ].join('');
  });
};
