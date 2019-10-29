$(function(){
	$('.left .list tr:first td').each(function(i){
		$('.left .header th').eq(i).width($(this).width());
	});
	$('.right .list tr:first td').each(function(i){
		$('.right .header th').eq(i).width($(this).width());
	});
	$('.left .header').width($('.left .list').width());
	$('.right .header').width($('.right .list').width());	
		
	
	$('#logistics .data-sheet .list').matchHeight();
	
	$(window).on('scroll',function(){
		var top = $(this).scrollTop();
		var dataSheet = $('.data-sheet');
		var dataSheetTop = dataSheet.offset().top;
		var headerTop = top - dataSheetTop;
		if(headerTop > 0) {			
			dataSheet.addClass('fixed-header');
			$('.header').css('top',headerTop + 'px');
		}else{
			dataSheet.removeClass('fixed-header');
		}
	})
})