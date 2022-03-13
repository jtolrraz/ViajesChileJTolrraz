$(function() {
    $("a").click(function (event) {

        if (this.hash !=="") {
            event.preventDefault();
            var gato = this.hash;
            $("html, body").animate({
                scrollTop: $(gato).offset().top
            }, 1000);
        }

    });
});
//Para cambiar el color del navbar cuando salga de la primera foto
$(document).scroll(function(e){
    const y = $("html").scrollTop();
    if (y > 300) $("nav").addClass("nav-black")
    else $("nav").removeClass("nav-black")
})

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerE1){
    return new bootstrap.Tooltip(tooltipTriggerE1)
})