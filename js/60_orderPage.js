  function Menus(name, cost) {
    this.name = name;
    this.cost = cost;
  }

  let menu = new Menus('반반콤보', 23000);
  let menu1 = new Menus('블랙시크릿순살S', 14000);
  let menu2 = new Menus('허니순살S', 13000);
  let menu3 = new Menus('레드순살S', 13000);
  let menu4 = new Menus('교촌순살S', 12000);

  let total = menu.cost;

  console.log(total);
  

function selectMenu(index) {
  // 체크 여부 확인
  let add = document.getElementsByClassName(`sub`)[index];
  let isChecked = add.checked;

  // console.log(add);
  let menuCost = parseInt(document.getElementsByClassName("addMenu")[index].children[1].innerHTML);
  if (isChecked) {
    total += menuCost;
  } else {
    total -= menuCost;
  }
  document.getElementsByClassName("finalCost")[0].innerHTML = `${total}원`;
} 

// function selectCount() {
//   let checked = document.getElementsByClassName(`add`);
//   cnt = 0;
//   for (let i = 0; i < checked.length; i++) {
//     if (checked[i].checked) {
//       cnt++;
//     } else if (cnt > 3){
//     document.getElementsByClassName("alert")[0].innerHTML = "2개까지만 선택 가능합니다."
//     }
//   }

// }


