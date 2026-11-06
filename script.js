// Crop Data Array
const cropData = [
    {
        name: "Wheat",
        season: "Rabi",
        soil: "Loamy / Alluvial",
        temp: "15°C - 25°C",
        water: "450 - 650 mm",
        image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=600&q=80",
        description: "Staple cereal grain cultivated worldwide, demanding well-drained loamy soil conditions."
    },
    {
        name: "Paddy Rice",
        season: "Kharif",
        soil: "Clayey Alluvial",
        temp: "20°C - 35°C",
        water: "1200 - 1600 mm",
        image: "data:image/jpeg;base64,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",
        description: "Primary dietary crop requiring standing water levels during initial growth stages."
    },
    {
        name: "Maize (Corn)",
        season: "Kharif",
        soil: "Well-drained Loam",
        temp: "18°C - 27°C",
        water: "500 - 800 mm",
        image: "https://images.unsplash.com/photo-1551754655-cd27e38d2076?auto=format&fit=crop&w=600&q=80",
        description: "Versatile grain crop utilized for food, livestock feed, and biofuel production."
    },
    {
        name: "Cotton",
        season: "Kharif",
        soil: "Black Soil (Regur)",
        temp: "21°C - 30°C",
        water: "600 - 1000 mm",
        image: "https://images.unsplash.com/photo-1594904351111-a072f80b1a71?auto=format&fit=crop&w=600&q=80",
        description: "Essential natural fiber crop thriving in moisture-retentive deep black soils."
    },
    {
        name: "Chickpea (Gram)",
        season: "Rabi",
        soil: "Sandy Loam",
        temp: "15°C - 25°C",
        water: "350 - 500 mm",
        image: "https://images.unsplash.com/photo-1515543904379-3d757afe72e4?auto=format&fit=crop&w=600&q=80",
        description: "Major pulse crop that enriches soil through atmospheric nitrogen fixation."
    },
    {
        name: "Watermelon",
        season: "Zaid",
        soil: "Sandy Loam",
        temp: "24°C - 35°C",
        water: "400 - 600 mm",
        image: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=600&q=80",
        description: "Fast-growing summer crop requiring warm temperatures and sandy fertile soils."
    }
];

// Farmer Tips Array
const farmerTips = [
    { text: "Implement drip irrigation to reduce water consumption by up to 60% while directly nourishing root systems.", author: "Water Conservation Council" },
    { text: "Rotate cereal crops with legumes to restore natural nitrogen balance in the soil without synthetic chemicals.", author: "Agronomy Research Board" },
    { text: "Utilize organic mulch layers to suppress weed growth, maintain soil moisture, and moderate root temperature.", author: "Sustainable Agriculture Network" },
    { text: "Conduct soil pH testing every 2 seasons to optimize fertilizer absorption and prevent soil acidification.", author: "Soil Health Institute" },
    { text: "Deploy yellow sticky traps across fields to monitor and capture early populations of crop pests naturally.", author: "Integrated Pest Management (IPM)" }
];

// DOM Content Loaded Handler
document.addEventListener("DOMContentLoaded", () => {
    initNavigation();
    renderCrops(cropData);
    initCropSearch();
    initFertilizerCalculator();
    initGalleryLightbox();
    initTipGenerator();
    initScrollAnimations();
});

// Mobile Navigation Toggle
function initNavigation() {
    const mobileToggle = document.getElementById("mobileToggle");
    const navLinks = document.getElementById("navLinks");

    if (mobileToggle) {
        mobileToggle.addEventListener("click", () => {
            navLinks.classList.toggle("active");
        });
    }
}

// Render Crop Cards
function renderCrops(crops) {
    const cropGrid = document.getElementById("cropGrid");
    if (!cropGrid) return;

    cropGrid.innerHTML = "";

    if (crops.length === 0) {
        cropGrid.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 40px; color: #6b7280;">No crops found matching your search criteria.</div>`;
        return;
    }

    crops.forEach((crop) => {
        const card = document.createElement("div");
        card.className = "crop-card scroll-reveal visible";
        card.innerHTML = `
            <img src="${crop.image}" alt="${crop.name}" class="crop-img">
            <div class="crop-body">
                <div class="crop-tags">
                    <span class="tag">${crop.season}</span>
                    <span class="tag">${crop.soil}</span>
                </div>
                <h3 class="crop-title">${crop.name}</h3>
                <p class="crop-desc">${crop.description}</p>
                <div class="crop-info-list">
                    <div><span>Temp Requirement:</span> <strong>${crop.temp}</strong></div>
                    <div><span>Water Need:</span> <strong>${crop.water}</strong></div>
                </div>
            </div>
        `;
        cropGrid.appendChild(card);
    });
}

// Crop Search & Season Filtering
function initCropSearch() {
    const searchInput = document.getElementById("cropSearchInput");
    const seasonFilter = document.getElementById("seasonFilter");

    function filterData() {
        const query = searchInput.value.toLowerCase().trim();
        const season = seasonFilter.value;

        const filtered = cropData.filter((crop) => {
            const matchesQuery = crop.name.toLowerCase().includes(query) || crop.soil.toLowerCase().includes(query);
            const matchesSeason = season === "all" || crop.season.toLowerCase() === season.toLowerCase();
            return matchesQuery && matchesSeason;
        });

        renderCrops(filtered);
    }

    if (searchInput) searchInput.addEventListener("input", filterData);
    if (seasonFilter) seasonFilter.addEventListener("change", filterData);
}

// Fertilizer Calculator Logic
function initFertilizerCalculator() {
    const form = document.getElementById("fertilizerForm");
    if (!form) return;

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const crop = document.getElementById("calcCrop").value;
        const area = parseFloat(document.getElementById("landArea").value) || 1;
        const soil = document.getElementById("soilType").value;

        // Base values in kg/acre for Urea, DAP, MOP
        let baseRates = { urea: 50, dap: 30, mop: 25 };

        if (crop === "wheat") baseRates = { urea: 65, dap: 35, mop: 20 };
        if (crop === "rice") baseRates = { urea: 60, dap: 40, mop: 30 };
        if (crop === "corn") baseRates = { urea: 70, dap: 45, mop: 25 };
        if (crop === "cotton") baseRates = { urea: 55, dap: 30, mop: 45 };

        let multiplier = 1.0;
        if (soil === "deficient") multiplier = 1.2;
        if (soil === "rich") multiplier = 0.85;

        const ureaTotal = Math.round(baseRates.urea * area * multiplier);
        const dapTotal = Math.round(baseRates.dap * area * multiplier);
        const mopTotal = Math.round(baseRates.mop * area * multiplier);

        document.getElementById("ureaVal").innerText = `${ureaTotal} kg`;
        document.getElementById("dapVal").innerText = `${dapTotal} kg`;
        document.getElementById("mopVal").innerText = `${mopTotal} kg`;
    });
}

// Gallery Lightbox Modal
function initGalleryLightbox() {
    const galleryItems = document.querySelectorAll(".gallery-item");
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightboxImg");
    const lightboxCaption = document.getElementById("lightboxCaption");
    const lightboxClose = document.getElementById("lightboxClose");

    galleryItems.forEach((item) => {
        item.addEventListener("click", () => {
            const imgSrc = item.getAttribute("data-img");
            const caption = item.getAttribute("data-caption");

            lightboxImg.src = imgSrc;
            lightboxCaption.innerText = caption;
            lightbox.classList.add("active");
        });
    });

    if (lightboxClose) {
        lightboxClose.addEventListener("click", () => {
            lightbox.classList.remove("active");
        });
    }

    if (lightbox) {
        lightbox.addEventListener("click", (e) => {
            if (e.target === lightbox) {
                lightbox.classList.remove("active");
            }
        });
    }
}

// Random Farmer Tips Generator
function initTipGenerator() {
    const nextBtn = document.getElementById("nextTipBtn");
    const tipText = document.getElementById("tipText");
    const tipAuthor = document.getElementById("tipAuthor");

    if (!nextBtn) return;

    nextBtn.addEventListener("click", () => {
        const randomIndex = Math.floor(Math.random() * farmerTips.length);
        const tip = farmerTips[randomIndex];

        tipText.style.opacity = 0;
        tipAuthor.style.opacity = 0;

        setTimeout(() => {
            tipText.innerText = tip.text;
            tipAuthor.innerText = `- ${tip.author}`;
            tipText.style.opacity = 1;
            tipAuthor.style.opacity = 1;
        }, 200);
    });
}

// Scroll Animations (IntersectionObserver)
function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.15 });

    document.querySelectorAll(".scroll-reveal").forEach((el) => {
        observer.observe(el);
    });
}
