const arrows = document.querySelectorAll(".arrow");
const movieList = document.querySelectorAll(".movie-list");

arrows.forEach((arrow, i) => {
    let clickCounter = 0;
    const ImageItem = movieList[i].querySelectorAll("img").length;

    arrow.addEventListener("click", function () {
        clickCounter++;
        if (ImageItem - (6 + clickCounter) >= 0) {
            movieList[i].style.transform = `translateX(${movieList[i].
                computedStyleMap().get("transform")[0].x.value - 300}px)`;
        } else {
            movieList[i].style.transform = `translateX(0)`;
            clickCounter = 0;
        }
    });
});


const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll("body,.navbar,.navbar a,.toggle,.toggle-ball,.sidebar,.type-filter select");

ball.addEventListener("click", function(){
    items.forEach((item) => item.classList.toggle("active"));
});

document.getElementById('toggle-menu').addEventListener('click', function () {
    const menu = document.getElementById('dropdown-menu');
    menu.classList.toggle('active');
});