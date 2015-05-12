function rgn(mini,maxi){
	return mini + Math.floor(Math.random()*Math.round(maxi-mini));
}

function getDirection(a,b){
	var c = {};
	c.x = b.x - a.x;
	c.y = b.y - a.y;
	c.x = (c.x) ? (c.x < 0) ? -1 : 1 : 0;
	c.y = (c.y) ? (c.y < 0) ? -1 : 1 : 0;
	return c;
}

$(window).load(function(){
	$('#log').height($('#display').height() - $('#top').height());
	
	$('#log').on('DOMNodeInserted',function(){
		$(this).scrollTop($(this).prop("scrollHeight"));
	});
});