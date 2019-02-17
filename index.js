let textContainer = document.getElementById('text-container');
function displayText(id) {
    findArticle(a => a.id == id, found => textContainer.innerHTML = found.text);
};

let root = document.getElementById('root');
getArticles(fillTitles)

function fillTitles(artcls) {
    artcls.forEach(a => {
        root.innerHTML += `<p onclick="displayText(${a.id})"><i>${a.title}</i></p>`;
    })
}

function getArticles(callback) {
    db.allDocs({ include_docs: true, descending: true }, (err, doc) => {
        callback(doc.rows.map(r => r.doc));
    }); 
}

function findArticle(condition, callback) {
    getArticles(artcls => { callback(artcls.filter(condition)[0]); });
}