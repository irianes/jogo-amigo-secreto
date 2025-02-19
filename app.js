let amigos = [];

        function adicionarAmigo() {
            const input = document.getElementById("amigo");
            const nome = input.value.trim();
            
            const regexNomeValido = /^[A-Za-zÀ-ÖØ-öø-ÿ]+(?: [A-Za-zÀ-ÖØ-öø-ÿ]+)*$/;
            
            if (!regexNomeValido.test(nome)) {
                alert("Atenção! Digite um nome válido!");
                input.value = "";
                return;
            }
            
            if (amigos.includes(nome)) {
                alert("Esse nome já foi adicionado.");
                input.value = "";
                return;
            }
            
            amigos.push(nome);
            atualizarLista();
            input.value = "";
        }

        function atualizarLista() {
            const lista = document.getElementById("listaAmigos");
            lista.innerHTML = "";
            amigos.forEach(amigo => {
                const li = document.createElement("li");
                li.textContent = amigo;
                lista.appendChild(li);
            });
        }

        function sortearAmigo() {
            if (amigos.length < 2) {
                alert("Adicione pelo menos dois amigos para realizar o sorteio.");
                return;
            }
            
            let sorteio = [...amigos];
            let resultado = {};
            
            for (let i = 0; i < amigos.length; i++) {
                let sorteado;
                do {
                    sorteado = sorteio[Math.floor(Math.random() * sorteio.length)];
                } while (sorteado === amigos[i]);
                
                resultado[amigos[i]] = sorteado;
                sorteio.splice(sorteio.indexOf(sorteado), 1);
            }
            
            exibirResultado(resultado);
        }

        function exibirResultado(resultado) {
            const lista = document.getElementById("resultado");
            lista.innerHTML = "";
            
            for (const [amigo, sorteado] of Object.entries(resultado)) {
                const li = document.createElement("li");
                li.textContent = `${amigo} → ${sorteado}`;
                lista.appendChild(li);
            }
        }