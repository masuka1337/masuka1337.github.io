var animateButton = function(e) {
    e.preventDefault();
    e.target.classList.remove('animate');
    e.target.classList.add('animate');

    // Redirect after animation
    var url = e.target.getAttribute('data-url');
    setTimeout(function(){
        e.target.classList.remove('animate');
        window.location.href = url;
    }, 500);
};

var bubblyButtons = document.getElementsByClassName("bubbly-button");

for (var i = 0; i < bubblyButtons.length; i++) {
    bubblyButtons[i].addEventListener('click', animateButton, false);
}