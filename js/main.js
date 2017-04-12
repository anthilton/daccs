var offsetFromTop = 0;

$(document).ready(function(e){
	if($('.banner').css('display') != 'none')
	{
		offsetFromTop = $('.banner').height();
	}	
	$('#scrollTop').click(function(){
		$("html, body").animate({ scrollTop: "0px" });
	});
	$('#requestBrochure').click(function(){
		$.post('requestbrochure.php', $('#brochureForm').serialize(),function(data){
			$('#myModal').modal('hide');
			$.bootstrapGrowl("Request for Brochure Successfully Sent",{type: 'success',align: 'center'});
		});
	});
	
	$('.mobile-page-nav').click(function(){
		if($('#page-actions').is(':visible'))
		{
			$('.mobile-page-actions').trigger('click');
		}
	});
	$('.mobile-page-actions').click(function(){
		if($('#page-navigation').is(':visible'))
		{
			$('.mobile-page-nav').trigger('click');
		}
	});
	
	
	var modalValidator = $('#emailModalForm').parsley();
	var request;
	$('#emailModalForm').on("submit",function(event){
		if(!modalValidator.isValid()){
			return false;
		}
		
		if (request) {
			request.abort();
		}
		
		var $form = $(this);
	
		// Let's select and cache all the fields
		var $inputs = $form.find("input, select, button, textarea");
	
		// Serialize the data in the form
		var serializedData = $form.serialize();
		
		$inputs.prop("disabled", true);
		
		$('#modal-email-sending').removeClass("hide");
					
		var request = $.ajax({
			type: 'POST',
			url: 'https://mandrillapp.com/api/1.0/messages/send.json',
			data: {
				'key': '98DwLDwL9LL5kdLUUieqsA',
				'message': {
					'from_email': 'info@daccservices.com',
					'to': [
						{
							'email': 'info@daccservices.com',
							'name': 'Anthony',
							'type': 'to'
						}
					],
				'autotext': 'true',
				'subject': 'Daccs Website Email',
				'html': 'FROM:: ' + $('#email-address').val() + ' ' + $('#email-message').val()
			}
			}
			});
	
	
		// Callback handler that will be called on success
		request.done(function (response, textStatus, jqXHR){
			clearModalEmailFields();
			$form.parsley().reset();
			$('#modal-email-sending').addClass("hide");
			$('#modal-email-sent').removeClass("hide");
			setTimeout(function(){
				$('#modal-email-sent').addClass("hide");
			}, 3000); 
		});

		// Callback handler that will be called on failure
		request.fail(function (jqXHR, textStatus, errorThrown){
			$('#modal-email-sending').addClass("hide");
			$('#modal-email-sent').addClass("hide");
		});
		
		// Callback handler that will be called regardless
		// if the request failed or succeeded
		request.always(function () {
			// Reenable the inputs
			$inputs.prop("disabled", false);
		});
		
		event.preventDefault();
		
	});

});

function clearModalEmailFields(){
	$("#modal-email-name").val("");
	$("#modal-email-address").val("");
	$("#modal-email-telephone").val("");
	$("#modal-email-message").val("");
};

var attachHeaderPositioning = function()
{
	$(document).unbind('scroll');
	$('body').unbind('touchmove');
	if($('.banner').css('display') != 'none')
	{
		offsetFromTop = $('.banner').height();
		
		$(document).on( 'scroll', function(){
			if($(window).scrollTop()>offsetFromTop)
			{
				 $(".navbar").addClass("navbar-fixed-top");
				 $('#contentOuter').addClass("content-fixed");
			}
			
			if($(window).scrollTop()>100 && !$('#scrollTop').hasClass("show"))
			{
				$('#scrollTop').fadeIn(400,function(){
					$(this).addClass("show")
				});
			}else if($(window).scrollTop()<100 && $('#scrollTop').hasClass("show")){
				$('#scrollTop').fadeOut(400, function(){
					$(this).removeClass("show");
				});
			}

			if($(window).scrollTop()<offsetFromTop)
			{
				 $(".navbar").removeClass("navbar-fixed-top");
				 $('#contentOuter').removeClass("content-fixed");
			}
		});
		$(document).trigger( 'scroll');
		$('body').bind('touchmove', function(e) { 
			if($(window).scrollTop()>offsetFromTop)
			{
				 $(".navbar").addClass("navbar-fixed-top");
				 $('#contentOuter').addClass("content-fixed");
			}

			if($(window).scrollTop()<offsetFromTop)
			{
				 $(".navbar").removeClass("navbar-fixed-top");
				 $('#contentOuter').removeClass("content-fixed");
			}
		});
		$(document).trigger( 'touchmove');
	}
	else
	{
		offsetFromTop = 0;
		$(".navbar").addClass("navbar-fixed-top");
		$('#contentOuter').addClass("content-fixed");
	}
};

$(document).ready(function(){
	$(window).on('resize',function(){
		attachHeaderPositioning();
	});
	$('#requestBrochure').click(function(){
		$.post('requestbrochure.php', $('#brochureForm').serialize(),function(data){
			$('#myModal').modal('hide');
			$.bootstrapGrowl("Request for Brochure Successfully Sent",{type: 'success',align: 'center'});
		});
		
	});
	
	$('#emailButton').click(function(){
		$('#emailModalForm').submit();
		
	});
});

$(window).load(function(){
	attachHeaderPositioning();
});