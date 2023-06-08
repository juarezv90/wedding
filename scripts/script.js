function countDown() {
    const cntDown = document.getElementById("weddingCntDown");
  
    const proposedDate = new Date("2024.04.19");
    const today = new Date();
  
    const diff = Math.trunc(Math.abs(proposedDate - today) / 1000 / 60 / 60 / 24);
  
    cntDown.innerHTML = `${diff} days left!`;
  }
  
  countDown();