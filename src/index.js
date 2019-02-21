let articles = require('./articles-container').articles;
console.log(articles)

let textContainer = document.getElementById('text-container');
function displayText(id) {
    console.log('displaying text...')
    const article = articles.filter(a => a.id == id)[0];
    textContainer.innerHTML = article.text;
};

let root = document.getElementById('root');
articles.forEach(article => {
    var p = document.createElement("p");
    p.onclick = () => displayText(article.id);
    p.innerHTML = article.title;
    root.appendChild(p);
});