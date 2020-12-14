// Add your Circle class here
class Circle{
  constructor(radius){
    this.radius = radius
  }
  get diameter(){
    return diameter = this.radius * 2
  }
  get Circumference(){
    return Circumference = diameter * Math.PI
  }
  get Area(){
    return Area = Math.PI * this.radius * 2
  }
  set raduisFromDiameter(newRaduis){
    newRaduis = diameter / 2
    return newRaduis
  }
  set raduisFromCircumference(newRaduis){
    newRaduis = (Circumference/Math.PI)/2 
    return newRaduis
  }
  set raduisFromArea(newRaduis){
    newRaduis = Area/(2*Math.PI)
    return newRaduis
  }
}
