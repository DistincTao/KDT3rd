// cookie를 읽어들여 로그가 없을 경우 저장하는 함수
function cookieLog(elem, name, val) {
	let cookArr = document.cookie.split(';');
	let searchName = name;
	// console.log(searchName);
	let isFind = false;
	for (let i = 0; i < cookArr.length; i++) {
		let cookName = cookArr[i].split('=')[0];
		let cookValue = cookArr[i].split('=')[1];
		// console.log(cookName, cookValue);
		if (cookName.trim() != searchName || elem.checked == true) {
			isFind = true;
			saveCookie(name, val);
		} else {
			delCookie(name);
		}
	}
}

// cookie를 저장하는 함수
function saveCookie(name, val, expDate) {
	let now = new Date();
	now.setDate(now.getDate() + Number(expDate));
	let newCookie = name + '=' + val + ';expires=' + now.toUTCString();
	document.cookie = newCookie; // 쿠키 저장
}
// 해당 cookie를 삭제하는 함수
function delCookie(name) {
	// myCooky 쿠키만 삭제
	// 삭제할 쿠키의 expires 값을 현재 날짜 , 시간으로 재설정하여 다시 저장 (overwrite)
	let now = new Date();
	let cookie = name + '=;expires=' + now.toUTCString();
	document.cookie = cookie;
}

// cookie를 읽어들이는 함수
function readCookie(name) {
	let cookArr = document.cookie.split(';');
	let searchName = name;
	// console.log(searchName);
	for (let i = 0; i < cookArr.length; i++) {
		let cookName = cookArr[i].split('=')[0];
		// let cookValue = cookArr[i].split('=')[1];
		// console.log(cookName, cookValue);
		if (cookName.trim() != searchName) {
			return true;
		} else {
			return false;
		}
	}
}

// 체크돼 있으면 cookie 저장하고 닫기
// function closeNotice(name, value) {
// 	if (elem.checked) {
// 		// 쿠키 남기자
// 		console.log(elem.checked);
// 		saveCookie(name, value);
// 		close();
// 	} else {
// 	close();
// 	}
// }
