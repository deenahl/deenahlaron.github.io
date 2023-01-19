function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 100;

        while (elementTop > windowHeight - elementVisible) {
            reveals[i].style.visibility = "hidden";
        }

        reveals[i].style.visibility = "visible";

    }
}

window.addEventListener("scroll", reveal); 