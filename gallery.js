
const gallery = document.querySelector('.gallery');
const images = ['worship_team.jpg', 'sunday_service.jpg', 'youth_event.jpg']; // Replace with real image names
images.forEach(img => {
    const image = document.createElement('img');
    image.src = 'images/' + img;
    gallery.appendChild(image);
});
