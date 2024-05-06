// // tools/anim.js


// $imgWidht: 2854/2.2;
// $imgHeight: 733/2.2;
// #menuImgDiv {
//     width: $imgWidht/2+px;
//     background-size: cover;
//     // border: 3px solid white;
//     justify-content: center;
// }
// #menuImg {
//     // border: 3px solid red;
//     background-image: url("/assets/img/main/game_tit.png");
//     animation: menuAnim 1.5s steps(2) infinite;  
//     width: $imgWidht+px;
//     height: $imgHeight+px;
//     background-size: cover;
// }

//   @keyframes menuAnim {
//     to {
//       background-position-x: -$imgWidht+px;
//     }
//   }

// const animateValue = (obj, start, end, duration) => { // score anim
    //   let startTimestamp = null;
    //   const step = (timestamp) => {
    //     if (!startTimestamp) startTimestamp = timestamp;
    //     const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    //     // if (Math.floor(progress * (end - start) + start) > 0) {
    //     // obj.innerHTML = Math.floor(progress * (end - start) + start);
    //     // } else {
    //     //   obj.innerHTML = 0;
    //     // }
    //     if (progress < 1) { window.requestAnimationFrame(step); }
    //   };
    //   window.requestAnimationFrame(step);
    // };

// export function anim(name, imgSrc, frame, width, speed) {
//     let sprite = document.getElementById(name);
//     let totalFrames = frame;
//     let currentFrame = 0;
//     let frameWidth = width;
//     let fps = speed;
//     let image = new Image();
//     image.src = imgSrc;
//     image.onload = function() {
//         animate();
//     };

//     function animate() {
        
//         let xPos = -currentFrame * frameWidth;
//         // sprite.style.backgroundImage = "url(" + image.src + ")";
//         sprite.style.backgroundPosition = xPos + "px 0";
    
//         // renew frame
//         currentFrame++;
//         if (currentFrame >= totalFrames) {
//             currentFrame = 0;
//         }
    
//         setTimeout(function() {
//             requestAnimationFrame(animate);
//         }, 1000 / fps);
//     }
// }