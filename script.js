// Highlight stars on hover
const stars = document.getElementById("stars");

stars.addEventListener("mouseenter", () => {
  stars.style.color = "orange";
});

stars.addEventListener("mouseleave", () => {
  stars.style.color = "gold";
});

// Toggle cast member bio on click
const castButtons = document.querySelectorAll(".cast-btn");

castButtons.forEach(button => {
  button.addEventListener("click", () => {
    const bio = button.nextElementSibling;

    // Close other bios
    document.querySelectorAll(".cast-bio").forEach(b => {
      if (b !== bio) {
        b.classList.remove("open");
      }
    });

    // Toggle clicked bio
    bio.classList.toggle("open");
  });
});
