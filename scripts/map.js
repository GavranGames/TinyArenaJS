var Map = function(){
	this.cells = {};
};
Map.prototype = {
	refreshMap: function(){
		$('.cell').html('<span class="sand">.</span>');
		player.draw();
		npcDraw();
		$('#score span').text(score);
	},
	initiate: function(w,h){
		for(i=0;i<=w;i++){
			for(j=h;j>=0;j--){
				this.cells[j+';'+i] = document.createElement('div');
				$(this.cells[j+';'+i]).addClass('cell');
				$(this.cells[j+';'+i]).attr('x',j).attr('y',i).attr('occupent','');
				$(this.cells[j+';'+i]).prependTo($('#map'));
			}
		}
		this.refreshMap();
	},
	updatePosition: function(c){
		if(this.cells[c.x+';'+c.y]){
			key = (c.key) ? c.key : 'player';
			$('.cell[occupent="'+key+'"]').attr('occupent','');
			$(this.cells[c.x+';'+c.y]).attr('occupent',key);
			$(this.cells[c.x+';'+c.y]).html(c.text);
			return true;
		}
		else{
			return false;
		}
	},
	checkAccessibility: function(x,y){
		return (this.cells[x+';'+y]) ? ($(this.cells[x+';'+y]).attr('occupent').length === 0) ? true : $(this.cells[x+';'+y]).attr('occupent') : false;
	},
	getBloody: function(c){
		$(this.cells[c.x+';'+c.y]).addClass('bloody');
	}
}
map = new Map();