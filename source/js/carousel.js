function scrollLeftAnimate(elem, unit, callback) {
  const time = 300; // animation duration in MS, the smaller the faster.
  const from = elem.scrollLeft; // to continue the frame posistion
  const aframe =
      10; //fraction of frame frequency , set 1 for smoothest  ~ set 10++ for lower FPS (reduce CPU usage)

  let start = new Date().getTime(),
      timer = setInterval(function () {
          var step = Math.min(1, (new Date().getTime() - start) / time);
          elem.scrollLeft = ((step * unit) + from);
          if (step === 1) {
              clearInterval(timer);
              callback();
          }
      }, aframe);
}

function initDealCarrousel(dealCarrouselID) {
  const target = document.querySelector("#" + dealCarrouselID + " .carousel__list");
  const leftBtn = document.querySelector("#" + dealCarrouselID + " .carousel__scroll_left");
  const rightBtn = document.querySelector("#" + dealCarrouselID + " .carousel__scroll_right");
  let cardOutterWidth = document.querySelector("#" + dealCarrouselID + " .carousel__item").offsetWidth;
  let maxCarrouselScroll = (document.querySelectorAll("#" + dealCarrouselID + " .carousel__item").length *
              cardOutterWidth) - document.querySelector("#" + dealCarrouselID + " .carousel__list")
          .clientWidth;

  if (maxCarrouselScroll) {
    rightBtn.removeAttribute('disabled');
  } else {
    rightBtn.setAttribute('disabled', '');
  }
  if (target.scrollLeft > 0) {
    leftBtn.removeAttribute('disabled');
  } else {
    leftBtn.setAttribute('disabled', '');
  }

  function updateUpaCarrouselInfo() {
      cardOutterWidth = document.querySelector("#" + dealCarrouselID + " .carousel__item").offsetWidth; //you can define how far the scroll
      maxCarrouselScroll = (document.querySelectorAll("#" + dealCarrouselID + " .carousel__item").length *
              cardOutterWidth) - document.querySelector("#" + dealCarrouselID + " .carousel__list")
          .clientWidth;
  }
  leftBtn.addEventListener("click",
      function () {
          updateUpaCarrouselInfo(); //in case window resized, will get new info
          if (target.scrollLeft > 0) {
            leftBtn.setAttribute('disabled', '');
            rightBtn.removeAttribute('disabled', '');
            scrollLeftAnimate(target, -cardOutterWidth, () => {
              if (target.scrollLeft > 0) {
                leftBtn.removeAttribute('disabled');
              }
            });
          }
      }
  );

  rightBtn.addEventListener("click",
      function () {
          updateUpaCarrouselInfo(); //in case window resized, will get new info 
          if (target.scrollLeft < maxCarrouselScroll) {
              rightBtn.setAttribute('disabled', '');
              leftBtn.removeAttribute('disabled');
              scrollLeftAnimate(target, cardOutterWidth, () => {
              if (target.scrollLeft < maxCarrouselScroll) {
                rightBtn.removeAttribute('disabled');
              }
            });
          }
      }
  );
}
initDealCarrousel('gallery');
initDealCarrousel('tours');