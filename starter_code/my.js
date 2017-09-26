
//starting jquery in the JS file
$(document).ready(function() {
//console.log('ready!'); logs when jQuery is ready to be used

//fill in form data with Jquery

	
		var name = $('#name');
		var verbOne = $('#verb-1');
		var mission = $('#mission');
		var sentiment = $('.radioButtons');
		var nounOne = $('#noun-1');
		var sentiment2 = $('.checkboxes');
		var nounTwo = $('#noun-2');
		var paragraph = ["Once upon a time there was a Devloper named " + name.val() + name.val() + " came to General Assembly to " + verbOne.val() + "the great mountain of programming knowledge. " + mission.val() + "," + name.val() + "shouted. Though " + sentiment.val() + ", " + name.val() + " was able to overcome all obstacles with the power of their " + nounOne.val() + "In the end, their success can be contributed entirely to their " + sentiment2.val() + nounTwo.val() + ". In the end, their success can be contributed entirely to their  " + sentiment2.val() + nounTwo.val() + "."];

	$('form').on("submit", function (e){
		e.preventDefault();
		//console.log("form submitted");
		//console.log(paragraph);
		$("#main").append(paragraph);

	
		
	
		//name.val();
		//verbOne.val();
		//mission.val();
		//sentiment.val();
		//nounOne.val();
		//sentiment2.val();
		//nounTwo.val();
		//Once upon a time there was a Developer named NAME. 
		//NAME came to General Asssembly to 
		//VERB1 the great mountain of programming knowledge.
		//MISSION, NAME shouted. 
		//Though SENTIMENT, NAME was able to overcome all obstacles with the power of their 
		//NOUN.
		//In the end, their success can be contributed entirely to their 
		//ADJECTIVE2 
		//NOUN2. In the end, their success can be contributed entirely to their  
		//ADJECTIVE2 
		//NOUN2.
	});
}); 





/*	var main = $('#main');

	function makeResults(data) {
	console.log(data);

			$("<section class='container results'><h1>A True Story:</h1>").appendTo(main);

			$("<section class='container results'><p>Once upon a time there was a Developer named NAME. NAME came to General Asssembly to VERB1 the great mountain of programming knowledge.MISSION, NAME shouted. Though SENTIMENT, NAME was able to overcome all obstacles with the power of their NOUN. Though SENTIMENT, NAME was able to overcome all obstacles with the power of their NOUN. In the end, their success can be contributed entirely to their ADJECTIVE2 NOUN2. In the end, their success can be contributed entirely to their  ADJECTIVE2 NOUN2.</p>").appendTo(main);

			$(".results p").text($(".results p").text().replace("NAME",	$("#name").val()));

			$(".results p").text($(".results p").text().replace("NAME",	$("#name").val()));

			$(".results p").text($(".results p").text().replace("VERB1", $("select#verb-1").val()));

			$(".results p").text($(".results p").text().replace("MISSION", $("#mission").val()));

			$(".results p").text($(".results p").text().replace("NAME",	$("#name").val()));

			$(".results p").text($(".results p").text().replace("SENTIMENT", $("#sentiment").val()));

			$(".results p").text($(".results p").text().replace("NAME",	$("#name").val()));

			$(".results p").text($(".results p").text().replace("NOUN",	$("#noun-1").val()));

			$(".results p").text($(".results p").text().replace("SENTIMENT", $("#sentiment").val()));

			$(".results p").text($(".results p").text().replace("NAME",	$("#name").val()));

			$(".results p").text($(".results p").text().replace("NOUN",	$("#noun-1").val()));

			$(".results p").text($(".results p").text().replace("ADJECTIVE2", $("input[type=checkbox][name=adjective-2]:checked").val()));

			$(".results p").text($(".results p").text().replace("NOUN2", $("#noun-2").val()));//need to rpint out multiple with comma

			$(".results p").text($(".results p").text().replace("ADJECTIVE2", $("input[type=checkbox][name=adjective-2]:checked").val())); //need to print out multiple with coma

			$(".results p").text($(".results p").text().replace("NOUN2", $("#noun-2").val()));


			$(".form").on("submit", function(event){
				event.preventDefault(); // Stop the form from submitting
				//$("#name").val(); //"Once upon a time there was a Developer named NAME."
			var formData = $(this).serialize();
			});

			makeResults(formData);

		}*/
   
	    	