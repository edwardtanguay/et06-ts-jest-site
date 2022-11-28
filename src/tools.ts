export const surround = (text: string, threeLetters: string) => {
	if (threeLetters.length === 3) {
		const first = threeLetters[0];
		const second = threeLetters[1];
		const third = threeLetters[2];
		return first + text + second + '/' + third;
	} else {
		return text;
	}
}