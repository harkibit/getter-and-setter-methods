// Add your Circle class here
class Circle{
  constructor(radius){
    this.radius = radius
  }
  get calculate(){
    diameter = this.radius * 2
    Circumference = diameter * Math.PI
    Area = Math.PI * this.radius * 2
  }
  set raduis(newRaduis){
    newRaduis = diameter / 2 || (Circumference/Math.PI)/2 || Area/(2*Math.PI) 
    
  }
}
