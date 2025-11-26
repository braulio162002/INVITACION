document.addEventListener('DOMContentLoaded', (event) => {
    const splashScreen = document.getElementById('splashScreen');
    const nameInput = document.getElementById('graduadoNameInput');
    const enterButton = document.getElementById('enterButton');
    const musicYes = document.getElementById('musicYes');
    const musicNo = document.getElementById('musicNo');
    const mainTitleName = document.querySelector('.main-name'); // Clase actualizada
    const backgroundMusic = document.getElementById('backgroundMusic');
    let musicChoice = null; 

    function checkButtonState() {
        const isReady = nameInput.value.trim() !== '' && musicChoice !== null;
        enterButton.disabled = !isReady;
    }

    nameInput.addEventListener('input', checkButtonState);

    function handleMusicSelection(choice) {
        musicChoice = choice;
        musicYes.classList.remove('selected');
        musicNo.classList.remove('selected');
        if (choice) musicYes.classList.add('selected');
        else musicNo.classList.add('selected');
        checkButtonState();
    }

    musicYes.addEventListener('click', () => handleMusicSelection(true));
    musicNo.addEventListener('click', () => handleMusicSelection(false));

    enterButton.addEventListener('click', () => {
        if (enterButton.disabled) return;
        const nombre = nameInput.value.trim().toUpperCase();
        if(mainTitleName) mainTitleName.textContent = nombre;
        
        if (musicChoice === true && backgroundMusic) {
            backgroundMusic.play().catch(e => console.log("Auto-play prevented", e));
        }
        splashScreen.style.opacity = '0';
        setTimeout(() => { splashScreen.style.display = 'none'; }, 800);
    });
});

// CONTADOR (Ajustar fecha aquí)
var finalDate = new Date("Dec 07, 2025 18:00:00").getTime(); 
setInterval(function() {
  var now = new Date().getTime();
  var distance = finalDate - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
  document.getElementById("days").innerHTML = days < 10 ? "0"+days : days;
  document.getElementById("hours").innerHTML = hours < 10 ? "0"+hours : hours;
  document.getElementById("minutes").innerHTML = minutes < 10 ? "0"+minutes : minutes;
  document.getElementById("seconds").innerHTML = seconds < 10 ? "0"+seconds : seconds;
}, 1000);