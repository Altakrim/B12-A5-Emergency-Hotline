let heartCount = 0; 
  const heartCountEl = document.getElementById("heatCount");

  
  const likeButtons = document.querySelectorAll("[data-action='like']");

  likeButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      heartCount++; 
      heartCountEl.textContent = heartCount; 
    });
  });