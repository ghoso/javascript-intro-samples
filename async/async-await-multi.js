// async await  並列処理
const fetch = require("node-fetch");
async function getType(url){
    let response = await fetch(url);
    let type = await response.headers.get("content-type");
    return type;
}

async function promise_multi(){
    let [value1, value2, value3] = await Promise.all([getType("https://www.it-akademeia.jp"), 
                                                      getType("https://www.yahoo.co.jp"),
                                                      getType("https://www.google.co.jp")]);
    return [value1, value2, value3];
}

promise_multi().then(result => {
    console.log("it-akademeia.jp: " + result[0]);
    console.log("yahoo.co.jp: " + result[1]);
    console.log("google.co.jp: " + result[2]);
});