function readCookie(searchName) {
	let returnVal = '';
	let cook = document.cookie;
	let cookArr = cook.split(';');

	for (let i = 0; i < cookArr.length; i++) {
		let cookName = cookArr[i].split('=')[0];
		console.log(cookName);
		if (cookName == searchName) {
			// 쿠키를 찾았다.! searchName 쿠키의 값을 띄워줘야 함.
			returnVal = cookArr[i].split('=')[1];
		}
	}
	return returnVal;
}
