function litres(time) {
    let water = time*0.5;
    let waterOkrug = Math.floor(water);
    return waterOkrug;
  }
  
  litres(10);