var img1 = document.querySelector(".img1");
var img2 = document.querySelector(".img2");
var btn = document.querySelector(".btn");
var text = document.querySelector(".txt");
var p1Inp = document.querySelector(".player1inp");
var p2Inp = document.querySelector(".player2inp");


img1.src = "images/dice1.png";
img2.src = "images/dice1.png";


var images = ["images/dice1.png", "images/dice2.png", "images/dice3.png", "images/dice4.png", "images/dice5.png",
    "images/dice6.png"
]

btn.addEventListener("click", () => {

    var p1Name = p1Inp.value;
    var p2Name = p2Inp.value;



    imgnum1 = Math.floor(Math.random() * images.length);
    imgnum2 = Math.floor(Math.random() * images.length);
    if (imgnum1 > imgnum2) {
        text.innerHTML = `${p1Name} wins`;
    } else if (imgnum1 < imgnum2) {
        text.innerHTML = `${p2Name} wins`;
    } else {
        text.innerHTML = "Draw";
    }

    img1.src = images[imgnum1];
    img2.src = images[imgnum2];
})