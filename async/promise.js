// Promise
// npm i node-fetch --save

// シーケンシャルなプロミスの実行
const fetch = require("node-fetch");
let url="https://it-akademeia.jp"
fetch(url)
    .then(response => {
        let type = response.headers.get("content-type");
        return type;
    })
    .then(data => {
        console.log(data);
    }).catch(e => {
        console.error(e);
    });