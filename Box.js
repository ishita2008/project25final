class Box {
    constructor(x,y){

     
       this.x=x
       this.y=y
       this.wallThickness=10
       this.dustbinWidth=120
       this.dustbinHeight=210


       this.image=loadImage("dustbingreen.png")
        this.bottombody = Bodies.rectangle(this.x,this.y,this.dustbinWidth,this.dustbinHeight,this.wallThickness,{isStatic:true})
       this.leftWallBody=Bodies.rectangle(this.x-this.dustbinWidth/2,this.y-this.dustbinHeight/2,this.dustbinWidth,this.dustbinHeight,this.wallThickness,{isStatic:true})
       this.rightWallBody=Bodies.rectangle(this.x+this.dustbinWidth/2,this.y-this.dustbinHeight/2,this.dustbinWidth,this.dustbinHeight,this.wallThickness,{isStatic:true})

       
      
        
       World.add(world, this.bottombody);
       World.add(world, this.leftWallBody);
       World.add(world, this.rightWallBody);
        

        


    }     
    display(){
        var posBottom = this.bottombody.position;
        var posLeft=this.leftWallBody.position;
        var posRight=this.rightWallBody.position;

		
       

       push()
	   
			translate(posLeft.x, posLeft.y);
			
			rectMode(CENTER)
			//strokeWeight(4);
			
			fill(255)
			
			//rect(0,0,this.wallThickness, this.dustbinHeight);
			pop();

			push();

			translate(posRight.x, posRight.y);
			rectMode(CENTER)
			//strokeWeight(4);
			
			fill(255)
			
			//rect(0,0,this.wallThickness, this.dustbinHeight);
			pop()



            push()
			translate(posBottom.x, posBottom.y);
			rectMode(CENTER)
			//strokeWeight(4);
			
			fill(255)
			
			
           
			//rect(38,0,this.wallThickness, this.dustbinHeight);
			imageMode(CENTER);
		image(this.image, -10,-this.dustbinHeight/25,    200, 250,)
			pop()
       
       
      
        
    }
}

