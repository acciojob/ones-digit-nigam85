function onesDigit(n) {
  // your code here
	 if (typeof number !== 'number' || !Number.isInteger(number) || number <= 0) {
        throw new Error('Input must be a positive integer.');
    }

    // Get the ones digit by taking the remainder when divided by 10
    const ones = number % 10;

    return ones;
	
}

// Do not change the code below

const n = prompt("Enter Number:");
alert(onesDigit(n));
