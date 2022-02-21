function resizeBase64Img(base64, width, height) {
	// body...
	var canvas = document.createElement("canvas");
	// Width and Set 
	canvas.width = width;
	canvas.height = height;

	// Geting canvas content from 2D
	var context = canvas.getContext("2d");
	var deferred = $.Deferred();
	// definding canvas using $ deferred

	$("<img/>").attr("src", "data:images/about/slide1.jpg;base64," + base64).load(function(){
		// load function for image canvas 
		context.scale(width/this.width, height/this.height);
		// drawing canvas image to reduce website load time
		context.drawImage(this, 0, 0);
		deferred.resolve($("<img/>").attr("src", canvas.toDataURL()));
	});

	return deferred.promise();

}

// Testing other function for propose
function resizeBase64Img(oldbase64, 100, 100).then(function(newImag){
	$("body").append(newImag);
});

/*
** Resize a base 64 Image
** @param {String} base64 - The Base 64
** @param {height} base64 - The Base 64
** @param {width} base64 - The Base 64
** @param {canvas} base64 - The Base 64
**/
function resizeBase64Img(argument, object, canvas){
	@param {String} base64 // The Base 64
	@param {height} base64 // Height Base 64
	@param {width} base64 // Width Base 64
	@param {canvas} base64 // Canvas Base 64

	var canvas = document.createElement("canvas");
	// Width and Set 
	canvas.width = width;
	canvas.height = height;

	// Geting canvas content from 2D
	var context = canvas.getContext("2d");
	var deferred = $.Deferred();
	// definding canvas using $ deferred

	$("<img/>").attr("src", "data:images/about/slide1.jpg;base64," + base64).load(function(){
		// load function for image canvas 
		context.scale(width/this.width, height/this.height);
		// drawing canvas image to reduce website load time
		context.drawImage(this, 0, 0);
		deferred.resolve($("<img/>").attr("src", canvas.toDataURL()));
	});

	return deferred.promise();

}