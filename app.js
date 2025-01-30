// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

        function agregarAmigo() {
            let input = document.getElementById("amigo");
            let nombre = input.value.trim();
            
            if (nombre === "") {
                alert("Por favor, ingresa un nombre válido.");
                return;
            }

            amigos.push(nombre);
            input.value = "";
            mostrarLista();
        }

        function mostrarLista() {
            let lista = document.getElementById("listaAmigos");
            lista.innerHTML = "";
            
            amigos.forEach(nombre => {
                let li = document.createElement("li");
                li.textContent = nombre;
                lista.appendChild(li);
            });
        }

        function sortearAmigo() {
            listaAmigos.style.display = "none";
            if (amigos.length === 0) {
                alert("La lista está vacía. Agrega nombres antes de sortear.");
                return;
            }
            let indiceAleatorio = Math.floor(Math.random() * amigos.length);
            let nombreSorteado = amigos[indiceAleatorio];
            document.getElementById("resultado").innerHTML = `<strong>El amigo secreto es:</strong> ${nombreSorteado}`;
        }