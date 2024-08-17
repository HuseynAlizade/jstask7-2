const boxes = document.querySelectorAll(".box");

console.log(boxes);

const colors = ["red", "green", "blue", "yellow", "purple", "orange"];

let currentColorIndex = 0;

boxes.forEach(function (box) {
    box.addEventListener("mouseover", function() {
        box.style.backgroundColor = colors[currentColorIndex];
        currentColorIndex++
        
        if(currentColorIndex >= colors.length){
            currentColorIndex = 0;
        }
    });
    box.addEventListener("mouseleave",function(){
        box.style.backgroundColor = "grey"
    })
});

