$('.category-item__product-type').click(function () {
  if (!$(this).children('.category-item__product-type__name').hasClass('category-item__product-type__name_active')) {
    $(this).children('.category-item__product-type__name').addClass('category-item__product-type__name_active');
    $(this).children('.category-item__product-type__name').children('.category-item__product-type__name__label').addClass('category-item__product-type__name__label_active');
    $(this).siblings('.category-item__type-items').addClass('category-item__type-items_active');
  } else {
    $(this).children('.category-item__product-type__name').removeClass('category-item__product-type__name_active');
    $(this).children('.category-item__product-type__name').children('.category-item__product-type__name__label').removeClass('category-item__product-type__name__label_active');
    $(this).siblings('.category-item__type-items').removeClass('category-item__type-items_active');
  }
});

$('body').on('click', '.cart__items__item__change-btn', function () {
  $(this).addClass('cart__items__item__change-btn_active');
  $(this).siblings('.quantity').find('.cart__items__item__count').attr('enabled');
  $(this).siblings('.quantity').find('.cart__items__item__count').focus();
});

$('body').on('focusout', '.cart__items__item__count', function () {
  $(this).removeAttr('enabled');
  $(this).closest('.quantity').siblings('.cart__items__item__change-btn').removeClass('cart__items__item__change-btn_active');
  $('.actions input[name=update_cart]').trigger('click');
});


$('#confirmOrder').submit(function () {
  event.preventDefault();
  $('.order-confirm__success').fadeIn();
  $('#body').addClass('blur');
});

$('.order-confirm__success__back-btn').click(function () {
  $('#body').removeClass('blur');
  $('.order-confirm__success').fadeOut();
});

$('.header__mobile-menu-btn').click(function () {
  if (!$(this).children('.header__mobile-menu-btn-label').hasClass('header__mobile-menu-btn-label_active')) {
    $(this).children('.header__mobile-menu-btn-label').addClass('header__mobile-menu-btn-label_active');
    $('#menu-main').addClass('header__mobile-menu-active');
  } else {
    $(this).children('.header__mobile-menu-btn-label').removeClass('header__mobile-menu-btn-label_active');
    $('#menu-main').removeClass('header__mobile-menu-active');
  }
});

$('.language-chooser li').each(function(index, value){
  if ($(this).hasClass('active')) {
    $('.header__language__text').text($(this).find('a').text().substring(0, 3));
  }
  $('.header__language__dropdown').append('<div class="header__language__dropdown-item">' + $(this).find('a').text() + '</div>');
});

$('.header__language').on('click', function() {
  if ($('.header__language__dropdown').is(':visible')) {
    $(this).find('.header__language__dropdown').slideUp('fast');
  } else {
    $(this).find('.header__language__dropdown').slideDown('fast');
  }
});

$('.header__language__dropdown-item').on('click', function(){

  var lang = $(this).text();
  window.location.href = $('.language-chooser a:contains(' + lang + ')').attr('href');
  $('.header__language__text').text(lang.substring(0, 3));
});
