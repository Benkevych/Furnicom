$(".category-item__product-type").click(function () {
  if (!$(this).children(".category-item__product-type__name").hasClass("category-item__product-type__name_active")) {
    $(this).children(".category-item__product-type__name").addClass("category-item__product-type__name_active");
    $(this).children(".category-item__product-type__name").children(".category-item__product-type__name__label").addClass("category-item__product-type__name__label_active");
    $(this).siblings(".category-item__type-items").addClass("category-item__type-items_active");
  } else {
    $(this).children(".category-item__product-type__name").removeClass("category-item__product-type__name_active");
    $(this).children(".category-item__product-type__name").children(".category-item__product-type__name__label").removeClass("category-item__product-type__name__label_active");
    $(this).siblings(".category-item__type-items").removeClass("category-item__type-items_active");
  }
});

$(".cart__items__item__change-btn").click(function () {
  $(this).addClass("cart__items__item__change-btn_active");
  $(this).siblings(".cart__items__item__count").removeAttr("disabled");
  $(this).siblings(".cart__items__item__count").attr("enabled");
  $(this).siblings(".cart__items__item__count").focus();
});

$(".cart__items__item__count").focusout(function () {
  $(this).removeAttr("enabled");
  $(this).attr("disabled", "true");
  $(this).siblings(".cart__items__item__change-btn").removeClass("cart__items__item__change-btn_active");

});
