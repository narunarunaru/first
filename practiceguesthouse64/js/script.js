

// jQuery無しでナビゲーションを開閉する関数
function navToggle() {

  // 開閉ボタンを取得
  var toggleBtn = document.getElementById('nav-toggle');

  // 開閉するナビゲーション本体を取得
  var navView = document.getElementById('nav-list');

  // 開閉ボタンの現在のクラスを取得
  var toggleBtnClass = toggleBtn.getAttribute('class');

  // 開閉ボタンのクラスで条件分岐
  // 1. 開閉ボタンのクラスが「close」だったら
  if(toggleBtnClass == 'nav-toggle-button close') {

    // 閉じている状態のクラスを削除
    toggleBtn.classList.remove('close');
    navView.classList.remove('close');

    // 開いている状態のクラスを付与
    toggleBtn.classList.add('open');
    navView.classList.add('open');

  }

  // 2. 開閉ボタンのクラスが「open」だったら
  else {

    // 開いている状態のクラスを削除
    toggleBtn.classList.remove('open');
    navView.classList.remove('open');

    // 閉じている状態のクラスを付与
    toggleBtn.classList.add('close');
    navView.classList.add('close');
  }
}


var lang = document.querySelector('html').lang;

var opt;
if(lang === 'ja'){
	opt = document.querySelector('option[value="indexguest.html"]');
}else if(lang === 'en'){
	opt = document.querySelector('option[value="indexguest-en.html"]');
}else if(lang === 'zh'){
opt = document.querySelector('option[value="indexguest-zh.html"]');
}
opt.selected = true;
document.getElementById('form').select.onchange= function(){
	location.href = document.getElementById('form').select.value;
}
