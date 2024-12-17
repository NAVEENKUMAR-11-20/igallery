# Ex.08 Design of Interactive Image Gallery
## Date: 17.12.2024

## AIM:
To design a web application for an inteactive image gallery with minimum five images.

## DESIGN STEPS:

### Step 1:
Clone the github repository and create Django admin interface.

### Step 2:
Change settings.py file to allow request from all hosts.

### Step 3:
Use CSS for positioning and styling.

### Step 4:
Write JavaScript program for implementing interactivity.

### Step 5:
Validate the HTML and CSS code.

### Step 6:
Publish the website in the given URL.

## PROGRAM :
'''
html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Interactive Photo Gallery</title>
    <link rel="stylesheet" href="gallery.css">
</head>
<body>
    <div class="gallery-container">
        <h1>Interactive Photo Gallery</h1>
        <div class="gallery">
            <!-- Images -->
            <img src="download.jpeg" alt="Image 1" class="gallery-image">
            <img src="lake.jpg" alt="Image 2" class="gallery-image">
            <img src="OIGP.fKE.jpeg" alt="Image 3" class="gallery-image">
            <img src="OIP (1).jpeg" alt="Image 4" class="gallery-image">
            <img src="OIP.jpeg" alt="Image 5" class="gallery-image">
        </div>
    </div>

    <!-- Modal for Enlarged Image -->
    <div id="modal" class="modal">
        <span class="close">&times;</span>
        <img class="modal-content" id="modal-image">
    </div>

    <script src="v.js"></script>
</body>
</html>


css

/* General Styles */
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #a2a1a1;
    text-align: center;
}

/* Gallery Container */
.gallery-container h1 {
    margin: 20px;
    color: #282727;
}

/* Image Gallery Layout */
.gallery {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 15px;
    padding: 10px;
}

.gallery-image {
    width: 300px;
    height: 200px;
    object-fit: cover;
    border: 2px solid #ddd;
    cursor: pointer;
    transition: transform 0.3s, box-shadow 0.3s;
}

.gallery-image:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
}

/* Modal Styles */
.modal {
    display: none; /* Hidden by default */
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0, 0, 0, 0.8);
}

.modal-content {
    display: block;
    margin: 50px auto;
    max-width: 80%;
    max-height: 80%;
    border: 2px solid #fff;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
}

.close {
    position: absolute;
    top: 20px;
    right: 35px;
    color: #fff;
    font-size: 40px;
    font-weight: bold;
    cursor: pointer;
}

.close:hover {
    color: #bbb;
}


js


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

'''
## OUTPUT:

 ![alt text](<gallery/Screenshot 2024-12-17 202027.png>)
 ![alt text](<gallery/Screenshot 2024-12-17 202034.png>)
 
## RESULT:
The program for designing an interactive image gallery using HTML, CSS and JavaScript is executed successfully.
