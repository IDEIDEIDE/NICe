var canvas = document.getElementById("myCanvas")
var ctx = canvas.getContext("2d")


var rover_x = 10

var rover_y = 10

var rover_width = 100

var rover_height = 90

var background_ImgSrc = "mars.jpg"

var rover_ImgSrc

function add(){

    background_Img = new Image()
    background_Img.onload = uploadBackground
    background_Img.src = background_ImgSrc

    rover_Img = new Image()
    rover_Img.onload = uploadRover
    rover_Img.src = background_ImgSrc
    
}

function uploadBackground(){
    ctx.drawImage(background_Img, 0, 0, canvas.width, canvas.height)
}

function uploadRover(){
    ctx.drawImage(rover_Img, rover_x, rover_y, rover_width, rover_height)
}

window.addEventListener("keydown", keydown)

function keydown(e){
    keypress = e.keyCode
    if (keypress == "38"){
        //up()
        console.log("up")
    }
    if (keypress == "44"){
        //down()
        console.log("down")
    }
    if (keypress == "37"){
        //left()
        console.log("left")
    }
    if (keypress == "39"){
        //right()
        console.log("right")
    }
}