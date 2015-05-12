var player;

var Character = function(x,y,mxh,text){
	this.x = x;
	this.y = y;
	this.maxhealth = mxh;
	this.health = mxh;
	this.text=text;
	this.name='you';
	player = this;
}
Character.prototype = {
	draw:function(){map.updatePosition(this);},
	move:function(x,y){
		ma = map.checkAccessibility(this.x+x,this.y+y);
		if(ma === true){
			this.x += x;
			this.y += y;
			map.refreshMap();
			npcTurn();
		}
		else if(ma !== false){
			this.attack(npcs[ma]);
			npcTurn();
		}
		else{addLog('You hit a wall.');}
	},
	wait:function(){
		npcTurn();
	},
	attack:function(target){
		damages = Math.floor(Math.random()*4);
		target.health -= damages;
		if(damages > 0){map.getBloody(target);}
		if(target.health < 1){
			score++;
			delete npcs[target.key];
			addLog('You kill '+target.name+'.','lightgreen');
			$('[occupent="'+target.key+'"]').attr('occupent','');
			if(score < 11){
				new Npc('orc'+(id++),'the orc',rgn(1,5),rgn(1,20),8,'<span style="color:lightgreen;font-weight:bold;">ô</span>');
				new Npc('orc'+(id++),'the orc',rgn(1,5),rgn(1,20),8,'<span style="color:lightgreen;font-weight:bold;">ô</span>');
			}
		}
		else if(damages > 2){addLog('You deal tremendous damages to '+target.name+'.','lightgreen');}
		else if (damages > 0){addLog('You touch '+target.name+'.','lightgreen');}
		else {addLog('You miss '+target.name+'.','red');}
		map.refreshMap();
	}
}