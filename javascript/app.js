// Toggle nav
$(".nav-btn").click(function(){
 //open nav
    $('nav').css('display', 'flex');
    $('body').css('overflow', 'hidden')
    $('nav').animate({
        left: "0",
        opacity: '100%'
    }, 800);
})

$(".close-nav-btn").click(function(){
    //close nav
    $('nav').animate({
        left: "-60vw",
        opacity: '0'
    }, 800, function(){
        $('nav').css('display', 'none');
        $('body').css('overflow', 'visible')
    });

})

// Toggle cart menu
$(".cart-btn").click(function(){
        $(".cart-menu").fadeToggle();
});

//Adding quantity
let quantity = 0;
$(".increase-btn").click(function(){
   quantity++;
   $('.qtty').html(quantity);
});
$(".decrease-btn").click(function(){
    if(quantity === 0) return;
    quantity--;
    $('.qtty').html(quantity);
});

//Adding items to cart
$(".add-cart-btn").click(function(){
   if(quantity === 0) return;
   //Add items to cart
   $('.empty-text').hide();
   $('.cart-item').css('display', 'flex');
   $('.checkout-btn').show();
   $('.cart-text').fadeIn();


   $('.price-calc').text(`$125 x ${quantity}`);
   $('.final-price').text(`$${125 * quantity}`);
   $('.cart-text').text(quantity);
   quantity = 0;
   $('.qtty').html(quantity);
});

$('.remove-btn').click(function(){
    $('.empty-text').show();
    $('.cart-item').hide();
    $('.checkout-btn').hide();
    $('.cart-text').hide();
});