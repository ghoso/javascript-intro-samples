// async await forループ
const fetch = require("node-fetch");
const urls = ["https://www.it-akademeia.jp", "https://www.yahoo.co.jp", "https://www.google.co.jp"]; 
const promises = urls.map(url => fetch(url));

async function getTypeMulti(p) {
    let results = [];
    for await (const response of p){
        results.push(response.headers.get("content-type")); 
    }
    return results;
}

getTypeMulti(promises).then(u => {
    console.log("it-akademeia.jp: " + u[0]);
    console.log("yahoo.co.jp: " + u[1]);
    console.log("google.co.jp: " + u[2]);
});