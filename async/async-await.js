// async await
const fetch = require("node-fetch");
async function getHtml(url){
    let response = await fetch(url);
    let text = await response.text();
    return text;
}

getHtml("https://www.it-akademeia.jp").then(text => { console.log(text) })
          .catch(e => console.error(e));