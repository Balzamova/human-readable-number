module.exports = function toReadable(number) {
    const zeroNine = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const tenNinteen = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const twentyNinety = ['ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    if (number < 10) return zeroNine[number];
    if (number > 9 && number < 20) return tenNinteen[number % 10];
    if (number > 19 && number < 100) {
        if (number % 10 === 0) return twentyNinety[number / 10 - 1];
        else return `${twentyNinety[Math.trunc(number / 10) - 1]} ${zeroNine[number % 10]}`;
    };
    if (number > 99 && number < 1000) {
        if (number % 100 === 0) return `${zeroNine[(number / 100)]} hundred`;
        else {
            let first = Math.trunc(number / 100);
            let second = Math.trunc(number % 100);
            if (second % 10 === 0) return `${zeroNine[first]} hundred ${twentyNinety[Math.trunc(second / 10) - 1]}`;
            else if (second < 10) return `${zeroNine[first]} hundred ${zeroNine[(second)]}`;
            else if (second > 9 && second < 20) return `${zeroNine[first]} hundred ${tenNinteen[(second % 10)]}`;
            else return `${zeroNine[first]} hundred ${twentyNinety[Math.trunc(second / 10) - 1]} ${zeroNine[second % 10]}`;
        }
    }
}