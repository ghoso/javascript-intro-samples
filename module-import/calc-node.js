const sum = (x, y) => x + y;
export function mean(data){data => data.reduce(sum) / data.length;}