export default function () {
	return function cleanUrl(verboseUrl) {
		return verboseUrl.replace(/^http:\/\/(www\.)?/, '');
	}
}