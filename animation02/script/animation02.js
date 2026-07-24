// 1. 서브메뉴 초기 숨기기
// 2. 메인메뉴를 클릭(터치)하면 서브메뉴 보이기
// 변수
const main2 = document.querySelector('.gnb > ul > li:nth-child(2)')
const sub = document.querySelector('.gnb .sub')

console.log(main2, sub);

// 1. 서브메뉴 초기 숨기기
sub.style.display = 'none';

// 2.메인메뉴를 클릭하면
main2.addEventListener('click',subShow);
function subShow() {
    sub.style.display = 'flex';
}