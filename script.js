
$(document).ready(function(){

	$("#option1").click(function(){
		$("#container").empty();
		
		var number = prompt("Type an integer between 1 and 64");
		var toAdd= number * number;

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
		
		var number = prompt("Type an integer between 1 and 64");
		var toAdd= number * number;

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
		
		var number = prompt("Type an integer between 1 and 64");
		var toAdd= number * number;

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
		
		var number = prompt("Type an integer between 1 and 10");
		var toAdd= number * number;

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
		
		var number = prompt("Type an integer between 1 and 10");
		var toAdd= number * number;

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
		
		var number = prompt("Type an integer between 1 and 10");
		var toAdd= number * number;

		for(var i=1; i<=number; i++){
			$("#container").append('<div class="row"></div>');
		}

		for(var i=1; i<=number; i++ ){
			$(".row").append('<div class="grid"> </div>');
		};

		// var randomcolor= Math.floor((Math.random()*99)+1)

		// var randomColor = Math.floor(Math.random()*16777215).toString(16);
		  // var back = ["red","blue","gray"];
  		// var rand = back[Math.floor(Math.random() * back.length)];
  // 		$('div').css('background',rand);
		$(".grid").mouseenter(function(){
			$(this).addClass("newgrid");
			var newColor = '#'+Math.floor(Math.random()*16777215).toString(16);
			$(this).css("background", newColor );
			// $(this).css({
			// 	opacity: 0.5;
			// });
			
		});		
	});


		
	
	



});


