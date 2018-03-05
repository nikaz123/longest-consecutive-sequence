module.exports = function longestConsecutiveLength(array) {

    let maxLength = 1; ///  максимальная длина последовательнсоти
    let counnt = 1;    /// длина текущей последовательности


    function sorter(a, b) {
        return a - b;
    }

    array.sort(sorter);

    if (array.length == 0) return 0;


    for (let i = 1; i < array.length; i++) {

        if (array[i] - array[i - 1] == 1) {

            counnt = counnt + 1
        }

        else {

            if (counnt > maxLength) {
                maxLength = counnt
            }
            counnt = 1;
        }

    }
        return maxLength;


}
