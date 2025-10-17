function sendMail(){
	let params = {
		name : document.getElementById("name").value,
		email : document.getElementById("email").value,
		message : document.getElementById("message").value,
	}

	emailjs.send("service_ah9j2cw","template_nq6eokr",params).then(alert("Email Sent!!"))
}

// === NAVBAR ACTIVE ON SCROLL (versi fix untuk #home) ===
document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

  function changeActiveLink() {
    let current = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 120; // jarak offset disesuaikan dengan tinggi navbar
      const sectionHeight = section.clientHeight;

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        current = section.getAttribute("id");
      }
    });

    // fallback agar #home tetap aktif di posisi paling atas
    if (window.scrollY < 100) {
      current = "home";
    }

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  }

  window.addEventListener("scroll", changeActiveLink);
  changeActiveLink(); // jalankan sekali saat halaman pertama kali dimuat
});

// Smooth Scroll
document.querySelectorAll('.navbar-nav a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({
      behavior: 'smooth'
    });
  });
});
