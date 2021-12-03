//Create a reference for canvas 
canvas=document.getElementById("Canvas85");
ctx= canvas.getContext("2d")

ValetParking_image =["parking lot.jpg"];
//Give specific height and width to the car image
car_width=100;
car_height=150;

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

//Set initial position for a car image.
car_x=0;
car_y=0;




	//upload car, and background images on the canvas.


function uploadBackground() {
	ctx.drawImage(background_image,0,0,canvas.width,canvas,height);
	//Define function ‘uploadBackground’

}

function uploadgreencar() {
	ctx.drawImage(car_imgTag,car_x,car_y,car_height,car_width);
	//Define function ‘uploadgreencar’.

	
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
	{
		if(car_y>=0)
	
		{
			car_y = caf_y-10;
			console.log("When up arrow is pressed, x = " + car_x+ " y = "+car_y);
			uploadBackround();
			uploadcar();
	
	
		}
	}
	//Define function to move the car upward
}

function down()
{
    if(car_y<=500)

    {
        car_y = car_y+10;
        console.log("When down arrow is pressed, x = " + car_x+ " y = "+car_y);
        uploadBackround();
        uploadcar();

    }
}


	//Define function to move the car downward
}

function left()
{ if(car_x>=0)

    {
        car_x = car_x-10;
        console.log("When left arrow is pressed, x = " + car_x+ " y = "+car_y);
        uploadBackround();
        uploadcar();

    }

	//Define function to move the car left side
}

function right()
{if(car_x<=700)

    {
        car_x = car_x+10;
        console.log("When right  arrow is pressed, x = " + car_x+ " y = "+car_y);
        uploadBackround();
        uploadcar();

    }
	//Define function to move the car right side
}
