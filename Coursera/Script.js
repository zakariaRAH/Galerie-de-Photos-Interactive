document.addEventListener("DOMContentLoaded", function() {
    const figures = document.querySelectorAll('figure');

    figures.forEach(function(figure) {
        figure.addEventListener('mouseover', function() {
            console.log('La souris est sur ' + figure.querySelector('figcaption').innerText);
        });

        figure.addEventListener('mouseleave', function() {
            console.log('La souris quitte ' + figure.querySelector('figcaption').innerText);
        });

        figure.addEventListener('focus', function() {
            console.log('Focus sur ' + figure.querySelector('figcaption').innerText);
        });

        figure.addEventListener('blur', function() {
            console.log('Perte de focus sur ' + figure.querySelector('figcaption').innerText);
        });
    });

    console.log("La page est complètement chargée");

    figures.forEach(function(figure) {
        figure.setAttribute('tabindex', '0');
    });
});
