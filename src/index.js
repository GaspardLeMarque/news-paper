//let textContainer = document.getElementById('text-container');

fetch('localhost:3000/articles').then(function(response) {
  let objectURL = URL.createObjectURL(response);
  textContainer.src = objectURL;
});


//function displayText(id) {
//    console.log('displaying text...')
//    const article = articles.filter(a => a.id == id)[0];
//    textContainer.innerHTML = article.text;
//};

//let root = document.getElementById('root');

//displayTitles(articles)

//function displayTitles(artcls) {
//    artcls.forEach(article => {
//        var p = document.createElement("p");
//        p.onclick = () => displayText(article.id);
//        p.innerHTML = article.title;
//        root.appendChild(p);
//    });
//}
