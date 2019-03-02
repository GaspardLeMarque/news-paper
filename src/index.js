import './index.css';

let root = document.getElementById('root');

var titlesContainer = document.createElement('p');
titlesContainer.id = 'titles-container';

let textContainer = document.createElement('p');
textContainer.id = 'text-container';

root.innerHTML = require('./page.html').html;
root.appendChild(titlesContainer);
root.appendChild(textContainer);

let articles;
//displayTitles(articles)


console.log(articles)
fetch('http://localhost:3000/articles')
  .then(response => response.json())
  .then(data => { 
    displayTitles(data);
    articles=data;
})


let apiArticles;

fetch('https://newsapi.org/v2/top-headlines?country=se&pageSize=3&apiKey=959015783e8f49b888ae47b83bd191f0')
    .then(apiResponse => apiResponse.json())
    .then(apiArray => {
        let i = 4;
        apiArticles=apiArray.articles.map(a => {
            return {id: i++, title: a.title, text: a.content}})
        displayTitles(apiArticles);
        articles = articles.concat(apiArticles)
        console.log(articles)
    })  




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

