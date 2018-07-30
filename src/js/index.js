function refresh() {
	var total = parseFloat($(':text[id="total"]').val());
	var high = parseFloat($(':text[id="high"]').val());
	var num = total>0 && high>0 ? total/high : ($(':text[id="num"]').val()>0 ? $(':text[id="num"]').val():1);
	var low = parseFloat($(':text[id="low"]').val());
	var fee = high*num*0.002;
	var earn = (high-low)*num - fee;
	$(':text[id="num"]').val(num);
	$(':text[id="fee"]').val(fee);
	$(':text[id="earn"]').val(earn);
}

$(document).ready( function(){
	$("#try").click(function(){
		refresh();
	});

	$("#total").blur(function(){
		refresh();
	});

	$("#high").blur(function(){
	  	refresh();
	});

	$("#low").blur(function(){
	  	refresh();
	});
});