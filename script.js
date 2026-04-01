const steps = {
    1: document.getElementById('step1'),
    2: document.getElementById('step2'),
    3: document.getElementById('step3'),
    4: document.getElementById('step4'),
    5: document.getElementById('step5')
};

const bgMusic = document.getElementById('bgMusic');

// Эхний эффект
window.onclick = () => {
    if(bgMusic.paused) {
        bgMusic.play();
        startSequence();
    }
};

function startSequence() {
    const bubble = document.getElementById('thought-bubble');
    const text = document.getElementById('thought-text');
    
    // Бодол 1
    setTimeout(() => {
        bubble.style.opacity = "1";
        text.innerText = "Сайн байна уу? 😊";
    }, 1000);

    // Бодол 2
    setTimeout(() => {
        text.style.opacity = 0;
        setTimeout(() => {
            text.innerText = "Та бүхэн 4-р сарын 4-ны өдөр 09 цагт МУИС-ын 4-р байранд багийг минь ирж дэмжээрэй!";
            text.style.opacity = 1;
        }, 500);
    }, 4000);

    // Товч гарч ирэх
    setTimeout(() => {
        bubble.style.display = "none";
        document.getElementById('nextBtn').classList.remove('btn-hide');
    }, 9000);
}

// Scene Transitions
document.getElementById('nextBtn').onclick = () => {
    steps[1].classList.add('hidden');
    steps[2].classList.remove('hidden');
    const video = document.getElementById('promoVideo');
    video.play();
    
    video.onended = () => {
        steps[2].classList.add('hidden');
        steps[3].classList.remove('hidden');
        
        // Урилга 5 сек болоод дараагийнх руу
        setTimeout(() => {
            steps[3].classList.add('hidden');
            steps[4].classList.remove('hidden');
            createGarden();
        }, 5000);
    };
};

function createGarden() {
    const garden = document.getElementById('garden');
    for(let i=0; i<15; i++) {
        const flower = document.createElement('div');
        flower.className = 'flower';
        flower.style.left = Math.random() * 90 + 'vw';
        flower.style.top = Math.random() * 90 + 'vh';
        
        // Дэлбээ нэмэх
        for(let j=0; j<4; j++) {
            const petal = document.createElement('div');
            petal.className = 'petal';
            petal.style.transform = `rotate(${j * 90}deg)`;
            flower.appendChild(petal);
        }
        garden.appendChild(flower);
    }
}

document.getElementById('finishBtn').onclick = () => {
    steps[4].classList.add('hidden');
    steps[5].classList.remove('hidden');
};