// Initialize map with animation
document.addEventListener('DOMContentLoaded', () => {
    // Make sure map container exists
    const mapContainer = document.getElementById('map');
    if (!mapContainer) return;

    // Sastamala, Finland coordinates
    const sastamalaCenterCoords = [61.49715825988427, 23.804557384608618];  // Updated coordinates for Sastamala
    
    // Create map instance centered on Sastamala
    const map = L.map('map', {
        center: sastamalaCenterCoords,
        zoom: 15,  // Closer zoom to show street level
        fadeAnimation: true,
        zoomAnimation: true
    });

    // Add the tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors',
        maxZoom: 19
    }).addTo(map);

    // Add marker for the specific address
    const marker = L.marker(sastamalaCenterCoords)
        .addTo(map)
        .bindPopup(`
            <strong>Delivery Location:</strong><br>
            Vanha Domus,<br>
            Vainamoisenkatu 11 6<br>
            e 178, 33540 Tampere<br>
            Finland
        `)
        .openPopup();

    // Add circle to highlight the area
    L.circle(sastamalaCenterCoords, {
        color: '#2563eb',
        fillColor: '#3b82f6',
        fillOpacity: 0.1,
        radius: 200
    }).addTo(map);

    // Force map to refresh after rendering
    setTimeout(() => {
        map.invalidateSize();
    }, 100);
});

function submitForm() {
    const btn = document.querySelector('button');
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processing...';
    btn.disabled = true;

    setTimeout(() => {
        if (confirm('Are you sure you want to confirm sea freight shipping?')) {
            btn.innerHTML = '<i class="fas fa-check"></i> Shipping Confirmed!';
            btn.classList.remove('bg-blue-600');
            btn.classList.add('bg-green-600');
        } else {
            btn.innerHTML = '<i class="fas fa-paper-plane mr-2"></i> Confirm Shipping';
            btn.disabled = false;
        }
    }, 1500);
} 
