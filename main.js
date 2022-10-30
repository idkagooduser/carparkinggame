canvas=document.getElementById('myCanvas');
ctx=canvas.getContext("2d");

greencar_width=75;
greencar_height=100;

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

greencar_x=5;
greencar_y=225;

function add() {
	background_imageTag=new Image();
	background_imageTag.onload=uploadBackground;
	background_imageTag.src=greencar_image;

	greeencar_imgTag=new Image();
	greeencar_imgTag.onload=uploadgreencar;
	greeencar_imgTag.src=greencar_image;
}
	

function uploadBackground() {
	ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);


}

function uploadgreencar() {
	if(greencar_y>=0){
		greencar_y=greencar_y-10
		uploadBackground();
		uploadgreencar();
	}

	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	if(greencar_y>=0){
		greencar_y=greencar_y-10;
		uploadBackground();
		uploadgreencar();
	}

function down()
{
	/if(greencar_y>=0){
		greencar_y=greencar_y+10;
		uploadBackground();
		uploadgreencar();
	}
}

function left()
{
	/if(greencar_x>=0){
		greencar_x=greencar_x-10;
		uploadBackground();
		uploadgreencar();
	}
}

function right()
{
	if(greencar_x>=0){
		greencar_x=greencar_x+10;
		uploadBackground();
		uploadgreencar();
	}
}
