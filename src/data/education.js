/**
 * TRAINING & EDUCATION DATA
 * Details Feyisa Girma's academic background and specialized CCNA coursework.
 * Explicitly states "Course Completed — Certification Pending" as required.
 */

export const educationData = [
  {
    id: "ccna-training",
    badge: "Specialized Coursework",
    title: "Cisco Certified Network Associate (CCNA 200-301) Training",
    status: "Course Completed — Certification Pending",
    statusType: "pending", // Used for distinct visual pill styling
    institution: "Cisco Networking Academy / Certified Training Program", // Customizable placeholder
    period: "Completed | Official Exam in Preparation",
    location: "Hands-on Hybrid & Virtual Labs",
    description:
      "Completed comprehensive CCNA curriculum covering enterprise networking, IP connectivity, infrastructure security, and automated device management with extensive practical lab simulations.",
    topicsCovered: [
      {
        title: "Network Fundamentals",
        details: "Routers, switches, endpoints, cabling, TCP/UDP architectures, IPv4/IPv6 subnetting.",
      },
      {
        title: "Network Access",
        details: "VLANs, 802.1Q trunking, Spanning Tree Protocol (STP), EtherChannel, wireless LAN architectures.",
      },
      {
        title: "IP Connectivity",
        details: "Routing tables, static/default routes, OSPFv2 single & multi-area, gateway redundancy.",
      },
      {
        title: "IP Services",
        details: "NAT/PAT overload, DHCP services, DNS operations, NTP synchronization, SNMP monitoring.",
      },
      {
        title: "Security Fundamentals",
        details: "Access Control Lists (ACLs), Port Security, Layer 2 attack mitigation, secure remote access (SSH).",
      },
      {
        title: "Automation & Programmability",
        details: "Controller-based networking (Cisco DNA Center), REST APIs, JSON data structures, network configuration management.",
      },
    ],
    importantNotice:
      "Important Note: Comprehensive curriculum and hands-on lab requirements completed; currently scheduling official Cisco CCNA (200-301) proctored certification exam.",
  },
  {
    id: "it-degree",
    badge: "Formal Degree",
    title: "Bachelor of Science in Information Technology",
    status: "4th Year IT Student (Senior Year)",
    statusType: "current",
    institution: "University / Institute of Technology", // Customizable placeholder
    period: "Enrolled — Expected Graduation 2026/2027",
    location: "Addis Ababa, Ethiopia",
    description:
      "Pursuing a 4-year degree in Information Technology with specialized elective coursework in Computer Networking, Data Communications, Operating Systems, and Information Systems Security.",
    topicsCovered: [
      {
        title: "Data Communications & Networking",
        details: "Signal transmission, network protocols, switching topologies, client-server models.",
      },
      {
        title: "Systems Administration",
        details: "Windows Server & Linux system administration, user access management, directory services.",
      },
      {
        title: "Information Security",
        details: "Principles of confidentiality, integrity, availability, firewalls, and cyber defense.",
      },
    ],
  },
];
