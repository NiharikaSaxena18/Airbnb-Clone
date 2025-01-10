const sampleListings = [
    {
      title: "Cozy Beachfront Cottage",
      description:
        "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      },
      price: 1500,
      location: "Malibu",
      country: "United States",
    },
    {
      title: "Modern Loft in Downtown",
      description:
        "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      },
      price: 1200,
      location: "New York City",
      country: "United States",
    },
    {
      title: "Mountain Retreat",
      description:
        "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      },
      price: 1000,
      location: "Aspen",
      country: "United States",
    },
    {
      title: "Historic Villa in Tuscany",
      description:
        "Experience the charm of Tuscany in this beautifully restored villa. Explore the rolling hills and vineyards.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      },
      price: 2500,
      location: "Florence",
      country: "Italy",
    },
    {
      title: "Secluded Treehouse Getaway",
      description:
        "Live among the treetops in this unique treehouse retreat. A true nature lover's paradise.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      },
      price: 800,
      location: "Portland",
      country: "United States",
    },
    {
      title: "Beachfront Paradise",
      description:
        "Step out of your door onto the sandy beach. This beachfront condo offers the ultimate relaxation.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      },
      price: 2000,
      location: "Cancun",
      country: "Mexico",
    },
    {
      title: "Rustic Cabin by the Lake",
      description:
        "Spend your days fishing and kayaking on the serene lake. This cozy cabin is perfect for outdoor enthusiasts.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      },
      price: 900,
      location: "Lake Tahoe",
      country: "United States",
    },
    {
      title: "Luxury Penthouse with City Views",
      description:
        "Indulge in luxury living with panoramic city views from this stunning penthouse apartment.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      },
      price: 3500,
      location: "Los Angeles",
      country: "United States",
    },
    {
      title: "Ski-In/Ski-Out Chalet",
      description:
        "Hit the slopes right from your doorstep in this ski-in/ski-out chalet in the Swiss Alps.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      },
      price: 3000,
      location: "Verbier",
      country: "Switzerland",
    },
    {
      title: "Safari Lodge in the Serengeti",
      description:
        "Experience the thrill of the wild in a comfortable safari lodge. Witness the Great Migration up close.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      },
      price: 4000,
      location: "Serengeti National Park",
      country: "Tanzania",
    },
    {
      title: "Historic Canal House",
      description:
        "Stay in a piece of history in this beautifully preserved canal house in Amsterdam's iconic district.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FtcGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      },
      price: 1800,
      location: "Amsterdam",
      country: "Netherlands",
    },
    {
      title: "Private Island Retreat",
      description:
        "Have an entire island to yourself for a truly exclusive and unforgettable vacation experience.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1618140052121-39fc6db33972?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bG9kZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      },
      price: 10000,
      location: "Fiji",
      country: "Fiji",
    },
    {
      title: "Charming Cottage in the Cotswolds",
      description:
        "Escape to the picturesque Cotswolds in this quaint and charming cottage with a thatched roof.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1602088113235-229c19758e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmVhY2glMjB2YWNhdGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      },
      price: 1200,
      location: "Cotswolds",
      country: "United Kingdom",
    },
    {
      title: "Historic Brownstone in Boston",
      description:
        "Step back in time in this elegant historic brownstone located in the heart of Boston.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1533619239233-6280475a633a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      },
      price: 2200,
      location: "Boston",
      country: "United States",
    },
    {
      title: "Beachfront Bungalow in Bali",
      description:
        "Relax on the sandy shores of Bali in this beautiful beachfront bungalow with a private pool.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1602391833977-358a52198938?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      },
      price: 1800,
      location: "Bali",
      country: "Indonesia",
    },
    {
      title: "Mountain View Cabin in Banff",
      description:
        "Enjoy breathtaking mountain views from this cozy cabin in the Canadian Rockies.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      },
      price: 1500,
      location: "Banff",
      country: "Canada",
    },
    {
      title: "Art Deco Apartment in Miami",
      description:
        "Step into the glamour of the 1920s in this stylish Art Deco apartment in South Beach.",
      image: {
        filename: "listingimage",
        url: "https://plus.unsplash.com/premium_photo-1670963964797-942df1804579?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      },
      price: 1600,
      location: "Miami",
      country: "United States",
    },
    {
      title: "Tropical Villa in Phuket",
      description:
        "Escape to a tropical paradise in this luxurious villa with a private infinity pool in Phuket.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1470165301023-58dab8118cc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      },
      price: 3000,
      location: "Phuket",
      country: "Thailand",
    },
    {
      title: "Historic Castle in Scotland",
      description:
        "Live like royalty in this historic castle in the Scottish Highlands. Explore the rugged beauty of the area.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1585543805890-6051f7829f98?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJlYWNoJTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      },
      price: 4000,
      location: "Scottish Highlands",
      country: "United Kingdom",
    },
    {
      title: "Desert Oasis in Dubai",
      description:
        "Experience luxury in the middle of the desert in this opulent oasis in Dubai with a private pool.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1518684079-3c830dcef090?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHViYWl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      },
      price: 5000,
      location: "Dubai",
      country: "United Arab Emirates",
    },
    {
      title: "Rustic Log Cabin in Montana",
      description:
        "Unplug and unwind in this cozy log cabin surrounded by the natural beauty of Montana.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1586375300773-8384e3e4916f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      },
      price: 1100,
      location: "Montana",
      country: "United States",
    },
    {
      title: "Beachfront Villa in Greece",
      description:
        "Enjoy the crystal-clear waters of the Mediterranean in this beautiful beachfront villa on a Greek island.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dmlsbGF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      },
      price: 2500,
      location: "Mykonos",
      country: "Greece",
    },
    {
      title: "Eco-Friendly Treehouse Retreat",
      description:
        "Stay in an eco-friendly treehouse nestled in the forest. It's the perfect escape for nature lovers.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1488462237308-ecaa28b729d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      },
      price: 750,
      location: "Costa Rica",
      country: "Costa Rica",
    },
    {
      title: "Historic Cottage in Charleston",
      description:
        "Experience the charm of historic Charleston in this beautifully restored cottage with a private garden.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1587381420270-3e1a5b9e6904?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      },
      price: 1600,
      location: "Charleston",
      country: "United States",
    },
    {
      title: "Modern Apartment in Tokyo",
      description:
        "Explore the vibrant city of Tokyo from this modern and centrally located apartment.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1480796927426-f609979314bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRva3lvfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      },
      price: 2000,
      location: "Tokyo",
      country: "Japan",
    },
    {
      title: "Lakefront Cabin in New Hampshire",
      description:
        "Spend your days by the lake in this cozy cabin in the scenic White Mountains of New Hampshire.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1578645510447-e20b4311e3ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      },
      price: 1200,
      location: "New Hampshire",
      country: "United States",
    },
    {
      title: "Luxury Villa in the Maldives",
      description:
        "Indulge in luxury in this overwater villa in the Maldives with stunning views of the Indian Ocean.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGFrZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      },
      price: 6000,
      location: "Maldives",
      country: "Maldives",
    },
    {
      title: "Ski Chalet in Aspen",
      description:
        "Hit the slopes in style with this luxurious ski chalet in the world-famous Aspen ski resort.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGxha2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      },
      price: 4000,
      location: "Aspen",
      country: "United States",
    },
    {
      title: "Secluded Beach House in Costa Rica",
      description:
        "Escape to a secluded beach house on the Pacific coast of Costa Rica. Surf, relax, and unwind.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2glMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      },
      price: 1800,
      location: "Costa Rica",
      country: "Costa Rica",
    },
    {
      title: "Luxury Beachfront Villa",
      description:
        "Relax in luxury at this beachfront villa, perfect for a tranquil getaway.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1480618425819-5530e06e4a03?q=80&w=1129&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      price: 2500,
      location: "Malibu",
      country: "United States",
    },
    {
      title: "Modern Penthouse",
      description:
        "Stay in this luxurious modern penthouse in the heart of the city.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1565623833408-d77e39b88af6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxMjA3fDB8MXxzZWFyY2h8Mnx8cGVudGhvdXNlfHwwfHx8&ixlib=rb-1.2.1&q=80&w=1080",
      },
      price: 3000,
      location: "New York City",
      country: "United States",
    },
    {
      title: "Charming Aspen Cabin",
      description:
        "Cozy up in this charming cabin with mountain views, perfect for a winter retreat.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1551648746-d158bcd704e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MXxzZWFyY2h8NHx8bW91bnRhaW4lMjBjYWJpbnx8MHx8fHwxNjI5MzIyNTM0&ixlib=rb-1.2.1&q=80&w=1080",
      },
      price: 1300,
      location: "Aspen",
      country: "United States",
    },
    {
      title: "Scenic Villa in Tuscany",
      description:
        "Experience breathtaking views and the beauty of Tuscany in this scenic villa.",
      image: {
        filename: "listingimage",
        url: "https://media.istockphoto.com/id/157559345/photo/tuscany-villa.webp?b=1&s=170667a&w=0&k=20&c=Rv-t72Dq_RAithYTNL2VETclYAHZ4WKmxiDNe-rcjH4=",
      },
      price: 2700,
      location: "Florence",
      country: "Italy",
    },
    {
      title: "Cozy Treehouse Retreat",
      description:
        "Stay among the treetops in this cozy treehouse, a perfect nature escape.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1515126610754-a10f0df8fd3f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHRyZWUlMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D",
      },
      price: 900,
      location: "Portland",
      country: "United States",
    },
    {
      title: "Beachside Cottage in Malibu",
      description:
        "Enjoy the serenity of the beach from this charming cottage in Malibu.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YmVhY2glMjBjb3R0YWdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      },
      price: 1600,
      location: "Malibu",
      country: "United States",
    },
    {
      title: "Oceanfront Villa in Bali",
      description:
        "Relax in this stunning oceanfront villa in Bali, perfect for a tropical getaway.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1721989518149-ecf1d8e086aa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YmFsaSUyMHZpbGxhfGVufDB8fDB8fHww",
      },
      price: 2200,
      location: "Bali",
      country: "Indonesia",
    },
    {
      title: "Rustic Mountain Lodge",
      description:
        "Escape to this rustic mountain lodge, surrounded by nature's beauty.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1562429063-db53fd1027d8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1vdW50YWluJTIwbG9kZ2V8ZW58MHx8MHx8fDA%3D",
      },
      price: 1400,
      location: "Aspen",
      country: "United States",
    },
    {
      title: "Modern Loft in Downtown NYC",
      description: "Stay in the heart of the city with this stylish modern loft.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1550581190-9c1c48d21d6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bW9kZXJuJTIwbG9mdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      },
      price: 3200,
      location: "New York City",
      country: "United States",
    },
    {
      title: "Tropical Bungalow",
      description: "Relax in this tropical bungalow surrounded by lush greenery.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1602002418655-57aef867418e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      price: 1800,
      location: "Bali",
      country: "Indonesia",
    },
    {
      title: "Coastal Hideaway",
      description: "Find peace and tranquility at this coastal hideaway.",
      image: {
        filename: "listingimage",
        url: "https://plus.unsplash.com/premium_photo-1682285210821-5d1b5a406b97?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      price: 1700,
      location: "Malibu",
      country: "United States",
    },
    {
      title: "Romantic Paris Apartment",
      description:
        "Enjoy the romance of Paris from this charming apartment with a view.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1533660823039-3793670cbe15?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      price: 2500,
      location: "Paris",
      country: "France",
    },
    {
      title: "Secluded Desert Oasis",
      description:
        "Experience serenity at this secluded desert oasis, perfect for stargazing.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1578683054701-224642011d32?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      price: 1900,
      location: "Joshua Tree",
      country: "United States",
    },
    {
      title: "Elegant Georgian Townhouse",
      description:
        "Stay in a beautifully restored Georgian townhouse, blending history with modern comforts.",
      image: {
        filename: "listingimage",
        url: "https://plus.unsplash.com/premium_photo-1693493439417-d332e618e640?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      price: 2800,
      location: "Edinburgh",
      country: "Scotland",
    },
    {
      title: "Historic Venice Apartment",
      description:
        "Stay in a historic apartment with views of Venice's iconic canals.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1482042519045-a51ea0cfb61d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dmVuaWNlJTIwYXBhcnRtZW50fGVufDB8fDB8fHww",
      },
      price: 2600,
      location: "Venice",
      country: "Italy",
    },
    {
      title: "Luxury Villa in Mykonos",
      description:
        "Enjoy stunning sea views and luxurious amenities in this Mykonos villa.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1668694455375-1c2fb4c3ccb6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2VhJTIwdmlsbGElMjBteWtvbm9zfGVufDB8fDB8fHww",
      },
      price: 3400,
      location: "Mykonos",
      country: "Greece",
    },
    {
      title: "Chic Berlin Loft",
      description: "Stay in a stylish and modern loft in the heart of Berlin.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1555400082-1a2152f840b1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmVybGluJTIwbG9mdHxlbnwwfHwwfHx8MA%3D%3D",
      },
      price: 2200,
      location: "Berlin",
      country: "Germany",
    },
    {
      title: "Serene Lakeside Cottage",
      description:
        "Relax in this charming lakeside cottage with breathtaking views.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1536080335162-ebc01000f8d1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGxha2VzaWRlJTIwY290dGFnZXxlbnwwfHwwfHx8MA%3D%3D",
      },
      price: 1200,
      location: "Lake Tahoe",
      country: "United States",
    },
    {
      title: "Urban Retreat in Tokyo",
      description:
        "Enjoy modern comforts in this urban retreat located in the heart of Tokyo.",
      image: {
        filename: "listingimage",
        url: "https://plus.unsplash.com/premium_photo-1664302637525-e2a97fc65d33?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dG9reW8lMjByZXRyZWF0fGVufDB8fDB8fHww",
      },
      price: 2700,
      location: "Tokyo",
      country: "Japan",
    },
    {
      title: "Mediterranean Villa",
      description:
        "Stay in a luxurious villa with stunning views of the Mediterranean Sea.",
      image: {
        filename: "listingimage",
        url: "https://plus.unsplash.com/premium_photo-1682377521552-49d35c2c9704?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bWVkaXRlcnJhbmVhbiUyMHZpbGxhfGVufDB8fDB8fHww",
      },
      price: 3000,
      location: "Santorini",
      country: "Greece",
    },
    {
      title: "Cozy Cabin in the Woods",
      description:
        "Experience tranquility in this cozy cabin nestled in the woods.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1697807650304-907257330a3e?blend=000000&blend-alpha=10&blend-mode=normal&blend-w=1&crop=faces%2Cedges&h=630&mark=https:%2F%2Fimages.unsplash.com%2Fopengraph%2Flogo.png&mark-align=top%2Cleft&mark-pad=50&mark-w=64&w=1200&auto=format&fit=crop&q=60&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzA3NDU1NDY2fA&ixlib=rb-4.0.3",
      },
      price: 1500,
      location: "Smoky Mountains",
      country: "United States",
    },
    {
      title: "Beachfront Bungalow",
      description:
        "Enjoy direct access to the beach from this beautiful beachfront bungalow.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
      },
      price: 2100,
      location: "Maldives",
      country: "Maldives",
    },
    {
      title: "Alpine Chalet",
      description:
        "Stay in this charming alpine chalet, perfect for winter sports enthusiasts.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1509736339112-053f93230c10?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2hhbGV0fGVufDB8fDB8fHww",
      },
      price: 2400,
      location: "Zermatt",
      country: "Switzerland",
    },
    {
      title: "Luxurious Penthouse",
      description:
        "Enjoy stunning city views from this luxurious penthouse suite.",
      image: {
        filename: "listingimage",
        url: "https://plus.unsplash.com/premium_photo-1661913412680-c274b6fea096?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVudGhvdXNlfGVufDB8fDB8fHww",
      },
      price: 3500,
      location: "Dubai",
      country: "United Arab Emirates",
    },
    {
      title: "Historic Manor House",
      description:
        "Experience the grandeur of this historic manor house with lush gardens.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1505209787218-e8c2633e1b6c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG9sZCUyMG1hbm9yfGVufDB8fDB8fHww",
      },
      price: 3500,
      location: "Bath",
      country: "United Kingdom",
    },
    {
      title: "Riverside Loft",
      description:
        "Enjoy riverside views and modern amenities in this stylish loft.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1505873242700-f289a29e1e0f?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      price: 1900,
      location: "Paris",
      country: "France",
    },
    {
      title: "Modern Beach House",
      description: "Relax in this modern beach house with panoramic ocean views.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8YmVhY2glMjBob3VzZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
      },
      price: 2800,
      location: "Malibu",
      country: "United States",
    },
    {
      title: "Charming Countryside Farmhouse",
      description:
        "Experience the rustic charm of this countryside farmhouse with modern amenities.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1600376709132-33584c8ddb17?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D",
      },
      price: 1600,
      location: "Tuscany",
      country: "Italy",
    },
    {
      title: "Luxury Ski Lodge",
      description:
        "Enjoy ski-in/ski-out access from this luxury ski lodge in the Alps.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1695402933622-9021c04276ff?q=80&w=1763&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      price: 3200,
      location: "Chamonix",
      country: "France",
    },
    {
      title: "Sunny Desert Retreat",
      description:
        "Unwind in this tranquil desert retreat with stunning views of the sand dunes.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1660061540506-7ea770652676?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      price: 1800,
      location: "Sedona",
      country: "United States",
    },
    {
      title: "Tropical Island Resort",
      description:
        "Experience paradise at this luxurious tropical island resort.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1594433575301-cf59b8ada6b1?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      price: 3500,
      location: "Bora Bora",
      country: "French Polynesia",
    },
    {
      title: "Modern Art Deco Apartment",
      description:
        "Stay in this stylish Art Deco apartment with modern amenities and city views.",
      image: {
        filename: "listingimage",
        url: "https://plus.unsplash.com/premium_photo-1661926818635-3d413932f2a9?q=80&w=2012&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      price: 2200,
      location: "New York",
      country: "United States",
    },
    {
      title: "Grand Chateau",
      description:
        "Experience royal luxury in this grand chateau with expansive gardens.",
      image: {
        filename: "listingimage",
        url: "https://plus.unsplash.com/premium_photo-1694475052717-df3d93d3e6eb?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      price: 4000,
      location: "Loire Valley",
      country: "France",
    },
    {
      title: "Artisan Loft in Downtown",
      description:
        "Enjoy the vibrant city life in this stylish artisan loft located in downtown.",
      image: {
        filename: "listingimage",
        url: "https://plus.unsplash.com/premium_photo-1684175656320-5c3f701c082c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      price: 2000,
      location: "Chicago",
      country: "United States",
    },
    {
      title: "Secluded Mountain Retreat",
      description:
        "Escape to this secluded mountain retreat with breathtaking views and privacy.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1544646280-aa1158259402?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      price: 1900,
      location: "Aspen",
      country: "United States",
    },
    {
      title: "Chic Coastal Retreat",
      description:
        "Experience elegance by the sea in this chic coastal retreat with modern amenities.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1571003123771-bd6a099dd83a?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      price: 2300,
      location: "Sydney",
      country: "Australia",
    },
    {
      title: "Charming Riverside Cottage",
      description:
        "Relax by the river in this charming cottage with picturesque views.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1676540610181-7ef96f18fc94?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      price: 1600,
      location: "Bruges",
      country: "Belgium",
    },
    /*main page database*/
    {
      title: "Monterosso Al Mare",
      description:
        "Escape to this monterosso for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&w=986&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      price: 45000,
      location: "Manarola",
      country: "Italy",
    },
    {
      title: "Tropical Oasis",
      description:
        "Escape to a tranquil paradise in this stunning beachfront villa, surrounded by crystal-clear waters and lush greenery.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=1065&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      price: 30000,
      location: "Maldives",
      country: "India",
    },
    {
      title: "Whitewashed Dreams",
      description:
        "Get lost in the charm of Santorini in this picturesque whitewashed villa, perched on the edge of the caldera with breathtaking views of the Aegean Sea.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      price: 60000,
      location: "Oia",
      country: "Greece",
    },
    {
      title: "Romantic Seine Getaway",
      description:
        "Indulge in the City of Love's charm in this cozy apartment, perfectly situated along the Seine River with stunning views of Paris' iconic landmarks.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      price: 50000,
      location: "Paris",
      country: "France",
    },
    {
      title: "Desert Oasis Retreat",
      description:
        "Escape to a luxurious villa in the heart of Abu Dhabi, surrounded by lush gardens and serene desert landscapes.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1535117423468-de0ff056882e?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      price: 50000,
      location: "Abu Dhabi",
      country: "UAE",
    },
    {
      title: "Tian Tan Buddha",
      description:
        "Find peace and tranquility in this cozy apartment overlooking the iconic Tian Tan Buddha statue in Hong Kong.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1513415564515-763d91423bdd?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      price: 25000,
      location: "Hong Kong",
      country: "China",
    },
  ];
  
  module.exports={data:sampleListings};