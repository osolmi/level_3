//animation01.js
// item1에 마우스를 올리면 img태그 경로가 다른 이미지로 변경
//변수
const item1 = document.querySelector('.item')
const item1Img = document.querySelector('img')
console.log(item1, item1Img)

const item2Img = document.querySelector('img')
const colorchip1 = document.querySelector('.color1')
const colorchip2 = document.querySelector('.color2')
console.log(item2Img, colorchip1, colorchip2)
//이벤트
item1.addEventListener('mouseover',item1ImgSrc);
item1.addEventListener('mouseout',item1ImgSrcOut);

colorchip1.addEventListener('', changeNavy);
colorchip2.addEventListener('', changeBeige);
//함수
function item1ImgSrc(){
    item1Img.src = 'https://www.byredo.com/cdn-cgi/image/width=auto,height=1200,fit=scale-down,gravity=auto,format=webp,quality=70/https://www.byredo.com/media/catalog/product/cache/74c1057f7991b4edb2bc7bdaa94de933/b/y/byr_ecom_nv_casablanca_lily_2800x2800_02_new.jpg';
}
function item1ImgSrcOut(){
    item1Img.src = 'https://www.byredo.com/cdn-cgi/image/width=auto,height=1200,fit=scale-down,gravity=auto,format=webp,quality=70/https://www.byredo.com/media/catalog/product/cache/74c1057f7991b4edb2bc7bdaa94de933/b/y/byr_ecom_nv_casablanca_lily_2800x2800_01_new.jpg';
}
function changeNavy(){
    item2Img.src = 'https://img.just-one.co.kr/shopping_mall/product/2407/DA30252/580x630_07.jpg';
}
function changeBeige(){
    item2Img.src = 'https://shop-phinf.pstatic.net/20260612_164/17812426455740IRtm_JPEG/33958206034547489_608400501.jpg?type=o1000';
}