function draw() {//рисует треугольник
  var canvas = document.getElementById("mainCanvas");
  var ctx = canvas.getContext("2d");
  ctx.strokeStyle="black"//задаёт цвет линии

  ctx.lineWidth = 5;//ширина линии
  ctx.moveTo(0, 0);//начинает в левом верхнем углу
  ctx.lineTo(200, 0);//идёт в правый верхний угол (чем первая цифра больше, тем правее, чем вторая цифра больше, тем ниже)
  ctx.lineTo(100, 100);//идёт в центр
  ctx.lineTo(0,0);//возвращает линию в центр

  ctx.stroke();



  ctx.strokeRect(0, 100, 200, 100);//рисует прямоугольник - первые 2 цифры = где левый верхний угол фигуры, вторые 2 цифры = длинна и высота


  ctx.rotate(10 * Math.PI / 180);//поворачивает фигуру что идёт дальше
  ctx.strokeRect(100, 100, 50, 50);

}


draw();
