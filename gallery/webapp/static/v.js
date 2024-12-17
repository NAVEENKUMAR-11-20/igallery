// JavaScript for Interactive Photo Gallery

// Get modal elements
const modal = document.getElementById("modal");
const modalImage = document.getElementById("modal-image");
const closeModal = document.querySelector(".close");

// Function to show modal with clicked image
function showImage(event) {
    if (event.target.classList.contains("gallery-image")) {
        modal.style.display = "block";
        modalImage.src = event.target.src;
    }
}

// Function to close modal
function hideModal() {
    modal.style.display = "none";
}

// Event listeners
document.querySelector(".gallery").addEventListener("click", showImage);
closeModal.addEventListener("click", hideModal);

// Close modal when clicking outside the image
window.addEventListener("click", (event) => {
    if (event.target === modal) {
        hideModal();
    }
});
