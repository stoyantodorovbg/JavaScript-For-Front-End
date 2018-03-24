function multiply(numbers) {
    if (numbers[0] < numbers[1]) {
        return numbers[0] * numbers[1];
    } else {
        return numbers[0] / numbers[1];
    }

}

console.log(multiply([10, 20]));

