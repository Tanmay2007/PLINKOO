class particle {
    constructor(x,y,d){
            var options={
               
                isStatic:true
                
            }

            this.body=Bodies.circle(x,y ,d,options)
           
            this.d=d
            World.add(world,this.body)
    }

        display(){
            push( )
            translate(this.body.position.x,this.body.position.y)
           
            this.body=Bodies.circle(x,y ,this.d,options)
            this.color=color(random(10,245),random(10,245))
            World.add(world,this.body)
            pop()


        }


}