// UFO dari planet Namex
function setup() {
  // Membuat canvas 3D
  createCanvas(400, 400, WEBGL);
}

function draw() {
  background(200);

  // Menambahkan pencahayaan
  directionalLight(255, 255, 255, 0.5, 1, -0.5);
  ambientLight(50);

  // Mengatur rotasi objek UFO
  rotateY(frameCount * 0.01);
  noStroke();
  
  // Piringan atas UFO
  push();
  fill(192, 192, 192);   
  rotateX(PI); // Membalik piringan
  translate(0, -20, 0); // Mengatur posisi sedikit ke atas
  cone(70, 30); // Piringan atas
  pop();

  // Piringan bawah UFO
  push();
  fill(128, 128, 128); // Warna biru
  translate(0, 50, 0); // Mengatur posisi sedikit ke bawah
  cone(70, 30); // Piringan bawah
  pop();

  // Bulatan UFO
  push();
  fill(0, 200, 255); // Warna hijau terang
  translate(0, 15, 0); // Posisi kubah di tengah atas UFO
  sphere(20); // Kubah
  pop();
}
