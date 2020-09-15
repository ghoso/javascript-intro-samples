// Promiseを使った関数
function wait(time){
    return new Promise((resolve, reject) => {
        if (time < 0){
            reject(new Error("Time must be positive."));
        }
        setTimeout(resolve, time);
    });
}

console.log("wait() called...");
wait(-100).then(() => console.log("Done !"), () => console.error("Failed"));