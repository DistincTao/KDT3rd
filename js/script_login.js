let inputBox = document.querySelectorAll('.inputBox');

let inputId = document.getElementById('inputId');
let inputPw = document.getElementById('inputPw');
let loginBt = document.getElementById('loginBt');
let idLength = inputId.value.length;
let loginErrorMsg = document.getElementById('errorMsg');

inputBox.forEach((item, index) => {
  let inputText = inputBox[index].firstElementChild;
  inputText.addEventListener('keyup', e => {
    let changeInputBgColor = () => {
      let inputBgColor = e.target.parentNode.style; 
      if (e.target.value.length > 0) {
        inputBgColor.backgroundColor = "#fff";
        if (inputId.value.includes('') && inputPw.value.length >= 8) {
          loginBt.disabled = false;
        }
      } else {
        inputBgColor.backgroundColor = '#efefef';
        loginBt.disabled = true;
      }
    }
    changeInputBgColor();
  });
});

loginBt.addEventListener("click", (event) => {
  event.preventDefault();
  let loginForm = document.getElementById("loginForm")
  const userId = loginForm.inputId.value;
  const userPw = loginForm.inputPw.value;
  let username = "distinctao";
  let password = "11111111";
  if (username === userId && password === userPw) {
    alert("You have successfully logged in.");
    location.href="/13_4_index.html";
    } else {
      loginErrorMsg.style.opacity = 1;
      changeInputBgColor();
    }
  }
);

let searchId = document.getElementById ('searchId');
searchId.addEventListener("click", (event) => {
  location.href="13_5_searchID.html";
})