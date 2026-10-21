/**
 * TECHNICAL SKILLS DATA
 * Hands-on skills acquired through CCNA training and practical laboratory simulations.
 * Easily add, remove, or modify skills here.
 */

export const skillCategories = [
  {
    id: "networking-fundamentals",
    title: "Networking Fundamentals",
    icon: "Network",
    description: "Core architectural principles governing data communication and packet transit across interconnected systems.",
    badge: "Foundation",
    skills: [
      { name: "OSI & TCP/IP Models", desc: "Layered encapsulation, headers, and protocol stack interaction" },
      { name: "IPv4 & IPv6 Addressing", desc: "Dual-stack addressing, unicast, multicast, and loopback allocations" },
      { name: "Subnetting & VLSM", desc: "Variable Length Subnet Masking, CIDR, and host optimization" },
      { name: "Network Troubleshooting", desc: "Systematic Layer 1 through Layer 7 diagnostic workflows" },
    ],
  },
  {
    id: "routing-technologies",
    title: "Routing Technologies",
    icon: "Route",
    description: "Layer 3 path determination, routing table convergence, and dynamic routing protocol implementation.",
    badge: "Layer 3",
    skills: [
      { name: "OSPF (Open Shortest Path First)", desc: "Single-area OSPFv2, Router-ID, metric costs, and neighbor adjacency" },
      { name: "Static Routing", desc: "Next-hop IP and exit interface route provisioning" },
      { name: "Default Routing", desc: "Gateway of last resort (0.0.0.0/0) for external network reachability" },
      { name: "Inter-VLAN Routing", desc: "Router-on-a-Stick with 802.1Q subinterfaces and SVI configuration" },
    ],
  },
  {
    id: "switching-technologies",
    title: "Switching Technologies",
    icon: "Layers",
    description: "Layer 2 campus LAN segmentation, collision domain isolation, and loop-free topology forwarding.",
    badge: "Layer 2",
    skills: [
      { name: "VLAN Configuration", desc: "Segmenting broadcast domains for security and departmental isolation" },
      { name: "802.1Q Trunking", desc: "Carrying multiple VLAN tags across inter-switch links" },
      { name: "Spanning Tree Protocol (STP)", desc: "Loop prevention, root bridge election, and port states" },
      { name: "EtherChannel", desc: "Link aggregation using LACP / PAgP for increased bandwidth and redundancy" },
    ],
  },
  {
    id: "network-services",
    title: "Network Services",
    icon: "Server",
    description: "Essential infrastructure services supporting host auto-configuration, translation, and time synchronization.",
    badge: "Services",
    skills: [
      { name: "DHCP", desc: "DHCP pools, excluded addresses, lease times, and IP helper-address" },
      { name: "NAT & PAT", desc: "Static NAT, dynamic NAT, and Port Address Translation (Overload)" },
      { name: "DNS Fundamentals", desc: "Domain name resolution, A records, and DNS client configuration" },
      { name: "NTP (Network Time Protocol)", desc: "Synchronizing device clocks for accurate logging and forensics" },
    ],
  },
  {
    id: "network-security",
    title: "Network Security",
    icon: "ShieldCheck",
    description: "Device defense, administrative hardening, and granular traffic filtering policies.",
    badge: "Security",
    skills: [
      { name: "Access Control Lists (ACLs)", desc: "Standard and extended numbered/named ACLs for inbound/outbound packet filtering" },
      { name: "Switch Port Security", desc: "MAC address sticky binding, maximum limit, and violation modes" },
      { name: "SSH Secure Remote Access", desc: "RSA key generation, disabling insecure Telnet, and crypto key management" },
      { name: "Basic Device Hardening", desc: "Encrypted enable secrets, console passwords, and banner warnings" },
    ],
  },
  {
    id: "tools-technologies",
    title: "Tools & Technologies",
    icon: "Terminal",
    description: "Simulation software, diagnostic CLI utilities, and operating systems utilized in lab environments.",
    badge: "Tools",
    skills: [
      { name: "Cisco Packet Tracer", desc: "Extensive simulation of enterprise campus, routers, and switches" },
      { name: "Cisco IOS CLI", desc: "Privileged EXEC, global configuration, interface management, and debug modes" },
      { name: "Wireshark", desc: "Packet capture, protocol header analysis, and 3-way handshake inspection" },
      { name: "Windows 10 Networking", desc: "TCP/IP configuration, routing tables, ping, tracert, nslookup, ipconfig" },
      { name: "Basic Linux Networking", desc: "CLI troubleshooting via ifconfig, ip addr, netstat, ping, and traceroute" },
    ],
  },
];
