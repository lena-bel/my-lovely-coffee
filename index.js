const menuBtn = document.querySelector('.menu-menu');
const navLinks = document.querySelector('.nav-links ul');

menuBtn.addEventListener('click', (e) => {
    e.preventDefault(); // prevent default link behavior
    navLinks.classList.toggle('active');
});

document.querySelectorAll('.tab-link').forEach(btn=>{
    btn.addEventListener('click',()=>{
        document.querySelectorAll('.tab-link').forEach(b => b.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(tc => tc.classList.remove('active'));

        btn.classList.add('active');
        document.getElementById(btn.dataset.tab).classList.add('active');
    })
})

// map
const lat = 45.768631350879005;
const lng = 4.824033854397451;

const map = L.map('map').setView([lat, lng], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap contributors'
}).addTo(map);

L.marker([lat, lng])
  .addTo(map)
  .bindPopup('📍 Visit Us Here!')
  .openPopup();
