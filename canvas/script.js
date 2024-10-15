var canvasElement = document.getElementById("tegneflate");
var context = canvasElement.getContext("2d");

// Funksjon for å tegne en sirkelsamling
function tegnSirkelsamling(startX, y) {
    for (var i = 0; i < 10; i++) {
        var radius = 4 + i * 4; // Radius fra 4 til 40 (4, 8, 12, ..., 40)
        context.beginPath();
        context.arc(startX, y, radius, 0, Math.PI, true); // Halv sirkel
        context.fillStyle = "hsl(" + (i * 36) + ", 100%, 50%)"; // Farge for hver sirkel
        context.fill();
        context.stroke();
    }
}

// Tegn sirkelsamlinger fra x=0 til x=400 med 40 piksler mellom hver
for (var x = 20; x <= 380; x += 40) {
    tegnSirkelsamling(x, 200); // Y-verdien er 200 for alle sirkelsamlinger
}
