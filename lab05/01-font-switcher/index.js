const makeBigger = () => {
   alert('make bigger!');
   document.querySelector("div.content").style.height = "100px";
   document.querySelector("h1").style.height = "100px";
};

const makeSmaller = () => {
   alert('make smaller!');
   document.querySelector("div.content").style.height = "200px";
   document.querySelector("h1").style.height = "200px";
};


document.querySelector(".a1").addEventListener('click', makeBigger);
document.querySelector(".a2").addEventListener('click', makeSmaller);

