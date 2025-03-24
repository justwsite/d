document.addEventListener('click', (event) => {
    const text = event.target.getAttribute('data-title');
    let message = document.getElementById("appear");
    if(!message) {message = document.createElement('div');
        message.id = "appear";
        document.body.appendChild(message);
    }
    message.style.display = text ? "block" : "none";
    if(text) {message.style.left = event.pageX + 'px';
        message.style.top = event.pageY + 10 + 'px';
         message.innerHTML = text;
    }
});

document.querySelectorAll("details").forEach(details => {
  details.addEventListener("toggle", function() {
    if (this.open) {
      this.querySelectorAll("img[data-src]").forEach(img => {
        img.src = img.dataset.src;
        img.removeAttribute("data-src"); // Убираем атрибут, чтобы повторно не грузить
      });
    }
  });
});