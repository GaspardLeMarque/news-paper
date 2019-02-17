let db = new PouchDB('articles');

articles.forEach(a => { a._id = a.id.toString(); db.put(a, () => {});
})