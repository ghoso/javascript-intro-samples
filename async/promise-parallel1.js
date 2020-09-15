// 並列実行のプロミス
const fetch = require("node-fetch");
const urls = ["https://www.google.com", "https://www.yahoo.co.jp", "https://it-akademeia.jp"];
let promises = urls.map(url => fetch(url).then(r => r.text()));
Promise.all(promises)
    .then(bodies => {
        console.log(bodies);
    })
    .catch(e => console.error(e));