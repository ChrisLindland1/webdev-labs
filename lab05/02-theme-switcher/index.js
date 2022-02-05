/*
    Hints: 
    1. Attach click event handlers to all four of the 
       buttons (#default, #ocean, #desert, and #high-contrast).
    2. Modify the className property of the body tag 
       based on the button that was clicked.
*/

const changeColorDesert = () => {
   alert('change theme!');
   styles.css.querySelector(".desert");
};

const changeColorDefault = () => {
   alert('change theme!');
   styles.css.querySelector(".default");
};

const changeColorOcean = () => {
   alert('change theme!');
   styles.css.querySelector(".ocean");
};

const changeColorContrast = () => {
   alert('change theme!');
   styles.css.querySelector(".high-contrast");
};

document.getElementById(".default").addEventListener("click", changeColorDefault);
document.getElementById(".desert").addEventListener("click", changeColorDesert);
document.getElementById(".ocean").addEventListener("click", changeColorOcean);
document.getElementById(".high-contrast").addEventListener("click", changeColorContrast);

