function addLog(t,color){
	l = document.createElement('div');
	t = t.charAt(0).toUpperCase() + t.slice(1);
	$(l).text(t);
	if(color !== 'undefined'){$(l).css('color',color);}
	$(l).addClass('log');
	$(l).appendTo('#log');
}