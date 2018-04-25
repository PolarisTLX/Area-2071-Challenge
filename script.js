// ONLY RUN JAVASCRIPT/ANIMATIONS ON DESKTOP:
// if window.innerWidth > 736 {

let expImage = document.getElementsByClassName('explore-img-small')[0];
let expText = document.getElementsByClassName('explore-text')[0];

let nebula = document.getElementsByClassName('girl-nebula-img')[0];
let greyNebula = document.getElementsByClassName('grey-nebula')[0];
greyNebula.style.width = nebula.width + "px";
greyNebula.style.height = nebula.height + "px";
let nebText = document.getElementsByClassName('girl-nebula')[0];

let lounge = document.getElementsByClassName('lounge-img')[0];
let greyLounge = document.getElementsByClassName('grey-lounge')[0];
greyLounge.style.width = lounge.width + "px";
greyLounge.style.height = lounge.height + "px";
let loungeText = document.getElementsByClassName('lounge-verbage')[0];

let bking = document.getElementsByClassName('bking-img')[0];
let greyBking = document.getElementsByClassName('grey-bking')[0];
greyBking.style.width = bking.width + "px";
greyBking.style.height = bking.height + "px";

let laptop = document.getElementsByClassName('laptop-img')[0];
let greyLaptop = document.getElementsByClassName('grey-laptop')[0];
greyLaptop.style.width = laptop.width + "px";
greyLaptop.style.height = laptop.height + "px";
// let laptopText = document.getElementsByClassName('laptop')[0];

let boardroom = document.getElementsByClassName('boardroom-img')[0];
let greyBoardroom = document.getElementsByClassName('grey-boardroom')[0];
greyBoardroom.style.width = boardroom.width + "px";
greyBoardroom.style.height = boardroom.height + "px";

let pedestrians = document.getElementsByClassName('pedestrians-img')[0];
let greyPedestrians = document.getElementsByClassName('grey-pedestrians')[0];
greyPedestrians.style.width = pedestrians.width + "px";
greyPedestrians.style.height = pedestrians.height + "px";

let chevron = document.getElementsByClassName('challenge-chevron')[0];


// window.addEventListener('resize', function(event){
//   // highlight.style.display = "none";
//   greyNebula.style.width = nebula.width + "px";
//   greyNebula.style.height = nebula.height + "px";
//   greyLounge.style.width = lounge.width + "px";
//   greyLounge.style.height = lounge.height + "px";
//   greyBking.style.width = bking.width + "px";
//   greyBking.style.height = bking.height + "px";
//   greyLaptop.style.width = laptop.width + "px";
//   greyLaptop.style.height = laptop.height + "px";
//   greyBoardroom.style.width = boardroom.width + "px";
//   greyBoardroom.style.height = boardroom.height + "px";
//   greyPedestrians.style.width = pedestrians.width + "px";
//   greyPedestrians.style.height = pedestrians.height + "px";
// });

window.addEventListener('scroll', event => {
  if (window.pageYOffset > 250 ) {
    expImage.className = "explore-img-small above-explore-small";
    expText.className = "explore-text above-explore-small";
  } else {
    expImage.className = "explore-img-small";
    expText.className = "explore-text";
  }


  if (window.pageYOffset > 550) {
    nebula.className = "girl-nebula-img move-nebula";
    greyNebula.className = "grey-nebula move-grey-nebula";
  }
  // Moving the the text up and down:
  if (window.pageYOffset < 550) {
    nebText.className = "girl-nebula below-neb-text";
  } else if (window.pageYOffset > 1200 ) {
    nebText.className = "girl-nebula above-neb-text";
  } else {
    nebText.className = "girl-nebula";
  }



  if (window.pageYOffset > 1650) {
    lounge.className = "lounge-img move-lounge";
    greyLounge.className = "grey-lounge move-grey-lounge";
  }
  // Moving the the text up and down:
  if (window.pageYOffset < 1750) {
    loungeText.className = "lounge-verbage below-lounge-verbage";
  } else if (window.pageYOffset > 2250) {
    loungeText.className = "lounge-verbage above-lounge-verbage";
  } else {
    loungeText.className = "lounge-verbage";
  }


  if (window.pageYOffset > 2550) {
    bking.className = "bking-img move-bking";
    greyBking.className = "grey-bking move-grey-bking";
    // setTimeout(function() {
    //   greyBking.className = "grey-bking move-grey-bking hidden-grey";
    // }, 1500);
  }

  if (window.pageYOffset > 2850) {
    laptop.className = "laptop-img move-laptop";
    greyLaptop.className = "grey-laptop move-grey-laptop";
  }

  if (window.pageYOffset > 3150) {
    boardroom.className = "boardroom-img move-boardroom";
    greyBoardroom.className = "grey-boardroom move-grey-boardroom";
  }

  if (window.pageYOffset > 3350) {
    pedestrians.className = "pedestrians-img move-pedestrians";
    greyPedestrians.className = "grey-pedestrians move-grey-pedestrians";
  }

  if (window.pageYOffset > 4250) {
    chevron.className = "challenge-chevron move-chevron";
  }
});

// END OF RUNNING ONLY ON DESKTOP
// }
