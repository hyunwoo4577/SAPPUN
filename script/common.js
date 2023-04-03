//-------------------------------------변수
//1. KR
const kr_lnb = document.querySelector('header .right >li:first-child')
const kr_lnb_open = document.querySelector('header .lang')
//2. 전체메뉴+닫기
const all_nav = document.querySelector('header .right>li:last-child>a')
const all_nav_open = document.querySelector('header .all_nav')
const all_nav_close = document.querySelector('header .all_nav .close')
//3.ACC gnb + sub
const nav_acc = document.querySelectorAll('nav > ul > li')
const nav_acc_sub = document.querySelectorAll('nav>ul>li>.sub')
console.log(kr_lnb, kr_lnb_open)
console.log(all_nav, all_nav_open, all_nav_close)
console.log(nav_acc, nav_acc_sub)
//----------------------------------event
//이벤트 실행 전 모두 숨기기
//객체.속성.속성 = 값
//객체.style.display = 'none'
kr_lnb_open.style.display = 'none'
all_nav_open.style.display = 'none'
nav_acc_sub[0].style.display = 'none'
//2. 햄버거메뉴 클릭시 전체메뉴 나오기
all_nav.addEventListener('click',function(){
    all_nav_open.style.display = 'block'//위에서 숨겼음으로 다시 나오게
}) 
//3. 닫기 클릭시 전체메뉴 숨기기
all_nav_close.addEventListener('click',function(){
    all_nav_open.style.display = 'none'
}) 
//4. ACC위에 마우스 올리면 나타남
//mouseover, mouseout
nav_acc[12].addEventListener('mouseover',function(){
    nav_acc_sub[0].style.display = 'block'
})
nav_acc[12].addEventListener('mouseout',function(){
    nav_acc_sub[0].style.display = 'none'
})
nav_acc_sub[0].addEventListener('mouseover',function(){
    nav_acc_sub[0].style.display = 'block'
})
nav_acc_sub[0].addEventListener('mouseout',function(){
    nav_acc_sub[0].style.display = 'none'
})
//5.kr 마우스 인아웃
kr_lnb.addEventListener('mouseover',function(){
    kr_lnb_open.style.display = 'block'
})
kr_lnb.addEventListener('mouseout',function(){
    kr_lnb_open.style.display = 'none'
})
