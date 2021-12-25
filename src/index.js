module.exports = function toReadable(number) {
    let length = number.toString().length;
    const singleDigits = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const twoDigits = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const tensMultiple = [null, 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    switch (length) {
        case 1:
            return singleDigits[number];
        case 2:
            return number % 10 === 0 ? tensMultiple[Math.floor(number / 10)] :
                Math.floor(number / 10) === 1 ? twoDigits[number % 10] :
                    tensMultiple[Math.floor(number / 10)] + ' ' + singleDigits[number % 10];
        case 3:
            return singleDigits[Math.floor(number / 100)] + ' hundred' + (number % 100 === 0 ? '' : ' ' +
                (Math.floor(number % 100 / 10) === 0 ? singleDigits[number % 10] :
                    number % 10 === 0 ? tensMultiple[Math.floor((number % 100) / 10)] :
                        Math.floor((number % 100) / 10) === 1 ? twoDigits[number % 10] :
                            tensMultiple[Math.floor((number % 100) / 10)] + ' ' + singleDigits[number % 10]));
    }
}
