const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");

arrows.forEach((arrow, i) => {
    const widthRatio=Math.floor(window.innerWidth/300);
    let clickCounter = 0;
    const imageItem = movieLists[i].querySelectorAll("img").length;
    arrow.addEventListener("click", function () {
        if (imageItem - (4 + clickCounter)+(4-widthRatio) >= 0) {
            clickCounter++;
            movieLists[i].style.transform = `translateX(${movieLists[i].computedStyleMap().get("transform")[0].x.value - 300}px)`;
        } else {
            movieLists[i].style.transform = "translateX(0)";
            clickCounter = 0;
        }
    });
});


// Es geht nur einmal 300 px-----------------------

// arrows.forEach((arrow, i) => {
//     let clickCounter = 0;
//     const imageItem = movieLists[i].querySelectorAll("img").length;

//     arrow.addEventListener("click", function () {
//         if (imageItem - (4 + clickCounter) >= 0) {           
//             clickCounter++;
//             movieLists[i].style.transform = "translateX(-300px)";
//         } else {
//             movieLists[i].style.transform = "translateX(0)";
//             clickCounter = 0;
//         }
//     });
// });

// Dark Mode <<------------------------
const ball = document.querySelector(".toogle-ball");
const items = document.querySelectorAll(".container,.navbar,.sidebar,.sidebar i,.toogle,.toogle-ball,.movie-list-filter select,.movie-list-title")
ball.addEventListener("click", function () {
    items.forEach((item) => item.classList.toggle("active"));
});