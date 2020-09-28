//
// utils.js
//
// デバッグ出力
let DEBUG = true;
export function debug_print(msg){
  if (DEBUG) {
    console.log("DEBUG: " + msg);
  }
}