export const surround = (text: string, twoLetters: string) => {
	if (twoLetters.length === 2) {
		const first = twoLetters[0];
		const second = twoLetters[1];
		return first + text + second;
	} else {
		return text;
	}
}