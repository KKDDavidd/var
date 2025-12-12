const playPauseBtn = document.getElementById('playPauseBtn');
    const progressBar = document.querySelector('.progress-bar');
    const currentTimeSpan = document.getElementById('currentTime');
    const durationSpan = document.getElementById('duration');
    let audio = new Audio('https://file-examples.com/storage/fe9f6f893066954d9aac3a2/2017/11/file_example_MP3_700KB.mp3');
    let isPlaying = false;
    let osszesprob=localStorage.getItem("price");
    let osszesen=0;
    if(osszesprob!=0){
      let osszesen=localStorage.getItem("price", osszesen);
      document.getElementById("ar").textContent = osszesen;
    }
    function togglePlayPause() {
      if (isPlaying) {
        audio.pause();
        playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
      } else {
        audio.play();
        playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
      }
      isPlaying = !isPlaying;
    }

    function updateProgress() {
      const progress = (audio.currentTime / audio.duration) * 100;
      progressBar.style.width = `${progress}%`;
      progressBar.setAttribute('aria-valuenow', progress);

      currentTimeSpan.textContent = formatTime(audio.currentTime);
      durationSpan.textContent = formatTime(audio.duration);
    }

    function formatTime(seconds) {
      const minutes = Math.floor(seconds / 60);
      const remainingSeconds = Math.floor(seconds % 60);
      return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
    }

    playPauseBtn.addEventListener('click', togglePlayPause);
    audio.addEventListener('timeupdate', updateProgress);

function jegyarak() {
  let csaladi = document.getElementById("csaladi").value;
  let csar = 6500*csaladi;
  let gyerek = document.getElementById("gyerek").value;
  let gyar = 500*gyerek;
  let felnott = document.getElementById("felnott").value;
  let far = 3000*felnott;
  let diakny = document.getElementById("diakny").value;
  let dar = 1500*diakny;
  osszesen = csar + gyar + far + dar;
  localStorage.removeItem("price", osszesen);
  localStorage.setItem("price", osszesen);
  document.getElementById("ar").textContent = osszesen;
}