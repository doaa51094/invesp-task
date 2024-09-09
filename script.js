// Get the modal
const modal = document.getElementById("quickViewModal");
const mainImage = document.getElementById("mainImage");
const thumbnailsContainer = document.getElementById("thumbnailsContainer");

// Get the <span> element that closes the modal
const closeButton = document.querySelector(".close");

// Event listener for all "Quick View" buttons
document.querySelectorAll(".view").forEach((button) => {
    button.addEventListener("click", function() {
        const productCard = this.closest(".product-card");
        const mainImageSrc = productCard.getAttribute("data-main-image");
        const thumbnails = productCard.getAttribute("data-thumbnails").split(',');

        // Update main image
        mainImage.src = mainImageSrc;

        // Clear previous thumbnails
        thumbnailsContainer.innerHTML = '';

        // Create new thumbnails
        thumbnails.forEach((thumbnailSrc) => {
            const thumbnail = document.createElement("img");
            thumbnail.classList.add("thumbnail");
            thumbnail.src = thumbnailSrc;
            thumbnail.alt = "Thumbnail";
            thumbnail.addEventListener("mouseover", () => {
                mainImage.src = thumbnailSrc;
            });
            thumbnailsContainer.appendChild(thumbnail);
        });

        // Open the modal
        modal.style.display = "flex";
    });
});

// Close the modal when clicking on <span> (x)
closeButton.addEventListener("click", function() {
    modal.style.display = "none";
});

// Close the modal when clicking outside the modal content
window.addEventListener("click", function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});

// Close the modal when pressing the Escape key
window.addEventListener("keydown", function(event) {
    if (event.key === "Escape" && modal.style.display === "flex") {
        modal.style.display = "none";
    }
});
