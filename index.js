function displayText() {
    console.log('displaying text...')
}

let root = document.getElementById('root');
articles.forEach(article => {
    root.innerHTML += `<div onclick="displayText()">${article.title}</div>`;
});
