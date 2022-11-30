$(function(){

    $('.stage__slider').slick({
        dots: false,
        speed: 300,
        variableWidth: true,
        infinite: true,
        
    });

    $(document).ready(function () {
        $('#list > li').click(function (event) {
            $(this).children("ul").slideToggle();
            event.stopPropagation();
        });
    });

    $(document).ready(function(){
        $('#item1').click(function () {
            $('.item__box1').toggleClass('underline');
            $('.item__box-img1').toggleClass('underline1');
            });
        });
    $(document).ready(function(){
        $('#item2').click(function () {
            $('.item__box22').toggleClass('underline');
            $('.item__box-img2').toggleClass('underline1');
            });
        });
    $(document).ready(function(){
        $('#item3').click(function () {
            $('.item__box3').toggleClass('underline');
            $('.item__box-img3').toggleClass('underline1');
            });
        });
    $(document).ready(function(){
        $('#item4').click(function () {
            $('.item__box4').toggleClass('underline');
            $('.item__box-img4').toggleClass('underline1');
            });
        });
    $(document).ready(function(){
        $('#item5').click(function () {
            $('.item__box5').toggleClass('underline');
            $('.item__box-img5').toggleClass('underline1');
            });
        });
});

const burgerMenu = document.getElementById("burger");
const navbarMenu = document.getElementById("menu");

// Show and Hide Navbar Menu
burgerMenu.addEventListener("click", () => {
	burgerMenu.classList.toggle("is-active");
	navbarMenu.classList.toggle("is-active");

	if (navbarMenu.classList.contains("is-active")) {
		navbarMenu.style.maxHeight = navbarMenu.scrollHeight + "px";
	} else {
		navbarMenu.removeAttribute("style");
	}
});