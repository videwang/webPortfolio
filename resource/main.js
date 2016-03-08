$(document).ready(function(){
	//fill content into side-menu

	content = $('#nav1').html();
	content = '<nav class="side-nav">'+content+'</nav>';
	$('#side-menu-in').html(content) ;

	$('.wrapper').click(function(){
		if($('#side-menu').is(':visible'))
		{
			timestamp2 = new Date().getTime();
			var t1t2 = timestamp2 - timestamp1;
			
			if (t1t2 > 100) {
				$('#menu-button').click()
			}
		}
	})

	$('#menu-button').click(function (){
		//alert(3)
		if($('#side-menu').is(':visible')){
			$('#side-menu').hide();
			$('.wrapper').removeClass('wrapper-move');
		}else if($('#side-menu').is(':visible')==false){
			$('#side-menu').show();
			$('.wrapper').addClass('wrapper-move');
			showside = true;
		}
		timestamp1 = new Date().getTime();
	})


	

	
	$('body').click(function (){
		if($('#side-menu').is(':visible')){
			//$('#side-menu').hide()
		}
	})

	if($('#side-menu').is(':visible')==false){
		//alert()
	}
	
	//alert($(window).scrollTop())

})



