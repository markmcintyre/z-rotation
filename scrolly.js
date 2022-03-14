function scrollPercentage(item) {
  
    let br = item.getBoundingClientRect();
    let vph = window.visualViewport.height;
    
    if (br.top < -1 * br.height) {
      return 1;
    } else if (br.top > vph) {
      return 0;
    } else {
      return 1 - ((br.top + br.height) / (vph + br.height));
    }
    
  }
  
(() => {

    let card = document.querySelector(".card");

    window.addEventListener("scroll", () => {
        let sp = scrollPercentage(card);
        card.style.transform = 'rotate3d(0, 0, 1, 2deg) rotate3d(0, 1, 0, ' + sp * -30 + 'deg)';
    });

})();
