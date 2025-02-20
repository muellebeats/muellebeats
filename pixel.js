let img;
let cols, rows;
let cellW, cellH;

function preload() {
  // Carga tu imagen. Asegúrate de tener una imagen en la carpeta "assets"
  img = loadImage('image/jpgblack.png');
}

function setup() {
  createCanvas(800, 800);
  // Definimos cuántas celdas queremos en la cuadrícula
  cols = 40;
  rows = 40;
  cellW = width / cols;
  cellH = height / rows;
  noLoop();
}

function draw() {
  background(30);
  img.loadPixels();
  
  // Recorremos la cuadrícula
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      // Calcula la posición en la imagen correspondiente a la celda
      let x = floor(map(i, 0, cols, 0, img.width));
      let y = floor(map(j, 0, rows, 0, img.height));
      
      // Obtiene el color del píxel en (x, y)
      let index = (x + y * img.width) * 4;
      let r = img.pixels[index];
      let g = img.pixels[index+1];
      let b = img.pixels[index+2];
      
      // Convierte el color a brillo (por simplicidad, se usa el promedio)
      let brightnessVal = (r + g + b) / 3;
      
      // Mapea el brillo a una escala, por ejemplo, para definir la altura de un rectángulo
      let h = map(brightnessVal, 0, 255, 0, cellH);
      
      // Dibuja un rectángulo en la posición (i, j) con altura h
      let posX = i * cellW;
      let posY = j * cellH + (cellH - h); // se alinea a la base de la celda
      fill(200);
      noStroke();
      rect(posX, posY, cellW, h);
    }
  }
}
