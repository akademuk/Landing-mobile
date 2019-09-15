if (
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  )
) {
  document.getElementById("header-phone").innerHTML =
    '<span><a href="tel:+ 380636370890">(063) 637-08-90</a></span>';
} else {
  document.getElementById("header-phone").innerHTML =
    "<span>(063) 637-08-90</span>";
}
