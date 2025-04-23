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
  const translations = {
    ua: {
      aboutMe: "Про себе",
      projects: "Проєкти",
      skills: "Навички",
      contacts: "Контакти",
      greeting: "Привіт! Я розробник інтерфейсів.",
      // ... додай інші переклади
    },
    en: {
      aboutMe: "About Me",
      projects: "Projects",
      skills: "Skills",
      contacts: "Contacts",
      greeting: "Hello! I'm a frontend developer.",
      // ... add other translations
    }
  };
  function setLanguage(lang) {
    localStorage.setItem('lang', lang);
    const t = translations[lang];
  
    document.getElementById("nav-about").textContent = t.aboutMe;
    document.getElementById("nav-projects").textContent = t.projects;
    document.getElementById("nav-skills").textContent = t.skills;
    document.getElementById("nav-contacts").textContent = t.contacts;
    document.getElementById("greeting").textContent = t.greeting;
    // ... оновлюй решту елементів за потреби
  }
  document.addEventListener("DOMContentLoaded", () => {
    const savedLang = localStorage.getItem('lang') || 'ua';
    setLanguage(savedLang);
  });
  