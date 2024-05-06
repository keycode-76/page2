// 14_music/script
import music1File from "/assets/music/menu.m4a";
const music_1 = new Audio(music1File);
music_1.loop = true;
export { music_1 }

// btnSD_1.volume = 0.2
// audioElement.addEventListener('ended', function() {
//     this.currentTime = 0;
//     this.play();
// }, false);