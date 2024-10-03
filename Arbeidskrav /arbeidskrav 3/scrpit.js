const grades = [
    { grade: "F", treshold: 0 },
    { grade: "E", treshold: 25 },
    { grade: "D", treshold: 44 },
    { grade: "C", treshold: 68 },
    { grade: "B", treshold: 88 },
    { grade: "A", treshold: 100 }
];

document.getElementById("poengOppgave1").addEventListener("input", checkInputs);
document.getElementById("poengOppgave2").addEventListener("input", checkInputs);
document.getElementById("beregnKnapp").addEventListener("click", beregnKarakter);

function checkInputs() {
    const oppgave1 = document.getElementById("poengOppgave1").value;
    const oppgave2 = document.getElementById("poengOppgave2").value;
    document.getElementById("beregnKnapp").disabled = !(oppgave1 && oppgave2);
}

function beregnKarakter() {
    const poengOppgave1 = parseInt(document.getElementById("poengOppgave1").value);
    const poengOppgave2 = parseInt(document.getElementById("poengOppgave2").value);

    const maksPoengOppgave1 = 10;
    const maksPoengOppgave2 = 12;

    const prosent = (0.3 * (poengOppgave1 / maksPoengOppgave1 * 100)) + 
                    (0.7 * (poengOppgave2 / maksPoengOppgave2 * 100));

    const karakter = finnKarakter(prosent);
    document.getElementById("resultat").innerText = `Din karakter er: ${karakter}`;
}

function finnKarakter(prosent) {
    for (let i = grades.length - 1; i >= 0; i--) {
        if (prosent >= grades[i].treshold) {
            return grades[i].grade;
        }
    }
    return "Ugyldig karakter";
}
