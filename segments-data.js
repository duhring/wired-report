// Epstein Investigation - 9 Key Segments Data
const INVESTIGATION_SEGMENTS = [
    {
        id: 1,
        title: "WIRED Uncovers Epstein's Secret Data",
        summary: "Investigation reveals data from 200+ mobile phones of visitors to Epstein's island, exposing a massive surveillance operation.",
        timestampStart: "0:00",
        timestampEnd: "0:30",
        timestampSeconds: 0,
        quote: "I spearheaded a WIRED investigation that uncovered the data of almost 200 mobile phones belonging to visitors to his infamous Pedophile Island",
        significance: "Sets the stage for the entire investigation, reveals the scope",
        category: "INVESTIGATION",
        keywords: ["investigation", "data", "mobile phones", "visitors", "WIRED"]
    },
    {
        id: 2,
        title: "Centimeter-Level Precision Tracking",
        summary: "The collected data was precise enough to map visitor movements within centimeters, revealing exact paths and locations.",
        timestampStart: "0:12",
        timestampEnd: "0:42",
        timestampSeconds: 12,
        quote: "The data was so precise, we were able to map the paths of these visitors to within centimeters",
        significance: "Shows the shocking accuracy of surveillance technology",
        category: "TECHNOLOGY",
        keywords: ["precision", "tracking", "surveillance", "digital trails", "centimeters"]
    },
    {
        id: 3,
        title: "11,279 Coordinates on Epstein Island",
        summary: "Visual representation of massive data collection showing over 11,000 coordinate points from location data broker Near Intelligence.",
        timestampStart: "0:41",
        timestampEnd: "1:11",
        timestampSeconds: 41,
        quote: "These red dots represent some of the 11,279 coordinates I obtained from location data broker Near Intelligence",
        significance: "Visualizes the massive scale of data collection",
        category: "DATA",
        keywords: ["coordinates", "data broker", "Near Intelligence", "scale", "visualization"]
    },
    {
        id: 4,
        title: "Traffic Continued After 2008 Conviction",
        summary: "Despite Epstein's 2008 conviction and jail time, wealthy visitors continued traveling to the island between 2016-2019.",
        timestampStart: "3:39",
        timestampEnd: "4:09",
        timestampSeconds: 219,
        quote: "A lot of people were visiting the island, even after Epstein had pleaded guilty in 2008 and served jail time",
        significance: "Reveals ongoing visits despite known criminal status",
        category: "REVELATION",
        keywords: ["conviction", "continued visits", "2008", "jail time", "wealthy visitors"]
    },
    {
        id: 5,
        title: "Tracking America's Wealthy Elite",
        summary: "Data reveals visitors from affluent areas including Martha's Vineyard, Nantucket, and gated communities across America.",
        timestampStart: "4:18",
        timestampEnd: "4:48",
        timestampSeconds: 258,
        quote: "Many visitors were likely wealthy, as indicated by coordinates pointing to gated communities and homes in Martha's Vineyard",
        significance: "Connects to high-society networks and privilege",
        category: "NETWORKS",
        keywords: ["wealthy", "elite", "Martha's Vineyard", "gated communities", "affluent"]
    },
    {
        id: 6,
        title: "Data Point at Trump Tower",
        summary: "Location tracking reveals data points at high-profile locations including sidewalk across from Trump Tower in NYC.",
        timestampStart: "4:31",
        timestampEnd: "5:01",
        timestampSeconds: 271,
        quote: "We even have data points from Downtown Miami nightclub and the sidewalk across from Trump Tower in New York City",
        significance: "Names specific high-profile locations and potential connections",
        category: "CONNECTIONS",
        keywords: ["Trump Tower", "high-profile locations", "connections", "NYC", "Miami"]
    },
    {
        id: 7,
        title: "Missing European Data Due to GDPR",
        summary: "Europe's strong privacy laws (GDPR) likely prevented data collection there, showing the power of privacy protection.",
        timestampStart: "5:28",
        timestampEnd: "5:58",
        timestampSeconds: 328,
        quote: "There are no data points anywhere in Europe... One possibility could be Europe's extensive privacy laws",
        significance: "Reveals how privacy laws affect surveillance capabilities",
        category: "PRIVACY",
        keywords: ["Europe", "GDPR", "privacy laws", "data protection", "surveillance limits"]
    },
    {
        id: 8,
        title: "1.6 Billion People Under Surveillance",
        summary: "Near Intelligence claimed to track 1.6 billion people across 44 countries, exposing the massive commercial surveillance industry.",
        timestampStart: "6:24",
        timestampEnd: "6:54",
        timestampSeconds: 384,
        quote: "Near Intelligence claimed to have information on around 1.6 billion people in 44 countries",
        significance: "Exposes the massive scale of commercial surveillance",
        category: "SURVEILLANCE",
        keywords: ["data broker", "1.6 billion", "surveillance", "commercial tracking", "global scale"]
    },
    {
        id: 9,
        title: "Maxwell Tracked by Cell Phone Data",
        summary: "Ghislaine Maxwell was arrested after federal agents tracked her to New Hampshire using the same cell phone location data.",
        timestampStart: "8:26",
        timestampEnd: "8:36",
        timestampSeconds: 506,
        quote: "Maxwell was arrested in New Hampshire, tracked to a million-dollar home by federal agents using location data from her cell phone",
        significance: "Shows how this same tracking technology caught Epstein's accomplice",
        category: "JUSTICE",
        keywords: ["Maxwell", "arrest", "location data", "federal agents", "tracking technology"]
    }
];

// Category colors for visual organization
const CATEGORY_COLORS = {
    'INVESTIGATION': '#DC2626',
    'TECHNOLOGY': '#2563EB', 
    'DATA': '#7C3AED',
    'REVELATION': '#EA580C',
    'NETWORKS': '#059669',
    'CONNECTIONS': '#CA8A04',
    'PRIVACY': '#0891B2',
    'SURVEILLANCE': '#BE123C',
    'JUSTICE': '#166534'
};

// Video information
const VIDEO_INFO = {
    url: 'https://youtu.be/PjPHq-Ez0nc?si=LvfQ9ZNDo9R5uEFG',
    title: 'Epstein Island\'s Secret Data, On The Grid',
    duration: '8:37',
    channel: 'WIRED'
};

// Make data globally available
window.INVESTIGATION_SEGMENTS = INVESTIGATION_SEGMENTS;
window.CATEGORY_COLORS = CATEGORY_COLORS;
window.VIDEO_INFO = VIDEO_INFO;