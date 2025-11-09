// Array delle tue affermazioni in Italiano
const statements = [
    "Asserzione di Sistema: // Tuo padre è maschio.",
    "Asserzione di Sistema: // Tua madre è femmina.",
    "Caricamento del Sistema: // Stai guardando uno schermo.",
    "Inferenza di Sistema: // Sei o maschio o femmina.",
    ">>> Mettendo in discussione il sistema...",
    ">>> Chi ha definito queste regole?",
    ">>> È la cultura, il linguaggio, o il codice?",
    ">>> Spirito Hacker: Decostruire, Analizzare, Riscrivere.",
    "ACCESSO CONSENTITO: Sei libero/a."
];

let currentIndex = 0;
const textElement = document.getElementById('display-text');
const container = document.getElementById('container');

container.addEventListener('click', function() {
    if (currentIndex < statements.length) {
        textElement.textContent = statements[currentIndex];
        currentIndex++;
    } else {
        textElement.textContent = ">>> Ricompilando la realtà... (Clicca per ricominciare)";
        currentIndex = 0;
    }
});
