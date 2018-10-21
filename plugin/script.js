$(document).ready(function(){
	
	function slide0(num0){
		$('.progress-bar:eq(0)').animate({width: num0});
		$('.progress-bar:eq(0)').html('90%');		
	}
	function slide1(num1){
		$('.progress-bar:eq(1)').animate({width: num1});
		$('.progress-bar:eq(1)').html('70%');		
	}
	function slide2(num2){
		$('.progress-bar:eq(2)').animate({width: num2});		
		$('.progress-bar:eq(2)').html('60%');
	}
	function slide3(num3){
		$('.progress-bar:eq(3)').animate({width: num3});
		$('.progress-bar:eq(3)').html('60%');		
	}
	function slide4(num4){
		$('.progress-bar:eq(4)').animate({width: num4});
		$('.progress-bar:eq(4)').html('90%');		
	}
	function slide5(num5){
		$('.progress-bar:eq(5)').animate({width: num5});
		$('.progress-bar:eq(5)').html('60%');		
	}
	function slide6(num6){
		$('.progress-bar:eq(6)').animate({width: num6});
		$('.progress-bar:eq(6)').html('90%');		
	}
	function slide7(num7){
		$('.progress-bar:eq(7)').animate({width: num7});
		$('.progress-bar:eq(7)').html('50%');		
	}



	var autoslide0 = setInterval(function(){
		slide0('+=90%');
		clearInterval(autoslide0);
	}, 1000);

	var autoslide1 = setInterval(function(){
		slide1('+=70%');
		clearInterval(autoslide1);
	}, 1000);

	var autoslide2 = setInterval(function(){
		slide2('+=60%');
		clearInterval(autoslide2);
	}, 1000);

	var autoslide3 = setInterval(function(){
		slide3('+=60%');
		clearInterval(autoslide3);
	}, 1000);

	var autoslide4 = setInterval(function(){
		slide4('+=90%');
		clearInterval(autoslide4);
	}, 1000);

	var autoslide5 = setInterval(function(){
		slide5('+=60%');
		clearInterval(autoslide5);
	}, 1000);

	var autoslide6 = setInterval(function(){
		slide6('+=90%');
		clearInterval(autoslide6);
	}, 1000);

	var autoslide7 = setInterval(function(){
		slide7('+=50%');
		clearInterval(autoslide7);
	}, 1000);

	//$('.fa').mouseenter(function(){
	//	$('animasi').css()
	//	$(this).css('transform', 'translateZ(10px) rotateY(180deg)');
	//});
});