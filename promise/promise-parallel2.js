// 並列実行のプロミス
const fetch = require("node-fetch");
const urls = ["https://ダミー.com", "https://www.google.com", "https://www.yahoo.co.jp"];
let promises = urls.map(url => fetch(url).then(r => r.text()));
Promise.allSettled(promises)
    .then(results => {
        console.log(results[0].status);
        console.log(results[1].status);
        console.log(results[2].status);
    })
    .catch(e => console.error(e));