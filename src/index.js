module.exports = function longestConsecutiveLength(num) {

    // let maxLength = 0; ///  максимальная длина последовательнсоти
    // let counnt = 1;    /// длина текущей последовательности
    //
    //
    // function sorter(a, b) {
    //      return b - a;
    // }
    //
    // array.sort(sorter);
    //
    // if (array.length === 0) return 0;
    //
    //
    // for (let i = 1; i <= array.length; i++) if (array[i] - array[i - 1] === 1) {
    //     counnt += 1;
    // } else {
    //
    //     if (counnt > maxLength) {maxLength = counnt;    console.log(counnt);console.log (array[i])}
    //
    //         counnt = 1;
    // }
    // console.log(counnt)
    // console.log(maxLength)
    //     return maxLength;


    if (num.length == 0) {
        return 0;
    }


    let maxLength = 1;
    let myset = new Set()

    for (let i = 0; i < num.length; i++)
        myset.add(num[i]);


    for (let i = 0; i < num.length; i++) {

        let leftElement = num[i] - 1;
        let rightElement = num[i] + 1;
        let count = 1;
        let skip = 0;

        if (myset.has(leftElement)) {
            skip = 1
        }

        if (skip != 1) {
            while (myset.has(rightElement)) {
                count++;
                rightElement++;
            }
        }

        maxLength = Math.max(count, maxLength);
    }

    return maxLength;


}
