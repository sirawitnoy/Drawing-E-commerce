//กดรูปแล้วใหญ่ขึ้น
$(".product-con img").click(function () {
    var src = $(this).attr("src");
    var size = $(this).attr("class");
    var alt = $(this).attr("alt");
    $(".modal-block").fadeIn()
    $(".modal-block").css("display", "flex")
    $("#popup").attr("src", src);

    $("#popup").attr("class", size)

    $(".img-section .caption").text(alt);

  })
  $(".img-section >span").click(function () {
    $(".modal-block").css("display", "none")
  })