(() => {
  const initializeNewsSlider = (slider) => {
    const track = slider.querySelector("[data-news-slider-track]");
    const slides = Array.from(slider.querySelectorAll("[data-news-slide]"));
    const controls = slider.querySelector("[data-news-slider-controls]");

    if (!track || slides.length < 2 || !controls) return;

    const previousButton = controls.querySelector("[data-news-slider-previous]");
    const nextButton = controls.querySelector("[data-news-slider-next]");
    const status = controls.querySelector("[data-news-slider-status]");
    let currentPage = 0;
    let touchStartX = null;

    const showPage = (page) => {
      currentPage = Math.max(0, Math.min(page, slides.length - 1));
      track.style.transform = `translateX(-${currentPage * 100}%)`;

      slides.forEach((slide, index) => {
        const isCurrent = index === currentPage;
        slide.setAttribute("aria-hidden", String(!isCurrent));
        slide.inert = !isCurrent;
      });

      previousButton.disabled = currentPage === 0;
      nextButton.disabled = currentPage === slides.length - 1;
      status.textContent = `${currentPage + 1} / ${slides.length}`;
    };

    previousButton.addEventListener("click", () => showPage(currentPage - 1));
    nextButton.addEventListener("click", () => showPage(currentPage + 1));

    slider.addEventListener("keydown", (event) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        showPage(currentPage - 1);
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        showPage(currentPage + 1);
      }
    });

    slider.addEventListener("touchstart", (event) => {
      touchStartX = event.changedTouches[0].clientX;
    }, { passive: true });

    slider.addEventListener("touchend", (event) => {
      if (touchStartX === null) return;

      const distance = event.changedTouches[0].clientX - touchStartX;
      touchStartX = null;

      if (Math.abs(distance) < 50) return;
      showPage(currentPage + (distance < 0 ? 1 : -1));
    }, { passive: true });

    slider.classList.add("is-enhanced");
    controls.hidden = false;
    showPage(0);
  };

  const initializeAllNewsSliders = () => {
    document.querySelectorAll("[data-news-slider]").forEach(initializeNewsSlider);
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initializeAllNewsSliders);
  } else {
    initializeAllNewsSliders();
  }
})();
