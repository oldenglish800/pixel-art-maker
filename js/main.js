'use strict';

var paint = "blue";
var main = document.querySelector('#canvas');
var toolBar = document.querySelector('#toolbar');
var pixelCount = 0;
var drawing = true;


// creates canvas
function canvasInit() {
  for ( var i = 0; i < 3000; i++) {
    var pixel = document.createElement('div');
    var id = 'px ${pixelCount}';
    pixel.setAttribute('class', 'pixel');
    pixel.id = id;
    main.appendChild(pixel);
    pixelCount++;
  }
};
canvasInit();

//creates colors
(function color(){
  var colors = "black,blue,teal,green,purple,pink,red,orange,yellow,brown,grey,white,";
  		
    
  var colorArr = colors.split(",");
  for(var i=0; i<colorArr.length; i++){
    var colorButton = document.createElement('div');
    colorButton.setAttribute('class', 'colorButton');
    colorButton.style.backgroundColor = colorArr[i];
    toolBar.appendChild(colorButton);
  }
}());

//choose color button

function colorPicker(ev){
  var clickedColor = ev.target.style.backgroundColor;
  paint = clickedColor;
  document.querySelector('#currentColor').style.backgroundColor = clickedColor;
}
toolBar.addEventListener('click', colorPicker, true);

//paint canvas
function paintCanvas(ev){
  var clickedPixel = ev.target;
    if(ev.target !== ev.currentTarget){
      if(drawing){
        clickedPixel.style.borderColor = paint;
        clickedPixel.style.backgroundColor = paint;
      }
    }
}

main.addEventListener('mousedown', function(ev){
  drawing = true;
  paintCanvas(ev);
 main.addEventListener('mouseover', function(ev){
    paintCanvas(ev);
  });
});
main.addEventListener('mouseup', function(){
  drawing = false;
});

//reset button
function reset(){
  do{
    main.removeChild(main.firstChild);
  }while(main.hasChildNodes());
  canvasInit();
}
