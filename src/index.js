module.exports = function reverse (n) {
    let reversed = String(n).split('').reverse().join(''); 
    let result = Number(reversed);
    if (n < 0) {
        n = Math.abs(n);
        reversed = String(n).split('').reverse().join(''); 
        result = Number(reversed);

    }
    return result;
 }