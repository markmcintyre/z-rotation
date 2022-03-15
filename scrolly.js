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

    let figures = document.querySelectorAll("figure");

    window.addEventListener("scroll", () => {
        figures.forEach(figure => {
            let sp = scrollPercentage(figure);
            if(sp > 0 && sp < 1) {
                figure.style.transform = `perspective(1000px) rotateZ(-2deg) rotateY(${(sp * 30) - 10}deg) rotateX(${sp * 10}deg)`;
            }
        })
    });

})();
