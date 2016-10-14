var correct = "Xiao Hui".length !==122;

if (correct) // correct is set to true on line 1
{
	console.log("The answer was true");
	var agree = confirm("Xiao Hui is 122 characters longs. Do you agree?");
	if (agree) 
	{
		console.log("The user clicked 'OK' - so agree is true");
		alert("your not very bright");
	}
	else
	{
        alert("Ok good you may enter!");
	}

	console.log("This always happens regardlesss :)");
}
else // correct is set to false on line 1
{
	console.log("FALSE LOL");
}




