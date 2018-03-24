function findValue(numbers) {
    let negativeNumbers = 0;

    for (let number of numbers) {
        if (number < 0) {
            negativeNumbers++;
        } else if (number == 0) {
            return 'Positive';
        }
    }

    if (negativeNumbers % 2 == 0) {
        return 'Positive';
    } else {
        return 'Negative';
    }
}

console.log(findValue([2, -2, 4, -3, 0]));