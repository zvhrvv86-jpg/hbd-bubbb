const ucapan = "hbd Dela Silvira... im so grateful to have you around. makasih bgt udah jadi comfort character yang selalu hadir pas dunia lagi ga asik dan pas aku lagi jatuh-jatuhnya. i mean, gimana bisa ada orang secantik, selucu, dan setinggi kamu tapi random-nya se-seru ini? wkwk. moga di usia baru ini semesta selalu baik sama kamu, sehat terus, dan semua plan kamu di-approve langit. stay as you are, del. lowkey praying we last forever... happy level up day, my favorite human! 🤍";

const music = document.getElementById("bgMusic");
const startBtn = document.getElementById("btn-start");

// Menunggu tombol pembuka diklik
if (startBtn) {
    startBtn.addEventListener("click", function() {
        // Sembunyikan tombol
        const gate = document.getElementById("auth-gate");
        gate.style.opacity = "0";
        gate.style.pointerEvents = "none";

        // Mainkan musik
        music.play().catch(function(err) {
            console.log("Musik diblokir browser:", err);
        });

        // Jalankan hitung mundur setelah tombol mulai memudar
        setTimeout(runCountdown, 400);
    });
}

// 1. Fungsi Animasi Hitung Mundur
function runCountdown() {
    const cd = document.getElementById("countdown-text");
    const steps = ["3", "2", "1", "HBD FOR DELA SILVIRA ✨"];
    let currentIdx = 0;

    function showStep() {
        if (currentIdx < steps.length) {
            cd.innerHTML = steps[currentIdx];
            cd.style.transform = "scale(1.3)";
            cd.style.opacity = "1";
            
            setTimeout(function() {
                if (currentIdx < steps.length - 1) {
                    cd.style.transform = "scale(0.7)";
                    cd.style.opacity = "0";
                }
            }, 700);

            let delay = currentIdx === steps.length - 1 ? 2200 : 1000;
            currentIdx++;
            setTimeout(showStep, delay);
        } else {
            cd.style.opacity = "0";
            setTimeout(initLoveGallery, 300);
        }
    }
    showStep();
}

// 2. Fungsi Membuat Formasi Love dari Foto b1 - b15
function initLoveGallery() {
    document.getElementById("main-stage").style.opacity = "1";
    const orbit = document.getElementById("orbit-node");
    const totalPhotos = 15;
    
    // Sesuaikan bentangan bentuk love antara layar laptop dan HP
    const spreadFactor = window.innerWidth < 480 ? 11 : 18;

    for (let j = 1; j <= totalPhotos; j++) {
        const card = document.createElement("div");
        card.className = "polaroid-card";
        card.innerHTML = "<img src='b" + j + ".png' alt='Memory " + j + "'>";
        orbit.appendChild(card);

        // Rumus Matematika Kurva Hati Presisi
        const t = (j / totalPhotos) * 2 * Math.PI - Math.PI / 2;
        const x = 16 * Math.pow(Math.sin(t), 3);
        const y = -(13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t));

        const posX = x * spreadFactor;
        const posY = y * spreadFactor;

        // Memunculkan foto mengalir memutar satu per satu
        setTimeout(function() {
            card.style.opacity = "1";
            const cardRotate = Math.random() * 16 - 8;
            card.style.transform = "translate(calc(-50% + " + posX + "px), calc(-50% + " + posY + "px)) rotate(" + cardRotate + "deg) scale(1)";
        }, j * 200);
    }

    // Munculkan kotak surat tengah dan mulai putar foto setelah formasi lengkap
    setTimeout(function() {
        document.getElementById("message-node").classList.add("pop");
        orbit.classList.add("orbit-rotating");
        startTyping();
    }, (totalPhotos * 200) + 1000);
}

// 3. Fungsi Efek Ketik Pesan otomatis
let charIdx = 0;
function startTyping() {
    const box = document.getElementById("typing-text");
    if (box && charIdx < ucapan.length) {
        box.innerHTML += ucapan.charAt(charIdx);
        charIdx++;
        setTimeout(startTyping, 45);
    }
}
