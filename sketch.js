
            var valor = document.getElementById("pecinco").offsetWidth;

            window.addEventListener("resize", function () {
                valor = document.getElementById("pecinco").offsetWidth;
            });

            function setup() {
                createCanvas(valor, valor, WEBGL).parent("#pecinco");
                select("#nombre").html("Giulia Pepe");
                select("#aprendizaje").html("Nueva materia para desafiarme y crear nuevas cosas");
            }
            
        
            function draw() {
                background(255, 216, 223);
                ambientLight(300);
  let mx = mouseX - 50;
  let my = mouseY - 50;
                 noStroke();
  pointLight(255, 255, 255, valor/3, valor/2, 50);
  fill(232, 165, 186);
  specularMaterial(255);
  shininess(40);
  translate(-25, 0, 0);
  metalness(1);
  sphere(20);
  translate(50, 0, 0);
  metalness(50);
  sphere(20);
                orbitControl();
              cylinder( valor /3);
            }

            function windowResized() {
                resizeCanvas(valor, valor);
            }