document.getElementById("signup-form").addEventListener("submit", async (e) => {
    e.preventDefault();
  
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const responseBox = document.getElementById("response-message");
  
    responseBox.innerHTML = "Processing...";
  
    try {
      const res = await fetch("http://localhost:5000/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
  
      const data = await res.json();
      if (res.ok) {
        responseBox.innerHTML = `<div class="success-message">${data.message}</div>`;
      } else {
        responseBox.innerHTML = `<div class="error-message">${data.error}</div>`;
      }
    } catch (err) {
      responseBox.innerHTML = `<div class="error-message">⚠️ ${err.message}</div>`;
    }
  });
  