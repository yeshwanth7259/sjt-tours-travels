/**
 * SJT TOURS & TRAVELS PVT. LTD.
 * Safe Journeys | Happy Destinations
 * Core Interactive Application Engine
 * 24/7 Operations Desk: +91 99009 75920
 * Registered Hub: Thotada Guddadhalli Village, Bengaluru, Thammenahalli, Bangalore-562162, Karnataka
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // Constants
  const SJT_PHONE = '919900975920';

  // Comprehensive Location Database for Alphabet-by-Alphabet Autocomplete
  const LOCATION_DATABASE = [
    // A
    { name: 'Airport - Kempegowda Bengaluru (BLR)', category: 'Airport Transfer', icon: '✈️', sub: 'Bengaluru 24/7 Flight Pickup/Drop Hub' },
    { name: 'Agumbe (Rainforest & Sunset View)', category: 'Western Ghats', icon: '🌄', sub: '350 KM • Shimoga Ghats' },
    { name: 'Aihole & Pattadakal (UNESCO Temples)', category: 'Heritage', icon: '🛕', sub: '445 KM • Chalukya Rock Architecture' },
    { name: 'Ananthagiri Hills', category: 'Hill Station', icon: '🌄', sub: '540 KM • Green Hills' },

    // B
    { name: 'Bengaluru - Central / Majestic', category: 'City Centre Hub', icon: '🏙️', sub: 'Bengaluru Railway & Bus Hub' },
    { name: 'Bellandur / Outer Ring Road (ORR)', category: 'IT Tech Park', icon: '🏢', sub: 'EcoWorld, EcoSpace & Prestige Tech' },
    { name: 'Bandipur National Park & Tiger Reserve', category: 'Wildlife Safari', icon: '🐅', sub: '220 KM • Forest Jungle Safari' },
    { name: 'Bannerghatta National Park', category: 'Day Outing', icon: '🦁', sub: '30 KM • Biological Park & Zoo' },
    { name: 'Basavanagudi (Bull Temple & Gandhi Bazaar)', category: 'Bengaluru South', icon: '🛕', sub: 'South Bangalore Heritage & Food' },
    { name: 'Belur & Halebeedu (Hoysala Temples)', category: 'Heritage Wonder', icon: '🛕', sub: '220 KM • Intricate Sculptures' },
    { name: 'Badami Cave Temples', category: 'UNESCO Heritage', icon: '🛕', sub: '450 KM • Red Sandstone Caves' },
    { name: 'BR Hills (Biligirirangana Hills)', category: 'Wildlife & Hills', icon: '🌄', sub: '175 KM • Chamarajanagar' },

    // C
    { name: 'Coorg (Madikeri / Kushalnagar)', category: 'Top Hill Station', icon: '🌄', sub: '265 KM • Coffee Estates, Abbey Falls & Raja Seat' },
    { name: 'Chikmagalur (Mullayanagiri Peak)', category: 'Top Hill Station', icon: '🌄', sub: '245 KM • Highest Peak, Coffee & Waterfalls' },
    { name: 'Chennai (Central & Marina Beach)', category: 'Metropolitan', icon: '🏙️', sub: '350 KM • Tamil Nadu' },
    { name: 'Coimbatore & Isha Yoga Center', category: 'Spiritual / City', icon: '🛕', sub: '365 KM • 112ft Adiyogi & Western Ghats' },
    { name: 'Coonoor (Nilgiri Hills)', category: 'Hill Station', icon: '🌄', sub: '290 KM • Sim’s Park & Tea Plantations' },
    { name: 'Chitradurga Fort (Kallina Kote)', category: 'Historic Fort', icon: '🏰', sub: '200 KM • Seven-Ring Stone Citadel' },
    { name: 'Chamundi Hills & Nandi Bull', category: 'Heritage Hill', icon: '🛕', sub: '150 KM • Mysore Viewpoint' },

    // D
    { name: 'Dharmasthala (Lord Manjunatha Temple)', category: 'Temple Pilgrimage', icon: '🛕', sub: '300 KM • Sacred Coastal Karnataka' },
    { name: 'Dandeli (River Rafting & Jungle Camps)', category: 'Adventure', icon: '🚣', sub: '460 KM • Kali River Rapids' },
    { name: 'Davangere (Benne Dosa Capital)', category: 'Commercial City', icon: '🏙️', sub: '260 KM • Central Karnataka' },
    { name: 'Devanahalli (Near Kempegowda Airport)', category: 'North Bangalore', icon: '🏙️', sub: 'Airport Corridor Hub' },

    // E
    { name: 'Electronic City (Phase 1 & 2)', category: 'IT Tech Hub', icon: '🏢', sub: 'Infosys, Wipro, Tech Corridors' },

    // F
    { name: 'Frazer Town / Cantonment', category: 'Bengaluru Central', icon: '🏙️', sub: 'Colonial Bangalore & Food Street' },

    // G
    { name: 'Gokarna (Om Beach & Kudle Beach)', category: 'Coastal Beaches', icon: '🏖️', sub: '485 KM • Arabian Sea Paradise' },
    { name: 'Goa (Panaji, Calangute, Baga & South Goa)', category: 'Beach Holiday', icon: '🏖️', sub: '560 KM • Sun, Sand & Sea' },

    // H
    { name: 'Hampi (UNESCO World Heritage Ruins)', category: 'Historic Wonder', icon: '🏛️', sub: '340 KM • Vijayanagara Empire Citadel' },
    { name: 'Hebbal / Manyata Tech Park', category: 'Tech Park Hub', icon: '🏢', sub: 'North Bangalore Tech Corridor' },
    { name: 'Hassan (Hoysala Gateway)', category: 'Heritage Gateway', icon: '🏙️', sub: '180 KM • South Karnataka' },
    { name: 'Hogenakkal Falls', category: 'Waterfalls', icon: '🌊', sub: '180 KM • Niagara of India & Coracle Rides' },
    { name: 'Horanadu (Annapoorneshwari Temple)', category: 'Temple Pilgrimage', icon: '🛕', sub: '310 KM • Western Ghats Valley' },
    { name: 'Hosur Industrial Hub', category: 'Industrial Corridor', icon: '🏭', sub: '40 KM • Bangalore Border' },
    { name: 'Hyderabad (Cyberabad & Charminar)', category: 'Metro Outstation', icon: '🏙️', sub: '570 KM • Telangana Capital' },

    // I
    { name: 'Indiranagar / 100ft Road', category: 'Bengaluru Central', icon: '🏙️', sub: 'Central Business & Dining District' },
    { name: 'Isha Foundation (Chikkaballapura)', category: 'Spiritual Center', icon: '🛕', sub: '65 KM • 112ft Adiyogi Bangalore' },

    // J
    { name: 'Jog Falls (Gerosoppa Cataracts)', category: 'Waterfalls', icon: '🌊', sub: '380 KM • Second Highest Plunge Falls' },
    { name: 'Jayanagar / JP Nagar / Banashankari', category: 'South Bengaluru', icon: '🏙️', sub: 'South Bangalore Residential & Commercial' },

    // K
    { name: 'Kodaikanal (Lake, Pillar Rocks & Coaker’s Walk)', category: 'Princess of Hills', icon: '🌄', sub: '465 KM • Misty Lake & Pine Forests' },
    { name: 'Kukke Subramanya Temple', category: 'Pilgrimage Shrine', icon: '🛕', sub: '280 KM • Sacred Western Ghats Snake Temple' },
    { name: 'Kabini & Nagarhole National Park', category: 'Jungle Safari', icon: '🐅', sub: '215 KM • Tiger, Elephant & Leopard Reserve' },
    { name: 'Koramangala / HSR Layout', category: 'Bengaluru Tech', icon: '🏢', sub: 'Startup, Retail & Food Corridor' },
    { name: 'Kudremukh (Peak Trek & Shola Forests)', category: 'Trekking & Hills', icon: '🌄', sub: '330 KM • Western Ghats Green Peak' },
    { name: 'Kolar Gold Fields (KGF)', category: 'Historic Site', icon: '⛏️', sub: '100 KM • East Karnataka Gold Mines' },

    // L
    { name: 'Lepakshi (Veerabhadra Temple & Nandi)', category: 'Historic Heritage', icon: '🛕', sub: '120 KM • Hanging Pillar & Monolith' },
    { name: 'Lalbagh Botanical Garden', category: 'Bengaluru Landmark', icon: '🌿', sub: 'Glass House & 240 Acres Greenery' },

    // M
    { name: 'Mysore (Grand Palace & Chamundi Hills)', category: 'Heritage City', icon: '🏰', sub: '145 KM • 10-Lane Expressway (~2 Hrs)' },
    { name: 'Murudeshwar (Giant Shiva Statue & Beach)', category: 'Coastal Pilgrimage', icon: '🛕', sub: '490 KM • Seafront Monument' },
    { name: 'Mangalore (Panambur Beach & Temples)', category: 'Coastal Port City', icon: '🌊', sub: '350 KM • Coastal Karnataka' },
    { name: 'Munnar (Tea Gardens & Eravikulam)', category: 'Kerala Hills', icon: '🌄', sub: '475 KM • Anamudi & Misty Slopes' },
    { name: 'Madurai (Meenakshi Amman Temple)', category: 'Heritage Pilgrimage', icon: '🛕', sub: '435 KM • Ancient Temple City' },
    { name: 'Mahabalipuram (Shore Temples & Monoliths)', category: 'Coastal UNESCO', icon: '🏛️', sub: '380 KM • Bay of Bengal' },
    { name: 'Manyata Tech Park (Nagavara)', category: 'Corporate IT Hub', icon: '🏢', sub: 'North Bengaluru IT Park' },
    { name: 'Malleshwaram / Rajajinagar', category: 'North-West Hub', icon: '🏙️', sub: 'Traditional Bengaluru Hub' },
    { name: 'Marathahalli / HAL', category: 'East Bengaluru', icon: '🏢', sub: 'Old Airport Road Corridor' },

    // N
    { name: 'Nandi Hills (Sunrise Viewpoint)', category: 'Quick Getaway', icon: '🌄', sub: '60 KM • Early Morning Cloud Walk' },
    { name: 'Nagarhole National Park', category: 'Wildlife Reserve', icon: '🐅', sub: '220 KM • Kabini Forest Safari' },

    // O
    { name: 'Ooty (Queen of Hill Stations & Botanical Garden)', category: 'Queen of Hills', icon: '🌄', sub: '275 KM • 36 Hairpin Bends & Toy Train' },
    { name: 'Outer Ring Road (Marathahalli to Sarjapur)', category: 'Corporate Hub', icon: '🏢', sub: 'Tech Corridor Hub' },

    // P
    { name: 'Pondicherry (French Colony & Rock Beach)', category: 'Coastal Heritage', icon: '🏖️', sub: '310 KM • Promenade & Auroville' },
    { name: 'Peenya Industrial Hub / Tumkur Road', category: 'North-West Hub', icon: '🏭', sub: 'Near SJT Registered Operations' },

    // R
    { name: 'Rameshwaram (Pamban Bridge & Dham)', category: 'Sacred Island', icon: '🛕', sub: '600 KM • Ramanathaswamy Temple' },
    { name: 'Rajajinagar / Yeshwanthpur', category: 'North-West Hub', icon: '🏙️', sub: 'Metro & Railway Junction' },

    // S
    { name: 'Sakleshpur (Coffee Hills & Railway Trek)', category: 'Nature Getaway', icon: '🌄', sub: '220 KM • Green Western Ghats' },
    { name: 'Shravanabelagola (Bahubali Monolith)', category: 'Jain Heritage', icon: '🛕', sub: '140 KM • 57ft Monolithic Statue' },
    { name: 'Srirangapatna (Tipu Sultan Palace)', category: 'Historic Island', icon: '🏰', sub: '125 KM • Kaveri River Island Fort' },
    { name: 'Sringeri (Sharada Peetham)', category: 'Sacred Pilgrimage', icon: '🛕', sub: '320 KM • River Tunga Ghats' },
    { name: 'Shimoga / Shivamogga', category: 'Malnad Gateway', icon: '🏙️', sub: '300 KM • Central Western Karnataka' },
    { name: 'Shivanasamudra Falls (Barachukki & Gaganachukki)', category: 'Twin Waterfalls', icon: '🌊', sub: '135 KM • Kaveri Cascades' },

    // T
    { name: 'Thammenahalli (SJT Registered Hub)', category: 'Head Office', icon: '📍', sub: 'Thotada Guddadhalli, Bangalore-562162' },
    { name: 'Tirupati (Lord Balaji Temple)', category: 'Top Pilgrimage', icon: '🛕', sub: '250 KM • Seven Hills of Tirumala' },
    { name: 'Thiruvannamalai (Arunachaleswarar Temple)', category: 'Holy Mountain', icon: '🛕', sub: '200 KM • Agni Lingam Pilgrimage' },
    { name: 'Thanjavur (Brihadeeswarar Big Temple)', category: 'UNESCO Chola Temple', icon: '🛕', sub: '390 KM • 1000-Year Architectural Wonder' },
    { name: 'Tumkur / Tumakuru Smart City', category: 'Industrial Hub', icon: '🏙️', sub: '70 KM • North Karnataka Gateway' },

    // U
    { name: 'Udupi (Krishna Mutt & Malpe Beach)', category: 'Coastal Temple', icon: '🛕', sub: '400 KM • St. Mary’s Island' },

    // V
    { name: 'Vijayapura / Bijapur (Gol Gumbaz)', category: 'Historic Citadel', icon: '🏛️', sub: '530 KM • Whispering Gallery' },
    { name: 'Vidhana Soudha & Cubbon Park', category: 'Bengaluru Heart', icon: '🏛️', sub: 'Legislative Capitol & Green Lung' },

    // W
    { name: 'Wayanad (Banasura Dam & Chembra Peak)', category: 'Kerala Hills', icon: '🌄', sub: '280 KM • Tea, Coffee & Waterfalls' },
    { name: 'Whitefield (ITPL & EPIP Zone)', category: 'Corporate IT Hub', icon: '🏢', sub: 'East Bangalore Tech Hub' },

    // Y
    { name: 'Yercaud (Shevaroy Hills & Lake)', category: 'Hill Station', icon: '🌄', sub: '230 KM • Salem Hills' },
    { name: 'Yelagiri (Green Valley Hills)', category: 'Weekend Outing', icon: '🌄', sub: '160 KM • Boating & Green Valleys' },
    { name: 'Yelahanka New Town', category: 'North Bengaluru', icon: '🏙️', sub: 'Airport Road Hub' }
  ];

  // Vehicle Rates Matrix (For WhatsApp and Slip Generation)
  const VEHICLE_PRICING = {
    'etios': { name: 'Toyota Etios Sedan (4+1)', perKm: 13, minKmDay: 250, baseDay: 3250 },
    'ertiga': { name: 'Maruti Suzuki Ertiga (6+1)', perKm: 15, minKmDay: 250, baseDay: 3750 },
    'innova': { name: 'Toyota Innova Crysta (7+1)', perKm: 19, minKmDay: 250, baseDay: 4750 },
    'tempo-12': { name: 'Tempo Traveller (12 Seater)', perKm: 22, minKmDay: 300, baseDay: 6600 },
    'tempo-17': { name: 'Tempo Traveller (17 Seater)', perKm: 25, minKmDay: 300, baseDay: 7500 },
    'tempo-20': { name: 'Maharaja Luxury TT (20 Seater)', perKm: 28, minKmDay: 300, baseDay: 8400 },
    'minibus-21': { name: 'Mini Bus AC (21 Seater)', perKm: 32, minKmDay: 300, baseDay: 9600 },
    'minibus-25': { name: 'Mini Bus Luxury (25 Seater)', perKm: 35, minKmDay: 300, baseDay: 10500 },
    'bus-50': { name: 'Luxury Tourist Bus (50 Seater)', perKm: 55, minKmDay: 350, baseDay: 19250 }
  };

  const DESTINATION_DISTANCES = {
    'coorg': { name: 'Coorg (Madikeri)', km: 265 },
    'ooty': { name: 'Ooty (Nilgiris)', km: 275 },
    'mysore': { name: 'Mysore Heritage', km: 145 },
    'chikmagalur': { name: 'Chikmagalur Hills', km: 245 },
    'kodaikanal': { name: 'Kodaikanal Lake', km: 465 },
    'hampi': { name: 'Hampi UNESCO', km: 340 },
    'tirupati': { name: 'Tirupati Balaji', km: 250 },
    'wayanad': { name: 'Wayanad Kerala', km: 280 },
    'goa': { name: 'Goa Beaches', km: 560 },
    'pondicherry': { name: 'Pondicherry', km: 310 },
    'airport': { name: 'Kempegowda Airport BLR', km: 45 }
  };

  // Elements
  const header = document.getElementById('siteHeader') || document.querySelector('.site-header');
  const mobileToggleBtn = document.getElementById('mobileToggleBtn');
  const mobileNavDrawer = document.getElementById('mobileNavDrawer');
  const mobileDrawerOverlay = document.getElementById('mobileDrawerOverlay');
  const drawerCloseBtn = document.getElementById('drawerCloseBtn');

  const bookingForm = document.getElementById('journeyBookingForm');
  const vehicleSelect = document.getElementById('vehicleTypeSelect');
  const pickupInput = document.getElementById('pickupLocationInput');
  const dropInput = document.getElementById('dropLocationInput');
  const pickupClearBtn = document.getElementById('pickupClearBtn');
  const dropClearBtn = document.getElementById('dropClearBtn');
  const pickupDropdown = document.getElementById('pickupAutocompleteList');
  const dropDropdown = document.getElementById('dropAutocompleteList');

  const travelDateInput = document.getElementById('travelDateInput');
  const returnDateInput = document.getElementById('returnDateInput');
  const returnDateFieldGroup = document.getElementById('returnDateFieldGroup');

  const modalBackdrop = document.getElementById('bookingModalBackdrop');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalBodyContent = document.getElementById('modalBodyContent');

  const lightboxBackdrop = document.getElementById('lightboxBackdrop');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxCaption = document.getElementById('lightboxCaption');
  const lightboxCloseBtn = document.getElementById('lightboxCloseBtn');

  const toast = document.getElementById('toastNotification');
  const bannerVehicleBtns = document.querySelectorAll('.banner-vehicle-btn');
  const tripModeBtns = document.querySelectorAll('.trip-mode-pill, .trip-mode-btn');

  let currentTripMode = 'round-trip';

  // 1. Sticky Header
  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 30) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }, { passive: true });
  }

  // 2. Mobile Drawer
  function openMobileDrawer() {
    if (mobileNavDrawer) mobileNavDrawer.classList.add('open');
    if (mobileDrawerOverlay) mobileDrawerOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileDrawer() {
    if (mobileNavDrawer) mobileNavDrawer.classList.remove('open');
    if (mobileDrawerOverlay) mobileDrawerOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (mobileToggleBtn) mobileToggleBtn.addEventListener('click', openMobileDrawer);
  if (drawerCloseBtn) drawerCloseBtn.addEventListener('click', closeMobileDrawer);
  if (mobileDrawerOverlay) mobileDrawerOverlay.addEventListener('click', closeMobileDrawer);

  document.querySelectorAll('.drawer-nav-item').forEach(link => {
    link.addEventListener('click', closeMobileDrawer);
  });

  // 3. Trip Mode Switcher
  tripModeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tripModeBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentTripMode = btn.dataset.mode;

      if (currentTripMode === 'one-way' || currentTripMode === 'local-hourly') {
        if (returnDateFieldGroup) returnDateFieldGroup.style.display = 'none';
      } else {
        if (returnDateFieldGroup) returnDateFieldGroup.style.display = 'flex';
      }
    });
  });

  window.selectTripMode = function(mode) {
    const targetBtn = document.querySelector(`.trip-mode-pill[data-mode="${mode}"], .trip-mode-btn[data-mode="${mode}"]`);
    if (targetBtn) {
      targetBtn.click();
      const bookingSec = document.getElementById('journeyBookingSection');
      if (bookingSec) bookingSec.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  window.selectAirportTrip = function() {
    if (dropInput) {
      dropInput.value = 'Airport - Kempegowda Bengaluru (BLR)';
      if (dropClearBtn) dropClearBtn.style.display = 'flex';
    }
    if (pickupInput && !pickupInput.value) {
      pickupInput.value = 'Bengaluru - Central / Majestic';
      if (pickupClearBtn) pickupClearBtn.style.display = 'flex';
    }
    window.selectTripMode('one-way');
  };

  // 4. Interactive Banner Vehicle Quick Selector
  bannerVehicleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      bannerVehicleBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const vKey = btn.dataset.vkey;
      if (vKey && vehicleSelect) {
        vehicleSelect.value = vKey;
      }

      const bookingCard = document.querySelector('.booking-dock-card') || document.getElementById('journeyBookingSection');
      if (bookingCard) {
        bookingCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
        bookingCard.classList.add('card-highlight-pulse');
        setTimeout(() => bookingCard.classList.remove('card-highlight-pulse'), 1200);
      }
    });
  });

  // 5. LIVE ALPHABET-BY-ALPHABET AUTOCOMPLETE ENGINE
  function setupLiveAutocomplete(inputElem, dropdownElem, clearBtnElem, defaultType = 'all') {
    if (!inputElem || !dropdownElem) return;

    let selectedIndex = -1;

    function renderMatches(query = '') {
      const trimmed = query.trim().toLowerCase();
      let matches = [];

      if (!trimmed) {
        // Show recommended popular quick picks when input is empty
        if (defaultType === 'pickup') {
          matches = LOCATION_DATABASE.filter(loc => 
            loc.name.includes('Bengaluru') || loc.name.includes('Airport') || loc.name.includes('Electronic City') || loc.name.includes('Manyata') || loc.name.includes('Thammenahalli')
          ).slice(0, 6);
        } else {
          matches = LOCATION_DATABASE.filter(loc => 
            loc.name.includes('Coorg') || loc.name.includes('Ooty') || loc.name.includes('Mysore') || loc.name.includes('Chikmagalur') || loc.name.includes('Kodaikanal') || loc.name.includes('Hampi') || loc.name.includes('Tirupati')
          ).slice(0, 7);
        }
      } else {
        // Filter by typed characters: prioritize matches where the PRIMARY name starts with the typed letter(s)
        const primaryStarts = [];
        const wordStarts = [];
        const otherMatches = [];

        LOCATION_DATABASE.forEach(loc => {
          const locLower = loc.name.toLowerCase();
          const subLower = (loc.sub || '').toLowerCase();
          const catLower = (loc.category || '').toLowerCase();

          if (locLower.startsWith(trimmed)) {
            primaryStarts.push(loc);
          } else {
            const words = locLower.split(/[\s\-()/,]+/);
            if (words.some(w => w.startsWith(trimmed))) {
              wordStarts.push(loc);
            } else if (locLower.includes(trimmed) || subLower.includes(trimmed) || catLower.includes(trimmed)) {
              otherMatches.push(loc);
            }
          }
        });

        matches = [...primaryStarts, ...wordStarts, ...otherMatches].slice(0, 8);
      }

      if (matches.length === 0) {
        dropdownElem.innerHTML = `
          <div style="padding: 14px; text-align: center; color: var(--slate-400); font-size: 0.85rem;">
            No destinations found matching "<strong>${escapeHtml(query)}</strong>".<br>
            <span style="font-size: 0.75rem; color: var(--slate-500);">You can still proceed with your custom location!</span>
          </div>
        `;
        dropdownElem.classList.add('show');
        return;
      }

      let html = `<div class="autocomplete-header">${trimmed ? `Matching '${escapeHtml(query)}' (${matches.length})` : 'Popular Locations'}</div>`;
      
      matches.forEach((item, index) => {
        let highlightedName = item.name;
        if (trimmed) {
          const regex = new RegExp(`(${escapeRegExp(trimmed)})`, 'gi');
          highlightedName = item.name.replace(regex, '<span class="highlight-letter">$1</span>');
        }

        html += `
          <div class="autocomplete-item" data-index="${index}" data-val="${escapeHtml(item.name)}">
            <div class="autocomplete-left">
              <span class="autocomplete-icon">${item.icon || '📍'}</span>
              <div>
                <div class="autocomplete-name">${highlightedName}</div>
                <div class="autocomplete-sub">${item.sub || item.category || ''}</div>
              </div>
            </div>
            <span class="autocomplete-badge">${item.category || 'Route'}</span>
          </div>
        `;
      });

      dropdownElem.innerHTML = html;
      dropdownElem.classList.add('show');
      selectedIndex = -1;

      // Click listener for suggestions
      dropdownElem.querySelectorAll('.autocomplete-item').forEach(el => {
        el.addEventListener('mousedown', (e) => {
          e.preventDefault();
          selectItem(el.dataset.val);
        });
      });
    }

    function selectItem(val) {
      inputElem.value = val;
      dropdownElem.classList.remove('show');
      if (clearBtnElem) clearBtnElem.style.display = 'flex';
      inputElem.dispatchEvent(new Event('change'));
    }

    // Input event (triggers even on 1 single letter!)
    inputElem.addEventListener('input', () => {
      const val = inputElem.value;
      if (clearBtnElem) {
        clearBtnElem.style.display = val.length > 0 ? 'flex' : 'none';
      }
      renderMatches(val);
    });

    // Focus & Click events (opens immediately on click or focus)
    inputElem.addEventListener('focus', () => {
      renderMatches(inputElem.value);
    });
    inputElem.addEventListener('click', () => {
      renderMatches(inputElem.value);
    });

    // Keyboard navigation
    inputElem.addEventListener('keydown', (e) => {
      const items = dropdownElem.querySelectorAll('.autocomplete-item');
      if (!items.length || !dropdownElem.classList.contains('show')) return;

      if (e.key === 'ArrowDown') {
        e.preventDefault();
        selectedIndex = (selectedIndex + 1) % items.length;
        updateSelection(items);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        selectedIndex = (selectedIndex - 1 + items.length) % items.length;
        updateSelection(items);
      } else if (e.key === 'Enter') {
        if (selectedIndex >= 0 && items[selectedIndex]) {
          e.preventDefault();
          selectItem(items[selectedIndex].dataset.val);
        }
      } else if (e.key === 'Escape') {
        dropdownElem.classList.remove('show');
      }
    });

    function updateSelection(items) {
      items.forEach((it, idx) => {
        if (idx === selectedIndex) {
          it.classList.add('selected');
          it.scrollIntoView({ block: 'nearest' });
        } else {
          it.classList.remove('selected');
        }
      });
    }

    // Clear button
    if (clearBtnElem) {
      clearBtnElem.addEventListener('click', (e) => {
        e.stopPropagation();
        inputElem.value = '';
        clearBtnElem.style.display = 'none';
        inputElem.focus();
        renderMatches('');
      });
    }

    // Close on outside click
    document.addEventListener('click', (e) => {
      if (!inputElem.contains(e.target) && !dropdownElem.contains(e.target)) {
        dropdownElem.classList.remove('show');
      }
    });
  }

  // Setup Autocomplete for both Pickup and Drop fields
  setupLiveAutocomplete(pickupInput, pickupDropdown, pickupClearBtn, 'pickup');
  setupLiveAutocomplete(dropInput, dropDropdown, dropClearBtn, 'drop');

  // Set min date to today
  const today = new Date().toISOString().split('T')[0];
  if (travelDateInput) {
    travelDateInput.min = today;
    if (!travelDateInput.value) travelDateInput.value = today;
  }
  if (returnDateInput) {
    returnDateInput.min = today;
  }

  // Helper fare estimate calculator for receipt & WhatsApp message
  function getEstimatedFareDetails(dropVal, vehicleKey) {
    const vehicle = VEHICLE_PRICING[vehicleKey] || VEHICLE_PRICING['tempo-12'];
    let estimatedKm = 265; // default coorg
    const lowerDrop = (dropVal || '').toLowerCase();

    for (const [key, dest] of Object.entries(DESTINATION_DISTANCES)) {
      if (lowerDrop.includes(key) || lowerDrop.includes(dest.name.toLowerCase())) {
        estimatedKm = dest.km;
        break;
      }
    }

    if (currentTripMode === 'local-hourly') {
      const amt = Math.round(vehicle.baseDay * 0.65);
      return {
        amount: amt,
        label: '₹' + amt.toLocaleString('en-IN') + ' (8 Hr/80 Km)',
        approxKm: 80
      };
    } else if (currentTripMode === 'monthly-corp') {
      return {
        amount: Math.round(vehicle.baseDay * 24),
        label: 'Custom IT Contract Rate Card',
        approxKm: 'Dedicated Monthly'
      };
    } else if (currentTripMode === 'one-way') {
      const totalKm = Math.max(Math.round(estimatedKm * 1.3), vehicle.minKmDay);
      const fare = totalKm * vehicle.perKm;
      return {
        amount: fare,
        label: '₹' + fare.toLocaleString('en-IN') + ' Approx*',
        approxKm: totalKm
      };
    } else {
      const totalKm = Math.max(estimatedKm * 2, vehicle.minKmDay);
      const fare = totalKm * vehicle.perKm;
      return {
        amount: fare,
        label: '₹' + fare.toLocaleString('en-IN') + ' Approx*',
        approxKm: totalKm
      };
    }
  }

  // 6. Booking Form Submission -> WhatsApp + Official Slip Generation
  if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const pickup = pickupInput?.value.trim() || 'Bengaluru';
      const drop = dropInput?.value.trim();
      const travelDate = travelDateInput?.value;
      const returnDate = returnDateInput?.value;
      const vehicleKey = vehicleSelect?.value || 'tempo-12';
      const vehicle = VEHICLE_PRICING[vehicleKey] || { name: 'Tempo Traveller', perKm: 22 };
      const fareInfo = getEstimatedFareDetails(drop, vehicleKey);

      if (!pickup) {
        showToast('Please enter your pickup location');
        if (pickupInput) pickupInput.focus();
        return;
      }

      if (!drop) {
        showToast('Please enter your destination drop location');
        if (dropInput) dropInput.focus();
        return;
      }

      if (!travelDate) {
        showToast('Please select your travel date');
        if (travelDateInput) travelDateInput.focus();
        return;
      }

      const randomId = Math.floor(1000 + Math.random() * 9000);
      const bookingRef = `SJT-${new Date().getFullYear()}-${randomId}`;

      const waText = 
`*NEW TRAVEL ENQUIRY - SJT TOURS & TRAVELS PVT. LTD.*
━━━━━━━━━━━━━━━━━━━━━
🔖 *Booking Ref:* ${bookingRef}
🚖 *Trip Mode:* ${currentTripMode.toUpperCase().replace('-', ' ')}
📍 *Pickup Location:* ${pickup}
🏁 *Destination Drop:* ${drop}
📅 *Journey Date:* ${travelDate}
${returnDate ? `🔙 *Return Date:* ${returnDate}\n` : ''}🚐 *Vehicle Requested:* ${vehicle.name}
━━━━━━━━━━━━━━━━━━━━━
*SJT Registered Hub:*
Thotada Guddadhalli Village, Bengaluru, Thammenahalli, Bangalore-562162
━━━━━━━━━━━━━━━━━━━━━
_Please confirm vehicle availability, driver contact, and final best quote._`;

      const waUrl = `https://wa.me/${SJT_PHONE}?text=${encodeURIComponent(waText)}`;

      showBookingSlipModal({
        ref: bookingRef,
        pickup,
        drop,
        travelDate,
        returnDate,
        vehicleName: vehicle.name,
        fare: fareInfo.label,
        tripMode: currentTripMode.toUpperCase().replace('-', ' '),
        waUrl
      });
    });
  }

  // 7. Booking Slip Modal Generator
  function showBookingSlipModal(data) {
    if (!modalBackdrop || !modalBodyContent) return;

    modalBodyContent.innerHTML = `
      <div style="text-align: center; margin-bottom: 18px;">
        <div style="width: 58px; height: 58px; border-radius: 50%; background: #dcfce7; color: #15803d; display: flex; align-items: center; justify-content: center; margin: 0 auto 12px auto; box-shadow: 0 4px 14px rgba(37, 211, 102, 0.25);">
          <svg style="width: 32px; height: 32px;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path>
          </svg>
        </div>
        <h3 style="font-family: var(--font-heading); font-size: 1.55rem; font-weight: 800; color: var(--sjt-navy-900); margin-bottom: 4px;">Quotation Slip Ready!</h3>
        <p style="font-size: 0.85rem; color: var(--slate-500);">Your trip details are compiled. Confirm instantly with our 24/7 operations desk.</p>
      </div>

      <div class="booking-slip-box" id="printableSlip">
        <div class="slip-header-row">
          <div>
            <div style="font-weight: 800; color: var(--sjt-navy-900); font-size: 1.05rem;">SJT TOURS &amp; TRAVELS PVT. LTD.</div>
            <div style="font-size: 0.75rem; color: var(--slate-500);">Thammenahalli, Bangalore-562162, Karnataka</div>
          </div>
          <div class="slip-ref-pill">${data.ref}</div>
        </div>

        <div class="slip-key-val-grid">
          <div>
            <strong>Pickup Location</strong>
            <span>${data.pickup}</span>
          </div>
          <div>
            <strong>Destination Drop</strong>
            <span>${data.drop}</span>
          </div>
          <div>
            <strong>Travel Date</strong>
            <span>${data.travelDate}</span>
          </div>
          <div>
            <strong>Trip Category</strong>
            <span>${data.tripMode}</span>
          </div>
          <div>
            <strong>Vehicle Fleet</strong>
            <span>${data.vehicleName}</span>
          </div>
          <div>
            <strong>Quotation Status</strong>
            <span style="font-weight: 800; color: #15803d; font-size: 0.95rem;">Pending WhatsApp Confirmation</span>
          </div>
        </div>

        <div style="margin-top: 16px; padding-top: 12px; border-top: 1px dashed var(--slate-300); font-size: 0.75rem; color: var(--slate-500); display: flex; justify-content: space-between; flex-wrap: wrap; gap: 6px;">
          <span>✓ Sanitized Fleet</span>
          <span>✓ Background Verified Driver</span>
          <span>✓ GPS Enabled</span>
        </div>
      </div>

      <div style="display: flex; flex-direction: column; gap: 12px; margin-top: 18px;">
        <a href="${data.waUrl}" target="_blank" rel="noopener" class="btn-whatsapp-submit" style="text-decoration: none;">
          <svg class="wa-icon-official" style="width:26px;height:26px;" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill="#25D366" d="M16 0C7.163 0 0 7.163 0 16c0 2.825.738 5.488 2.05 7.8L.8 31.2l7.65-1.988A15.93 15.93 0 0 0 16 32c8.837 0 16-7.163 16-16S24.837 0 16 0z"/>
            <path fill="#ffffff" fill-rule="evenodd" clip-rule="evenodd" d="M23.6 19.35c-.388-.194-2.288-1.125-2.644-1.256-.356-.131-.613-.194-.875.194-.256.388-1.006 1.256-1.231 1.513-.225.256-.45.288-.838.094-.388-.194-1.637-.6-3.119-1.919-1.15-1.025-1.925-2.288-2.15-2.675-.225-.388-.025-.6.169-.794.175-.175.388-.45.581-.675.194-.225.256-.388.388-.644.131-.256.063-.481-.031-.675-.094-.194-.875-2.106-1.2-2.888-.319-.762-.644-.656-.875-.669-.225-.013-.481-.013-.738-.013-.256 0-.675.094-1.025.481-.356.388-1.356 1.325-1.356 3.231 0 1.906 1.388 3.75 1.581 4.006.194.256 2.731 4.169 6.619 5.844.925.4 1.644.638 2.206.819.931.294 1.775.25 2.444.15.75-.113 2.288-.938 2.613-1.844.325-.906.325-1.681.225-1.844-.094-.162-.35-.256-.738-.45z"/>
          </svg>
          Confirm via WhatsApp Direct
        </a>
        <div style="display: flex; gap: 10px;">
          <button type="button" onclick="window.print()" class="btn-header-call" style="flex: 1; justify-content: center; cursor: pointer; height: 46px;">
            🖨️ Print Slip
          </button>
          <button type="button" id="copySlipBtn" class="btn-header-call" style="flex: 1; justify-content: center; cursor: pointer; height: 46px;">
            📋 Copy Details
          </button>
        </div>
      </div>
    `;

    modalBackdrop.classList.add('open');

    const copyBtn = document.getElementById('copySlipBtn');
    if (copyBtn) {
      copyBtn.addEventListener('click', () => {
        const textToCopy = `SJT Tours & Travels Booking Ref: ${data.ref} | From: ${data.pickup} to ${data.drop} | Vehicle: ${data.vehicleName} | Date: ${data.travelDate} | Hub: Thammenahalli Bangalore-562162`;
        navigator.clipboard.writeText(textToCopy).then(() => {
          showToast('Quotation details copied to clipboard!');
        });
      });
    }

    // Auto-open WhatsApp in new tab
    window.open(data.waUrl, '_blank');
  }

  if (modalCloseBtn && modalBackdrop) {
    modalCloseBtn.addEventListener('click', () => {
      modalBackdrop.classList.remove('open');
    });

    modalBackdrop.addEventListener('click', (e) => {
      if (e.target === modalBackdrop) {
        modalBackdrop.classList.remove('open');
      }
    });
  }

  // 8. Vehicle Catalog "Book Now" Action Triggers
  document.querySelectorAll('.btn-v-book, .btn-book-this-car').forEach(btn => {
    btn.addEventListener('click', () => {
      const vSelectKey = btn.dataset.vselect;
      if (vSelectKey && vehicleSelect) {
        vehicleSelect.value = vSelectKey;
      }

      bannerVehicleBtns.forEach(b => {
        if (b.dataset.vkey === vSelectKey) {
          bannerVehicleBtns.forEach(x => x.classList.remove('active'));
          b.classList.add('active');
        }
      });

      const bookingSec = document.querySelector('.booking-dock-card') || document.getElementById('journeyBookingSection');
      if (bookingSec) {
        bookingSec.scrollIntoView({ behavior: 'smooth', block: 'center' });
        bookingSec.classList.add('card-highlight-pulse');
        setTimeout(() => bookingSec.classList.remove('card-highlight-pulse'), 1200);
      }
    });
  });

  // 9. Popular Destination Cards Click -> Pre-fills Drop Location
  document.querySelectorAll('.dest-deck-card, .destination-card').forEach(card => {
    card.addEventListener('click', () => {
      const destName = card.dataset.destName;
      if (destName && dropInput) {
        dropInput.value = destName;
        if (dropClearBtn) dropClearBtn.style.display = 'flex';
        const bookingSec = document.querySelector('.booking-dock-card') || document.getElementById('journeyBookingSection');
        if (bookingSec) {
          bookingSec.scrollIntoView({ behavior: 'smooth', block: 'center' });
          bookingSec.classList.add('card-highlight-pulse');
          setTimeout(() => bookingSec.classList.remove('card-highlight-pulse'), 1200);
        }
      }
    });
  });

  // 10. Corporate Inquiry & Attachment RFP Form
  const itForm = document.getElementById('corporateInquiryForm') || document.getElementById('corporateRfpForm');
  if (itForm) {
    itForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const compName = document.getElementById('corpCompanyName')?.value.trim() || 'Corporate Enterprise';
      const contactName = document.getElementById('corpContactPerson')?.value.trim() || 'HR/Transport Admin';
      const phone = document.getElementById('corpPhone')?.value.trim() || '';
      const fleetType = document.getElementById('corpFleetRequirement')?.value || 'Tempo Traveller & Cabs';
      const techPark = document.getElementById('corpTechPark')?.value.trim() || 'Bengaluru Tech Park';
      const shifts = document.getElementById('corpShifts')?.value || '24/7 Operations';

      const corpMessage =
`*CORPORATE IT ATTACHMENT RFP - SJT TOURS & TRAVELS*
━━━━━━━━━━━━━━━━━━━━━
🏢 *Company Name:* ${compName}
👤 *Contact Person:* ${contactName}
📞 *Phone:* ${phone}
📍 *Workplace / Tech Park:* ${techPark}
🚐 *Fleet Requirement:* ${fleetType}
⏰ *Shift Operations:* ${shifts}
━━━━━━━━━━━━━━━━━━━━━
*SJT Registered Hub:*
Thotada Guddadhalli Village, Bengaluru, Thammenahalli, Bangalore-562162
━━━━━━━━━━━━━━━━━━━━━
_We request SJT Corporate Fleet team to share standard SLA, vehicle inspection details, and monthly attachment rate card._`;

      const waUrl = `https://wa.me/${SJT_PHONE}?text=${encodeURIComponent(corpMessage)}`;
      window.open(waUrl, '_blank');
      showToast('Corporate RFP request submitted! Opening WhatsApp...');
    });
  }

  // 11. Direct Contact Message Form
  const contactForm = document.getElementById('directContactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('contactName')?.value.trim() || 'Customer';
      const phone = document.getElementById('contactPhone')?.value.trim() || '';
      const subject = document.getElementById('contactSubject')?.value.trim() || 'General Enquiry';
      const message = document.getElementById('contactMessage')?.value.trim() || '';

      const contactMsg =
`*NEW INQUIRY VIA WEBSITE - SJT TOURS & TRAVELS*
━━━━━━━━━━━━━━━━━━━━━
👤 *From:* ${name}
📞 *Phone:* ${phone}
📋 *Subject:* ${subject}
💬 *Message:* ${message}
━━━━━━━━━━━━━━━━━━━━━
*Office Location:*
Thotada Guddadhalli Village, Bengaluru, Thammenahalli, Bangalore-562162, Karnataka
━━━━━━━━━━━━━━━━━━━━━
_Sent from SJT Official Portal Contact Form_`;

      const waUrl = `https://wa.me/${SJT_PHONE}?text=${encodeURIComponent(contactMsg)}`;
      window.open(waUrl, '_blank');
      showToast('Thank you! Redirecting to WhatsApp support desk...');
    });
  }

  // 12. Interactive Photo Gallery Tabs & Lightbox
  const galleryTabs = document.querySelectorAll('.btn-gallery-tab, .gallery-tab-btn');
  const galleryTiles = document.querySelectorAll('.gallery-tile, .gallery-photo-card');

  galleryTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      galleryTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const filterCat = tab.dataset.filter;
      galleryTiles.forEach(tile => {
        if (filterCat === 'all' || tile.dataset.category === filterCat) {
          tile.style.display = 'block';
        } else {
          tile.style.display = 'none';
        }
      });
    });
  });

  galleryTiles.forEach(tile => {
    tile.addEventListener('click', () => {
      const img = tile.querySelector('img');
      const caption = tile.querySelector('.gallery-caption-text')?.textContent || 'SJT Tours & Travels Fleet';
      if (img && lightboxBackdrop && lightboxImg) {
        lightboxImg.src = img.src;
        if (lightboxCaption) lightboxCaption.textContent = caption;
        lightboxBackdrop.classList.add('open');
      }
    });
  });

  if (lightboxCloseBtn && lightboxBackdrop) {
    lightboxCloseBtn.addEventListener('click', () => {
      lightboxBackdrop.classList.remove('open');
    });

    lightboxBackdrop.addEventListener('click', (e) => {
      if (e.target === lightboxBackdrop) {
        lightboxBackdrop.classList.remove('open');
      }
    });
  }

  // 13. FAQ Accordion Toggle
  const faqItems = document.querySelectorAll('.faq-panel-item, .faq-card');
  faqItems.forEach(item => {
    const btn = item.querySelector('.faq-head-btn, .faq-toggle-btn');
    if (btn) {
      btn.addEventListener('click', () => {
        const isOpen = item.classList.contains('open');
        faqItems.forEach(i => i.classList.remove('open'));
        if (!isOpen) {
          item.classList.add('open');
        }
      });
    }
  });

  // 14. Toast Notification Popup
  function showToast(message) {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 3800);
  }

  // 15. DYNAMIC MULTI-PAGE NAVIGATION ACTIVE LINK HIGHLIGHTER
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.desktop-nav .nav-link, .drawer-nav-item').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      link.classList.add('active');
    } else if (href && !href.startsWith('#') && href !== currentPath) {
      link.classList.remove('active');
    }
  });

  // 16. SCROLL-TRIGGERED REVEAL ANIMATIONS
  const revealElems = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealElems.length) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    revealElems.forEach(el => revealObserver.observe(el));
  } else {
    revealElems.forEach(el => el.classList.add('active'));
  }

  // 17. ANIMATED STATS COUNTER FOR ABOUT & CORPORATE PAGES
  const counterElems = document.querySelectorAll('.stat-counter-number[data-target]');
  if (counterElems.length && 'IntersectionObserver' in window) {
    const countObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = parseInt(entry.target.dataset.target, 10);
          const suffix = entry.target.dataset.suffix || '';
          const prefix = entry.target.dataset.prefix || '';
          let current = 0;
          const step = Math.max(1, Math.ceil(target / 40));
          const timer = setInterval(() => {
            current += step;
            if (current >= target) {
              current = target;
              clearInterval(timer);
            }
            entry.target.textContent = `${prefix}${current.toLocaleString()}${suffix}`;
          }, 35);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.25 });
    counterElems.forEach(c => countObserver.observe(c));
  }

  // 18. INTERACTIVE CATEGORY FILTER TABS (Vehicles, Destinations, Gallery)
  const filterBtns = document.querySelectorAll('.filter-tab-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      const items = document.querySelectorAll('.filterable-card, .vehicle-card, .destination-card, .gallery-mosaic-tile');
      items.forEach(item => {
        const category = item.dataset.category || '';
        if (filter === 'all' || category === filter || category.includes(filter)) {
          item.style.display = '';
          item.classList.add('active');
        } else {
          item.style.display = 'none';
        }
      });
    });
  });

  // 19. DEDICATED SUBPAGE FAQ ACCORDION HANDLER
  const accordionHeaders = document.querySelectorAll('.faq-accordion-header');
  accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
      const item = header.closest('.faq-accordion-item');
      if (!item) return;
      const isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-accordion-item').forEach(i => i.classList.remove('open'));
      if (!isOpen) {
        item.classList.add('open');
      }
    });
  });

  // Utilities
  function escapeHtml(text) {
    return (text || '').replace(/[&<>"']/g, function(m) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' }[m];
    });
  }

  function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }
});
