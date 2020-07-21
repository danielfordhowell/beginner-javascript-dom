const redbtn = document.getElementById('redbtn');
const bluebtn = document.getElementById('bluebtn');
const color = document.getElementById('color'); 

redbtn.onclick = function() {
    color.style.backgroundColor = "red";
}

bluebtn.onclick = function() {
    color.style.backgroundColor = "blue";
}
