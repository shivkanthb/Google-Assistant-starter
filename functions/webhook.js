/**
* A basic Hello World function
* @param {string} name Who you're saying hello to
* @returns {any}
*/
module.exports = (name = 'world', context, callback) => {
	console.log("Start");
	try {
		var result = context.params.result;
		console.log(result);

		var action = result.action;
		console.log("action is " + action);
	} catch(e) {
		var errResponseObject = {
		    speech: "Something terrible happened. Please try Silly Name maker after sometime. ",
		    data: { 
		    	google: { expect_user_response: false, 
		      		no_input_prompts : [ {
			          text_to_speech: 'I\'m sorry I didn\'t hear you. I can remember and recall things for you. If you need assistance, say help' 
			        }]
			    }
		    }

	  	}
		return callback(null, errResponseObject);
	}
	
	if (action == 'make_name') {
		var parameters = result.parameters;
		var color = parameters.color;
		var num = parameters.number;
		var responseObj = {
		    speech: `Alright, your silly name is ${color} ${num}`,
		    data: { 
		    	google: { expect_user_response: false, 
		      		no_input_prompts : [ {
			          text_to_speech: 'I\'m sorry I didn\'t hear you.' 
			        }]
			    }
		    }

	  	}
	}
	callback(null, responseObj);
};