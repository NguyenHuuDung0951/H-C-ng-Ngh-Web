function toggleAnswer(element) {
        const answer = element.nextElementSibling;
        const icon = element.querySelector('.toggle-icon');
            
        if (answer.style.display === 'none' || answer.style.display === '') {
            answer.style.display = 'block';
            icon.textContent = '-';
        } else {
            answer.style.display = 'none';
            icon.textContent = '+';
        }
        }



// vong lap hinh 
document.addEventListener("DOMContentLoaded",function (){
    let track = document.querySelector(".image-track");
    let clone = track.innerHTML;
    track.innerHTML += clone;
})