function setup() {
	createCanvas(600, 500);
}

var player = new object({
	x: 100,y: 300,w: 25,h: 25,f: col(0, 255, 0)});
var ground = new object({
	x: 0,y: 400,w: 600,h: 100,f: col(150)});
var ceiling = new object({
	x: 0,y: 0,w: 600,h: 100,f: col(150)});
var left = new object({
	x: 150,y: 150,w: 35,h: 35,f: col(0, 255, 0)});
var right = new object({
	x: 70,f: col(150)});
var mleft = new object({
	y: -70,f: col(150)});
var mright = new object({
	x: 70,y: -70,f: col(150)});
var stop = new object({
	x: 140,	f: col(255, 0, 0)});

var score = 0;

//for blocks and black blocks
var bl = [
	[-8, 0, 6],
	[0, 0],
	[1, 0, 1],
	[2, 0, 1],
	[3, 0],       [3, 1],
	[4, 0, 1],
	[5, 0, 1],
	[6, 0],       [6, 1],     [6, 2],
	[7, 0],       [7, 1],
	[8, 0],       [8, 1],
	[9, 0],       [9, 1],
	[10, 0],
	[11, 0],
	[12, 0],                                [12, 3],
	[13, 0],                                [13, 3],
	[14, 0],                                [14, 3],
	[15, 0],      [15, 1, 1], [15, 2, -1],  [15, 3],
	[16, 0],      [16, 1, 1], [16, 2, -1],  [16, 3],
	[17, 0, 1],
	[18, 0, 1],
	[19, 0, 1],
	[20, 0],      [20, 1],
	[21, 0],
	[22, 0],
	[23, 0, 1],
	[24, 0, 1],
	[25, 0],
	[26, 0],
	[27, 0],      [27, 1],
	[28, 0],      [28, 1],
	[29, 0, 1],
	[30, 0, 1],
	[31, 0],      [31, 1],     [31, 2],
	[32, 0],      [32, 1],     [32, 2],
	[33, 0],      [33, 1],     [33, 2, 1],
	[34, 0],      [34, 1],     [34, 2, 1],
	[35, 0],      [35, 1],
	[36, 0],      [36, 1],
	[37, 0, 1],
	[38, 0, 1],                [38, 2, 4],
	[39, 0, 1],                             [39, 3],
	[40, 0, 1],                             [40, 3],
	[41, 0, 1],                             [41, 3],
	[42, 0, 1],                             [42, 3],     [42, 4],
	[43, 0, 1],                             [43, 3],
	[44, 0, 1],                             [44, 3],
	[45, 0, 1],
	[46, 0, 1],                [46, 2],
	[47, 0, 1],                [47, 2],    
	[48, 0, 1],                [48, 2],     [48, 3, 1],
	[49, 0, 1],                [49, 2],     [49, 3],     [49, 4],     [49, 5],
	[50, 0],      [50, 1],     [50, 2],
	[51, 0],      [51, 1],     [51, 2],
	[52, 0],      [52, 1],     [52, 2],
	[53, 0],      [53, 1],     [53, 2],     [53, 3, 1],
	[54, 0],      [54, 1],     [54, 2, 1],
	[55, 0],      [55, 1],     [55, 2, 1],
	[56, 0],      [56, 1],     [56, 2],
	[57, 0],      [57, 1],     [57, 2],
	[58, 0],      [58, 1],     [58, 2],     [58, 3, 1],
	[59, 0],      [59, 1],
	[60, 0],      [60, 1],
	[61, 0],      [61, 1],
	[62, 0],      [62, 1],     [62, 2],                              [62, 8],
	[63, 0],      [63, 1],                                           [63, 8],
	[64, 0],      [64, 1],                                           [64, 8],
	[65, 0],      [65, 1],
	[66, 0, 1],
	[67, 0, 1],  
	[68, 0, 1],
	[69, 0, 1],
	[70, 0],      [70, 1],     [70, 2],
	[71, 0],      [71, 1],     [71, 2],
	[72, 0],      [72, 1],     [72, 2],      
	[73, 0],      [73, 1, 1],
	[74, 0],      [74, 1, 1],  [74, 2],                              [74, 5],
	[75, 0],      [75, 1, 1],                                        [75, 5],
	[76, 0],      [76, 1, 1],                                        [76, 5],
	[77, 0],      [77, 1, 1],                                        [77, 5],
	[78, 0],      [78, 1, 1],                            [78, 4],    [78, 5],
	[79, 0],      [79, 1, 1],                            [79, 4],
	[80, 0],      [80, 1, 1],                [80, 3],    [80, 4],
	[81, 0],      [81, 1],     [81, 2],      [81, 3],
	[82, 0],      [82, 1],     [82, 2],
	[83, 0],      [83, 1],
	[84, 0],
	[85, 0, 1],
	[86, 0, 1],                [86, 2],
	[87, 0, 1],                [87, 2],
	[88, 0, 1],                [88, 2],
	[89, 0],      [89, 1],     [89, 2],
	[90, 0],      [90, 1],     [90, 2],                                  [90, 6],
	[91, 0],      [91, 1],     [91, 2],                                  [91, 6],
	[92, 0],      [92, 1],     [92, 2],                                  [92, 6],
	[93, 0],      [93, 1],     [93, 2],                                  [93, 6],
	[94, 0],      [94, 1],     [94, 2],                                  [94, 6],
	[95, 0],      [95, 1],     [95, 2],       [95, 3],                   [95, 6],
]; 

var b = [];
for(var i = 0; i < bl.length; i++) {
	b.push(new object({
		x: 300 + (bl[i][0] * 25),
		y: 380 - (bl[i][1] * 20),
		w: 25,
		h: 20
	}));
	b[i].type = bl[i][2] || 0;
	if(b[i].type == 1) {
		b[i].y += 5;
		b[i].w -= 10;
		b[i].h -= 5;
		b[i].f = col(0);
	}else if(b[i].type == -1) {
		b[i].x += 5;
		b[i].w -= 10;
		b[i].h -= 5;
		b[i].f = col(0);
	}
}

right.inherit({
	o: left,
	v: [2, 1, 1, 1, 0, 1, 1]
});
mleft.inherit({
	o: left,
	v: [1, 2, 1, 1, 0, 1, 1]
});
mright.inherit({
	o: left,
	v: [2, 2, 1, 1, 0, 1, 1]
});
stop.inherit({
	o: left,
	v: [2, 1, 1, 1, 0, 1, 1]
});

var gmx = 275;
var mx = gmx;

var xs = 2;
var ds = 5;

var p = "ground";
var GM = 1;

player.y = ground.y - player.h;

var gx = 0;
var gxs = 0;
var yo = 0;
var jump;
var fly;

function restartLevel() {
	mx = 275;
	xs = 2;
	ds = 5;
	p = "ground";
	GM = 1;
	yo = 0;
	gx = 0;
	player.y = ground.y - player.h;
    gxs=-xs;
    score = 0;
}

function draw() {
	background(125, 200, 255);
	for(var j = 0; j < bl.length; j++) {
		b[j].x = (b[j].type == 0) ? 300 + (bl[j][0] * 25) + gx : ((b[j][2] == 2) ? 305 + (bl[j][0] * 25) + gx : 305 + (bl[j][0] * 25) + gx);
	}
	
	if(GM == 1) {
		player.w = 25;
		player.h = 25;
	}else if(GM == 2) {
		player.w = 40;
		player.h = 20;
		player.collide({
			o: ceiling
		});
		ceiling.create();
	}
	
	jump = mouseIsPressed || keypress(38) || keypress(32)  || keypress(13);
    fly = keypress(13);

	player.collide({ 
		o: ground
	});
	
	if(player.collide({o: ground}, false).t) {
		mx = gmx;
		yo = 0;
	}
	
	if(mouseIsPressed && player.collide({o: ground}, false).d == "top") {
		mx = gmx;
		yo = 0;
	}
	
	left.button({
		t: function() {
			left.f = col(150);
			gxs = -xs;
		},
		f: function() {
			left.f = col(0, 255, 0);
		}
	});
	stop.button({
		t: function() {
			stop.f = col(0, 0, 0);
			gxs = 0;
		},
		f: function() {
			stop.f = col(255, 0, 0);
		}
	});
	
	gx += gxs;
    
	if(GM == 1) {
		if(fly && p == "ground" && !left.button() && !right.button() && !mleft.button() && !mright.button() && !stop.button()) {
			p = "up";c = 2;
		}
		else if(jump && p == "ground" && !left.button() && !right.button() && !mleft.button() && !mright.button() && !stop.button()) {
			p = "up";c = 1;
		}
		if(p == "up") {
			player.move({
				t: [player.x, mx],
				s: [0, 5*c]
			});
		}
		if(p == "up" && player.y > mx && player.y < ground.y - player.h) {
			player.move({
				t: [player.x, mx],
				s: [0, 5*c]
			});
		}
		if(p == "up" && player.y <= mx) {
			player.move({
				t: [player.x, ground.y - player.h],
				s: [0, ds/c]
			});
			p = "down";
		}

		if(p == "down" && player.y > mx && player.y < ground.y - player.h) {
			player.move({
				t: [player.x, ground.y - player.h],
				s: [0, ds/c]
			});
		}
		if(p == "down" && player.y >= ground.y - player.h) {
			mx = gmx;
			mx += yo;
			yo = 0;
			player.y = ground.y - player.h;
			p = "ground";
		}
	}else if(GM == 2) {
		if(jump && !left.button() && !right.button() && !mleft.button() && !mright.button() && !stop.button()) {
			player.y -= (player.collide({o: ceiling}, false).t) ? 0 : 5;
		}else{
			player.y += (player.collide({o: ground}, false).t) ? 0 : ds;
		}
	}
	player.create();
	ground.create();
	left.create();
	stop.create();
	
	player.x = player.p.x;
	
	for(var k = 0; k < bl.length; k++) {
		if(dist(b[k].cx, 0, player.cx, 0) <= ds * 3 && b[k].type == 0) {
			if(dist(0, player.y + player.h, 0, b[k].y) <= ds * 3) {
				yo = ground.y - b[k].y;
				b[k].f = col(255, 0, 0);
				mx = gmx;
			}else{
				b[k].f = col(255);
			}
			mx = mx - yo;
        }
		if(dist(player.cx, 0, b[k].cx, 0) > ds * 3 && player.collide({o: b[k], s: [0, ds]}, false).d == "none" && b[k].type == 0) {
			b[k].f = col(255);
		}

		if(player.collide({o: b[k]}, false).d == "bottom" && b[k].type != -1 && GM == 2) {
			player.y += 5;
		}
		
		if(player.collide({o: b[k]}, false).t && GM == 1 && b[k].type == 1) {
            text("      Score:"+String(score|0)+"\n\nRestarting Game",200,220)
            gxs = 0;
			setTimeout(restartLevel,1500);
		}
		
		if(player.collide({o: b[k], s: [xs, 0]}, false).d == "right" || player.collide({o: b[k], s: [xs, 0]}, false).d == "left") {
			if(b[k].type == 0 || b[k].type == 1 || b[k].type == -1) {
                text("      Score:"+String(score|0)+"\n\nRestarting Game",200,220)
                gxs = 0 ;
                setTimeout(restartLevel,1500);
			}
		}else if(player.collide({o: b[k], s: [0, ds]}, false).d == "top" && (jump && (left.button() || right.button() || mleft.button() || mright.button() || stop.button()) || !jump) && b[k].type == 0) {
			player.y -= 5;
		}
		if(player.collide({o: b[k], s: [0, ds]}, false).d == "top" && jump && !left.button() && !right.button() && !mleft.button() && !mright.button() && !stop.button() && b[k].type == 0) {
			p = "up";
		}
		if(b[k].x < 600 && b[k].x + b[k].w > 0 && k != 0) {
			b[k].create();
		}
		yo = 0;
	}
    score+=0.01;

    if (score == 15){text("YOU WIN",250,250);}
	fill(255);
	text("Click, up arrow or space to jump. Enter to long jump", 10, 10);
    text("Score:"+String(score|0),500,10);
    text("START",150,170);
    text("STOP",292,170);
}