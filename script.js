// script.js

// Lista de convidados
const convidados = [
    "Ana", "Bruna", "Carlos", "Amanda", "Lucas", "Alberto", "Mariana", "João", "Antônio"
];

// Função para imprimir os nomes em letras maiúsculas e contar os nomes que começam com 'A'
function processarConvidados() {
    let nomesComA = 0; // Contagem de nomes que começam com 'A'
    let nomesLongos = []; // Lista para armazenar nomes com mais de 5 letras

    // Loop através dos convidados e exibe em letras maiúsculas
    const listElement = document.getElementById('guestList');
    for (let i = 0; i < convidados.length; i++) {
        // Imprime o nome em maiúsculas
        const nomeMaiusculo = convidados[i].toUpperCase();
        const listItem = document.createElement('li');
        listItem.textContent = nomeMaiusculo;
        listElement.appendChild(listItem);

        // Contagem de nomes que começam com 'A'
        if (convidados[i].charAt(0).toUpperCase() === 'A') {
            nomesComA++;
        }

        // Adiciona à lista de nomes longos
        if (convidados[i].length > 5) {
            nomesLongos.push(convidados[i]);
        }
    }

    // Exibe as estatísticas
    const statsElement = document.getElementById('statistics');
    statsElement.innerHTML = `
        <p><strong>Total de nomes que começam com "A":</strong> ${nomesComA}</p>
        <p><strong>Lista de nomes com mais de 5 letras:</strong> ${nomesLongos.join(', ')}</p>
    `;
}

// Chama a função quando a página for carregada
window.onload = function() {
    processarConvidados();
};
