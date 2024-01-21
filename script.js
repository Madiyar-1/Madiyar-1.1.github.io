function uploadPhoto() {
    const fileInput = document.getElementById('fileInput');
    const gallery = document.getElementById('gallery');

    const file = fileInput.files[0];

    if (file) {
        const reader = new FileReader();

        reader.onload = function (e) {
            const img = document.createElement('img');
            img.src = e.target.result;
            img.className = 'gallery-img';
            img.dataset.topic = 'user-uploaded';
            gallery.appendChild(img);
        };

        reader.readAsDataURL(file);
    }
}

function filterByTopic() {
    const topicSelector = document.getElementById('topicSelector');
    const selectedTopic = topicSelector.value;
    const galleryImages = document.getElementsByClassName('gallery-img');

    for (const img of galleryImages) {
        if (selectedTopic === 'all' || img.dataset.topic === selectedTopic) {
            img.style.display = 'inline-block';
        } else {
            img.style.display = 'none';
        }
    }
}

