function sendorder_hosting(form){
	console.log(form);
	$("#"+form).validate({
		submitHandler: function(form) {
		   $(form).ajaxSubmit({
                url:"orderform.php",
                type:"post",
                success: function(){
                	$(".modal_input, .modal #submit, #modal_checkbox").attr("disabled", "disabled").delay(500);
					document.getElementById('helptext_basic').innerHTML = '<span style="color: green;">Thank you very much for your order!</span> We will review your request and get back to you within 24 hours.';
					document.getElementById('helptext_level').innerHTML = '<span style="color: green;">Thank you very much for your order!</span> We will review your request and get back to you within 24 hours.';
					document.getElementById('helptext_future').innerHTML = '<span style="color: green;">Thank you very much for your order!</span> We will review your request and get back to you within 24 hours.';
					$('#helptext_basic').css('background','#ccc');
					$('#helptext_level').css('background','#ccc');
					$('#helptext_future').css('background','#ccc');
			    }
        	})
		}
	});
};

function sendorder_webdesign(form){
	console.log(form);
	$("#"+form).validate({
		submitHandler: function(form) {
		   $(form).ajaxSubmit({
                url:"orderform.php",
                type:"post",
                success: function(){
                	$(".modal_input, .modal #submit, #modal_checkbox").attr("disabled", "disabled").delay(500);
					document.getElementById('helptext_great').innerHTML = '<span style="color: green;">Thank you very much for your order!</span> We will review your request and get back to you within 24 hours.';
					document.getElementById('helptext_greater').innerHTML = '<span style="color: green;">Thank you very much for your order!</span> We will review your request and get back to you within 24 hours.';
					document.getElementById('helptext_greatest').innerHTML = '<span style="color: green;">Thank you very much for your order!</span> We will review your request and get back to you within 24 hours.';
					$('#helptext_great').css('background','#ccc');
					$('#helptext_greater').css('background','#ccc');
					$('#helptext_greatest').css('background','#ccc');
			    }
        	})
		}
	});
};

function sendorder_contact(form){
	console.log(form);
	$("#"+form).validate({
		submitHandler: function(form) {
		   $(form).ajaxSubmit({
                url:"orderform.php",
                type:"post",
                success: function(){
                	$(".modal_input, #submit, #modal_checkbox, #order_description").attr("disabled", "disabled").delay(500);
			    	document.getElementById('helptext_contact').innerHTML = '<span style="color: green;">Thank you very much for your order!</span> We will review your request and get back to you within 24 hours.';
			    }
        	})
		}
	});
};