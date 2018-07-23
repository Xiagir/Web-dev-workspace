var array = document.getElementsByClassName("button");
var imgArray = ["../images/1.jpg", "../images/2.jpg", "../images/3.jpg", "../images/4.jpg", "../images/5.jpg", "../images/6.jpg",
  "../images/7.jpg", "../images/8.jpg", "../images/9.jpg", "../images/10.jpg", "../images/11.jpg", "../images/12.jpg", "../images/13.jpg", "../images/14.jpg", "../images/15.jpg", "../images/16.jpg", "../images/17.jpg", "../images/18.jpg"
];

var imgg = document.getElementsByClassName("img");

function duplicate(img) {
  for (var i = 0; i < 18; i++) {
    img.push(img[i]);

  }
}

function bord(img) {
  for (var i = 0; i < img.length; i++) {
    document.getElementsByClassName("img")[i].src = imgArray[i];
    document.getElementsByClassName("img")[i].style.display = 'none';
    // array[i].addEventListener("click", function(img){ document.getElementsByClassName("img")[i].style.display = 'block'; }
  }
}

var buttons = table.getElementsByTagName("button");
for (var i = 0; i < buttons.length; i++) {
  buttons[i].onclick = function(e) {
    var id = this.id;
    document.getElementsByClassName("img")[id].style.display = 'block';
    opened.pop(array[id]);
  }
};



function shuffle(img) {
  var j, x, i;
  for (i = img.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = img[i];
    img[i] = img[j];
    img[j] = x;
  }
  return img;
}

var opened;


duplicate(imgArray);
shuffle(imgArray);
bord(imgArray);
