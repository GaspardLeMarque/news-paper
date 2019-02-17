let textContainer = document.getElementById('text-container');
function displayText(id) {
    console.log('displaying text...')
    const article = articles.filter(a => a.id == id)[0];
    textContainer.innerHTML = article.text;
};

let root = document.getElementById('root');
articles.forEach(article => {
    root.innerHTML += `<p onclick="displayText(${article.id})">${article.title}</p>`;
});