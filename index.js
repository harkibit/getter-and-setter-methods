// Add your Circle class here
class Circle{
  constructor(radius){
    this.radius = radius
  }
  get diameter(){
    return this.radius * 2
  }
  get circumference(){
    return diameter * Math.PI
  }
  get area(){
    return Math.PI * this.radius * 2
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
