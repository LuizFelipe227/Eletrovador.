/* ============================== MENU MOBILE============================== */
function toggleMenu() {
    const menu = document.getElementById("menu");
    menu.classList.toggle("active");
} /* Fecha o menu depois de clicar em um link */
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", () => {
        document.getElementById("menu").classList.remove("active");
    });
}); /* ============================== CONTADORES============================== */
const counters = document.querySelectorAll(".counter");
let countersStarted = false;

function startCounters() {
    if (countersStarted) {
        return;
    }
    countersStarted = true;
    counters.forEach(counter => {
        const target = Number(counter.dataset.target);
        let current = 0;
        const increment = target / 80;

        function updateCounter() {
            current += increment;
            if (current < target) {
                counter.innerText = Math.ceil(current);
                requestAnimationFrame(updateCounter);
            } else {
                counter.innerText = target;
            }
        }
        updateCounter();
    });
} /* Detecta quando a seção aparece */
const numbersSection = document.querySelector(".numeros");
const observer = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
        startCounters();
    }
}, {
    threshold: 0.4
});
observer.observe(numbersSection); /* ============================== FORMULÁRIO DE CONTATO============================== */
const contactForm = document.getElementById("contactForm");
contactForm.addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Mensagem enviada com sucesso!\n\n" + "Este formulário é demonstrativo. " + "Nenhuma mensagem foi realmente enviada.");
    contactForm.reset();
}); /* ============================== FORMULÁRIO DE CURRÍCULO============================== */
const resumeForm = document.getElementById("resumeForm");
resumeForm.addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Currículo recebido com sucesso!\n\n" + "Este formulário é demonstrativo. " + "O arquivo não foi enviado para um servidor.");
    resumeForm.reset();
});