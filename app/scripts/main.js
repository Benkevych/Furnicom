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
