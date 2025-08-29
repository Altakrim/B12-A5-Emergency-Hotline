let heartCount = 0; 
  const heartCountEl = document.getElementById("heatCount");

  
  const likeButtons = document.querySelectorAll("[data-action='like']");

  likeButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      heartCount++; 
      heartCountEl.textContent = heartCount; 
    });
  });

  let coins = 100;
  const coinEl = document.getElementById("coinCount");
  const callHistoryEl = document.getElementById("callHistory");

  document.addEventListener("click", function (e) {
    const btn = e.target;
    if (btn.dataset.action === "call") {
      const serviceName = btn.dataset.name;
      const number = btn.dataset.number;

      if (coins < 20) {
        alert(" Not enough coins to make a call!");
        return; 
      }

      alert(`Calling ${serviceName} (${number})`);
      coins -= 20;
      coinEl.textContent = coins;

      const li = document.createElement("li");
      li.textContent = `${serviceName} - ${number}`;
      callHistoryEl.appendChild(li);

      window.location.href = `tel:${number}`;
    }
     if (btn.dataset.action === "copy") {
      const number = btn.dataset.number;
      navigator.clipboard.writeText(number).then(() => {
        alert("Copied: " + number);
      });
    }
  });