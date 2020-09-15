export function showMessage() {
    let msg = "Welcome JS World !";
    let msg_area = document.querySelector("#message");
    console.log("call showMessage()");
    msg_area.innerText= msg;
}