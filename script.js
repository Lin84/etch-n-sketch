var number = 0;
var toAdd = 0;

$(document).ready(function(){

	$("button").click(function(){
		number = prompt("Type an integer between 1 and 64","20");
		toAdd= number * number;
		});


	$("#option1").click(function(){
		$("#container").empty();
		
		for(var i=1; i<=number; i++){
			$("#container").append('<div class="row"></div>');
		}

		for(var i=1; i<=number; i++ ){
			$(".row").append('<div class="grid"> </div>');
		};
		
		$(".grid").mouseenter(function(){
			$(this).addClass("newgrid");			
		});
	});



	$("#option2").click(function(){
		$("div").removeClass("newgrid");
		
	});



	$("#option3").click(function(){
		$("#container").empty();

		for(var i=1; i<=number; i++){
			$("#container").append('<div class="row"></div>');
		}

		for(var i=1; i<=number; i++ ){
			$(".row").append('<div class="grid"> </div>');
		};
		
		$(".grid").mouseenter(function(){
			$(this).addClass("newgrid");
			$(this).toggle("highlight");	
		});		
	});




	$("#option4").click(function(){
		$("#container").empty();

		for(var i=1; i<=number; i++){
			$("#container").append('<div class="row"></div>');
			};

		for(var i=1; i<=number; i++){
			$(".row").append('<div class="grid"> </div>');
			};

		$(".grid").mouseenter(function(){
			$(this).addClass("newgrid");
				$(".newgrid").mouseleave(function(){
					$(".newgrid").animate({
						opacity: '0',
					});
				});
			});
	});



	$("#option5").click(function(){
		$("#container").empty();

		for(var i=1; i<=number; i++){
			$("#container").append('<div class="row"></div>');
		}

		for(var i=1; i<=number; i++ ){
			$(".row").append('<div class="grid"> </div>');
		};

		$(".grid").mouseenter(function(){
			$(this).addClass("newgrid");
			$(".newgrid").mouseleave(function(){
				$(".newgrid").toggle(".grid");
			})
		});
	});



	$("#option6").click(function(){
		$("#container").empty();


		for(var i=1; i<=number; i++){
			$("#container").append('<div class="row"></div>');
		}

		for(var i=1; i<=number; i++ ){
			$(".row").append('<div class="grid2"> </div>');
		};

		$(".grid2").mouseenter(function(){
			$(this).addClass("newgrid");
			$(this).fadeTo("fast",0);
			$(this).mouseleave(function(){
				$(this).fadeTo("fast",1);
			});
		});		
	});



	$("#option7").click(function(){
		$("#container").empty();

		for(var i=1; i<=number; i++){
			$("#container").append('<div class="row"></div>');
		}

		for(var i=1; i<=number; i++ ){
			$(".row").append('<div class="grid"> </div>');
		};

		$(".grid").mouseenter(function(){
			$(this).addClass("newgrid");
			var newColor = '#'+Math.floor(Math.random()*16777215).toString(16);
			$(this).css("background", newColor );
		});		
	});



});


