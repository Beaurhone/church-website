
fetch('data/sermons.txt')
  .then(response => response.text())
  .then(data => {
    const list = document.getElementById('sermon-list');
    list.innerHTML = data.split('\n').map(line => `<p>${line}</p>`).join('');
  });
