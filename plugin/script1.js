$(document).ready(function(){
	var index = 0,
		items = $('.containers div'),
		total = items.length;

	function slide(){
		var item = $('.containers div').eq(index);
		items.slideUp();
		item.slideDown();
	}

	var autoslide = setInterval(function(){
		index += 1;
		if(index > total - 1) index =0;
		slide();
	}, 10000);

	$('#next').click(function(){
		index += 1;
		if(index > total - 1) index =0;
		slide();
	});

	$('#prev').click(function(){
		index -= 1;
		if(index < 0) index = total -1;
		slide();
	});



	var index1 = 0,
		items1 = $('.containers1 div'),
		total1 = items1.length;
	function slide1(){
		var item1 = $('.containers1 div').eq(index1);
		items1.slideUp();
		item1.slideDown();
	}

	var autoslide1 = setInterval(function(){
		index1 += 1;
		if(index1 > total1 - 1) index1 =0;
		slide1();
	}, 10000);

	$('#nextRS').click(function(){
		index1 += 1;
		if(index1 > total1 - 1) index1 =0;
		slide1();
	});

	$('#prevRS').click(function(){
		index1 -= 1;
		if(index1 < 0) index1 = total1 -1;
		slide1();
	});
});