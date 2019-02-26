import './index.css';

let root = document.getElementById('root');

var titlesContainer = document.createElement('p');
titlesContainer.id = 'titles-container';

let textContainer = document.createElement('p');
textContainer.id = 'text-container';

root.innerHTML = require('./page.html').html;
root.appendChild(titlesContainer);
root.appendChild(textContainer);

let articles = [
    {id:0,title:'example title',text:'example text'}
];
displayTitles(articles)


//#region functions

function displayTitles(artcls) {
    artcls.forEach(article => {
        var p = document.createElement("p");
        p.onclick = () => displayText(article.id);
        p.innerHTML = article.title;
        titlesContainer.appendChild(p);
    });
}

function displayText(id) {
    console.log('displaying text...')
    const article = articles.filter(a => a.id == id)[0];
    textContainer.innerHTML = article.text;
};

//#endregion