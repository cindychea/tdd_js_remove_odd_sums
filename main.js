function removeOddSum(array, arg1, arg2) {
    let evenSum = [];
    array.forEach(element => {
        if ((element[arg1] + element[arg2]) % 2 === 0) {
            evenSum.push(element);
        }
    });
    return evenSum
}

module.exports = removeOddSum;
