let db = new PouchDB('articles');
console.log(articles)
articles.forEach(a => {
    a._id = a.id.toString()
    db.put(a, () => {});
})

db.allDocs({
    include_docs: true,
    descending: true
}, (err, doc) => {
    console.log(doc.rows);
});