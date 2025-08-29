let heartCount = 0;
let coinCount = 100;
let copyCount = 0;

// Navbar counters
const heartCounter = document.getElementById("heart-count");
const coinCounter = document.getElementById("coin-count");
const copyCounter = document.getElementById("copy-count");

// Call history
const callList = document.getElementById("call-list");
const clearBtn = document.querySelector(".clear");

// ❤️ Heart click
document.querySelectorAll(".heart").forEach(btn => {
    btn.addEventListener("click", () => {
        if (btn.textContent === "🤍") {
            btn.textContent = "❤️";
            heartCount++;
        } else {
            btn.textContent = "🤍";
            heartCount--;
        }
        heartCounter.textContent = `${heartCount} ❤️`;
    });
});



// 📋 Copy button
document.querySelectorAll(".copy").forEach(btn => {
    btn.addEventListener("click", (e) => {
        const card = e.target.closest(".card");
        const number = card.dataset.number;

        navigator.clipboard.writeText(number).then(() => {
            copyCount++;
            copyCounter.textContent = `${copyCount} Copy`;
            alert(`Copied: ${number}`);
        });
    });
});

// 📞 Call button
document.querySelectorAll(".call").forEach(btn => {
    btn.addEventListener("click", (e) => {
        const card = e.target.closest(".card");
        const name = card.dataset.name;
        const number = card.dataset.number;

        if (coinCount < 20) {
            alert("Not enough coins! You need at least 20.");
            return;
        }

        coinCount -= 20;
        coinCounter.textContent = `${coinCount} ⭐`;

        alert(`Calling ${name} at ${number}...`);

        // Add to history with timestamp
        const now = new Date();
        const time = now.toLocaleTimeString();

        const li = document.createElement("li");
        li.innerHTML = `
          <div class="history-item">
            <div class="history-left">
              <div class="service-name">${name}</div>
              <div class="service-number">${number}</div>
            </div>
            <div class="history-time">${time}</div>
          </div>
        `;
        
        callList.appendChild(li);
    });
});

// 🗑️ Clear history
clearBtn.addEventListener("click", () => {
    callList.innerHTML = "";
});
