/**
 * File: js/app.js
 * Contains page-specific logic for the WanderWave Travel website.
 */
document.addEventListener('DOMContentLoaded', function () {
    // --- LOGIC FOR PACKAGES PAGE ---
    const packagesBody = document.getElementById('packages-body');
    if (packagesBody) {

        // Helper function to check if the CURRENT date is in peak season
        function isCurrentDateInPeakSeason() {
            const today = new Date();
            const month = today.getMonth(); // 0 = Jan, 1 = Feb, ..., 11 = Dec

            // Let's define peak season as May, June, and July (months 4, 5, 6)
            if (month == 0 || month == 2 || month == 3 || month == 4 || month == 5 || month == 9 || month == 11) {
                return true; // It's peak season
            }
            return false; // It's off-peak season
        }

        const isPeak = isCurrentDateInPeakSeason();
        const tableRows = packagesBody.querySelectorAll('tr');

        // Loop through each row of your HTML table
        tableRows.forEach(row => {
            // Find the 5th cell (index 4), which is the empty "Peak-season" column
            const peakSeasonCell = row.children[4];

            if (peakSeasonCell) {
                if (isPeak) {
                    peakSeasonCell.textContent = 'Yes';
                    // peakSeasonCell.className = 'status-yes'; // REMOVED
                } else {
                    peakSeasonCell.textContent = 'No';
                    // peakSeasonCell.className = 'status-no'; // REMOVED
                }
                // Add a class for consistent alignment if needed, or rely on default cell alignment
                peakSeasonCell.classList.add('peak-season-status');
            }
        });
    }

    
    // --- LOGIC FOR GALLERY PAGE ---
    const imageModal = document.getElementById('imageModal');
    if (imageModal) {
        const modalImg = document.getElementById('modalImage');
        const captionText = document.getElementById('modalCaption');
        const closeModal = () => imageModal.style.display = "none";

        document.querySelectorAll('.gallery-grid img').forEach(img => {
            img.addEventListener('click', function () {
                imageModal.style.display = 'block';
                modalImg.src = this.dataset.large;
                modalImg.alt = this.alt;
                captionText.innerHTML = this.parentElement.querySelector('figcaption').innerHTML;
            });
        });
        document.querySelector('.modal-close').addEventListener('click', closeModal);
        imageModal.addEventListener('click', (e) => { if (e.target === imageModal) closeModal(); });
    }
});