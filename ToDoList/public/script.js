function changeText() {
document.getElementById('title').innerText = 'Its the other text!';
console.log(document.title);
document.title = 'Class 1';
console.log(document.body);
}
function changeColor() {
    document.getElementById('paragraph1').style.color="blue";
    document.getElementById('paragraph2').style.color="green";
}
var i = 0;
function changeImage() {
    let images = [];
    if (i<images.length - 1){
        i++;
    }
    else {
        i = 0;
    }
    document.getElementById('image1').src = images[i] ;
    let index = images[i].indexOf('.');
    let mealName = images[i].slice(0,index)
    document.getElementById('meal').innerText = mealName;
    
}