<!DOCTYPE HTML>
<html>

<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js">
</script>

<head>
</head>
<body>

<div>
	<h1>
		Pets
	<script>
		$(document).ready(
		$("h1").fadeOut(1000);
		$("h1").fadeIn(1000);
		)
	</script>

	</h1>
	<ul>
		<li>dogs</li>
			<script>
				$("li").fadeOut(1000);
				$("li").fadeIn(1000);
			</script>
		<li>cats</li>
			<script>
				$("li").slideUp(1000);
				$("li").slideDown(1000);
			</script>
		<li>birds</li>
			<script>
				$("li").animate({
				opacity: 0.25;
				width: 70%;
				});	
			</script>
		<li>dinos</li>
			<script>
				$("li").click(
					function(){
						alert("ROAR!");
				}
				);	
			</script>
		<li>Show me</li>
			<script>
				var animateMenu = function() {
					$(".li").animate({opacity:.5})
				}
				$(".li").show(animateMenu)
				
			</script>
	</ul>
</div>
	<h1> Friends</h1>
		<li>John</li>
		<li>Gabe</li>
		<li>Bill</li>

	



	<p class="callout"></p>


<input type="text" id="num1">
<input type="text" id="num2">
<button onclick="subtractNums()">Subtract</button>

// <script>