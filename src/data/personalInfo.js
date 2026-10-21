/**
 * PERSONAL INFORMATION & PROFILE DATA
 * Edit this file to customize Feyisa Girma's portfolio content,
 * contact details, social links, and profile image.
 */

export const personalInfo = {
  name: "Feyisa Girma",
  firstName: "Feyisa",
  lastName: "Girma",
  role: "Aspiring Network Engineer",
  tagline: "Aspiring Network Engineer | CCNA Trained",
  
  // Hero intro
  heroGreeting: "Hello, I'm",
  heroDescription:
    "Passionate about designing, configuring, securing, and troubleshooting computer networks. Completed comprehensive CCNA training with hands-on experience in routing, switching, IP addressing, and network infrastructure through practical lab environments.",

  // Portrait image path (placed in /public/images/)
  // To use your own photo, place it in public/images/ (e.g. feyisa.jpg) and set portraitImage: "/images/feyisa.jpg"
  portraitImage: "/images/portrait-engineer.svg",

  // About Section text
  aboutHeading: "Building Reliable and Secure Networks",
  aboutParagraphs: [
    "I am an aspiring Network Engineer with a strong foundation in networking concepts and practical experience gained through CCNA training and hands-on labs. I enjoy configuring network devices, solving connectivity problems, and building reliable network infrastructures.",
    "My goal is to begin my professional career in network engineering, continue developing my technical expertise, and contribute to real-world IT infrastructure projects.",
  ],

  // Specific requirement: Do not claim official CCNA certification
  certificationStatus: "CCNA Training Completed | Certification Pending",

  // Key stats / highlights shown in About section
  highlights: [
    { label: "Hands-on Lab Experience", desc: "Configured 15+ complex topologies" },
    { label: "CCNA Training Completed", desc: "Official exam preparation in progress" },
    { label: "Cisco IOS CLI & Packet Tracer", desc: "Practical hands-on command execution" },
    { label: "Open to Junior Network Roles", desc: "Network Support, Junior NOC, IT Support" },
  ],

  // Information Card fields (matching screenshot)
  contactDetails: {
    location: "Addis Ababa, Ethiopia", // Customize your city/country
    email: "feyisagirma.it@gmail.com",   // Easily editable email
    phone: "0951395410",                // As specified in user prompt
    education: "4th year IT student",   // As specified in user prompt
    languages: "Afaan oromo, Amharic and English", // As specified in user prompt
    careerFocus: "Network Engineering", // As specified in user prompt
    status: "CCNA Training Completed | Certification Pending",
  },

  // Social & Professional Profiles
  socialLinks: {
    github: "https://github.com/feyisagirma",
    linkedin: "https://linkedin.com/in/feyisagirma",
    email: "mailto:feyisagirma.it@gmail.com",
    phoneUrl: "tel:0951395410",
  },

  // CV Download path (stored in public/cv/)
  cvPath: "/cv/Feyisa_Girma_Resume.pdf",

  // Contact section text
  contactHeading: "Let's Build Reliable Networks Together",
  contactDescription:
    "I am open to entry-level Network Engineer, Network Support, NOC Technician, and IT Support opportunities. Feel free to contact me regarding job opportunities, networking projects, or professional collaboration.",

  // Tech brands / tools strip shown below hero buttons (like reference screenshot)
  techPartners: [
    { name: "Cisco Systems", label: "Cisco IOS" },
    { name: "Packet Tracer", label: "Cisco Packet Tracer" },
    { name: "Wireshark", label: "Protocol Analyzer" },
    { name: "Linux", label: "Ubuntu / Debian CLI" },
    { name: "Windows 10", label: "Windows Networking" },
    { name: "OSPF", label: "Dynamic Routing" },
  ],
};
