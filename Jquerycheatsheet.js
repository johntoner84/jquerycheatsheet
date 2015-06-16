// Need to always add APi in the head:
<!DOCTYPE HTML>
<html>

<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js">
</script>

<head>
</head>
<body>
// formattin always starts with $ then the element "p" or '.main p'" putting 
// a period then the class name"

// You should always use the $(document).ready() for all your scripts

// the slides on call backs are extremely confusing ;-) but from what I understand
// call backs are a way to create a logic between functions that allows you to order
// which functions occur in what succession

var functionA = function(){
	alert("this is my function");
	}
function functionB (anyFunction){console.log(2+2); functionA();
}



// You can use functions within functions to call back?
<script>
					$(document).ready(function() {
				        $("li.main").click(function(){
   						 $(".imagelongformcontainer").animate({
   						 	width:100});
						}); 
						// this would make the imagelongformcontainer change to a wide
						// of 100 when one cicks a main menu item