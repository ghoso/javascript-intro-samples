const mean =  (data) => {
    const sum = (x, y) => x + y;
    let result = data.reduce(sum) / data.length;
    return result;
}
module.exports = { mean };