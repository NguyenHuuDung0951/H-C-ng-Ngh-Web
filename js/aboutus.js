const slider = document.getElementById('slider');
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        const images = slider.children;
        const scrollStep = images[0].offsetWidth + 10;

        function updateButtonState() {
            prevBtn.classList.toggle('disabled', slider.scrollLeft <= 0);
            nextBtn.classList.toggle('disabled', slider.scrollLeft >= slider.scrollWidth - slider.clientWidth);
        }

        function scrollSlider(direction) {
            if (direction === 1 && slider.scrollLeft >= slider.scrollWidth - slider.clientWidth) {
                slider.scrollTo({ left: 0, behavior: 'smooth' });
            } else if (direction === -1 && slider.scrollLeft <= 0) {
                slider.scrollTo({ left: slider.scrollWidth, behavior: 'smooth' });
            } else {
                slider.scrollBy({ left: scrollStep * direction, behavior: 'smooth' });
            }
            setTimeout(updateButtonState, 300); 
        }

        slider.addEventListener('scroll', updateButtonState);
        window.onload = updateButtonState;