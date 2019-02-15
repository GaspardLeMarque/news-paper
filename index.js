function displayText() {
    console.log('displaying text...')
}
articles.forEach(article => {
    document.getElementById('root').innerHTML += (`<div onclick="displayText()">${article.title}</div>`)
});
