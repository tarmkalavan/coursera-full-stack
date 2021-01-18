var literalCircle = {
  radius: 10,

  getArea: function() {
    console.log(this);
    var increaseR = function() {
      this.radius = 20;
    };
    increaseR();
    console.log(this.radius);

    return Math.Pi * Math.pow(this.radius, 2);
  }
};

console.log(literalCircle.getArea());