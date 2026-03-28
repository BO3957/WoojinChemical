const 버튼 = document.querySelector('.hamburger-button');
const 메뉴 = document.querySelector('.mobile-menu');
버튼.addEventListener('click',function(){
    메뉴.classList.toggle('open');
    //여기 클릭하면 실행
});