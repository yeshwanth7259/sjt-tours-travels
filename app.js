/**
 * SJT TOURS & TRAVELS PVT. LTD.
 * Safe Journeys | Happy Destinations
 * Core Interactive Application Engine
 * 24/7 Operations Desk: +91 99009 75920
 * Registered Hub: Sharanappa, # 101 1st main 4th cross BGS Layout near narasappa cricle Thotadaguddadahalli Nagasandra post Bangalore 560073
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // Constants
  const SJT_PHONE = '919900975920';

  // Comprehensive Location Database for Alphabet-by-Alphabet Autocomplete (All States & A-Z Cities)
  const LOCATION_DATABASE = [
    // --- ALL 28 INDIAN STATES & UNION TERRITORIES ---
    { name: 'Karnataka State (South India)', category: 'State Tour', icon: '🇮🇳', sub: 'Bengaluru, Mysore, Coorg, Hampi, Badami & Coastal Hubs' },
    { name: 'Kerala State (God\'s Own Country)', category: 'State Tour', icon: '🇮🇳', sub: 'Munnar, Alleppey Backwaters, Kochi, Wayanad & Kovalam' },
    { name: 'Tamil Nadu State (Temple Gateway)', category: 'State Tour', icon: '🇮🇳', sub: 'Chennai, Madurai, Rameshwaram, Ooty, Kodaikanal & Thanjavur' },
    { name: 'Goa State (Sun & Beaches)', category: 'State Tour', icon: '🇮🇳', sub: 'Panaji, Calangute, Baga, Fort Aguada, Colva & Dudhsagar' },
    { name: 'Andhra Pradesh & Telangana', category: 'State Tour', icon: '🇮🇳', sub: 'Tirupati Balaji, Hyderabad, Visakhapatnam & Vijayawada' },
    { name: 'Rajasthan State (Royal Heritage)', category: 'State Tour', icon: '🇮🇳', sub: 'Jaipur Pink City, Udaipur Lakes, Jodhpur & Jaisalmer Desert' },
    { name: 'Himachal Pradesh State (Himalayas)', category: 'State Tour', icon: '🇮🇳', sub: 'Shimla, Kullu, Manali Snow Valley, Dharamshala & Dalhousie' },
    { name: 'Jammu & Kashmir & Ladakh', category: 'State Tour', icon: '🇮🇳', sub: 'Srinagar Dal Lake, Gulmarg Gondola, Pahalgam & Leh' },
    { name: 'Uttarakhand State (Devbhoomi)', category: 'State Tour', icon: '🇮🇳', sub: 'Char Dham, Kedarnath, Badrinath, Rishikesh, Haridwar & Nainital' },
    { name: 'Maharashtra State', category: 'State Tour', icon: '🇮🇳', sub: 'Mumbai, Pune, Lonavala, Mahabaleshwar, Shirdi & Ajanta Ellora' },
    { name: 'Gujarat State', category: 'State Tour', icon: '🇮🇳', sub: 'Statue of Unity, Rann of Kutch, Dwarka, Somnath & Gir Forest' },
    { name: 'Uttar Pradesh State', category: 'State Tour', icon: '🇮🇳', sub: 'Kashi Vishwanath (Varanasi), Ayodhya Ram Mandir, Agra & Mathura' },
    { name: 'Madhya Pradesh State (Central India)', category: 'State Tour', icon: '🇮🇳', sub: 'Khajuraho Temples, Ujjain Mahakal, Bandhavgarh & Bhopal' },
    { name: 'Odisha State', category: 'State Tour', icon: '🇮🇳', sub: 'Puri Jagannath Temple, Konark Sun Temple & Chilika Lake' },
    { name: 'Sikkim & West Bengal', category: 'State Tour', icon: '🇮🇳', sub: 'Gangtok, Pelling, Darjeeling Tea Estates & Kolkata' },
    { name: 'Meghalaya & Assam (North East)', category: 'State Tour', icon: '🇮🇳', sub: 'Shillong, Cherrapunji Root Bridges, Kaziranga Rhino Safari & Guwahati' },

    // --- ALPHABETICAL DESTINATIONS & LOCALITIES (A - Z) ---
    // A
    { name: 'Airport - Kempegowda Bengaluru (BLR)', category: 'Airport Transfer', icon: '✈️', sub: 'Bengaluru 24/7 Flight Pickup/Drop Hub' },
    { name: 'Agra (Taj Mahal & Agra Fort)', category: 'World Wonder', icon: '🕌', sub: 'UNESCO World Heritage • Golden Triangle' },
    { name: 'Agumbe (Rainforest & Sunset View)', category: 'Western Ghats', icon: '🌄', sub: '350 KM • Shimoga Ghats & Waterfalls' },
    { name: 'Aihole & Pattadakal (UNESCO Temples)', category: 'Heritage', icon: '🛕', sub: '445 KM • Chalukya Rock Architecture' },
    { name: 'Alleppey / Alappuzha (Backwater Houseboats)', category: 'Kerala Waters', icon: '⛵', sub: '580 KM • Vembanad Lake & Canals' },
    { name: 'Amritsar (Golden Temple & Wagah Border)', category: 'Pilgrimage / Punjab', icon: '🛕', sub: 'Harmandir Sahib & Jallianwala Bagh' },
    { name: 'Ananthagiri Hills', category: 'Hill Station', icon: '🌄', sub: '540 KM • Green Hills & Nature Trails' },
    { name: 'Ayodhya (Shri Ram Janmabhoomi Mandir)', category: 'Top Pilgrimage', icon: '🛕', sub: 'Grand Ram Mandir & Sacred Saryu Ghats' },
    { name: 'Ahmedabad (Sabarmati & Heritage City)', category: 'Commercial City', icon: '🏙️', sub: 'Gujarat Mega City & Gandhi Ashram' },
    { name: 'Attibele / Anekal Industrial Corridor', category: 'Bangalore South', icon: '🏭', sub: '35 KM • Hosur Border Hub' },

    // B
    { name: 'Bengaluru - Central / Majestic', category: 'City Centre Hub', icon: '🏙️', sub: 'Bengaluru Railway & Bus Hub' },
    { name: 'Bandipur National Park & Tiger Reserve', category: 'Wildlife Safari', icon: '🐅', sub: '220 KM • Forest Jungle Safari & Chamarajanagar' },
    { name: 'Badami Cave Temples', category: 'UNESCO Heritage', icon: '🛕', sub: '450 KM • Red Sandstone Caves & Agastya Lake' },
    { name: 'Belur & Halebeedu (Hoysala Temples)', category: 'Heritage Wonder', icon: '🛕', sub: '220 KM • Intricate 12th Century Sculptures' },
    { name: 'Bellandur / Outer Ring Road (ORR)', category: 'IT Tech Park', icon: '🏢', sub: 'EcoWorld, EcoSpace & Prestige Tech Parks' },
    { name: 'Bannerghatta National Park', category: 'Day Outing', icon: '🦁', sub: '30 KM • Biological Safari, Zoo & Butterfly Park' },
    { name: 'Basavanagudi (Bull Temple & Gandhi Bazaar)', category: 'Bengaluru South', icon: '🛕', sub: 'South Bangalore Heritage & Food' },
    { name: 'BR Hills (Biligirirangana Hills)', category: 'Wildlife & Hills', icon: '🌄', sub: '175 KM • Biligiriranga Swamy Temple' },
    { name: 'Bheemeshwari (Cauvery Fishing Camp)', category: 'River Getaway', icon: '🚣', sub: '100 KM • Kaveri River Nature Camp' },
    { name: 'Belagavi / Belgaum (Suvarna Soudha)', category: 'Commercial City', icon: '🏙️', sub: '500 KM • North Karnataka Border' },
    { name: 'Bhopal & Sanchi Stupa', category: 'Heritage / MP', icon: '🏛️', sub: 'City of Lakes & Ancient Buddhist Stupas' },
    { name: 'Bhubaneswar (Temple City of India)', category: 'Odisha Hub', icon: '🛕', sub: 'Lingaraj Temple, Dhauli & Udayagiri' },

    // C
    { name: 'Coorg (Madikeri / Kushalnagar)', category: 'Top Hill Station', icon: '☕', sub: '265 KM • Coffee Estates, Abbey Falls & Raja\'s Seat' },
    { name: 'Chikmagalur (Mullayanagiri Peak)', category: 'Top Hill Station', icon: '🌄', sub: '245 KM • Highest Karnataka Peak & Waterfalls' },
    { name: 'Chennai (Central & Marina Beach)', category: 'Metropolitan', icon: '🏙️', sub: '350 KM • Tamil Nadu Capital Hub' },
    { name: 'Coimbatore & Isha Adiyogi Center', category: 'Spiritual / City', icon: '🛕', sub: '365 KM • 112ft Adiyogi & Western Ghats' },
    { name: 'Coonoor (Nilgiri Hills & Tea Gardens)', category: 'Hill Station', icon: '🌄', sub: '290 KM • Sim’s Park & Dolphin’s Nose' },
    { name: 'Chitradurga Fort (Kallina Kote)', category: 'Historic Fort', icon: '🏰', sub: '200 KM • Seven-Ring Stone Citadel' },
    { name: 'Chamundi Hills & Nandi Monolith', category: 'Heritage Hill', icon: '🛕', sub: '150 KM • Chamundeshwari Temple Viewpoint' },
    { name: 'Calicut / Kozhikode Beach', category: 'Kerala Coast', icon: '🌊', sub: '360 KM • Malabar Coast & Culinary Paradise' },
    { name: 'Cochin / Kochi Fort & Marine Drive', category: 'Coastal Heritage', icon: '⚓', sub: '530 KM • Chinese Fishing Nets & Mattancherry' },
    { name: 'Chandigarh (Rock Garden & Sukhna Lake)', category: 'Northern Hub', icon: '🏙️', sub: 'Himachal Gateway & Le Corbusier City' },

    // D
    { name: 'Dharmasthala (Lord Manjunatha Temple)', category: 'Temple Pilgrimage', icon: '🛕', sub: '300 KM • Sacred Coastal Karnataka Shrine' },
    { name: 'Dandeli (River Rafting & Jungle Camps)', category: 'Adventure', icon: '🚣', sub: '460 KM • Kali River Rapids & Hornbill Valley' },
    { name: 'Davangere (Benne Dosa Capital)', category: 'Commercial City', icon: '🏙️', sub: '260 KM • Central Karnataka Gateway' },
    { name: 'Devanahalli (Kempegowda Airport Hub)', category: 'North Bangalore', icon: '🏙️', sub: 'Airport Expressway & Tech Corridor' },
    { name: 'Delhi NCR (India Gate, Red Fort & Qutub)', category: 'Capital Territory', icon: '🏛️', sub: 'National Capital Hub & Historic Monuments' },
    { name: 'Dehradun (Doon Valley & Tapkeshwar)', category: 'Uttarakhand Hub', icon: '🌄', sub: 'Garhwal Gateway & Forest Research Institute' },
    { name: 'Dharamshala & McLeodGanj (Dalai Lama)', category: 'Himachal Hills', icon: '🏔️', sub: 'Dhauladhar Ranges & Tibetan Culture' },
    { name: 'Doddaballapura Industrial Area', category: 'North Bangalore', icon: '🏭', sub: '40 KM • Industrial Corridor Hub' },

    // E
    { name: 'Electronic City (Phase 1 & Phase 2)', category: 'IT Tech Hub', icon: '🏢', sub: 'Infosys, Wipro, Tech Corridors & Elevated HW' },
    { name: 'Ernakulam / Kochi CBD', category: 'Kerala Metro', icon: '🏙️', sub: 'Commercial Heart of Kerala' },
    { name: 'Erode & Bhavani Sangameshwarar', category: 'Industrial / Temple', icon: '🛕', sub: '280 KM • Textile Hub & River Confluence' },
    { name: 'Ellora & Ajanta Caves (Aurangabad)', category: 'UNESCO Wonder', icon: '🛕', sub: 'Kailash Temple Monolith & Ancient Murals' },

    // F
    { name: 'Frazer Town / Pulikeshi Nagar', category: 'Bengaluru Central', icon: '🏙️', sub: 'Colonial Bangalore & Mosque Road Food Hub' },
    { name: 'Fatehpur Sikri (Buland Darwaza)', category: 'Mughal Heritage', icon: '🏰', sub: 'UNESCO Red Sandstone Citadel near Agra' },
    { name: 'Faridabad Industrial Hub', category: 'NCR Region', icon: '🏭', sub: 'Delhi NCR Commercial Corridor' },

    // G
    { name: 'Gokarna (Om Beach, Kudle & Mahabaleshwar)', category: 'Coastal Beaches', icon: '🏖️', sub: '485 KM • Arabian Sea Paradise & Atmalinga' },
    { name: 'Goa (Panaji, Calangute, Baga & South Goa)', category: 'Beach Holiday', icon: '🏖️', sub: '560 KM • Sun, Sand, Forts & Dudhsagar' },
    { name: 'Gangtok (Tsomgo Lake & Kanchenjunga View)', category: 'Sikkim Hills', icon: '🏔️', sub: 'Himalayan Buddhist Monasteries & MG Marg' },
    { name: 'Gandhinagar & Akshardham', category: 'Gujarat Capital', icon: '🛕', sub: 'Green Capital & Monumental Mandir' },
    { name: 'Gulbarga / Kalaburagi (Khwaja Bande Nawaz)', category: 'North Karnataka', icon: '🏰', sub: '580 KM • Bahmani Fort & Heritage Shrine' },
    { name: 'Gurugram / Cyber City (Cyber Hub)', category: 'Corporate Hub', icon: '🏢', sub: 'NCR Global Tech Parks & Expressway' },
    { name: 'Gwalior Fort & Jai Vilas Palace', category: 'Royal Fort', icon: '🏰', sub: 'Madhya Pradesh Hilltop Citadel' },

    // H
    { name: 'Hampi (UNESCO World Heritage Citadel)', category: 'Historic Wonder', icon: '🏛️', sub: '340 KM • Vijayanagara Stone Chariot & Tungabhadra' },
    { name: 'Hebbal / Manyata Tech Park', category: 'Tech Park Hub', icon: '🏢', sub: 'North Bangalore Tech Corridor & Flyover' },
    { name: 'Hassan (Hoysala Gateway & Gorur Dam)', category: 'Heritage Gateway', icon: '🏙️', sub: '180 KM • Belur-Halebeedu Junction' },
    { name: 'Hogenakkal Falls (Niagara of India)', category: 'Waterfalls', icon: '🌊', sub: '180 KM • Kaveri River & Coracle Rides' },
    { name: 'Horanadu (Annapoorneshwari Temple)', category: 'Temple Pilgrimage', icon: '🛕', sub: '310 KM • Western Ghats Sacred Valley' },
    { name: 'Hosur Industrial Hub & Border', category: 'Industrial Corridor', icon: '🏭', sub: '40 KM • Bangalore-Tamil Nadu Border' },
    { name: 'Hyderabad (Charminar, Hitec City & Golconda)', category: 'Metro Outstation', icon: '🏙️', sub: '570 KM • Cyberabad & Biryani Capital' },
    { name: 'Haridwar (Har Ki Pauri & Ganga Aarti)', category: 'Holy Pilgrimage', icon: '🌊', sub: 'Sacred Gateway to Himalayas & Kumbh City' },
    { name: 'Hubli / Hubballi & Dharwad', category: 'Commercial City', icon: '🏙️', sub: '410 KM • North Karnataka Commercial Nerve' },

    // I
    { name: 'Indiranagar / 100ft Road / CMH Road', category: 'Bengaluru Central', icon: '🏙️', sub: 'Central Business, Lifestyle & Dining Hub' },
    { name: 'Isha Foundation (Chikkaballapura)', category: 'Spiritual Center', icon: '🛕', sub: '65 KM • 112ft Adiyogi Statue Bangalore' },
    { name: 'Indore & Sarafa Bazaar (Cleanest City)', category: 'Madhya Pradesh', icon: '🏙️', sub: 'Rajwada Palace & Famous Food Street' },

    // J
    { name: 'Jog Falls (Gerosoppa Plunge Cascades)', category: 'Waterfalls', icon: '🌊', sub: '380 KM • Second Highest Plunge Falls in India' },
    { name: 'Jayanagar / JP Nagar / Banashankari', category: 'South Bengaluru', icon: '🏙️', sub: 'Traditional Bangalore & Kanakapura Corridor' },
    { name: 'Jaipur (Pink City, Amber Fort & Hawa Mahal)', category: 'Royal Rajasthan', icon: '🏰', sub: 'Golden Triangle & Royal Palaces' },
    { name: 'Jodhpur (Blue City & Mehrangarh Fort)', category: 'Royal Rajasthan', icon: '🏰', sub: 'Umaid Bhawan & Majestic Desert Citadel' },
    { name: 'Jaisalmer (Golden City & Sam Sand Dunes)', category: 'Desert Safari', icon: '🏜️', sub: 'Thar Desert Camel Safari & Living Fort' },
    { name: 'Jammu & Katra (Mata Vaishno Devi Shrine)', category: 'Holy Shrine', icon: '🛕', sub: 'Trikuta Hills Pilgrimage & Base Camp' },

    // K
    { name: 'Kodaikanal (Lake, Pillar Rocks & Coaker’s Walk)', category: 'Princess of Hills', icon: '🌄', sub: '465 KM • Misty Lake & Pine Forests' },
    { name: 'Kukke Subramanya Temple', category: 'Pilgrimage Shrine', icon: '🛕', sub: '280 KM • Sacred Western Ghats Snake Temple' },
    { name: 'Kabini & Nagarhole National Park', category: 'Jungle Safari', icon: '🐅', sub: '215 KM • Tiger, Leopard & Elephant Safari' },
    { name: 'Koramangala / HSR Layout', category: 'Bengaluru Tech', icon: '🏢', sub: 'Startup, Retail & Global IT Corridor' },
    { name: 'Kudremukh (Peak Trek & Shola Grasslands)', category: 'Trekking & Hills', icon: '🌄', sub: '330 KM • Horse-Face Peak Western Ghats' },
    { name: 'Kolar Gold Fields (KGF) & Kotilingeshwara', category: 'Historic Site', icon: '⛏️', sub: '100 KM • Historic Mines & 1 Crore Shiva Lingas' },
    { name: 'Kanyakumari (Triveni Sangam & Vivekananda Rock)', category: 'Southern Tip', icon: '🌊', sub: '680 KM • Sunrise-Sunset Confluence of 3 Oceans' },
    { name: 'Kedarnath Dham (Sacred Jyotirlinga)', category: 'Himalayan Yatra', icon: '🛕', sub: 'Lord Shiva Shrine at 3,584m Altitude' },
    { name: 'Kashi / Varanasi (Vishwanath & Ganga Aarti)', category: 'Eternal City', icon: '🛕', sub: 'Oldest Living City & Kashi Vishwanath Corridor' },
    { name: 'Katra / Vaishno Devi Darshan', category: 'Sacred Cave', icon: '🛕', sub: 'Bhavan Darshan, Ardhkuwari & Bhairon Ghati' },
    { name: 'Khajuraho (UNESCO Temples of Love)', category: 'World Heritage', icon: '🛕', sub: 'Chandel Dynasty Intricate Stone Sculptures' },
    { name: 'Kolkata (Howrah Bridge & Victoria Memorial)', category: 'City of Joy', icon: '🏛️', sub: 'Cultural Capital & Hooghly River' },

    // L
    { name: 'Lepakshi (Veerabhadra Temple & Monolithic Nandi)', category: 'Historic Heritage', icon: '🛕', sub: '120 KM • Hanging Pillar & Vijayanagara Art' },
    { name: 'Lalbagh Botanical Garden & Glass House', category: 'Bengaluru Landmark', icon: '🌿', sub: '240-Acre Heritage Botanical Garden' },
    { name: 'Leh Ladakh (Pangong Lake & Khardung La Pass)', category: 'High Altitude Desert', icon: '🏔️', sub: 'Highest Motorable Roads & Monasteries' },
    { name: 'Lonavala & Khandala (Tiger\'s Leap)', category: 'Hill Station / MH', icon: '🌄', sub: 'Sahyadri Hills, Bhushi Dam & Chikki' },
    { name: 'Lucknow (Bara Imambara & Nawabi Heritage)', category: 'Cultural Capital', icon: '🏛️', sub: 'Chikan Craft, Awadhi Food & Gomti River' },

    // M
    { name: 'Mysore / Mysuru (Grand Palace & Chamundi Hills)', category: 'Heritage City', icon: '🏰', sub: '145 KM • 10-Lane Expressway (~2 Hrs Drive)' },
    { name: 'Munnar (Tea Gardens, Mattupetty & Eravikulam)', category: 'Kerala Hills', icon: '🌄', sub: '475 KM • Anamudi Peak & Misty Slopes' },
    { name: 'Manali (Solang Valley, Rohtang & Atal Tunnel)', category: 'Himachal Snow', icon: '🏔️', sub: 'Snow Capped Peaks & Beas River Valley' },
    { name: 'Madurai (Meenakshi Amman Temple)', category: 'Heritage Pilgrimage', icon: '🛕', sub: '435 KM • Ancient 2500-Year Temple City' },
    { name: 'Mumbai (Gateway of India, Marine Drive & Bandra)', category: 'Metropolitan', icon: '🏙️', sub: 'Commercial Capital & Arabian Sea Promenade' },
    { name: 'Mangalore / Mangaluru (Panambur & Tannirbhavi)', category: 'Coastal Port City', icon: '🌊', sub: '350 KM • Coastal Karnataka & Seafood' },
    { name: 'Murudeshwar (Giant Shiva Statue & Beach)', category: 'Coastal Pilgrimage', icon: '🛕', sub: '490 KM • Seafront Monument & Raja Gopura' },
    { name: 'Mahabalipuram (Shore Temples & Five Rathas)', category: 'Coastal UNESCO', icon: '🏛️', sub: '380 KM • Bay of Bengal Monoliths' },
    { name: 'Mussoorie (Queen of Hills, Kempty Falls)', category: 'Hill Station', icon: '🌄', sub: 'Gun Hill, Mall Road & Doon Valley Views' },
    { name: 'Mathura & Vrindavan (Krishna Janmabhoomi)', category: 'Sacred Braj', icon: '🛕', sub: 'Bankey Bihari Mandir & Yamuna Ghats' },
    { name: 'Mount Abu (Dilwara Jain Temples & Nakki Lake)', category: 'Rajasthan Hills', icon: '🌄', sub: 'Only Hill Station in Rajasthan' },
    { name: 'Manyata Tech Park (Nagavara)', category: 'Corporate IT Hub', icon: '🏢', sub: 'North Bengaluru IT Park & Outer Ring Road' },
    { name: 'Malleshwaram / Rajajinagar', category: 'North-West Hub', icon: '🏙️', sub: 'Traditional Bengaluru Commercial Corridor' },
    { name: 'Marathahalli / HAL Airport Road', category: 'East Bengaluru', icon: '🏢', sub: 'IT Corridor & Ring Road Junction' },
    { name: 'Mandya (Sugar City & Srirangapatna Route)', category: 'Expressway Hub', icon: '🏙️', sub: '100 KM • Bangalore-Mysore Expressway' },
    { name: 'Madikeri (Coorg Capital & Raja\'s Tomb)', category: 'Coorg Heart', icon: '☕', sub: '260 KM • Western Ghats Coffee Town' },

    // N
    { name: 'Nandi Hills (Sunrise Cloud Walk)', category: 'Quick Getaway', icon: '🌄', sub: '60 KM • Early Morning Tipu\'s Drop Viewpoint' },
    { name: 'Nagarhole National Park (Kabini Reserve)', category: 'Wildlife Reserve', icon: '🐅', sub: '220 KM • Dense Teak Forests & Safari' },
    { name: 'Nagasandra BGS Layout (SJT Registered Hub)', category: 'Head Office', icon: '📍', sub: 'Sharanappa, # 101 BGS Layout, Near Narasappa Circle, Bangalore-560073' },
    { name: 'Nainital (Lake District & Naini Peak)', category: 'Kumaon Hills', icon: '⛵', sub: 'Emerald Naini Lake, Mall Road & Himalayan Views' },
    { name: 'Nashik & Trimbakeshwar Jyotirlinga', category: 'Pilgrimage / Wine', icon: '🛕', sub: 'Godavari River Ghats & Vineyards' },

    // O
    { name: 'Ooty (Queen of Hill Stations & Botanical Garden)', category: 'Queen of Hills', icon: '🌄', sub: '275 KM • 36 Hairpin Bends & Nilgiri Toy Train' },
    { name: 'Outer Ring Road (Marathahalli to Sarjapur)', category: 'Corporate Hub', icon: '🏢', sub: 'Bellandur & Tech Corridor Hub' },
    { name: 'Orchha Fort & Ram Raja Temple', category: 'Historic / MP', icon: '🏰', sub: 'Betwa River & Bundela Dynasty Palaces' },

    // P
    { name: 'Pondicherry / Puducherry (French White Town)', category: 'Coastal Heritage', icon: '🏖️', sub: '310 KM • Promenade Beach & Auroville' },
    { name: 'Peenya Industrial Hub / Tumkur Road', category: 'North-West Hub', icon: '🏭', sub: 'Near SJT Registered Operations Desk' },
    { name: 'Pune (IT Hub & Shaniwar Wada)', category: 'Maharashtra Hub', icon: '🏙️', sub: 'Oxford of the East & Sinhagad Fort' },
    { name: 'Puri (Lord Jagannath Temple & Golden Beach)', category: 'Char Dham East', icon: '🛕', sub: 'Grand Jagannath Temple & Blue Flag Beach' },
    { name: 'Pushkar (Lord Brahma Temple & Sacred Lake)', category: 'Spiritual Rajasthan', icon: '🛕', sub: 'Only Brahma Temple & Desert Fair' },
    { name: 'Pahalgam (Valley of Shepherds & Betaab Valley)', category: 'Kashmir Valley', icon: '🌲', sub: 'Lidder River, Baisaran Meadow & Pine Forests' },

    // Q
    { name: 'Qutub Minar & Mehrauli Heritage', category: 'Delhi Landmark', icon: '🏛️', sub: '73m Victory Tower & UNESCO Complex' },

    // R
    { name: 'Rameshwaram (Pamban Bridge & 22 Theerthams)', category: 'Sacred Island', icon: '🛕', sub: '600 KM • Ramanathaswamy Temple & Dhanushkodi' },
    { name: 'Rishikesh (Yoga Capital of the World & Ganga)', category: 'Spiritual Adventure', icon: '🌊', sub: 'Ram Jhula, Lakshman Jhula & River Rafting' },
    { name: 'Rajajinagar / Yeshwanthpur Junction', category: 'North-West Hub', icon: '🏙️', sub: 'Metro & Major Railway Terminal' },
    { name: 'Ranthambore National Park (Royal Bengal Tiger)', category: 'Tiger Safari', icon: '🐅', sub: 'Ancient Ranthambore Fort & Jeep Safari' },

    // S
    { name: 'Sakleshpur (Bisle Ghat & Railway Bridge Trek)', category: 'Nature Getaway', icon: '🌄', sub: '220 KM • Green Western Ghats & Coffee Hills' },
    { name: 'Shravanabelagola (57ft Bahubali Gommateshwara)', category: 'Jain Heritage', icon: '🛕', sub: '140 KM • Monolithic Granite Wonder' },
    { name: 'Srirangapatna (Tipu Sultan Palace & Temple)', category: 'Historic Island', icon: '🏰', sub: '125 KM • Kaveri River Island Citadel' },
    { name: 'Sringeri (Sharada Peetham on Tunga River)', category: 'Sacred Pilgrimage', icon: '🛕', sub: '320 KM • Adi Shankaracharya Peetham' },
    { name: 'Shimoga / Shivamogga (Malnad Gateway)', category: 'Malnad Gateway', icon: '🏙️', sub: '300 KM • Central Western Karnataka' },
    { name: 'Shivanasamudra Falls (Barachukki & Gaganachukki)', category: 'Twin Waterfalls', icon: '🌊', sub: '135 KM • Kaveri Gorge & Cascades' },
    { name: 'Srinagar (Dal Lake Houseboat & Mughal Gardens)', category: 'Kashmir Paradise', icon: '❄️', sub: 'Shikara Boat Rides & Shankaracharya Hill' },
    { name: 'Shimla (Ridge, Mall Road & Jakhoo Temple)', category: 'Himachal Capital', icon: '🏔️', sub: 'Colonial Summer Capital & Kufri Snow' },
    { name: 'Shirdi (Sai Baba Samadhi Mandir)', category: 'Top Pilgrimage', icon: '🛕', sub: 'Shri Saibaba Sansthan & Shani Shingnapur' },
    { name: 'Somnath Temple (First Jyotirlinga of Lord Shiva)', category: 'Sacred Coastal', icon: '🛕', sub: 'Gujarat Arabian Sea Monumental Temple' },

    // T
    { name: 'Tirupati (Lord Venkateswara Balaji Temple)', category: 'Top Pilgrimage', icon: '🛕', sub: '250 KM • Sacred Seven Hills of Tirumala' },
    { name: 'Thiruvannamalai (Arunachaleswarar Temple)', category: 'Holy Mountain', icon: '🛕', sub: '200 KM • Agni Lingam & Giri Pradakshina' },
    { name: 'Thanjavur (Brihadeeswarar UNESCO Big Temple)', category: 'Chola Heritage', icon: '🛕', sub: '390 KM • 1000-Year Architectural Marvel' },
    { name: 'Tumkur / Tumakuru Smart City', category: 'Industrial Hub', icon: '🏙️', sub: '70 KM • North Karnataka Gateway & Devarayanadurga' },
    { name: 'Thekkady (Periyar Lake Tiger Reserve)', category: 'Wildlife Sanctuary', icon: '🐅', sub: '510 KM • Jungle Boat Safari & Cardamom Hills' },
    { name: 'Trivandrum / Thiruvananthapuram (Padmanabha)', category: 'Kerala Capital', icon: '🛕', sub: 'Sree Padmanabhaswamy Temple & Kovalam' },

    // U
    { name: 'Udupi (Sri Krishna Mutt & Malpe Beach)', category: 'Coastal Temple', icon: '🛕', sub: '400 KM • St. Mary’s Basalt Island' },
    { name: 'Udaipur (City of Lakes & Lake Pichola)', category: 'Romantic Heritage', icon: '🏰', sub: 'City Palace, Jagdish Temple & Saheliyon ki Bari' },
    { name: 'Ujjain (Mahakaleshwar Jyotirlinga)', category: 'Sacred City', icon: '🛕', sub: 'Kshipra River, Bhasma Aarti & Kumbh City' },

    // V
    { name: 'Vijayapura / Bijapur (Gol Gumbaz)', category: 'Historic Citadel', icon: '🏛️', sub: '530 KM • World’s 2nd Largest Whispering Dome' },
    { name: 'Vidhana Soudha & Cubbon Park', category: 'Bengaluru Heart', icon: '🏛️', sub: 'Legislative Capitol & 300-Acre Green Lung' },
    { name: 'Varanasi / Kashi (Vishwanath Corridor)', category: 'Eternal City', icon: '🛕', sub: 'Ganga Dashashwamedh Ghat & Banaras' },
    { name: 'Visakhapatnam / Vizag & Araku Valley', category: 'Coastal Hills', icon: '🌊', sub: 'RK Beach, Borra Caves & Coffee Valleys' },
    { name: 'Vijayawada (Kanakadurga Temple)', category: 'Krishna River', icon: '🛕', sub: 'Indrakeeladri Hill & Prakasam Barrage' },
    { name: 'Vellore (Golden Sripuram Temple & Fort)', category: 'Tamil Nadu Hub', icon: '🛕', sub: '215 KM • Pure Gold Lakshmi Narayani Temple' },
    { name: 'Varkala (Papanasam Cliff Beach)', category: 'Kerala Cliffs', icon: '🏖️', sub: 'Arabian Sea Red Cliffs & Natural Springs' },
    { name: 'Vrindavan (Bankey Bihari & Prem Mandir)', category: 'Braj Bhoomi', icon: '🛕', sub: 'ISKCON Krishna Balaram & Nidhivan' },

    // W
    { name: 'Wayanad (Banasura Dam, Chembra & Edakkal)', category: 'Kerala Hills', icon: '🌄', sub: '280 KM • Coffee, Tea & Heart Lake Trek' },
    { name: 'Whitefield (ITPL & EPIP Zone)', category: 'Corporate IT Hub', icon: '🏢', sub: 'East Bangalore Tech Hub & Metro Line' },

    // Y
    { name: 'Yercaud (Shevaroy Hills, Lake & Anna Park)', category: 'Hill Station', icon: '🌄', sub: '230 KM • Jewel of the South / Salem Hills' },
    { name: 'Yelagiri (Green Valley & Punganur Lake)', category: 'Weekend Outing', icon: '🌄', sub: '160 KM • Boating, Nature Park & Hills' },
    { name: 'Yelahanka New Town & Airport Corridor', category: 'North Bengaluru', icon: '🏙️', sub: 'Kempegowda Airport Gateway' },
    { name: 'Yeshwanthpur (Metro & Railway Terminal)', category: 'North-West Hub', icon: '🚆', sub: 'Major Transit Hub near Nagasandra' },

    // Z
    { name: 'Ziro Valley (Pine Hills & Apatani Tribe)', category: 'Arunachal Hills', icon: '🌿', sub: 'UNESCO Cultural Landscape & Green Terraces' }
  ];

  // Vehicle Rates Matrix (For WhatsApp and Slip Generation)
  const VEHICLE_PRICING = {
    'swift': { name: 'Maruti Swift (4 Seater)', perKm: 12, minKmDay: 250, baseDay: 3000 },
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
  const localSlabFieldGroup = document.getElementById('localSlabFieldGroup');
  const localSlabSubbar = document.getElementById('localSlabSubbar');
  const localPackageSlabSelect = document.getElementById('localPackageSlabSelect');
  const slabChipBtns = document.querySelectorAll('.slab-chip-btn');

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
  let currentLocalSlab = '8hr';

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

  // 3. Trip Mode Switcher & Local Slab Controls
  function setLocalSlab(slab) {
    currentLocalSlab = slab;
    if (localPackageSlabSelect) localPackageSlabSelect.value = slab;
    slabChipBtns.forEach(chip => {
      chip.classList.toggle('active', chip.dataset.slab === slab);
    });
    if (currentTripMode === 'local' && dropInput && dropInput.value.includes('Local Disposal')) {
      dropInput.value = `Bangalore Local Disposal (${slab === '4hr' ? '4 Hr / 40 Km' : '8 Hr / 80 Km'})`;
    }
  }

  slabChipBtns.forEach(chip => {
    chip.addEventListener('click', () => {
      setLocalSlab(chip.dataset.slab);
    });
  });

  if (localPackageSlabSelect) {
    localPackageSlabSelect.addEventListener('change', (e) => {
      setLocalSlab(e.target.value);
    });
  }

  const bookingInputsGrid = document.getElementById('bookingInputsGrid') || document.querySelector('.booking-inputs-grid');

  tripModeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tripModeBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentTripMode = btn.dataset.mode;

      if (bookingInputsGrid) {
        if (currentTripMode === 'one-way') {
          bookingInputsGrid.classList.add('mode-one-way');
        } else {
          bookingInputsGrid.classList.remove('mode-one-way');
        }
      }

      const dropLabel = document.querySelector('label[for="dropLocationInput"]');

      if (currentTripMode === 'local') {
        if (returnDateFieldGroup) returnDateFieldGroup.style.display = 'none';
        if (localSlabFieldGroup) localSlabFieldGroup.style.display = 'flex';
        if (localSlabSubbar) localSlabSubbar.style.display = 'inline-flex';

        if (dropLabel) dropLabel.textContent = 'To (Area / Sightseeing)';
        if (dropInput) {
          dropInput.placeholder = `e.g. Bangalore Local Sightseeing / Meetings (${currentLocalSlab === '4hr' ? '4 Hr / 40 Km' : '8 Hr / 80 Km'})`;
          if (!dropInput.value.trim() || dropInput.value.includes('Local Disposal')) {
            dropInput.value = `Bangalore Local Disposal (${currentLocalSlab === '4hr' ? '4 Hr / 40 Km' : '8 Hr / 80 Km'})`;
            if (dropClearBtn) dropClearBtn.style.display = 'flex';
          }
        }
      } else {
        if (localSlabFieldGroup) localSlabFieldGroup.style.display = 'none';
        if (localSlabSubbar) localSlabSubbar.style.display = 'none';

        if (currentTripMode === 'one-way') {
          if (returnDateFieldGroup) returnDateFieldGroup.style.display = 'none';
        } else {
          if (returnDateFieldGroup) returnDateFieldGroup.style.display = 'flex';
        }

        if (dropLabel) {
          dropLabel.textContent = currentTripMode === 'outstation' ? 'To (Outstation Destination)' : 'To (Destination)';
        }
        if (dropInput) {
          dropInput.placeholder = currentTripMode === 'outstation' 
            ? 'Type outstation city... (e.g. Coorg, Ooty, Mysore)' 
            : 'Type destination... (e.g. C, O, M)';
          if (dropInput.value.includes('Local Disposal')) {
            dropInput.value = '';
            if (dropClearBtn) dropClearBtn.style.display = 'none';
          }
        }
      }
    });
  });

  window.selectTripMode = function(mode) {
    if (mode === 'local-hourly' || mode === 'local-8hr') {
      mode = 'local';
      setLocalSlab('8hr');
    } else if (mode === 'local-4hr') {
      mode = 'local';
      setLocalSlab('4hr');
    }
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
            loc.name.includes('Bengaluru') || loc.name.includes('Airport') || loc.name.includes('Electronic City') || loc.name.includes('Manyata') || loc.name.includes('Nagasandra')
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

    if (currentTripMode === 'local') {
      if (currentLocalSlab === '4hr') {
        const amt = Math.round(vehicle.baseDay * 0.45);
        return {
          amount: amt,
          label: '₹' + amt.toLocaleString('en-IN') + ' (4 Hr / 40 Km)',
          approxKm: 40,
          slabTitle: '4 Hours / 40 KM Local Package'
        };
      } else {
        const amt = Math.round(vehicle.baseDay * 0.65);
        return {
          amount: amt,
          label: '₹' + amt.toLocaleString('en-IN') + ' (8 Hr / 80 Km)',
          approxKm: 80,
          slabTitle: '8 Hours / 80 KM Local Package'
        };
      }
    } else if (currentTripMode === 'one-way') {
      const totalKm = Math.max(Math.round(estimatedKm * 1.3), vehicle.minKmDay);
      const fare = totalKm * vehicle.perKm;
      return {
        amount: fare,
        label: '₹' + fare.toLocaleString('en-IN') + ' Approx*',
        approxKm: totalKm,
        slabTitle: 'One Way Outstation'
      };
    } else if (currentTripMode === 'outstation') {
      const totalKm = Math.max(estimatedKm * 2, vehicle.minKmDay * 2);
      const fare = totalKm * vehicle.perKm;
      return {
        amount: fare,
        label: '₹' + fare.toLocaleString('en-IN') + ' Approx*',
        approxKm: totalKm,
        slabTitle: 'Outstation Multi-Day Tour'
      };
    } else {
      const totalKm = Math.max(estimatedKm * 2, vehicle.minKmDay);
      const fare = totalKm * vehicle.perKm;
      return {
        amount: fare,
        label: '₹' + fare.toLocaleString('en-IN') + ' Approx*',
        approxKm: totalKm,
        slabTitle: 'Round Trip Outstation'
      };
    }
  }

  // 6. Booking Form Submission -> WhatsApp + Official Slip Generation
  if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
      e.preventDefault();

      let pickup = pickupInput?.value.trim() || 'Bengaluru';
      let drop = dropInput?.value.trim() || '';

      if (currentTripMode === 'local') {
        if (!drop) {
          drop = `Bangalore Local Disposal (${currentLocalSlab === '4hr' ? '4 Hr / 40 Km' : '8 Hr / 80 Km'})`;
        }
      } else if (currentTripMode === 'outstation') {
        if (!drop) drop = 'Outstation Holiday / Tour Destination';
      } else {
        if (!drop) drop = 'Outstation Sightseeing / Tour';
      }

      const travelDate = travelDateInput?.value || new Date().toISOString().split('T')[0];
      const returnDate = returnDateInput?.value || '';
      const vehicleKey = vehicleSelect?.value || 'tempo-12';
      const vehicle = VEHICLE_PRICING[vehicleKey] || { name: 'Tempo Traveller', perKm: 22 };
      const fareInfo = getEstimatedFareDetails(drop, vehicleKey);

      let tripModeTitle = 'ROUND TRIP OUTSTATION';
      if (currentTripMode === 'one-way') {
        tripModeTitle = 'ONE WAY OUTSTATION DROP';
      } else if (currentTripMode === 'outstation') {
        tripModeTitle = 'OUTSTATION MULTI-DAY TOUR';
      } else if (currentTripMode === 'local') {
        tripModeTitle = currentLocalSlab === '4hr' 
          ? 'LOCAL PACKAGE (4 HR / 40 KM SLAB)' 
          : 'LOCAL PACKAGE (8 HR / 80 KM SLAB)';
      }

      const randomId = Math.floor(1000 + Math.random() * 9000);
      const bookingRef = `SJT-${new Date().getFullYear()}-${randomId}`;

      const waText = 
`*NEW TRAVEL ENQUIRY - SJT TOURS & TRAVELS PVT. LTD.*
━━━━━━━━━━━━━━━━━━━━━
🔖 *Booking Ref:* ${bookingRef}
🚖 *Trip Mode:* ${tripModeTitle}
📍 *Pickup Location:* ${pickup}
🏁 *Destination / Usage:* ${drop}
📅 *Journey Date:* ${travelDate}
${returnDate ? `🔙 *Return Date:* ${returnDate}\n` : ''}🚐 *Vehicle Requested:* ${vehicle.name}
💰 *Estimated Fare:* ${fareInfo.label}
━━━━━━━━━━━━━━━━━━━━━
*SJT Registered Hub:*
Sharanappa, # 101 1st main 4th cross BGS Layout near narasappa cricle Thotadaguddadahalli Nagasandra post Bangalore 560073
━━━━━━━━━━━━━━━━━━━━━
_Please confirm vehicle availability, driver contact, and final best quote._`;

      const waUrl = `https://wa.me/${SJT_PHONE}?text=${encodeURIComponent(waText)}`;

      // Direct WhatsApp Launch immediately on click / submit event
      try {
        const waWin = window.open(waUrl, '_blank');
        if (!waWin || waWin.closed || typeof waWin.closed === 'undefined') {
          window.location.href = waUrl;
        }
      } catch (err) {
        window.location.href = waUrl;
      }

      showBookingSlipModal({
        ref: bookingRef,
        pickup,
        drop,
        travelDate,
        returnDate,
        vehicleName: vehicle.name,
        fare: fareInfo.label,
        tripMode: tripModeTitle,
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
            <div style="font-size: 0.75rem; color: var(--slate-500);">Sharanappa, # 101 BGS Layout, Nagasandra, Bangalore-560073</div>
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
        const textToCopy = `SJT Tours & Travels Booking Ref: ${data.ref} | From: ${data.pickup} to ${data.drop} | Vehicle: ${data.vehicleName} | Date: ${data.travelDate} | Hub: Sharanappa, # 101 BGS Layout Nagasandra Bangalore 560073`;
        navigator.clipboard.writeText(textToCopy).then(() => {
          showToast('Quotation details copied to clipboard!');
        });
      });
    }
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
Sharanappa, # 101 1st main 4th cross BGS Layout near narasappa cricle Thotadaguddadahalli Nagasandra post Bangalore 560073
━━━━━━━━━━━━━━━━━━━━━
_We request SJT Corporate Fleet team to share standard SLA, vehicle inspection details, and monthly attachment rate card._`;

      const waUrl = `https://wa.me/${SJT_PHONE}?text=${encodeURIComponent(corpMessage)}`;
      try {
        const waWin = window.open(waUrl, '_blank');
        if (!waWin || waWin.closed || typeof waWin.closed === 'undefined') {
          window.location.href = waUrl;
        }
      } catch (err) {
        window.location.href = waUrl;
      }
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
Sharanappa, # 101 1st main 4th cross BGS Layout near narasappa cricle Thotadaguddadahalli Nagasandra post Bangalore 560073
━━━━━━━━━━━━━━━━━━━━━
_Sent from SJT Official Portal Contact Form_`;

      const waUrl = `https://wa.me/${SJT_PHONE}?text=${encodeURIComponent(contactMsg)}`;
      try {
        const waWin = window.open(waUrl, '_blank');
        if (!waWin || waWin.closed || typeof waWin.closed === 'undefined') {
          window.location.href = waUrl;
        }
      } catch (err) {
        window.location.href = waUrl;
      }
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

  // ==========================================================================
  // 20. ALL-INDIA PACKAGES INTERACTIVE ENGINE (SEARCH, FILTERS, MODAL & BUILDER)
  // ==========================================================================
  const PACKAGES_DATABASE = {
    'pkg-rajasthan': {
      title: 'Royal Rajasthan Heritage & Golden Dunes Circuit',
      state: 'Rajasthan',
      zone: 'West India',
      duration: '7 Days / 6 Nights',
      pickup: 'Jaipur / Delhi / Bangalore',
      fleet: 'Innova Crysta / Tempo Traveller / Sedan',
      price: '₹24,500',
      image: 'assets/packages/rajasthan.jpg',
      route: 'Jaipur • Jodhpur • Udaipur • Jaisalmer Thar Desert',
      days: [
        { day: 'Day 1', title: 'Pink City Arrival & Royal Palaces', desc: 'Arrive in Jaipur. Check in to your hotel. Visit the grand City Palace, Jantar Mantar UNESCO observatory, and evening photo stop at illuminated Hawa Mahal facade.' },
        { day: 'Day 2', title: 'Amber Citadel & Nahargarh Sunset', desc: 'Ascend to the hilltop Amber Fort via elephant/jeep ride. Visit Jal Mahal floating palace, Jaigarh cannon fort, and panoramic sunset over Jaipur from Nahargarh.' },
        { day: 'Day 3', title: 'Jaipur to Blue City Jodhpur', desc: 'Scenic highway transfer to Jodhpur via holy Pushkar Lake & Brahma Temple. Check in and explore local spice markets around Ghanta Ghar.' },
        { day: 'Day 4', title: 'Mehrangarh Fort & Thar Desert Drive', desc: 'Explore the monumental Mehrangarh Fort, Jaswant Thada royal cenotaphs, and Umaid Bhawan Palace. Drive towards Jaisalmer Golden City.' },
        { day: 'Day 5', title: 'Jaisalmer Fort & Sam Desert Dunes Safari', desc: 'Visit living sandstone Jaisalmer Fort & Patwon Ki Haveli. Transfer to Sam Sand Dunes for camel desert safari, sunset dunes photography, and Kalbeliya folk music under starlit Swiss tents.' },
        { day: 'Day 6', title: 'Jaisalmer to Venice of the East Udaipur', desc: 'Drive across the Aravalli range to romantic Udaipur, stopping at the intricately sculpted 15th-century Ranakpur Marble Jain Temples.' },
        { day: 'Day 7', title: 'Udaipur Lake Pichola & Departure', desc: 'Visit Udaipur City Palace, Saheliyon Ki Bari fountains, enjoy a scenic motorboat cruise on Lake Pichola viewing Jag Mandir, followed by airport/railway drop.' }
      ]
    },
    'pkg-himachal': {
      title: 'Manali, Solang Valley & Rohtang Snowline Tour',
      state: 'Himachal Pradesh',
      zone: 'North India',
      duration: '6 Days / 5 Nights',
      pickup: 'Chandigarh / Delhi / Bangalore Flight Drop',
      fleet: 'Executive SUV / 12-17 Seater Tempo',
      price: '₹19,500',
      image: 'assets/packages/himachal.jpg',
      route: 'Shimla • Kullu • Manali • Solang • Atal Tunnel • Sissu',
      days: [
        { day: 'Day 1', title: 'Foothills to Colonial Shimla', desc: 'Scenic mountain climb along Shivalik hills. Arrive in Shimla, check in, and evening walking tour of the historic British Ridge, Christ Church, and bustling Mall Road.' },
        { day: 'Day 2', title: 'Shimla to Manali via Kullu Valley', desc: 'Drive through Sundernagar Lake, Pandoh Dam, and Kullu Valley. Visit traditional Kullu Shawl weaving emporiums and drive along crystal-clear Beas River to Manali.' },
        { day: 'Day 3', title: 'Manali Local Sightseeing & Springs', desc: 'Visit the 450-year-old wooden Hadimba Devi Temple in cedar forest, Vashisht hot sulphur springs, Tibetan Monastery, and Old Manali riverside cafes.' },
        { day: 'Day 4', title: 'Solang Valley & Atal Tunnel to Lahaul', desc: 'Full-day snow adventure at Solang Valley (skiing, zorbing, ropeway). Drive through the engineering wonder Atal Tunnel (9.02 KM) to the snowscapes of Sissu in Lahaul Valley.' },
        { day: 'Day 5', title: 'Kullu River Rafting & Kasol / Manikaran', desc: 'Thrill-filled white-water rafting on Beas River in Kullu. Excursion to Parvati Valley, Kasol scenic village, and sacred Manikaran Sahib Gurudwara hot springs.' },
        { day: 'Day 6', title: 'Manali to Chandigarh / Delhi Drop', desc: 'Morning descent through scenic Himachal valleys with sweet Himalayan apples and woolens shopping, dropping you comfortably at Chandigarh or Delhi airport.' }
      ]
    },
    'pkg-kashmir': {
      title: 'Kashmir Valley, Gulmarg & Dal Lake Wonder',
      state: 'Jammu & Kashmir',
      zone: 'North India',
      duration: '6 Days / 5 Nights',
      pickup: 'Srinagar Airport (SXR)',
      fleet: 'Toyota Innova Crysta / Luxury Coach',
      price: '₹22,000',
      image: 'assets/packages/kashmir.jpg',
      route: 'Srinagar • Gulmarg • Pahalgam • Sonamarg',
      days: [
        { day: 'Day 1', title: 'Welcome to Paradise & Houseboat Stay', desc: 'Meet your chauffeur at Srinagar Airport. Transfer to a handcrafted luxury wooden houseboat on Dal Lake. Enjoy a relaxing 1-hour sunset Shikara ride across floating lotus gardens.' },
        { day: 'Day 2', title: 'Srinagar to Gulmarg Meadow of Flowers', desc: 'Drive to Gulmarg (8,825 ft). Ride the world-famous Gulmarg Gondola Phase 1 (Kongdoori) & Phase 2 (Apharwat Peak 13,780 ft) for breathtaking snow slopes and pine valley vistas.' },
        { day: 'Day 3', title: 'Gulmarg to Saffron Valleys & Pahalgam', desc: 'Scenic journey to Pahalgam (Valley of Shepherds), passing golden saffron fields of Pampore and 9th-century Avantipur temple ruins along the sparkling Lidder River.' },
        { day: 'Day 4', title: 'Pahalgam Betaab & Aru Valley Excursions', desc: 'Visit picturesque Betaab Valley (named after the Bollywood classic), lush Aru Valley, and optional pony trek to Baisaran Meadow (Mini Switzerland).' },
        { day: 'Day 5', title: 'Pahalgam to Srinagar Mughal Heritage', desc: 'Return to Srinagar. Visit famous Mughal Gardens: Shalimar Bagh, Nishat Bagh, Chashme Shahi, and climb to Shankaracharya Temple for 360-degree views of Srinagar city.' },
        { day: 'Day 6', title: 'Sonamarg Day Trip / Airport Departure', desc: 'Excursion to Sonamarg (Meadow of Gold) & Thajiwas Glacier pony snow walk, followed by drop-off at Srinagar Airport with sweet Kashmiri saffron and walnuts.' }
      ]
    },
    'pkg-chardham': {
      title: 'Devbhoomi Complete Char Dham Maha Yatra',
      state: 'Uttarakhand',
      zone: 'Pilgrimage',
      duration: '10 Days / 9 Nights',
      pickup: 'Haridwar / Dehradun / Delhi',
      fleet: 'Pushback Tempo Traveller / Innova Crysta',
      price: '₹38,000',
      image: 'assets/packages/chardham.jpg',
      route: 'Haridwar • Yamunotri • Gangotri • Kedarnath • Badrinath • Rishikesh',
      days: [
        { day: 'Day 1', title: 'Haridwar to Barkot', desc: 'Commence holy yatra from Haridwar via Mussoorie Kempty Falls. Drive along pristine Yamuna River valley to Barkot base camp.' },
        { day: 'Day 2', title: 'Barkot - Yamunotri Dham Darshan', desc: 'Drive to Janki Chatti. Trek 6 KM to sacred Yamunotri Temple. Holy bath in hot Jamunabai Kund, Surya Kund rice cooking ritual, and return to Barkot.' },
        { day: 'Day 3', title: 'Barkot to Uttarkashi', desc: 'Drive along Bhagirathi River to historic Uttarkashi. Visit ancient Kashi Vishwanath Temple with giant copper Shakti trident.' },
        { day: 'Day 4', title: 'Uttarkashi - Gangotri Dham Darshan', desc: 'Scenic drive through Harshil Valley (apple orchards). Holy darshan at Gangotri Temple on banks of Bhagirathi River. Return to Uttarkashi.' },
        { day: 'Day 5', title: 'Uttarkashi to Guptkashi / Phata', desc: 'Drive across scenic Mandakini valley views to Guptkashi. Prepare for Kedarnath trek/helicopter registration.' },
        { day: 'Day 6', title: 'Guptkashi to Kedarnath Shrine', desc: 'Early transfer to Sonprayag/Gaurikund. Trek or take helicopter to Kedarnath (11,755 ft). Attend divine evening aarti at the ancient Kedarnath Jyotirlinga.' },
        { day: 'Day 7', title: 'Kedarnath to Pipalkoti / Joshimath', desc: 'Morning darshan at Kedarnath. Descend back to Gaurikund, meet vehicle, and drive through Chopta scenic meadows to Pipalkoti.' },
        { day: 'Day 8', title: 'Pipalkoti to Badrinath Dham', desc: 'Drive via Joshimath to Badrinath (10,279 ft). Holy dip in natural Tapt Kund, darshan of Lord Badri Vishal, visit Mana (last Indian village) and Vyas Gufa.' },
        { day: 'Day 9', title: 'Badrinath to Rudraprayag / Srinagar', desc: 'Morning Maha Abhishek darshan. Drive down witnessing holy river confluences (Panch Prayag: Vishnuprayag, Nandprayag, Karnaprayag, Rudraprayag).' },
        { day: 'Day 10', title: 'Rudraprayag to Rishikesh & Haridwar Drop', desc: 'Drive via Devprayag (origin of River Ganga). Arrive in Rishikesh, visit Ram Jhula & Lakshman Jhula, culminate yatra with Triveni Ghat Ganga Aarti and drop at Haridwar.' }
      ]
    },
    'pkg-kerala': {
      title: 'Munnar Tea Hills & Alleppey Luxury Houseboat',
      state: 'Kerala',
      zone: 'South India',
      duration: '5 Days / 4 Nights',
      pickup: 'Cochin Airport (COK) / Bangalore',
      fleet: 'Executive Innova Crysta / Pushback Tempo',
      price: '₹17,500',
      image: 'assets/packages/kerala.jpg',
      route: 'Cochin • Munnar • Thekkady • Alleppey Backwaters',
      days: [
        { day: 'Day 1', title: 'Cochin to Misty Munnar Hills', desc: 'Warm reception at Cochin. Scenic climb through Western Ghats with photo stops at Cheeyappara and Valara waterfalls. Check in to tea valley resort.' },
        { day: 'Day 2', title: 'Munnar Full Day Tea Estates & Peaks', desc: 'Visit Eravikulam National Park to spot Nilgiri Tahr mountain goats. Explore Mattupetty Dam, Echo Point, Kundala Lake, and Tata Tea Museum.' },
        { day: 'Day 3', title: 'Munnar to Thekkady Spice Sanctuary', desc: 'Drive along spice plantations to Thekkady (Periyar). Enjoy guided spice plantation tour, Periyar Tiger Reserve lake boating, and evening martial art (Kalaripayattu) show.' },
        { day: 'Day 4', title: 'Thekkady to Alleppey Houseboat Cruise', desc: 'Drive to Alleppey (Venice of the East). Board private traditional AC deluxe houseboat at 12:00 PM. Cruise emerald backwaters, paddy fields, with freshly cooked authentic Kerala feast.' },
        { day: 'Day 5', title: 'Alleppey to Cochin Departure', desc: 'Morning breakfast on backwaters. Disembark houseboat, visit Fort Kochi historic Chinese Fishing Nets & Mattancherry Dutch Palace, with drop at Cochin Airport.' }
      ]
    },
    'pkg-varanasi': {
      title: 'Kashi Vishwanath, Ayodhya Ram Mandir & Prayagraj',
      state: 'Uttar Pradesh',
      zone: 'Pilgrimage',
      duration: '4 Days / 3 Nights',
      pickup: 'Varanasi Airport / Station',
      fleet: 'Executive Sedan / Innova / Tempo Traveller',
      price: '₹14,500',
      image: 'assets/packages/varanasi.jpg',
      route: 'Varanasi • Ayodhya • Prayagraj Sangam',
      days: [
        { day: 'Day 1', title: 'Arrival in Sacred Kashi & Ganga Aarti', desc: 'Pickup in Varanasi. Check in. Holy darshan at Kashi Vishwanath Golden Temple and Annapurna Temple. Witness grand sunset Ganga Aarti with flaming brass lamps from private boat.' },
        { day: 'Day 2', title: 'Subah-e-Banaras to Holy Ayodhya', desc: 'Dawn sunrise boat ride along Varanasi 84 ghats. Drive on green expressway to Ayodhya. Evening visit to Ram Ki Paidi and sacred Saryu river Maha Aarti.' },
        { day: 'Day 3', title: 'Shri Ram Janmabhoomi & Prayagraj', desc: 'Morning holy darshan at newly inaugurated Shri Ram Janmabhoomi Mandir and Hanuman Garhi. Drive to Prayagraj, visit holy Triveni Sangam for holy dip and Anand Bhavan.' },
        { day: 'Day 4', title: 'Prayagraj to Sarnath & Departure', desc: 'Visit Alopi Devi Shaktipeeth. Return drive to Varanasi, explore historic Sarnath Buddhist Deer Park (Dhamekh Stupa) where Buddha gave first sermon, followed by airport drop.' }
      ]
    },
    'pkg-meghalaya': {
      title: 'Enchanting Meghalaya & Kaziranga Safari',
      state: 'Meghalaya & Assam',
      zone: 'East & North-East',
      duration: '6 Days / 5 Nights',
      pickup: 'Guwahati Airport (GAU)',
      fleet: 'Innova Crysta / Force Tempo Traveller',
      price: '₹24,000',
      image: 'assets/packages/meghalaya.jpg',
      route: 'Guwahati • Shillong • Cherrapunji • Dawki • Kaziranga',
      days: [
        { day: 'Day 1', title: 'Guwahati to Scotland of the East Shillong', desc: 'Arrive at Guwahati Airport. Scenic drive to Shillong, stopping at vast Umiam Lake (Barapani). Evening shopping and cafe hop at vibrant Police Bazar.' },
        { day: 'Day 2', title: 'Shillong to Wettest Place Cherrapunji', desc: 'Visit Elephant Falls and Shillong Peak. Drive through dramatic cloud valleys to Cherrapunji (Sohra). Marvel at Nohkalikai Falls (tallest plunge falls) and Mawsmai limestone caves.' },
        { day: 'Day 3', title: 'Double Decker Living Root Bridges Trek', desc: 'Trek down into pristine Khasi rainforests from Tyrna to the awe-inspiring Double Decker Living Root Bridge, engineered out of rubber tree roots over centuries, and Rainbow Falls.' },
        { day: 'Day 4', title: 'Dawki Crystal Clear Waters & Mawlynnong', desc: 'Visit Mawlynnong (Asia’s Cleanest Village). Drive to Dawki on the Bangladesh border for a magical boat ride on the crystal-clear glass-like waters of Umngot River.' },
        { day: 'Day 5', title: 'Dawki to World Heritage Kaziranga', desc: 'Scenic cross-country transfer to Kaziranga National Park in Assam. Check in to jungle resort. Evening Assamese traditional Bihu folk cultural program.' },
        { day: 'Day 6', title: 'Kaziranga Rhino Safari & Guwahati Drop', desc: 'Early morning Elephant & Jeep Safari in Kaziranga Central Kohora Range spotting wild One-Horned Rhinoceros, swamp deer, and wild buffaloes. Transfer to Guwahati Airport with Kamakhya Temple visit.' }
      ]
    },
    'pkg-goldentriangle': {
      title: 'Golden Triangle: Delhi, Agra & Jaipur Splendour',
      state: 'Golden Triangle (Delhi-Agra-Jaipur)',
      zone: 'North India',
      duration: '4 Days / 3 Nights',
      pickup: 'New Delhi (DEL) / Airport / Railway',
      fleet: 'AC Sedan / Innova Crysta / Tempo Traveller',
      price: '₹13,500',
      image: 'assets/packages/golden_triangle.jpg',
      route: 'New Delhi • Agra Taj Mahal • Jaipur Pink City',
      days: [
        { day: 'Day 1', title: 'Capital Delhi Sightseeing & Agra Expressway', desc: 'Pickup in New Delhi. Drive past India Gate, Rashtrapati Bhavan, and visit Qutub Minar. Smooth cruise along Yamuna Expressway to royal Mughal city of Agra.' },
        { day: 'Day 2', title: 'Taj Mahal Sunrise to Jaipur via Fatehpur Sikri', desc: 'Experience breathtaking sunrise over the world-wonder Taj Mahal. Visit colossal Agra Fort. Drive to Jaipur, stopping at the red sandstone UNESCO ghost city of Fatehpur Sikri.' },
        { day: 'Day 3', title: 'Pink City Citadels & Palaces', desc: 'Ascend to the hilltop Amber Fort. Photo stop at Jal Mahal. Explore Jaipur City Palace, Jantar Mantar sundials, and the intricate honeycomb facade of Hawa Mahal.' },
        { day: 'Day 4', title: 'Nahargarh Fort & Return to Delhi', desc: 'Morning visit to Nahargarh Fort with bird-eye view of Pink City. Handcrafted blue pottery and gem shopping, followed by comfortable return highway drive to Delhi airport.' }
      ]
    },
    'pkg-karnataka': {
      title: 'Karnataka Royal Heritage, Western Ghats & Coast',
      state: 'Karnataka',
      zone: 'South India',
      duration: '7 Days / 6 Nights',
      pickup: 'Bangalore Doorstep / Hub',
      fleet: '12/17-Seater Tempo Traveller / Innova Crysta',
      price: '₹22,500',
      image: 'assets/destinations/coorg.jpg',
      route: 'Bangalore • Mysore • Coorg • Chikmagalur • Hampi • Gokarna',
      days: [
        { day: 'Day 1', title: 'Bangalore to Royal Mysore', desc: '10-Lane Expressway drive to Mysore. Visit grand illuminated Mysore Palace, Chamundi Hills, and Brindavan Gardens musical fountain show.' },
        { day: 'Day 2', title: 'Mysore to Scotland of India Coorg', desc: 'Visit Kushalnagar Golden Temple Tibetan monastery and Dubare Elephant Camp. Arrive in Madikeri, explore Abbey Falls and Raja’s Seat sunset point.' },
        { day: 'Day 3', title: 'Coorg to Coffee Land Chikmagalur', desc: 'Drive through verdant Western Ghats. Trek to Mullayanagiri (Karnataka’s highest summit 1,930m), Jhari Waterfalls, and relax in lush coffee homestays.' },
        { day: 'Day 4', title: 'Hoysala Wonders of Belur to UNESCO Hampi', desc: 'Marvel at 12th-century soapstone Hoysala temple carvings at Belur & Halebeedu. Drive north across Deccan plains to imperial ruins of Vijayanagara Hampi.' },
        { day: 'Day 5', title: 'Hampi Empire Citadel & Coracle Rides', desc: 'Explore Virupaksha Temple, the iconic Vittala Stone Chariot, Lotus Mahal, Elephant Stables, Matanga Hill sunrise, and Tungabhadra river coracle rides.' },
        { day: 'Day 6', title: 'Hampi to Pristine Coastal Gokarna', desc: 'Cross to the Arabian Sea coastline. Visit sacred Gokarna Mahabaleshwar Temple with Atmalinga, Om Beach cliff walk, and Kudle sunset.' },
        { day: 'Day 7', title: 'Gokarna & Murudeshwar to Bangalore Return', desc: 'Visit Murudeshwar towering 123ft Shiva sea statue and 18-storey Raja Gopura, followed by smooth highway return drive to Bangalore.' }
      ]
    },
    'pkg-goa': {
      title: 'Goa Beach Escapade, Forts & Sunset Cruises',
      state: 'Goa',
      zone: 'West India',
      duration: '4 Days / 3 Nights',
      pickup: 'Goa Airport / Bangalore Outstation Transfer',
      fleet: 'Innova Crysta / 12-Seater Tempo Traveller',
      price: '₹14,000',
      image: 'assets/services/family.jpg',
      route: 'North Goa • South Goa • Dudhsagar • Mandovi Cruise',
      days: [
        { day: 'Day 1', title: 'Welcome to Coastal Goa & Beach Sunset', desc: 'Arrive in Goa. Check into seaside resort. Relax at Calangute and Baga beaches, enjoy sunset beach shack dining and live coastal music.' },
        { day: 'Day 2', title: 'North Goa Forts & Water Sports', desc: 'Visit historic Fort Aguada lighthouse cliff, Chapora Fort (Dil Chahta Hai point), Vagator Beach, and thrilling banana boat / parasailing water sports at Anjuna.' },
        { day: 'Day 3', title: 'Old Goa UNESCO Churches & Dudhsagar', desc: 'Visit Basilica of Bom Jesus (relics of St. Francis Xavier) and Se Cathedral. Excursion to Dudhsagar 4-tiered waterfalls via open 4x4 jungle jeep safari.' },
        { day: 'Day 4', title: 'Miramar Beach, Mandovi Cruise & Departure', desc: 'Morning visit to Miramar Beach and Dona Paula viewpoint. Enjoy an exhilarating Mandovi River sunset cruise with Goan folk dances, followed by airport drop.' }
      ]
    },
    'pkg-tamilnadu': {
      title: 'Madurai Meenakshi, Rameswaram & Nilgiri Ooty',
      state: 'Tamil Nadu',
      zone: 'South India',
      duration: '6 Days / 5 Nights',
      pickup: 'Bangalore / Chennai / Madurai',
      fleet: 'Executive Tempo Traveller / Innova Crysta',
      price: '₹21,000',
      image: 'assets/destinations/ooty.jpg',
      route: 'Madurai • Rameswaram • Kanyakumari • Ooty',
      days: [
        { day: 'Day 1', title: 'Arrival in Temple City Madurai', desc: 'Drive to Madurai. Check in. Visit Thirumalai Nayakkar Palace and attend the divine evening palliyarai pooja at iconic Meenakshi Amman Temple.' },
        { day: 'Day 2', title: 'Madurai to Sacred Island Rameswaram', desc: 'Drive across the engineering marvel Pamban Sea Bridge. Bath in 22 sacred theerthams, Ramanathaswamy Temple corridor of 1000 pillars, and sunset at Agnitheertham.' },
        { day: 'Day 3', title: 'Ghost Town Dhanushkodi & Kanyakumari', desc: 'Visit the haunting ghost town of Dhanushkodi where Bay of Bengal meets Indian Ocean. Drive to Kanyakumari to witness sunset at the southernmost tip of mainland India.' },
        { day: 'Day 4', title: 'Kanyakumari Sunrise & Climb to Nilgiri Ooty', desc: 'Ferry ride to Vivekananda Rock Memorial & Thiruvalluvar Statue. Scenic mountain climb past Coimbatore and 36 hairpin bends to Queen of Hill Stations Ooty.' },
        { day: 'Day 5', title: 'Ooty & Coonoor Cloud Vistas', desc: 'Ride the UNESCO Nilgiri Mountain Toy Train, visit Sim’s Park in Coonoor, Doddabetta Peak (8,650 ft), Ooty Lake boating, and aromatic Government Botanical Garden.' },
        { day: 'Day 6', title: 'Ooty through Bandipur Forests to Bangalore', desc: 'Morning tea factory visit. Scenic drive down through Bandipur / Mudumalai Tiger Reserve wildlife corridor with elephant sightings, returning to Bangalore.' }
      ]
    },
    'pkg-gujarat': {
      title: 'Dwarka, Somnath Jyotirlinga, Gir Lions & Rann',
      state: 'Gujarat',
      zone: 'West India',
      duration: '6 Days / 5 Nights',
      pickup: 'Ahmedabad (AMD) / Rajkot',
      fleet: 'Toyota Innova Crysta / Tempo Traveller',
      price: '₹22,000',
      image: 'assets/services/wedding.jpg',
      route: 'Ahmedabad • Dwarka • Somnath • Gir National Park • White Rann',
      days: [
        { day: 'Day 1', title: 'Ahmedabad to Sacred Dwarka Kingdom', desc: 'Pickup in Ahmedabad. Visit Sabarmati Ashram, drive across Saurashtra to Lord Krishna’s holy citadel Dwarka. Attend evening Aarti at Dwarkadhish Temple.' },
        { day: 'Day 2', title: 'Dwarka to Somnath Seafront Jyotirlinga', desc: 'Ferry boat to Bet Dwarka island, visit Nageshwar Jyotirlinga, and drive along Arabian Sea to Somnath Temple for magnificent beachfront evening sound & light show.' },
        { day: 'Day 3', title: 'Somnath to Sasan Gir Lion Sanctuary', desc: 'Morning darshan at Somnath, visit Bhalka Tirth sacred spot. Drive to Sasan Gir, check into jungle lodge, and explore Gir crocodile breeding center.' },
        { day: 'Day 4', title: 'Gir Asiatic Lion Safari to Bhuj', desc: 'Dawn open-top Jeep Safari inside Gir National Park spotting wild Asiatic Lions and leopards. Scenic drive north across Gujarat to historic Kutch capital Bhuj.' },
        { day: 'Day 5', title: 'White Rann of Kutch Salt Desert Sunset', desc: 'Drive to Great Rann of Kutch. Climb Kalo Dungar (Black Hill) for horizon views. Walk across the endless shimmering white salt desert as the golden sunset turns pink and violet.' },
        { day: 'Day 6', title: 'Kutch Handicrafts & Return to Ahmedabad', desc: 'Visit artisan villages of Bhirandiyara and Nirona (Rogan art). Smooth return highway drive to Ahmedabad for departure flight/train.' }
      ]
    },
    'pkg-maharashtra': {
      title: 'Ajanta & Ellora Caves, Shirdi Sai Baba Kshetram',
      state: 'Maharashtra',
      zone: 'West India',
      duration: '5 Days / 4 Nights',
      pickup: 'Mumbai / Pune / Aurangabad',
      fleet: 'Executive Sedan / Innova Crysta',
      price: '₹17,000',
      image: 'assets/destinations/mysore.jpg',
      route: 'Mumbai/Pune • Shirdi • Aurangabad • Ellora & Ajanta • Mahabaleshwar',
      days: [
        { day: 'Day 1', title: 'Mumbai/Pune to Sacred Shirdi', desc: 'Early highway departure to Shirdi. Check in and experience blessed VIP Samadhi Mandir darshan, Dwarkamai, Chavadi, and Gurusthan.' },
        { day: 'Day 2', title: 'Shirdi to Aurangabad Heritage', desc: 'Visit Shani Shingnapur open-air temple. Transfer to Aurangabad. Explore Bibi Ka Maqbara (Taj of Deccan) and Panchakki historic water mill.' },
        { day: 'Day 3', title: 'Monolithic Kailasa Temple at Ellora', desc: 'Full day at UNESCO World Heritage Ellora Caves. Be stunned by Cave 16 (Kailasa Temple), carved out of a single vertical cliff face by 8th-century Rashtrakuta artisans.' },
        { day: 'Day 4', title: 'Ajanta Ancient Murals to Western Ghats', desc: 'Visit 30 rock-cut Buddhist cave monuments of Ajanta with 2,000-year-old preserved frescoes. Drive towards lush Western Ghats.' },
        { day: 'Day 5', title: 'Mahabaleshwar Viewpoints & Return Drop', desc: 'Explore Arthur’s Seat, Kate’s Point, Venna Lake boating, and fresh strawberry farms in Mahabaleshwar, returning smoothly to Pune/Mumbai.' }
      ]
    },
    'pkg-sikkim': {
      title: 'Gangtok, Tsomgo Glacial Lake & Darjeeling Hills',
      state: 'Sikkim & West Bengal',
      zone: 'East & North-East',
      duration: '6 Days / 5 Nights',
      pickup: 'Bagdogra (IXB) / NJP Railway',
      fleet: 'Innova Crysta / Scorpio / Tempo Traveller',
      price: '₹23,000',
      image: 'assets/destinations/chikmagalur.jpg',
      route: 'Bagdogra • Gangtok • Tsomgo Lake • Nathula • Darjeeling',
      days: [
        { day: 'Day 1', title: 'Bagdogra to Himalayan Capital Gangtok', desc: 'Picturesque mountain drive along roaring Teesta River. Arrive in Gangtok (5,500 ft), check in, and stroll along pedestrian flower-lined MG Marg.' },
        { day: 'Day 2', title: 'High-Altitude Tsomgo Lake & Nathula Pass', desc: 'Excursion to sacred glacial Tsomgo Lake (12,400 ft) surrounded by snow peaks. Visit Baba Harbhajan Singh Mandir and Indo-China border at Nathula Pass.' },
        { day: 'Day 3', title: 'Gangtok Monasteries to Queen of Hills Darjeeling', desc: 'Visit Rumtek Monastery (seat of Black Hat Karmapa) and Do Drul Chorten. Drive along tea-carpeted slopes into colonial hill retreat Darjeeling.' },
        { day: 'Day 4', title: 'Tiger Hill Golden Sunrise & Toy Train', desc: 'Wake up at 4:00 AM for sunrise over world’s 3rd highest peak Mt. Kanchenjunga from Tiger Hill. Experience Darjeeling UNESCO Toy Train joyride & Batasia Loop.' },
        { day: 'Day 5', title: 'Darjeeling Tea Estates & Mountaineering', desc: 'Visit Happy Valley Tea Estate with tea tasting, Himalayan Mountaineering Institute (HMI), Padmaja Naidu Himalayan Zoo (snow leopards & red pandas).' },
        { day: 'Day 6', title: 'Darjeeling to Bagdogra Drop via Mirik', desc: 'Scenic return drive via Mirik Lake and pine forests along the Nepal border corridor, dropping you comfortably at Bagdogra Airport.' }
      ]
    },
    'pkg-madhyapradesh': {
      title: 'Ujjain Mahakal, Khajuraho & Bandhavgarh Safari',
      state: 'Madhya Pradesh',
      zone: 'Pilgrimage',
      duration: '5 Days / 4 Nights',
      pickup: 'Indore / Bhopal / Jabalpur',
      fleet: 'Innova Crysta / Tempo Traveller',
      price: '₹18,000',
      image: 'assets/destinations/hampi.jpg',
      route: 'Indore • Ujjain • Omkareshwar • Khajuraho • Bandhavgarh',
      days: [
        { day: 'Day 1', title: 'Indore to Ujjain Mahakaleshwar', desc: 'Pickup in Indore. Transfer to Ujjain. Holy darshan at Shree Mahakaleshwar Jyotirlinga, Kal Bhairav Temple, and holy Shipra River Ram Ghat.' },
        { day: 'Day 2', title: 'Island Jyotirlinga Omkareshwar to Bhopal', desc: 'Drive to sacred Narmada River island shrine of Omkareshwar Jyotirlinga. Holy boat ride, temple darshan, and transfer to lake city Bhopal.' },
        { day: 'Day 3', title: 'Sanchi Stupa to Temple City Khajuraho', desc: 'Visit 3rd-century BC UNESCO Sanchi Buddhist Stupa. Scenic drive across Bundelkhand to world-famous temple art capital Khajuraho.' },
        { day: 'Day 4', title: 'Khajuraho Stone Carvings to Bandhavgarh', desc: 'Marvel at UNESCO Western Group of Temples (Kandariya Mahadeva). Drive to Bandhavgarh National Park, boasting India’s highest Royal Bengal Tiger density.' },
        { day: 'Day 5', title: 'Tiger Safari & Jabalpur Marble Rocks Drop', desc: 'Dawn open-top Jeep Safari inside Bandhavgarh core forest. Afternoon drive to Jabalpur, view stunning Bhedaghat Narmada Marble Rocks, and airport drop.' }
      ]
    },
    'pkg-odisha': {
      title: 'Puri Jagannath, Konark Sun Temple & Chilika Lake',
      state: 'Odisha',
      zone: 'East & North-East',
      duration: '4 Days / 3 Nights',
      pickup: 'Bhubaneswar Airport (BBI) / Puri',
      fleet: 'Executive Sedan / Innova / Tempo Traveller',
      price: '₹13,000',
      image: 'assets/services/pilgrimage.jpg',
      route: 'Bhubaneswar • Konark • Puri Jagannath • Chilika Lake',
      days: [
        { day: 'Day 1', title: 'Bhubaneswar to Sacred Puri Beach', desc: 'Pickup in temple city Bhubaneswar. Visit Dhauli Peace Pagoda and Pipili applique village. Check into seaside hotel in Puri and relax at Golden Beach.' },
        { day: 'Day 2', title: 'Lord Jagannath Dham & Konark Sun Temple', desc: 'Morning darshan at sacred Jagannath Temple and taste divine Mahaprasad. Drive along marine drive to the 13th-century UNESCO Konark Sun Temple chariot marvel.' },
        { day: 'Day 3', title: 'Chilika Lake Dolphin Lagoon Safari', desc: 'Excursion to Satapada on Chilika Lake (Asia’s largest coastal lagoon). Private motorboat cruise spotting playful rare Irrawaddy dolphins and Sea Mouth.' },
        { day: 'Day 4', title: 'Bhubaneswar Ancient Temples & Departure', desc: 'Return to Bhubaneswar. Explore 1,000-year-old Lingaraj Temple, Rajarani Temple, and Udayagiri & Khandagiri Jain rock-cut caves, followed by airport drop.' }
      ]
    },
    'pkg-andhra': {
      title: 'Tirupati Lord Balaji VIP Darshan & Hyderabad',
      state: 'Andhra Pradesh & Telangana',
      zone: 'South India',
      duration: '3 Days / 2 Nights',
      pickup: 'Bangalore Doorstep / Chennai / Hyderabad',
      fleet: 'Innova Crysta / Tempo Traveller 12-Seater',
      price: '₹11,500',
      image: 'assets/services/pilgrimage.jpg',
      route: 'Bangalore/Chennai • Tirupati Balaji • Hyderabad Deccan',
      days: [
        { day: 'Day 1', title: 'Bangalore to Sacred Tirupati Hills', desc: 'Expressway drive from Bangalore through Chittoor to Tirupati. Check in. Visit Sri Padmavathi Ammavari Temple at Tiruchanur and ISKCON.' },
        { day: 'Day 2', title: 'Tirumala Lord Venkateswara VIP Darshan', desc: 'Climb the sacred Seven Hills of Tirumala. Assisted Sheeghra / Special Entry Darshan of Lord Balaji. Collect holy Tirupati Laddu Prasadam, visit Silathoranam.' },
        { day: 'Day 3', title: 'Tirupati to Pearl City Hyderabad', desc: 'Drive to historic Hyderabad. Visit iconic Charminar, shop at Laad Bazaar for bangles, savor authentic Hyderabadi Biryani, and tour Golconda Fort before departure.' }
      ]
    },
    'pkg-uttarakhand-scenic': {
      title: 'Nainital Lake District, Mussoorie & Rishikesh',
      state: 'Uttarakhand Scenic',
      zone: 'North India',
      duration: '5 Days / 4 Nights',
      pickup: 'Delhi / Dehradun Airport',
      fleet: 'Executive Sedan / Innova Crysta / Tempo Traveller',
      price: '₹16,500',
      image: 'assets/destinations/kodaikanal.jpg',
      route: 'Delhi • Haridwar • Rishikesh • Mussoorie • Nainital',
      days: [
        { day: 'Day 1', title: 'Delhi to Holy Haridwar & Rishikesh', desc: 'Drive from Delhi to the holy Ganges. Walk across Ram Jhula and Lakshman Jhula in Rishikesh, followed by attending soul-stirring Ganga Aarti at Parmarth Niketan.' },
        { day: 'Day 2', title: 'Ganga White Water Rafting to Mussoorie', desc: 'Experience 12 KM river rafting rapids on the clear Ganges. Afternoon mountain drive to Queen of Hills Mussoorie. Evening stroll on Mall Road.' },
        { day: 'Day 3', title: 'Mussoorie Waterfalls to Nainital Lake District', desc: 'Visit Kempty Falls and Gun Hill ropeway viewpoint. Scenic highway journey across Kumaon hills to emerald lake town Nainital.' },
        { day: 'Day 4', title: 'Nainital Boating & Himalayan Viewpoints', desc: 'Boating on star-shaped Naini Lake, visit Naina Devi Temple, Snow View Point for Himalayan vistas, and excursion to Bhimtal and Sattal lakes.' },
        { day: 'Day 5', title: 'Nainital to Delhi / Dehradun Drop', desc: 'Drive down through lush Corbett foothills with mountain souvenir shopping, returning safely to Delhi or Dehradun airport.' }
      ]
    }
  };

  // Comprehensive Search Database for All India Tour Packages (States, Places & Circuits)
  const PACKAGES_SEARCH_DATABASE = [
    // --- 1. ALL STATES & REGIONS (17 State Categories) ---
    { name: 'Rajasthan State Tour Circuits', type: 'state', stateKey: 'rajasthan', icon: '🏰', sub: 'Royal Forts, Udaipur Lakes, Jaipur & Jaisalmer Desert (7D/6N)' },
    { name: 'Himachal Pradesh State Circuits', type: 'state', stateKey: 'himachal-pradesh', icon: '🏔️', sub: 'Shimla, Kullu, Manali Snow Valley, Rohtang & Solang (6D/5N)' },
    { name: 'Jammu & Kashmir & Ladakh Circuits', type: 'state', stateKey: 'jammu-kashmir', icon: '❄️', sub: 'Srinagar Dal Lake, Gulmarg Gondola & Pahalgam Valleys (6D/5N)' },
    { name: 'Uttarakhand State (Char Dham & Hills)', type: 'state', stateKey: 'uttarakhand', icon: '🛕', sub: 'Kedarnath, Badrinath, Haridwar, Rishikesh & Nainital' },
    { name: 'Kerala State (God\'s Own Country)', type: 'state', stateKey: 'kerala', icon: '🌴', sub: 'Munnar Tea Hills, Alleppey Houseboats & Thekkady (5D/4N)' },
    { name: 'Uttar Pradesh (Kashi, Ayodhya & Mathura)', type: 'state', stateKey: 'uttar-pradesh', icon: '🛕', sub: 'Kashi Vishwanath Corridor, Ayodhya Ram Mandir & Saryu (4D/3N)' },
    { name: 'Meghalaya & Assam (North East)', type: 'state', stateKey: 'meghalaya', icon: '🌿', sub: 'Shillong, Cherrapunji Living Root Bridges & Kaziranga (6D/5N)' },
    { name: 'Golden Triangle (Delhi - Agra - Jaipur)', type: 'state', stateKey: 'golden-triangle', icon: '🏛️', sub: 'Taj Mahal Wonder, Amber Fort & Red Fort Historic Circuit (4D/3N)' },
    { name: 'Karnataka (Heritage, Hills & Coastal)', type: 'state', stateKey: 'karnataka', icon: '🛕', sub: 'Mysore Palace, Coorg Coffee, Chikmagalur & Hampi UNESCO (7D/6N)' },
    { name: 'Tamil Nadu (Temple Cities Circuit)', type: 'state', stateKey: 'tamil-nadu', icon: '🛕', sub: 'Madurai Meenakshi, Rameshwaram, Kanyakumari & Thanjavur (6D/5N)' },
    { name: 'Gujarat (White Rann, Dwarka & Somnath)', type: 'state', stateKey: 'gujarat', icon: '🦁', sub: 'Statue of Unity, Rann of Kutch, Somnath & Dwarka Temples (6D/5N)' },
    { name: 'Goa (Beaches & Coastal Forts)', type: 'state', stateKey: 'goa', icon: '🏖️', sub: 'North & South Goa, Calangute, Baga, Fort Aguada & Dudhsagar (4D/3N)' },
    { name: 'Madhya Pradesh (Wildlife & Heritage)', type: 'state', stateKey: 'madhya-pradesh', icon: '🐅', sub: 'Khajuraho UNESCO Temples, Bandhavgarh Safari & Ujjain (6D/5N)' },
    { name: 'Odisha (Puri Jagannath & Konark)', type: 'state', stateKey: 'odisha', icon: '🛕', sub: 'Puri Lord Jagannath Temple, Konark Sun Temple & Chilika (4D/3N)' },
    { name: 'Sikkim & West Bengal (Eastern Himalayas)', type: 'state', stateKey: 'sikkim', icon: '🏔️', sub: 'Gangtok, Tsomgo Lake, Pelling & Darjeeling Tea Hills (6D/5N)' },
    { name: 'Maharashtra (Sahyadri Forts & Caves)', type: 'state', stateKey: 'maharashtra', icon: '🏰', sub: 'Mumbai, Lonavala, Mahabaleshwar & Ajanta-Ellora Caves (6D/5N)' },
    { name: 'Andhra Pradesh & Telangana', type: 'state', stateKey: 'andhra-pradesh', icon: '🛕', sub: 'Tirupati Balaji Darshan, Vizag Araku Valley & Hyderabad (5D/4N)' },

    // --- 2. POPULAR DESTINATIONS, HILL STATIONS & PILGRIMAGE PLACES ---
    { name: 'Manali (Solang Valley, Rohtang & Atal Tunnel)', type: 'place', stateKey: 'himachal-pradesh', searchKeyword: 'Manali', icon: '🏔️', sub: 'Himachal Pradesh • Snow Point, Beas River & Adventure' },
    { name: 'Munnar (Tea Gardens, Mattupetty & Eravikulam)', type: 'place', stateKey: 'kerala', searchKeyword: 'Munnar', icon: '🌄', sub: 'Kerala • Anamudi Peak & Misty Mountain Slopes' },
    { name: 'Mysore / Mysuru (Grand Palace & Chamundi Hills)', type: 'place', stateKey: 'karnataka', searchKeyword: 'Mysore', icon: '🏰', sub: 'Karnataka • Royal City & 10-Lane Expressway' },
    { name: 'Madurai (Meenakshi Amman Temple)', type: 'place', stateKey: 'tamil-nadu', searchKeyword: 'Madurai', icon: '🛕', sub: 'Tamil Nadu • 2,500-Year Ancient Temple City' },
    { name: 'Mussoorie (Queen of Hills & Kempty Falls)', type: 'place', stateKey: 'uttarakhand', searchKeyword: 'Mussoorie', icon: '🌄', sub: 'Uttarakhand • Gun Hill, Mall Road & Doon Views' },
    { name: 'Meghalaya (Cherrapunji & Living Root Bridges)', type: 'place', stateKey: 'meghalaya', searchKeyword: 'Meghalaya', icon: '🌿', sub: 'North East • Wettest Place on Earth & Waterfalls' },
    { name: 'Mahabalipuram (Shore Temples & Five Rathas)', type: 'place', stateKey: 'tamil-nadu', searchKeyword: 'Mahabalipuram', icon: '🏛️', sub: 'Tamil Nadu • UNESCO 7th Century Coastal Monoliths' },
    { name: 'Mathura & Vrindavan (Lord Krishna Janmabhoomi)', type: 'place', stateKey: 'uttar-pradesh', searchKeyword: 'Mathura', icon: '🛕', sub: 'Uttar Pradesh • Bankey Bihari, Prem Mandir & Yamuna' },
    { name: 'Mount Abu (Dilwara Temples & Nakki Lake)', type: 'place', stateKey: 'rajasthan', searchKeyword: 'Mount Abu', icon: '🌄', sub: 'Rajasthan • Only Hill Station & Marble Carvings' },
    { name: 'Mumbai (Gateway of India & Marine Drive)', type: 'place', stateKey: 'maharashtra', searchKeyword: 'Mumbai', icon: '🏙️', sub: 'Maharashtra • Maximum City Coastline & Elephanta' },
    { name: 'Murudeshwar (Giant Shiva Statue & Beach)', type: 'place', stateKey: 'karnataka', searchKeyword: 'Murudeshwar', icon: '🛕', sub: 'Karnataka • Arabian Sea Shore Temple & Raja Gopura' },
    { name: 'Mangalore (Panambur & Tannirbhavi Beaches)', type: 'place', stateKey: 'karnataka', searchKeyword: 'Mangalore', icon: '🌊', sub: 'Karnataka • Coastal Port City & Seafood Cuisine' },
    { name: 'Jaipur (Pink City, Amber Fort & Hawa Mahal)', type: 'place', stateKey: 'rajasthan', searchKeyword: 'Jaipur', icon: '🏰', sub: 'Rajasthan • Royal Palaces & Golden Triangle' },
    { name: 'Udaipur (City of Lakes & Lake Pichola)', type: 'place', stateKey: 'rajasthan', searchKeyword: 'Udaipur', icon: '🏰', sub: 'Rajasthan • City Palace, Jag Mandir & Sunset Boat' },
    { name: 'Jodhpur (Blue City & Mehrangarh Fort)', type: 'place', stateKey: 'rajasthan', searchKeyword: 'Jodhpur', icon: '🏰', sub: 'Rajasthan • Umaid Bhawan & Rao Jodha Desert Park' },
    { name: 'Jaisalmer (Sam Sand Dunes & Living Fort)', type: 'place', stateKey: 'rajasthan', searchKeyword: 'Jaisalmer', icon: '🏜️', sub: 'Rajasthan • Thar Desert Camel Safari & Folk Dance' },
    { name: 'Shimla (The Ridge, Mall Road & Kufri Snow)', type: 'place', stateKey: 'himachal-pradesh', searchKeyword: 'Shimla', icon: '🏔️', sub: 'Himachal Pradesh • Colonial Summer Capital' },
    { name: 'Srinagar (Dal Lake Houseboat & Shikara)', type: 'place', stateKey: 'jammu-kashmir', searchKeyword: 'Srinagar', icon: '❄️', sub: 'Jammu & Kashmir • Mughal Gardens & Floating Market' },
    { name: 'Gulmarg (Gondola Cable Car & Snow Bowl)', type: 'place', stateKey: 'jammu-kashmir', searchKeyword: 'Gulmarg', icon: '🎿', sub: 'Jammu & Kashmir • Asia\'s Highest Ropeway & Powder Snow' },
    { name: 'Pahalgam (Betaab Valley & Lidder River)', type: 'place', stateKey: 'jammu-kashmir', searchKeyword: 'Pahalgam', icon: '🌲', sub: 'Jammu & Kashmir • Valley of Shepherds & Aru Valley' },
    { name: 'Kedarnath Dham (Sacred Himalayan Jyotirlinga)', type: 'place', stateKey: 'uttarakhand', searchKeyword: 'Kedarnath', icon: '🛕', sub: 'Uttarakhand • Lord Shiva Mandir at 3,584m Altitude' },
    { name: 'Badrinath Dham (Sacred Alaknanda River)', type: 'place', stateKey: 'uttarakhand', searchKeyword: 'Badrinath', icon: '🛕', sub: 'Uttarakhand • Maha Vishnu Temple & Tapt Kund' },
    { name: 'Haridwar & Rishikesh (Ganga Aarti & Rafting)', type: 'place', stateKey: 'uttarakhand', searchKeyword: 'Rishikesh', icon: '🌊', sub: 'Uttarakhand • Ram Jhula, Parmarth & White River Rapids' },
    { name: 'Nainital (Naini Lake Boating & Kumaon Hills)', type: 'place', stateKey: 'uttarakhand', searchKeyword: 'Nainital', icon: '⛵', sub: 'Uttarakhand • Emerald Lake & Himalayan Viewpoints' },
    { name: 'Alleppey / Alappuzha (Luxury Houseboat Cruise)', type: 'place', stateKey: 'kerala', searchKeyword: 'Alleppey', icon: '⛵', sub: 'Kerala • Overnight Backwater Cruise & Paddy Fields' },
    { name: 'Thekkady (Periyar Lake Tiger Reserve)', type: 'place', stateKey: 'kerala', searchKeyword: 'Thekkady', icon: '🐅', sub: 'Kerala • Wildlife Sanctuary Boating & Spice Gardens' },
    { name: 'Wayanad (Banasura Dam & Chembra Peak)', type: 'place', stateKey: 'kerala', searchKeyword: 'Wayanad', icon: '🌄', sub: 'Kerala • Coffee Hills, Edakkal Caves & Waterfalls' },
    { name: 'Coorg / Madikeri (Coffee Estates & Abbey Falls)', type: 'place', stateKey: 'karnataka', searchKeyword: 'Coorg', icon: '☕', sub: 'Karnataka • Scotland of India & Raja\'s Seat' },
    { name: 'Chikmagalur (Mullayanagiri & Baba Budan)', type: 'place', stateKey: 'karnataka', searchKeyword: 'Chikmagalur', icon: '🌄', sub: 'Karnataka • Highest Peak & Lush Coffee Plantations' },
    { name: 'Ooty (Queen of Hills & Botanical Garden)', type: 'place', stateKey: 'tamil-nadu', searchKeyword: 'Ooty', icon: '🚂', sub: 'Tamil Nadu • Nilgiri Mountain Toy Train & Doddabetta' },
    { name: 'Kodaikanal (Pillar Rocks & Star Lake)', type: 'place', stateKey: 'tamil-nadu', searchKeyword: 'Kodaikanal', icon: '🌄', sub: 'Tamil Nadu • Princess of Hill Stations & Pine Forests' },
    { name: 'Hampi (Vijayanagara UNESCO Stone Chariot)', type: 'place', stateKey: 'karnataka', searchKeyword: 'Hampi', icon: '🏛️', sub: 'Karnataka • World Heritage Ruins & Virupaksha Temple' },
    { name: 'Badami (Red Sandstone Cave Temples)', type: 'place', stateKey: 'karnataka', searchKeyword: 'Badami', icon: '🛕', sub: 'Karnataka • Chalukya Rock Architecture & Agastya Lake' },
    { name: 'Tirupati (Lord Venkateswara Balaji Temple)', type: 'place', stateKey: 'andhra-pradesh', searchKeyword: 'Tirupati', icon: '🛕', sub: 'Andhra Pradesh • Seven Sacred Hills of Tirumala' },
    { name: 'Rameshwaram (Pamban Bridge & 22 Theerthams)', type: 'place', stateKey: 'tamil-nadu', searchKeyword: 'Rameshwaram', icon: '🛕', sub: 'Tamil Nadu • Ramanathaswamy Temple & Dhanushkodi' },
    { name: 'Kashi / Varanasi (Vishwanath & Ganga Aarti)', type: 'place', stateKey: 'uttar-pradesh', searchKeyword: 'Varanasi', icon: '🛕', sub: 'Uttar Pradesh • Oldest Living City & Dashashwamedh' },
    { name: 'Ayodhya (Grand Shri Ram Janmabhoomi Mandir)', type: 'place', stateKey: 'uttar-pradesh', searchKeyword: 'Ayodhya', icon: '🛕', sub: 'Uttar Pradesh • Ram Lalla Darshan & Sacred Saryu Aarti' },
    { name: 'Agra (Taj Mahal Wonder & Agra Fort)', type: 'place', stateKey: 'golden-triangle', searchKeyword: 'Agra', icon: '🕌', sub: 'Golden Triangle • White Marble Wonder of the World' },
    { name: 'Kaziranga (One-Horned Rhinoceros Safari)', type: 'place', stateKey: 'meghalaya', searchKeyword: 'Kaziranga', icon: '🦏', sub: 'Assam • UNESCO World Heritage Wildlife Reserve' },
    { name: 'Shillong (Scotland of the East & Ward\'s Lake)', type: 'place', stateKey: 'meghalaya', searchKeyword: 'Shillong', icon: '🌿', sub: 'Meghalaya • Pine Hills, Elephant Falls & Umiam Lake' },
    { name: 'Gangtok (Tsomgo Lake & Kanchenjunga Vistas)', type: 'place', stateKey: 'sikkim', searchKeyword: 'Gangtok', icon: '🏔️', sub: 'Sikkim • Himalayan Monasteries & MG Marg' },
    { name: 'Goa Beaches (Calangute, Baga & Fort Aguada)', type: 'place', stateKey: 'goa', searchKeyword: 'Goa', icon: '🏖️', sub: 'Goa • Arabian Sea Sunset & Water Sports' },
    { name: 'Somnath & Dwarka (Lord Krishna Coastal Dham)', type: 'place', stateKey: 'gujarat', searchKeyword: 'Dwarka', icon: '🛕', sub: 'Gujarat • Dwarkadhish Mandir & First Jyotirlinga' },
    { name: 'Shirdi (Sai Baba Samadhi Temple)', type: 'place', stateKey: 'maharashtra', searchKeyword: 'Shirdi', icon: '🛕', sub: 'Maharashtra • Shri Saibaba Sansthan & Shani Shingnapur' },
    { name: 'Puri (Lord Jagannath Temple & Konark Sun)', type: 'place', stateKey: 'odisha', searchKeyword: 'Puri', icon: '🛕', sub: 'Odisha • Char Dham Coastal Temple & Golden Beach' },
    { name: 'Hyderabad (Charminar, Golconda & Hitec City)', type: 'place', stateKey: 'andhra-pradesh', searchKeyword: 'Hyderabad', icon: '🏰', sub: 'Telangana • Historic Nizami Heritage & Ramoji' },
    { name: 'Darjeeling (Tiger Hill Sunrise & Tea Estates)', type: 'place', stateKey: 'sikkim', searchKeyword: 'Darjeeling', icon: '🍵', sub: 'West Bengal • Kanchenjunga Peak & Himalayan Toy Train' },
    { name: 'Khajuraho (Intricate Temple Sculptures)', type: 'place', stateKey: 'madhya-pradesh', searchKeyword: 'Khajuraho', icon: '🛕', sub: 'Madhya Pradesh • UNESCO Medieval Temple Art' },
    { name: 'Bandhavgarh (Tiger Reserve Jungle Safari)', type: 'place', stateKey: 'madhya-pradesh', searchKeyword: 'Bandhavgarh', icon: '🐅', sub: 'Madhya Pradesh • High Density Bengal Tiger Habitat' },
    { name: 'Mahabaleshwar (Strawberry Hills & Arthur Seat)', type: 'place', stateKey: 'maharashtra', searchKeyword: 'Mahabaleshwar', icon: '🍓', sub: 'Maharashtra • Sahyadri Western Ghats Viewpoints' },

    // --- 3. ALL 18 HANDCRAFTED TOUR PACKAGES ---
    { name: 'Royal Rajasthan Heritage & Golden Dunes Circuit', type: 'package', pkgId: 'pkg-rajasthan', searchKeyword: 'Rajasthan', icon: '🚐', sub: '7D / 6N • Jaipur, Jodhpur, Udaipur & Jaisalmer Desert' },
    { name: 'Himachal Snow & Valley Explorer (Shimla • Manali)', type: 'package', pkgId: 'pkg-himachal', searchKeyword: 'Manali', icon: '🚐', sub: '6D / 5N • Chandigarh, Shimla, Kullu, Manali & Solang' },
    { name: 'Kashmir Paradise Valley & Dal Lake Splendour', type: 'package', pkgId: 'pkg-kashmir', searchKeyword: 'Kashmir', icon: '🚐', sub: '6D / 5N • Srinagar, Gulmarg, Pahalgam & Sonmarg' },
    { name: 'Uttarakhand Sacred Char Dham Maha Yatra Circuit', type: 'package', pkgId: 'pkg-chardham', searchKeyword: 'Kedarnath', icon: '🚐', sub: '10D / 9N • Yamunotri, Gangotri, Kedarnath & Badrinath' },
    { name: 'Kerala Backwaters & Misty Tea Estates Escapade', type: 'package', pkgId: 'pkg-kerala', searchKeyword: 'Munnar', icon: '🚐', sub: '5D / 4N • Kochi, Munnar, Thekkady & Alleppey Houseboat' },
    { name: 'Spiritual Uttar Pradesh: Kashi Vishwanath & Ayodhya', type: 'package', pkgId: 'pkg-varanasi', searchKeyword: 'Varanasi', icon: '🚐', sub: '4D / 3N • Varanasi, Ayodhya Ram Mandir & Prayagraj' },
    { name: 'Mystical North East: Meghalaya & Kaziranga Wildlife', type: 'package', pkgId: 'pkg-northeast', searchKeyword: 'Meghalaya', icon: '🚐', sub: '6D / 5N • Shillong, Cherrapunji, Dawki & Kaziranga Rhino' },
    { name: 'Golden Triangle Classic Heritage (Delhi • Agra • Jaipur)', type: 'package', pkgId: 'pkg-golden-triangle', searchKeyword: 'Golden Triangle', icon: '🚐', sub: '4D / 3N • Taj Mahal, Amber Fort, Qutub & Fatehpur Sikri' },
    { name: 'Complete Karnataka Heritage & Hills Odyssey', type: 'package', pkgId: 'pkg-karnataka', searchKeyword: 'Karnataka', icon: '🚐', sub: '7D / 6N • Mysore, Coorg, Chikmagalur, Hampi & Badami' },
    { name: 'Sacred Tamil Nadu Temple Cities Odyssey', type: 'package', pkgId: 'pkg-tamilnadu', searchKeyword: 'Tamil Nadu', icon: '🚐', sub: '6D / 5N • Madurai, Rameshwaram, Kanyakumari & Thanjavur' },
    { name: 'Vibrant Gujarat: White Rann, Dwarka & Somnath', type: 'package', pkgId: 'pkg-gujarat', searchKeyword: 'Gujarat', icon: '🚐', sub: '6D / 5N • Ahmedabad, Kutch Rann, Dwarka, Somnath & Gir' },
    { name: 'Goa Sun-Kissed Beaches & Heritage Forts Gateway', type: 'package', pkgId: 'pkg-goa', searchKeyword: 'Goa', icon: '🚐', sub: '4D / 3N • Calangute, Baga, Fort Aguada & Dudhsagar Falls' },
    { name: 'Heart of India: Madhya Pradesh Wildlife & Heritage', type: 'package', pkgId: 'pkg-mp', searchKeyword: 'Madhya Pradesh', icon: '🚐', sub: '6D / 5N • Khajuraho, Bandhavgarh Safari & Ujjain Mahakal' },
    { name: 'Soulful Odisha: Puri Jagannath & Konark Heritage', type: 'package', pkgId: 'pkg-odisha', searchKeyword: 'Puri', icon: '🚐', sub: '4D / 3N • Bhubaneswar, Puri Jagannath & Konark Sun Temple' },
    { name: 'Eastern Himalayan Jewels: Sikkim & Darjeeling', type: 'package', pkgId: 'pkg-sikkim', searchKeyword: 'Sikkim', icon: '🚐', sub: '6D / 5N • Gangtok, Tsomgo Lake, Pelling & Darjeeling' },
    { name: 'Majestic Maharashtra: Forts, Caves & Hill Retreats', type: 'package', pkgId: 'pkg-maharashtra', searchKeyword: 'Maharashtra', icon: '🚐', sub: '6D / 5N • Mumbai, Lonavala, Mahabaleshwar & Ajanta-Ellora' },
    { name: 'Andhra Pradesh Spiritual & Coastal Splendours', type: 'package', pkgId: 'pkg-andhra', searchKeyword: 'Tirupati', icon: '🚐', sub: '5D / 4N • Tirupati Balaji, Vijayawada, Vizag & Araku Valley' },
    { name: 'Uttarakhand Hill Charms: Nainital, Mussoorie & Rishikesh', type: 'package', pkgId: 'pkg-uttarakhand-scenic', searchKeyword: 'Mussoorie', icon: '🚐', sub: '5D / 4N • Haridwar, Rishikesh, Mussoorie & Nainital' }
  ];

  // DOM Elements for Packages Page
  const pkgSearchInput = document.getElementById('pkgSearchInput');
  const pkgSearchClearBtn = document.getElementById('pkgSearchClearBtn');
  const pkgSearchDropdown = document.getElementById('pkgSearchAutocompleteList');
  const pkgStateSelect = document.getElementById('pkgStateSelect');
  const pkgDurationSelect = document.getElementById('pkgDurationSelect');
  const pkgResetBtn = document.getElementById('pkgResetBtn');
  const btnResetFiltersInline = document.getElementById('btnResetFiltersInline');
  const pkgZoneTabs = document.querySelectorAll('.pkg-zone-tab');
  const pkgQuickChips = document.querySelectorAll('.state-quick-chip');
  const pkgCards = document.querySelectorAll('.package-card-premium');
  const pkgActiveCount = document.getElementById('pkgActiveCount');
  const pkgNoResultsCard = document.getElementById('pkgNoResultsCard');
  const packagesMasterGrid = document.getElementById('packagesMasterGrid');

  // Modal Elements
  const pkgModalBackdrop = document.getElementById('packageDetailModal');
  const pkgModalCloseBtn = document.getElementById('pkgModalCloseBtn') || document.querySelector('.pkg-modal-close-btn');
  const modalPkgTitle = document.getElementById('modalPkgTitle');
  const modalPkgState = document.getElementById('modalPkgState');
  const modalPkgImage = document.getElementById('modalPkgImage');
  const modalPkgDuration = document.getElementById('modalPkgDuration');
  const modalPkgPickup = document.getElementById('modalPkgPickup');
  const modalPkgFleet = document.getElementById('modalPkgFleet');
  const modalPkgPrice = document.getElementById('modalPkgPrice');
  const modalFooterPrice = document.getElementById('modalFooterPrice');
  const modalPkgTimeline = document.getElementById('modalPkgTimeline');
  const modalWhatsAppBtn = document.getElementById('modalWhatsAppBtn');

  // Filter State
  let currentFilter = {
    search: '',
    state: 'all',
    duration: 'all',
    zone: 'all'
  };

  // Master Filter Function
  function applyPackagesFilter() {
    if (!pkgCards.length) return;

    let visibleCount = 0;
    const searchLower = currentFilter.search.trim().toLowerCase();

    pkgCards.forEach(card => {
      const cardState = (card.dataset.state || '').toLowerCase();
      const cardZone = (card.dataset.zone || '').toLowerCase();
      const cardDuration = (card.dataset.duration || '').toLowerCase();
      const cardTags = (card.dataset.tags || '').toLowerCase();

      // Meaningful searchable text across all card badges, titles, and routes
      const titleElem = card.querySelector('.pkg-card-title');
      const routeElem = card.querySelector('.pkg-route-pill');
      const stateBadge = card.querySelector('.pkg-state-badge');
      const categoryBadge = card.querySelector('.pkg-tag-category');
      const summaryElem = card.querySelector('.pkg-card-summary');
      const highlightsElem = card.querySelector('.pkg-highlights-list');

      const searchableCardText = [
        cardState,
        cardZone,
        cardTags,
        titleElem?.textContent || '',
        routeElem?.textContent || '',
        stateBadge?.textContent || '',
        categoryBadge?.textContent || '',
        summaryElem?.textContent || '',
        highlightsElem?.textContent || ''
      ].join(' ').toLowerCase();

      // Check Zone Match
      const matchesZone = (currentFilter.zone === 'all') || 
                          (cardZone === currentFilter.zone) ||
                          (currentFilter.zone === 'pilgrimage' && cardTags.includes('pilgrim')) ||
                          (currentFilter.zone === 'hills' && (cardTags.includes('hills') || cardTags.includes('honeymoon')));

      // Check State Match
      const matchesState = (currentFilter.state === 'all') || 
                           (cardState === currentFilter.state) ||
                           (cardState.includes(currentFilter.state));

      // Check Duration Match
      const matchesDuration = (currentFilter.duration === 'all') || (cardDuration === currentFilter.duration);

      // Check Search Match (Checks each word or whole phrase)
      let matchesSearch = true;
      if (searchLower) {
        const words = searchLower.split(/\s+/).filter(Boolean);
        matchesSearch = words.every(w => searchableCardText.includes(w));
      }

      if (matchesZone && matchesState && matchesDuration && matchesSearch) {
        card.style.display = 'flex';
        card.style.opacity = '1';
        card.style.visibility = 'visible';
        card.style.transform = 'none';
        visibleCount++;
      } else {
        card.style.display = 'none';
      }
    });

    // Ensure Master Grid is explicitly visible and rendered
    if (packagesMasterGrid) {
      packagesMasterGrid.style.opacity = '1';
      packagesMasterGrid.style.visibility = 'visible';
      packagesMasterGrid.style.transform = 'none';
    }

    // Update Counter & Fallback
    if (pkgActiveCount) {
      pkgActiveCount.textContent = visibleCount;
    }

    if (pkgNoResultsCard) {
      pkgNoResultsCard.style.display = (visibleCount === 0) ? 'block' : 'none';
    }
  }

  // Setup Live Alphabet-by-Alphabet Autocomplete for Packages Search Bar
  function setupPackagesSearchAutocomplete() {
    if (!pkgSearchInput || !pkgSearchDropdown) return;

    let selectedPkgIndex = -1;

    function renderPkgSuggestions(query = '') {
      const trimmed = (query || '').trim().toLowerCase();
      let matches = [];

      if (!trimmed) {
        // Show high-priority popular recommendations when input is empty or clicked
        matches = [
          { name: 'Rajasthan State Tour Circuits', type: 'state', stateKey: 'rajasthan', icon: '🏰', sub: 'Jaipur, Udaipur, Jodhpur & Desert Dunes • 7D/6N' },
          { name: 'Himachal Pradesh State Circuits', type: 'state', stateKey: 'himachal-pradesh', icon: '🏔️', sub: 'Manali, Solang Valley & Shimla Snow • 6D/5N' },
          { name: 'Jammu & Kashmir & Ladakh Circuits', type: 'state', stateKey: 'jammu-kashmir', icon: '❄️', sub: 'Srinagar Dal Lake, Gulmarg & Pahalgam • 6D/5N' },
          { name: 'Kerala State (God\'s Own Country)', type: 'state', stateKey: 'kerala', icon: '🌴', sub: 'Munnar Tea Hills & Alleppey Houseboat • 5D/4N' },
          { name: 'Uttarakhand State (Char Dham & Hills)', type: 'state', stateKey: 'uttarakhand', icon: '🛕', sub: 'Kedarnath, Badrinath, Haridwar & Nainital • 10D/9N' },
          { name: 'Karnataka (Heritage & Hills Odyssey)', type: 'state', stateKey: 'karnataka', icon: '🛕', sub: 'Mysore, Coorg, Chikmagalur & Hampi • 7D/6N' },
          { name: 'Goa (Beaches & Coastal Forts)', type: 'state', stateKey: 'goa', icon: '🏖️', sub: 'North & South Goa, Calangute & Baga • 4D/3N' },
          { name: 'Manali (Solang Valley, Rohtang & Snow)', type: 'place', stateKey: 'himachal-pradesh', searchKeyword: 'Manali', icon: '🏔️', sub: 'Himachal Snow Gateway' },
          { name: 'Munnar (Tea Gardens & Misty Hills)', type: 'place', stateKey: 'kerala', searchKeyword: 'Munnar', icon: '🌄', sub: 'Kerala High Ranges' },
          { name: 'Mysore (Grand Palace & Chamundi Hills)', type: 'place', stateKey: 'karnataka', searchKeyword: 'Mysore', icon: '🏰', sub: 'Karnataka Heritage City' }
        ];
      } else {
        const startsWithMatches = [];
        const wordStartsMatches = [];
        const containsMatches = [];

        PACKAGES_SEARCH_DATABASE.forEach(item => {
          const nameLower = item.name.toLowerCase();
          const subLower = (item.sub || '').toLowerCase();
          const stateLower = (item.stateKey || '').toLowerCase();
          const kwLower = (item.searchKeyword || '').toLowerCase();

          if (nameLower.startsWith(trimmed) || kwLower.startsWith(trimmed)) {
            startsWithMatches.push(item);
          } else {
            const words = nameLower.split(/[\s\-()/,•]+/);
            if (words.some(w => w.startsWith(trimmed))) {
              wordStartsMatches.push(item);
            } else if (nameLower.includes(trimmed) || subLower.includes(trimmed) || stateLower.includes(trimmed) || kwLower.includes(trimmed)) {
              containsMatches.push(item);
            }
          }
        });

        matches = [...startsWithMatches, ...wordStartsMatches, ...containsMatches].slice(0, 10);
      }

      if (matches.length === 0) {
        pkgSearchDropdown.innerHTML = `
          <div style="padding: 16px; text-align: center; color: var(--slate-400); font-size: 0.85rem;">
            No specific destinations matching "<strong>${escapeHtml(query)}</strong>".<br>
            <span style="font-size: 0.76rem; color: var(--slate-500);">Searching packages grid directly...</span>
          </div>
        `;
        pkgSearchDropdown.classList.add('show');
        return;
      }

      let html = `<div class="pkg-autocomplete-header">${trimmed ? `Matching States, Places & Circuits (${matches.length})` : 'Popular Tour Suggestions'}</div>`;

      matches.forEach((item, index) => {
        let highlightedName = escapeHtml(item.name);
        if (trimmed) {
          const regex = new RegExp(`(${escapeRegExp(trimmed)})`, 'gi');
          highlightedName = highlightedName.replace(regex, '<span class="highlight-letter">$1</span>');
        }

        const badgeLabel = item.type === 'state' ? 'STATE' : (item.type === 'package' ? 'TOUR PACKAGE' : 'DESTINATION');
        const badgeBg = item.type === 'state' ? '#dcfce7' : (item.type === 'package' ? '#fef3c7' : '#eff6ff');
        const badgeColor = item.type === 'state' ? '#15803d' : (item.type === 'package' ? '#b45309' : '#1d4ed8');

        html += `
          <div class="pkg-autocomplete-item" data-index="${index}" data-name="${escapeHtml(item.name)}" data-type="${item.type}" data-state="${item.stateKey || ''}" data-kw="${escapeHtml(item.searchKeyword || item.name)}" data-pkg="${item.pkgId || ''}">
            <div class="pkg-autocomplete-left">
              <span class="pkg-autocomplete-icon">${item.icon || '📍'}</span>
              <div>
                <div class="pkg-autocomplete-name">${highlightedName}</div>
                <div class="pkg-autocomplete-sub">${escapeHtml(item.sub || '')}</div>
              </div>
            </div>
            <span class="pkg-autocomplete-badge" style="background:${badgeBg}; color:${badgeColor};">${badgeLabel}</span>
          </div>
        `;
      });

      pkgSearchDropdown.innerHTML = html;
      pkgSearchDropdown.classList.add('show');
      selectedPkgIndex = -1;

      // Click listener for items
      pkgSearchDropdown.querySelectorAll('.pkg-autocomplete-item').forEach(el => {
        el.addEventListener('mousedown', (e) => {
          e.preventDefault();
          selectPkgSuggestion(el);
        });
      });
    }

    function selectPkgSuggestion(el) {
      const type = el.dataset.type;
      const stateKey = el.dataset.state;
      const keyword = el.dataset.kw;
      const name = el.dataset.name;
      const pkgId = el.dataset.pkg;

      pkgSearchDropdown.classList.remove('show');
      if (pkgSearchClearBtn) pkgSearchClearBtn.style.display = 'flex';

      if (type === 'state' && stateKey) {
        pkgSearchInput.value = name;
        currentFilter.search = '';
        currentFilter.state = stateKey;
        if (pkgStateSelect) pkgStateSelect.value = stateKey;
        pkgQuickChips.forEach(chip => {
          if (chip.dataset.state === stateKey) chip.classList.add('active');
          else chip.classList.remove('active');
        });
        applyPackagesFilter();
      } else if (type === 'package' && pkgId) {
        pkgSearchInput.value = name;
        currentFilter.search = keyword;
        applyPackagesFilter();
        const targetCard = document.querySelector(`.package-card-premium[data-id="${pkgId}"]`);
        if (targetCard) {
          targetCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
          targetCard.classList.add('card-highlight-pulse');
          setTimeout(() => targetCard.classList.remove('card-highlight-pulse'), 1500);
        }
      } else {
        // Place / Destination
        pkgSearchInput.value = keyword;
        currentFilter.search = keyword;
        applyPackagesFilter();
        if (packagesMasterGrid) {
          packagesMasterGrid.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    }

    // Input listener (instant alphabet-by-alphabet)
    pkgSearchInput.addEventListener('input', () => {
      const val = pkgSearchInput.value;
      currentFilter.search = val;
      if (pkgSearchClearBtn) {
        pkgSearchClearBtn.style.display = val ? 'flex' : 'none';
      }
      renderPkgSuggestions(val);
      applyPackagesFilter();
    });

    // Focus & Click
    pkgSearchInput.addEventListener('focus', () => {
      renderPkgSuggestions(pkgSearchInput.value);
    });
    pkgSearchInput.addEventListener('click', () => {
      renderPkgSuggestions(pkgSearchInput.value);
    });

    // Clear
    if (pkgSearchClearBtn) {
      pkgSearchClearBtn.addEventListener('click', () => {
        pkgSearchInput.value = '';
        currentFilter.search = '';
        pkgSearchClearBtn.style.display = 'none';
        pkgSearchDropdown.classList.remove('show');
        applyPackagesFilter();
      });
    }

    // Keyboard navigation
    pkgSearchInput.addEventListener('keydown', (e) => {
      const items = pkgSearchDropdown.querySelectorAll('.pkg-autocomplete-item');
      if (!items.length || !pkgSearchDropdown.classList.contains('show')) return;

      if (e.key === 'ArrowDown') {
        e.preventDefault();
        selectedPkgIndex = (selectedPkgIndex + 1) % items.length;
        updatePkgKeyNav(items);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        selectedPkgIndex = (selectedPkgIndex - 1 + items.length) % items.length;
        updatePkgKeyNav(items);
      } else if (e.key === 'Enter') {
        if (selectedPkgIndex >= 0 && items[selectedPkgIndex]) {
          e.preventDefault();
          selectPkgSuggestion(items[selectedPkgIndex]);
        }
      } else if (e.key === 'Escape') {
        pkgSearchDropdown.classList.remove('show');
      }
    });

    function updatePkgKeyNav(items) {
      items.forEach((it, idx) => {
        if (idx === selectedPkgIndex) {
          it.classList.add('selected');
          it.scrollIntoView({ block: 'nearest' });
        } else {
          it.classList.remove('selected');
        }
      });
    }

    // Close on outside click
    document.addEventListener('click', (e) => {
      if (!pkgSearchInput.contains(e.target) && !pkgSearchDropdown.contains(e.target)) {
        pkgSearchDropdown.classList.remove('show');
      }
    });
  }

  // Initialize packages autocomplete
  setupPackagesSearchAutocomplete();

  // State Dropdown Handler
  if (pkgStateSelect) {
    pkgStateSelect.addEventListener('change', () => {
      currentFilter.state = pkgStateSelect.value;
      
      // Sync quick chips
      pkgQuickChips.forEach(chip => {
        if (chip.dataset.state === currentFilter.state) {
          chip.classList.add('active');
        } else {
          chip.classList.remove('active');
        }
      });

      applyPackagesFilter();
    });
  }

  // Duration Dropdown Handler
  if (pkgDurationSelect) {
    pkgDurationSelect.addEventListener('change', () => {
      currentFilter.duration = pkgDurationSelect.value;
      applyPackagesFilter();
    });
  }

  // Zone Tabs Handler
  pkgZoneTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      pkgZoneTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      currentFilter.zone = tab.dataset.zone || 'all';
      applyPackagesFilter();
    });
  });

  // Quick State Chips Handler
  pkgQuickChips.forEach(chip => {
    chip.addEventListener('click', () => {
      pkgQuickChips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      const st = chip.dataset.state || 'all';
      currentFilter.state = st;
      if (pkgStateSelect) {
        pkgStateSelect.value = st;
      }
      applyPackagesFilter();
    });
  });

  // Reset Filters Handlers
  function resetAllPackageFilters() {
    currentFilter = { search: '', state: 'all', duration: 'all', zone: 'all' };
    if (pkgSearchInput) pkgSearchInput.value = '';
    if (pkgSearchClearBtn) pkgSearchClearBtn.style.display = 'none';
    if (pkgSearchDropdown) pkgSearchDropdown.classList.remove('show');
    if (pkgStateSelect) pkgStateSelect.value = 'all';
    if (pkgDurationSelect) pkgDurationSelect.value = 'all';

    pkgZoneTabs.forEach(t => t.classList.remove('active'));
    const allZoneTab = document.querySelector('.pkg-zone-tab[data-zone="all"]');
    if (allZoneTab) allZoneTab.classList.add('active');

    pkgQuickChips.forEach(c => c.classList.remove('active'));
    const allChip = document.querySelector('.state-quick-chip[data-state="all"]');
    if (allChip) allChip.classList.add('active');

    applyPackagesFilter();
  }

  if (pkgResetBtn) pkgResetBtn.addEventListener('click', resetAllPackageFilters);
  if (btnResetFiltersInline) btnResetFiltersInline.addEventListener('click', resetAllPackageFilters);

  // URL Parameters Auto-Filter (?state=rajasthan, ?zone=north)
  const urlParams = new URLSearchParams(window.location.search);
  const paramState = urlParams.get('state');
  const paramZone = urlParams.get('zone');
  const paramSearch = urlParams.get('search');

  if (paramState) {
    currentFilter.state = paramState;
    if (pkgStateSelect) pkgStateSelect.value = paramState;
    pkgQuickChips.forEach(chip => {
      if (chip.dataset.state === paramState) chip.classList.add('active');
      else chip.classList.remove('active');
    });
  }

  if (paramZone) {
    currentFilter.zone = paramZone;
    pkgZoneTabs.forEach(tab => {
      if (tab.dataset.zone === paramZone) tab.classList.add('active');
      else tab.classList.remove('active');
    });
  }

  if (paramSearch && pkgSearchInput) {
    pkgSearchInput.value = paramSearch;
    currentFilter.search = paramSearch;
    if (pkgSearchClearBtn) pkgSearchClearBtn.style.display = 'flex';
  }

  if (paramState || paramZone || paramSearch) {
    applyPackagesFilter();
  }

  // Interactive Itinerary Modal Opener
  document.querySelectorAll('[data-open-modal]').forEach(btn => {
    btn.addEventListener('click', () => {
      const pkgId = btn.dataset.openModal;
      openPackageItineraryModal(pkgId);
    });
  });

  function openPackageItineraryModal(pkgId) {
    const pkg = PACKAGES_DATABASE[pkgId];
    if (!pkg || !pkgModalBackdrop) return;

    if (modalPkgTitle) modalPkgTitle.textContent = pkg.title;
    if (modalPkgState) modalPkgState.textContent = `📍 ${pkg.state} • ${pkg.zone}`;
    if (modalPkgImage) {
      modalPkgImage.src = pkg.image;
      modalPkgImage.alt = pkg.title;
    }
    if (modalPkgDuration) modalPkgDuration.textContent = pkg.duration;
    if (modalPkgPickup) modalPkgPickup.textContent = pkg.pickup;
    if (modalPkgFleet) modalPkgFleet.textContent = pkg.fleet;
    if (modalPkgPrice) modalPkgPrice.textContent = `${pkg.price} onwards`;
    if (modalFooterPrice) modalFooterPrice.textContent = `${pkg.price} starting fare`;

    // Populate Day-by-Day Steps
    if (modalPkgTimeline) {
      modalPkgTimeline.innerHTML = '';
      (pkg.days || []).forEach(step => {
        const stepElem = document.createElement('div');
        stepElem.className = 'pkg-timeline-step';
        stepElem.innerHTML = `
          <div class="pkg-step-day">${escapeHtml(step.day)}</div>
          <div class="pkg-step-title">${escapeHtml(step.title)}</div>
          <div class="pkg-step-desc">${escapeHtml(step.desc)}</div>
        `;
        modalPkgTimeline.appendChild(stepElem);
      });
    }

    // Build WhatsApp CTA URL with Rich Pre-Filled Text
    if (modalWhatsAppBtn) {
      const waText = 
`*TOUR PACKAGE INQUIRY - SJT TOURS & TRAVELS*
━━━━━━━━━━━━━━━━━━━━━
🗺️ *Package:* ${pkg.title}
📍 *State & Region:* ${pkg.state} (${pkg.zone})
⏱️ *Duration:* ${pkg.duration}
🛣️ *Route:* ${pkg.route}
🚐 *Fleet Preference:* ${pkg.fleet}
💰 *Starting Fare:* ${pkg.price}
━━━━━━━━━━━━━━━━━━━━━
*SJT Registered Hub:*
Sharanappa, # 101 BGS Layout, Nagasandra post Bangalore 560073
━━━━━━━━━━━━━━━━━━━━━
_Hello SJT Team, I would like to check availability and get a detailed day-wise customized quotation for this package._`;

      modalWhatsAppBtn.href = `https://wa.me/${SJT_PHONE}?text=${encodeURIComponent(waText)}`;
    }

    pkgModalBackdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closePackageItineraryModal() {
    if (pkgModalBackdrop) {
      pkgModalBackdrop.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  if (pkgModalCloseBtn) {
    pkgModalCloseBtn.addEventListener('click', closePackageItineraryModal);
  }

  if (pkgModalBackdrop) {
    pkgModalBackdrop.addEventListener('click', (e) => {
      if (e.target === pkgModalBackdrop) {
        closePackageItineraryModal();
      }
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && pkgModalBackdrop && pkgModalBackdrop.classList.contains('active')) {
      closePackageItineraryModal();
    }
  });

  // Custom Tour Package Builder Form Submission
  const customTourForm = document.getElementById('customTourForm');
  if (customTourForm) {
    customTourForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const pickup = document.getElementById('customPickup')?.value.trim() || 'Bangalore';
      const destState = document.getElementById('customDestinationState')?.value || 'All-India Tour';
      const travelDate = document.getElementById('customTravelDate')?.value || 'Flexible';
      const duration = document.getElementById('customDurationDays')?.value || '3-4 Days';
      const passengers = document.getElementById('customPassengerCount')?.value.trim() || '4 Adults';
      const vehicle = document.getElementById('customVehiclePreference')?.value || 'Innova Crysta / Tempo Traveller';

      const customMessage =
`*CUSTOM ALL-INDIA TOUR PACKAGE REQUEST - SJT TOURS & TRAVELS*
━━━━━━━━━━━━━━━━━━━━━
📍 *Pickup Location:* ${pickup}
🗺️ *Target State / Circuit:* ${destState}
📅 *Departure Date:* ${travelDate}
⏱️ *Trip Duration:* ${duration}
👥 *Travelers & Luggage:* ${passengers}
🚐 *Preferred Fleet:* ${vehicle}
━━━━━━━━━━━━━━━━━━━━━
*SJT Registered Hub:*
Sharanappa, # 101 1st main 4th cross BGS Layout near narasappa cricle Thotadaguddadahalli Nagasandra post Bangalore 560073
━━━━━━━━━━━━━━━━━━━━━
_Please prepare a customized day-by-day itinerary with transparent per-KM / fixed package quotation._`;

      const waUrl = `https://wa.me/${SJT_PHONE}?text=${encodeURIComponent(customMessage)}`;
      try {
        const waWin = window.open(waUrl, '_blank');
        if (!waWin || waWin.closed || typeof waWin.closed === 'undefined') {
          window.location.href = waUrl;
        }
      } catch (err) {
        window.location.href = waUrl;
      }
      showToast('Custom package inquiry created! Opening WhatsApp...');
    });
  }

  // Hero Visual Banner Image Cyclic Slideshow for Packages Page
  const heroVisualImage = document.getElementById('heroVisualImage');
  if (heroVisualImage) {
    const bannerImages = [
      'assets/packages/rajasthan.jpg',
      'assets/packages/kashmir.jpg',
      'assets/packages/himachal.jpg',
      'assets/packages/kerala.jpg',
      'assets/packages/varanasi.jpg',
      'assets/packages/meghalaya.jpg'
    ];
    let bannerIdx = 0;
    setInterval(() => {
      bannerIdx = (bannerIdx + 1) % bannerImages.length;
      heroVisualImage.style.opacity = '0.4';
      setTimeout(() => {
        heroVisualImage.src = bannerImages[bannerIdx];
        heroVisualImage.style.opacity = '1';
      }, 350);
    }, 4500);
  }


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
