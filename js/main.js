$(function(){

    $('.stage__slider').slick({
        dots: false,
        speed: 300,
        slidesToShow: 1,
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