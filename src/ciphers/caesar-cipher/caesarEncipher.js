export const caesarEncipher = (key, message) => {
	let cipherText = '';

	[...message].forEach((letter) => {
		const letterASCIIValue = letter.charCodeAt(0) - 97;
		let shiftedASCIIValue = letterASCIIValue + key;
		console.log(shiftedASCIIValue);
		if (shiftedASCIIValue > 25) {
			shiftedASCIIValue = shiftedASCIIValue - 26;
		}
		const cipheredLetter = String.fromCharCode(shiftedASCIIValue + 97);
		cipherText += cipheredLetter;
	});
	console.log(cipherText);
	return cipherText;
};
