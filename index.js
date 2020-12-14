// Add your Circle class here
class Circle{
  constructor(radius){
    this.radius = radius
  }
  get diameter(){
    return this.radius * 2
  }
  get circumference(){
    return 2 * Math.PI * this.radius
  }
  get area(){
    return Math.PI * this.radius * this.radius
  }
  set raduisFromDiameter(newRaduis){
    return diameter / 2
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
