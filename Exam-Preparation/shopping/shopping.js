function calculate(array) {
    let budget = array[0];
    let chocolatesCount = array[1];
    let littersMilk = array[2];
    let orangeCount = Math.round(chocolatesCount - (0.35 * chocolatesCount));

    let chocolatePrice = chocolatesCount * 0.65;
    let milkPrice = littersMilk * 2.70;
    let orangePrice = orangeCount * 0.20;

    let result = budget - (Number(chocolatePrice.toFixed(2)) + Number(milkPrice.toFixed(2)) + Number(orangePrice.toFixed(2)));
    if (result >= 0) {
        console.log(`You got this, ${result.toFixed(2)} money left.`)
    } else {
        console.log(`Not enough money, you need ${Math.abs(result.toFixed(2))} more.`)
    }

}
calculate([10, 5, 1.5]);