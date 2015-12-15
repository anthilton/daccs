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

});

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
			
			if($(window).scrollTop()>100)
			{
				$('#scrollTop').fadeIn();
			}else{
				$('#scrollTop').fadeOut();
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
		$.post('email.php', $('#emailModalForm').serialize(),function(data){
			$('#emailModal').modal('hide');
			$.bootstrapGrowl("Email Sent Successfully",{type: 'success',align: 'center'});
		});
		
	});
});

$(window).load(function(){
	attachHeaderPositioning();
});