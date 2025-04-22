document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Thanks for reaching out! I'll get back to you soon.");
    this.reset();
  });
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
        observer.unobserve(entry.target); 
      }
    });
  }, {
    threshold: 0.2
  });
  
  document.querySelectorAll("section").forEach(section => {
    observer.observe(section);
  });
window.addEventListener("load", () => {
    const loader = document.getElementById("loader-wrapper");
    loader.style.opacity = "0";
    loader.style.pointerEvents = "none";
    setTimeout(() => loader.remove(), 1000);
  });
  