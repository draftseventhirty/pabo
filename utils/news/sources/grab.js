function grab(url) {
  fetch('https://api.rss2json.com/v1/api.json?rss_url=' + encodeURIComponent(url))
    .then(r => r.json())
    .then(data => {
      const feed = document.getElementById('feed');
      data.items.forEach(item => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = 'https://r.jina.ai/' + encodeURIComponent(item.link);
        a.textContent = item.title;
        li.appendChild(a);
        feed.appendChild(li);
      });
    })
    .catch(e => document.getElementById('feed').textContent = 'Error: ' + e.message);
}
