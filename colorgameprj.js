var numofsquare = 6;
var colorar = [];
var pickedcolor;
var easy = false;
var square = document.querySelectorAll(".sqr");
var dpcolor = document.querySelector("#dspcolor");
var msg = document.getElementById("result");
var resetbutton = document.getElementById("reset");
var h1 = document.querySelector("h1");
var gamemode = document.querySelectorAll(".mode");

init();

function init()
{
	setupButtons();
	setupSquares();
	reset();
}

function setupButtons()
{
	for(var j=0;j<gamemode.length;j++)
    {
	 	gamemode[j].addEventListener("click",function(){
			gamemode[0].classList.remove("selected");
	    	gamemode[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? numofsquare = 3: numofsquare = 6;
			if(this.textContent === "Easy")
			{
				if(easy == false)
				{
					reset();
					easy = true;
				}
			}
			if(this.textContent === "Hard")
			{
				if(easy == true)
				{
					reset();
					easy = false;
				}
			}
		})
    }
}

function setupSquares()
{
	for(var i=0;i<square.length;i++)
	{
		square[i].style.backgroundColor = colorar[i];
		square[i].addEventListener("click",function(){
			var clickedcolor = this.style.backgroundColor;
			//console.log(clickedcolor+","+pickedcolor);
			if(clickedcolor === pickedcolor)
			{
				msg.textContent = "Correct!";
				resetbutton.textContent = "Play Again?";
				for(var j=0;j<square.length;j++)
				{
					square[j].style.backgroundColor = pickedcolor;
				}
				h1.style.backgroundColor = pickedcolor;
			}
			else
			{
				this.style.backgroundColor = "#232323";
				msg.textContent = "Try Again"     	
			}
	   })
	}
}

function reset()
{
		colorar = colorpicker(numofsquare);
		pickedcolor = colorar[Math.floor(Math.random() * numofsquare)];
		dpcolor.textContent = pickedcolor;
		for(var i=0;i<square.length;i++)
		{
			if(colorar[i])
			{
				square[i].style.display = "block";
				square[i].style.backgroundColor = colorar[i];
			}
			else
			{
				square[i].style.display = "none";
			}
			
		}
		msg.textContent = "";
		h1.style.backgroundColor = "steelblue";
		resetbutton.textContent = "New Colors";

}

resetbutton.addEventListener("click",function(){
	reset();
})

function colorpicker(num){
	var newarr = [];
	for(var i=0;i<num;i++)
	{
		newarr.push(randomcolor());
	}
	return newarr;
}

function randomcolor()
{
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r +", "+ g +", "+ b +")" ; 
}


/*
//click events
resetbutton.addEventListener("click",function(){
	colorar = colorpicker(numofsquare);
	pickedcolor = colorar[Math.floor(Math.random() * numofsquare)];
	dpcolor.textContent = pickedcolor;
	for(var i=0;i<square.length;i++)
	{
		if(colorar[i])
		{
			square[i].style.backgroundColor = colorar[i];
		}
	}
	msg.textContent = "";
	h1.style.backgroundColor = "steelblue";
	this.textContent = "New Colors";
})

easy.addEventListener("click",function(){
	this.classList.add("selected");
	hard.classList.remove("selected");
	numofsquare = 3;
	colorar = colorpicker(numofsquare);
	pickedcolor = colorar[Math.floor(Math.random() * numofsquare)];
	dpcolor.textContent = pickedcolor;
	for(var i=0;i<square.length;i++)
	{
		if(colorar[i])
		{
			square[i].style.backgroundColor = colorar[i];
		}
		else
		{
			square[i].classList.add("disable");
		}
	}
	h1.style.backgroundColor = "steelblue";
	msg.textContent = "";
})

hard.addEventListener("click",function(){
	this.classList.add("selected");
	easy.classList.remove("selected");
	numofsquare = 6;
	colorar = colorpicker(numofsquare);
	pickedcolor = colorar[Math.floor(Math.random() * numofsquare)];
	dpcolor.textContent = pickedcolor;
	for(var i=0;i<square.length;i++)
	{
		square[i].style.backgroundColor = colorar[i];
		square[i].classList.remove("disable");
	}
	h1.style.backgroundColor = "steelblue";
	msg.textContent = "";
})*/

//main code




//functions
