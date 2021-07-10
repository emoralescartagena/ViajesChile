$(document).ready(function () {
    $("a").click(function(event) {
        event.preventDefault();

        var gato = this.hash;

        $("html, body").animate({
            scrollTop: $(gato).offset().top - 67,
        }, 800);
    });
});

// Aplicado en icono avion Seccion quienes-somos
$('[data-toggle="tooltip"]').tooltip(); 

// Aplicado en icono Montaña Seccion quienes-somos
$('[data-toggle="popover"]').popover();
