/**
 * FEATURED NETWORKING LABS DATA
 * CCNA Practical laboratory configurations and topology specifications.
 * All entries are easily editable templates. Replace configurations, addressing,
 * or commands with your actual lab files.
 */

export const labsData = [
  {
    id: "lab-01-vlan-routing",
    number: "Lab 01",
    title: "VLAN & Inter-VLAN Routing",
    category: "Switching & Routing",
    shortDescription:
      "Designed a simulated network with multiple VLANs and configured inter-VLAN communication using Cisco networking devices.",
    topologyImage: "/images/topologies/lab1-vlan.svg",
    technologies: ["Cisco Packet Tracer", "VLAN", "802.1Q Trunking", "Router-on-a-Stick", "Cisco 2960"],
    githubUrl: "https://github.com/feyisagirma/ccna-labs/tree/main/lab01-vlan-intervlan",
    pktDownloadUrl: "/projects/sample-lab.pkt",
    overview:
      "This lab implements logical network segmentation using Virtual Local Area Networks (VLANs) on a Cisco Catalyst 2960 switch, paired with a Cisco 2911 router configured as a Router-on-a-Stick (ROAS) to facilitate routed communication between isolated departmental subnets.",
    objectives: [
      "Segment local network traffic into distinct broadcast domains (VLAN 10: Sales, VLAN 20: Engineering).",
      "Configure IEEE 802.1Q encapsulation and trunk links on switch uplinks.",
      "Provision router subinterfaces corresponding to VLAN IDs with gateway IP addressing.",
      "Verify end-to-end ICMP reachability between different VLAN endpoints.",
    ],
    devices: [
      { type: "Router", model: "Cisco 2911 Integrated Services Router (ISR)", role: "Default Gateway / ROAS" },
      { type: "Switch", model: "Cisco Catalyst 2960-24TT", role: "Access Layer / VLAN Segmentation" },
      { type: "End Devices", model: "2x Standard PC Workstations", role: "VLAN 10 & VLAN 20 Test Clients" },
    ],
    addressingTable: [
      { device: "R1-Gateway", interface: "G0/0.10", ipAddress: "192.168.10.1", subnetMask: "255.255.255.0", gateway: "N/A" },
      { device: "R1-Gateway", interface: "G0/0.20", ipAddress: "192.168.20.1", subnetMask: "255.255.255.0", gateway: "N/A" },
      { device: "SW1-Catalyst", interface: "VLAN 1 (SVI)", ipAddress: "192.168.10.2", subnetMask: "255.255.255.0", gateway: "192.168.10.1" },
      { device: "PC-Sales-01", interface: "NIC (Fa0)", ipAddress: "192.168.10.10", subnetMask: "255.255.255.0", gateway: "192.168.10.1" },
      { device: "PC-Eng-01", interface: "NIC (Fa0)", ipAddress: "192.168.20.10", subnetMask: "255.255.255.0", gateway: "192.168.20.1" },
    ],
    configurationSteps: [
      {
        step: 1,
        title: "Create VLANs & Assign Access Ports on Catalyst Switch",
        commands: `! On SW1-Catalyst:
enable
configure terminal
hostname SW1-2960

vlan 10
 name Sales
vlan 20
 name Engineering
exit

! Assign Access Ports
interface FastEthernet0/1
 switchport mode access
 switchport access vlan 10
 no shutdown

interface FastEthernet0/2
 switchport mode access
 switchport access vlan 20
 no shutdown

! Configure Trunk to Router
interface GigabitEthernet0/1
 switchport mode trunk
 switchport trunk allowed vlan 10,20
 no shutdown
exit`,
      },
      {
        step: 2,
        title: "Configure Router-on-a-Stick Subinterfaces on Cisco Router",
        commands: `! On R1-Gateway:
enable
configure terminal
hostname R1-Gateway

! Enable physical parent interface without an IP
interface GigabitEthernet0/0
 no shutdown
exit

! Subinterface for VLAN 10 (Sales)
interface GigabitEthernet0/0.10
 encapsulation dot1Q 10
 ip address 192.168.10.1 255.255.255.0
 description Sales-Default-Gateway
exit

! Subinterface for VLAN 20 (Engineering)
interface GigabitEthernet0/0.20
 encapsulation dot1Q 20
 ip address 192.168.20.1 255.255.255.0
 description Engineering-Default-Gateway
exit`,
      },
    ],
    verification: [
      {
        command: "show vlan brief",
        output: `VLAN Name                             Status    Ports
---- -------------------------------- --------- -------------------------------
1    default                          active    Fa0/3, Fa0/4, Fa0/5, Fa0/6...
10   Sales                            active    Fa0/1
20   Engineering                      active    Fa0/2
1002 fddi-default                     act/unsup 
1003 token-ring-default               act/unsup`,
      },
      {
        command: "show ip route (on R1)",
        output: `Gateway of last resort is not set

      192.168.10.0/24 is subnetted, 1 subnets
C        192.168.10.0 is directly connected, GigabitEthernet0/0.10
L        192.168.10.1/32 is directly connected, GigabitEthernet0/0.10
      192.168.20.0/24 is subnetted, 1 subnets
C        192.168.20.0 is directly connected, GigabitEthernet0/0.20
L        192.168.20.1/32 is directly connected, GigabitEthernet0/0.20`,
      },
      {
        command: "ping 192.168.20.10 (From Sales PC 192.168.10.10)",
        output: `Pinging 192.168.20.10 with 32 bytes of data:
Reply from 192.168.20.10: bytes=32 time=2ms TTL=127
Reply from 192.168.20.10: bytes=32 time=1ms TTL=127
Reply from 192.168.20.10: bytes=32 time=1ms TTL=127
Reply from 192.168.20.10: bytes=32 time=1ms TTL=127

Ping statistics for 192.168.20.10:
    Packets: Sent = 4, Received = 4, Lost = 0 (0% loss)`,
      },
    ],
    troubleshootingNotes: [
      "Issue: First ping between hosts timed out (ARP resolution). Resolved: Standard behavior as ARP cache populates on the router subinterfaces.",
      "Issue: Subinterfaces remained administratively down. Resolved: Remembered to issue 'no shutdown' on the physical parent interface (GigabitEthernet0/0).",
      "Issue: Forgetting 'encapsulation dot1Q <vlan_id>' prior to assigning IP address throws an IOS syntax requirement error.",
    ],
    lessonsLearned:
      "VLANs enforce security by preventing untagged broadcasts from spilling into other departments. Router-on-a-Stick is an economical design for small-to-medium branches, though hardware SVIs on Multilayer (L3) switches provide superior wire-speed throughput for high-bandwidth networks.",
  },
  {
    id: "lab-02-ospf-routing",
    number: "Lab 02",
    title: "OSPF Routing Configuration",
    category: "Routing",
    shortDescription:
      "Configured OSPF routing in a multi-router simulated environment and verified connectivity between different networks.",
    topologyImage: "/images/topologies/lab2-ospf.svg",
    technologies: ["OSPFv2", "Cisco IOS", "IP Addressing", "Dynamic Routing", "Wildcard Masks"],
    githubUrl: "https://github.com/feyisagirma/ccna-labs/tree/main/lab02-ospf-routing",
    pktDownloadUrl: "/projects/sample-lab.pkt",
    overview:
      "This lab configures single-area Open Shortest Path First (OSPFv2) Area 0 across three interconnected Cisco routers. It implements manual Router-ID selection, wildcard mask network statements, passive interface security, and metric cost tuning to optimize traffic forwarding.",
    objectives: [
      "Establish OSPFv2 neighbor adjacencies across a 3-router triangular mesh topology.",
      "Assign explicit, loopback-derived Router-IDs (1.1.1.1, 2.2.2.2, 3.3.3.3).",
      "Configure passive interfaces on LAN-facing ports to prevent unnecessary Hello packet transmission.",
      "Verify Link-State Advertisements (LSAs) and shortest path calculations using Dijkstra's algorithm.",
    ],
    devices: [
      { type: "Router 1", model: "Cisco 2911 ISR", role: "HQ Gateway (Router-ID: 1.1.1.1)" },
      { type: "Router 2", model: "Cisco 2911 ISR", role: "Branch Office (Router-ID: 2.2.2.2)" },
      { type: "Router 3", model: "Cisco 2911 ISR", role: "Distribution DR (Router-ID: 3.3.3.3)" },
    ],
    addressingTable: [
      { device: "R1-HQ", interface: "Serial 0/0/0", ipAddress: "10.0.12.1", subnetMask: "255.255.255.252", gateway: "N/A" },
      { device: "R2-Branch", interface: "Serial 0/0/0", ipAddress: "10.0.12.2", subnetMask: "255.255.255.252", gateway: "N/A" },
      { device: "R1-HQ", interface: "GigabitEthernet0/0", ipAddress: "10.0.13.1", subnetMask: "255.255.255.252", gateway: "N/A" },
      { device: "R3-Dist", interface: "GigabitEthernet0/0", ipAddress: "10.0.13.2", subnetMask: "255.255.255.252", gateway: "N/A" },
      { device: "R2-Branch", interface: "GigabitEthernet0/1", ipAddress: "10.0.23.1", subnetMask: "255.255.255.252", gateway: "N/A" },
      { device: "R3-Dist", interface: "GigabitEthernet0/1", ipAddress: "10.0.23.2", subnetMask: "255.255.255.252", gateway: "N/A" },
    ],
    configurationSteps: [
      {
        step: 1,
        title: "OSPF Process & Router-ID on R1-HQ",
        commands: `! Configure Loopback and OSPF on R1:
enable
configure terminal
interface Loopback0
 ip address 1.1.1.1 255.255.255.255
exit

router ospf 1
 router-id 1.1.1.1
 network 10.0.12.0 0.0.0.3 area 0
 network 10.0.13.0 0.0.0.3 area 0
 network 192.168.1.0 0.0.0.255 area 0
 passive-interface GigabitEthernet0/1
 exit`,
      },
      {
        step: 2,
        title: "OSPF Configuration on R2-Branch",
        commands: `! Configure OSPF on R2:
enable
configure terminal
interface Loopback0
 ip address 2.2.2.2 255.255.255.255
exit

router ospf 1
 router-id 2.2.2.2
 network 10.0.12.0 0.0.0.3 area 0
 network 10.0.23.0 0.0.0.3 area 0
 network 192.168.2.0 0.0.0.255 area 0
 passive-interface GigabitEthernet0/0
 exit`,
      },
    ],
    verification: [
      {
        command: "show ip ospf neighbor",
        output: `Neighbor ID     Pri   State           Dead Time   Address         Interface
2.2.2.2           0   FULL/  -        00:00:32    10.0.12.2       Serial0/0/0
3.3.3.3           1   FULL/DR         00:00:38    10.0.13.2       GigabitEthernet0/0`,
      },
      {
        command: "show ip route ospf",
        output: `      10.0.0.0/8 is variably subnetted, 6 subnets, 2 masks
O        10.0.23.0/30 [110/11] via 10.0.13.2, 00:14:22, GigabitEthernet0/0
O     192.168.2.0/24 [110/74] via 10.0.12.2, 00:12:05, Serial0/0/0`,
      },
    ],
    troubleshootingNotes: [
      "Issue: OSPF neighbors stuck in EXSTART/EXCHANGE state. Root cause: MTU size mismatch on serial link interfaces. Resolved by aligning MTU to 1500 bytes.",
      "Issue: Hello timer mismatch prevented adjacency. Ensured Dead time (40s) and Hello time (10s) matched across all links.",
    ],
    lessonsLearned:
      "OSPF scales significantly better than distance-vector protocols because it calculates the entire network topology locally via LSAs. Setting passive interfaces on user access subnets is critical to prevent malicious or rogue OSPF injection.",
  },
  {
    id: "lab-03-dhcp-nat",
    number: "Lab 03",
    title: "DHCP & NAT Configuration",
    category: "Network Services",
    shortDescription:
      "Implemented DHCP for automatic IP address allocation and NAT/PAT for network address translation.",
    topologyImage: "/images/topologies/lab3-dhcp-nat.svg",
    technologies: ["DHCP Server", "NAT Overload (PAT)", "Cisco IOS", "Private IP RFC 1918", "Packet Tracer"],
    githubUrl: "https://github.com/feyisagirma/ccna-labs/tree/main/lab03-dhcp-nat",
    pktDownloadUrl: "/projects/sample-lab.pkt",
    overview:
      "This lab configures a Cisco 2911 router as a dynamic DHCP server for internal LAN clients and implements Port Address Translation (NAT Overload) to enable hundreds of private RFC 1918 hosts to access the public Internet using a single public IPv4 address.",
    objectives: [
      "Configure a Cisco IOS DHCP pool with default gateway, DNS server, and excluded address ranges.",
      "Define standard Access Control List (ACL) to identify traffic eligible for address translation.",
      "Configure NAT Inside and NAT Outside interfaces.",
      "Verify translation bindings in the NAT table during active web traffic sessions.",
    ],
    devices: [
      { type: "Gateway Router", model: "Cisco 2911 ISR", role: "DHCP Server & NAT Gateway" },
      { type: "LAN Switch", model: "Cisco Catalyst 2960", role: "Client Aggregation" },
      { type: "Public Web Server", model: "Server PT", role: "Simulated Internet HTTP/DNS Target" },
      { type: "Client Workstations", model: "2x Cisco PT PCs", role: "DHCP Clients" },
    ],
    addressingTable: [
      { device: "R1-Gateway", interface: "G0/0 (Inside)", ipAddress: "192.168.1.1", subnetMask: "255.255.255.0", gateway: "N/A" },
      { device: "R1-Gateway", interface: "G0/1 (Outside)", ipAddress: "209.165.200.225", subnetMask: "255.255.255.248", gateway: "209.165.200.226" },
      { device: "Web-Server", interface: "Fa0", ipAddress: "209.165.201.2", subnetMask: "255.255.255.0", gateway: "209.165.201.1" },
      { device: "Client-01", interface: "DHCP Assigned", ipAddress: "192.168.1.11", subnetMask: "255.255.255.0", gateway: "192.168.1.1" },
    ],
    configurationSteps: [
      {
        step: 1,
        title: "DHCP Pool & Excluded Addresses",
        commands: `! Configure DHCP Service on Cisco Router:
enable
configure terminal

! Exclude statically assigned IPs (Gateway, Printers, Servers)
ip dhcp excluded-address 192.168.1.1 192.168.1.10

! Define LAN DHCP Pool
ip dhcp pool LAN-USERS
 network 192.168.1.0 255.255.255.0
 default-router 192.168.1.1
 dns-server 209.165.201.2
 domain-name corporate.local
 lease 7
exit`,
      },
      {
        step: 2,
        title: "NAT Overload (PAT) Implementation",
        commands: `! Tag interfaces for translation direction
interface GigabitEthernet0/0
 ip nat inside
exit

interface GigabitEthernet0/1
 ip nat outside
exit

! Create Standard ACL identifying private subnet
access-list 1 permit 192.168.1.0 0.0.0.255

! Bind ACL to Outside Interface with Overload
ip nat inside source list 1 interface GigabitEthernet0/1 overload`,
      },
    ],
    verification: [
      {
        command: "show ip dhcp binding",
        output: `IP address       Client-ID/              Lease expiration        Type
                 Hardware address
192.168.1.11     0001.9675.2A11          24 hours                Automatic
192.168.1.12     0060.7042.8F2C          24 hours                Automatic`,
      },
      {
        command: "show ip nat translations",
        output: `Pro  Inside global          Inside local           Outside local          Outside global
tcp  209.165.200.225:1025   192.168.1.11:1025      209.165.201.2:80       209.165.201.2:80
icmp 209.165.200.225:1      192.168.1.12:1         209.165.201.2:1        209.165.201.2:1`,
      },
    ],
    troubleshootingNotes: [
      "Issue: Client PCs were not receiving IP addresses. Checked if DHCP snooping was active or if the pool was exhausted.",
      "Issue: Clients could ping gateway but not public server. Found missing 'ip nat outside' command on G0/1 interface.",
    ],
    lessonsLearned:
      "NAT with Port Address Translation (PAT) maps source layer-4 port numbers to differentiate concurrent sessions, solving the acute IPv4 address exhaustion crisis for business and consumer networks.",
  },
  {
    id: "lab-04-security-acls",
    number: "Lab 04",
    title: "Network Security Using ACLs",
    category: "Network Security",
    shortDescription:
      "Created and tested Access Control Lists to control traffic between network segments.",
    topologyImage: "/images/topologies/lab4-acl.svg",
    technologies: ["Standard ACL", "Extended ACL", "Cisco IOS", "Traffic Filtering", "Port Security"],
    githubUrl: "https://github.com/feyisagirma/ccna-labs/tree/main/lab04-security-acls",
    pktDownloadUrl: "/projects/sample-lab.pkt",
    overview:
      "This lab implements Layer 3 and Layer 4 packet filtering using numbered and named Extended Access Control Lists. Traffic from untrusted guest networks is restricted from proprietary finance databases while maintaining necessary DNS and web browsing services.",
    objectives: [
      "Construct Extended ACL 101 to filter specific protocol port numbers (TCP 80/443, UDP 53, ICMP).",
      "Apply ACLs on router interfaces close to the source traffic to conserve WAN bandwidth.",
      "Configure switchport port security to restrict unauthorized MAC address spoofing.",
      "Verify packet drops and match counters using 'show access-lists' telemetry.",
    ],
    devices: [
      { type: "Edge Router", model: "Cisco 2911 ISR", role: "Traffic Inspection & ACL Filtering" },
      { type: "Finance Server", model: "Enterprise Server", role: "Restricted Accounting Database" },
      { type: "Corporate LAN Switch", model: "Catalyst 2960", role: "Port Security Enforcer" },
      { type: "Guest Workstation", model: "Laptop-Guest", role: "Filtered Test Subject" },
    ],
    addressingTable: [
      { device: "Staff LAN", interface: "VLAN 10", ipAddress: "192.168.10.0/24", subnetMask: "255.255.255.0", gateway: "192.168.10.1" },
      { device: "Guest LAN", interface: "VLAN 30", ipAddress: "192.168.30.0/24", subnetMask: "255.255.255.0", gateway: "192.168.30.1" },
      { device: "Finance DB Server", interface: "NIC 0", ipAddress: "10.10.10.50/24", subnetMask: "255.255.255.0", gateway: "10.10.10.1" },
    ],
    configurationSteps: [
      {
        step: 1,
        title: "Extended Access Control List Definition",
        commands: `! Configure Extended ACL 101 on Cisco Router:
enable
configure terminal

! Deny Guest LAN access to Finance Database
access-list 101 deny ip 192.168.30.0 0.0.0.255 host 10.10.10.50

! Permit Guest LAN web access (HTTP/HTTPS) to outside
access-list 101 permit tcp 192.168.30.0 0.0.0.255 any eq 80
access-list 101 permit tcp 192.168.30.0 0.0.0.255 any eq 443

! Permit DNS queries
access-list 101 permit udp 192.168.30.0 0.0.0.255 any eq 53

! Deny all other IP traffic from Guest subnet explicitly with log
access-list 101 deny ip 192.168.30.0 0.0.0.255 any log

! Apply inbound on the Guest interface
interface GigabitEthernet0/0.30
 ip access-group 101 in
exit`,
      },
      {
        step: 2,
        title: "Switchport Port Security Implementation",
        commands: `! On Access Switch Catalyst 2960:
interface FastEthernet0/5
 switchport mode access
 switchport port-security
 switchport port-security maximum 1
 switchport port-security mac-address sticky
 switchport port-security violation shutdown
 no shutdown`,
      },
    ],
    verification: [
      {
        command: "show access-lists 101",
        output: `Extended IP access list 101
    10 deny ip 192.168.30.0 0.0.0.255 host 10.10.10.50 (24 matches)
    20 permit tcp 192.168.30.0 0.0.0.255 any eq www (156 matches)
    30 permit tcp 192.168.30.0 0.0.0.255 any eq 443 (89 matches)
    40 permit udp 192.168.30.0 0.0.0.255 any eq domain (62 matches)
    50 deny ip 192.168.30.0 0.0.0.255 any log (14 matches)`,
      },
      {
        command: "show port-security interface fa0/5",
        output: `Port Security              : Enabled
Port Status                : Secure-up
Violation Mode             : Shutdown
Aging Time                 : 0 mins
Aging Type                 : Absolute
SecureStatic Address Aging : Disabled
Maximum MAC Addresses      : 1
Total MAC Addresses        : 1
Configured MAC Addresses   : 0
Sticky MAC Addresses       : 1 (0002.4a8d.6b12)
Last Source Address:Vlan   : 0002.4a8d.6b12:30
Security Violation Count   : 0`,
      },
    ],
    troubleshootingNotes: [
      "Remembered the implicit 'deny ip any any' at the end of all Cisco ACLs. If you forget to permit remaining required traffic, all unlisted traffic is silently dropped.",
      "Extended ACLs should always be placed as close as possible to the source traffic to stop unauthorized packets early before consuming core bandwidth.",
    ],
    lessonsLearned:
      "Granular security controls at Layers 2 and 3 provide defense-in-depth. Port security prevents unauthorized rogue devices from connecting to physical wall ports, while ACLs enforce inter-departmental zero-trust segmentation.",
  },
  {
    id: "lab-05-subnetting-vlsm",
    number: "Lab 05",
    title: "Subnetting & VLSM Design",
    category: "Design & Addressing",
    shortDescription:
      "Designed an efficient IPv4 addressing scheme using subnetting and Variable Length Subnet Masks.",
    topologyImage: "/images/topologies/lab5-vlsm.svg",
    technologies: ["VLSM", "IPv4 Subnetting", "CIDR", "IP Planning", "Address Conservation"],
    githubUrl: "https://github.com/feyisagirma/ccna-labs/tree/main/lab05-subnetting-vlsm",
    pktDownloadUrl: "/projects/sample-lab.pkt",
    overview:
      "This lab addresses the critical network engineering skill of Variable Length Subnet Masking (VLSM). Starting from a single classless base network 192.168.1.0/24, custom subnets are calculated and assigned to departmental LANs with differing host density requirements, saving up to 60% of address space compared to fixed subnetting.",
    objectives: [
      "Calculate optimal subnet masks based on host requirements (descending order).",
      "Allocate 100 hosts (HQ), 50 hosts (Branch), 20 hosts (Servers), 10 hosts (Guest WiFi), and WAN serial links (/30).",
      "Identify network ID, first usable host, last usable host, and broadcast address for every block.",
      "Verify that no overlapping address blocks exist in the routing table.",
    ],
    devices: [
      { type: "Design Architecture", model: "VLSM IPv4 Matrix", role: "Address Plan" },
      { type: "Headquarters Router", model: "Cisco 2911 ISR", role: "HQ Default Gateway" },
      { type: "Branch Router", model: "Cisco 1941 ISR", role: "Branch Default Gateway" },
    ],
    addressingTable: [
      { device: "HQ Department", interface: "100 Hosts Needed", ipAddress: "192.168.1.0 /25", subnetMask: "255.255.255.128", gateway: ".1 to .126 usable" },
      { device: "Branch Office", interface: "50 Hosts Needed", ipAddress: "192.168.1.128 /26", subnetMask: "255.255.255.192", gateway: ".129 to .190 usable" },
      { device: "Server Farm", interface: "20 Hosts Needed", ipAddress: "192.168.1.192 /27", subnetMask: "255.255.255.224", gateway: ".193 to .222 usable" },
      { device: "Guest WiFi", interface: "10 Hosts Needed", ipAddress: "192.168.1.224 /28", subnetMask: "255.255.255.240", gateway: ".225 to .238 usable" },
      { device: "WAN Link R1-R2", interface: "2 Hosts Needed", ipAddress: "192.168.1.240 /30", subnetMask: "255.255.255.252", gateway: ".241 to .242 usable" },
    ],
    configurationSteps: [
      {
        step: 1,
        title: "Mathematical VLSM Calculation Procedure",
        commands: `! Step 1: Sort subnet requirements in descending order:
1. HQ LAN: 100 hosts -> 2^7 - 2 = 126 hosts -> /25 (Mask 255.255.255.128)
   Net: 192.168.1.0/25 | Usable: .1 - .126 | Broadcast: .127

2. Branch LAN: 50 hosts -> 2^6 - 2 = 62 hosts -> /26 (Mask 255.255.255.192)
   Net: 192.168.1.128/26 | Usable: .129 - .190 | Broadcast: .191

3. Server Farm: 20 hosts -> 2^5 - 2 = 30 hosts -> /27 (Mask 255.255.255.224)
   Net: 192.168.1.192/27 | Usable: .193 - .222 | Broadcast: .223

4. Guest WiFi: 10 hosts -> 2^4 - 2 = 14 hosts -> /28 (Mask 255.255.255.240)
   Net: 192.168.1.224/28 | Usable: .225 - .238 | Broadcast: .239

5. WAN P2P: 2 hosts -> 2^2 - 2 = 2 hosts -> /30 (Mask 255.255.255.252)
   Net: 192.168.1.240/30 | Usable: .241 - .242 | Broadcast: .243`,
      },
      {
        step: 2,
        title: "Interface IP Provisioning based on VLSM",
        commands: `! On HQ-Router:
interface GigabitEthernet0/0
 ip address 192.168.1.1 255.255.255.128
 no shutdown
exit

interface GigabitEthernet0/1
 ip address 192.168.1.193 255.255.255.224
 no shutdown
exit

interface Serial0/0/0
 ip address 192.168.1.241 255.255.255.252
 clock rate 64000
 no shutdown
exit`,
      },
    ],
    verification: [
      {
        command: "show ip interface brief",
        output: `Interface              IP-Address      OK? Method Status                Protocol
GigabitEthernet0/0     192.168.1.1     YES manual up                    up      
GigabitEthernet0/1     192.168.1.193   YES manual up                    up      
Serial0/0/0            192.168.1.241   YES manual up                    up`,
      },
    ],
    troubleshootingNotes: [
      "Always order subnet allocations by highest host requirement to lowest host requirement; failure to do so results in fragmented, unusable IP space.",
      "Point-to-point serial and ethernet interconnects should strictly use /30 (or /31 in modern RFC 3021 implementations) to avoid burning 250+ wasted IPs on a /24 link.",
    ],
    lessonsLearned:
      "VLSM is fundamental to routing scalability, route summarization (supernetting), and enterprise IP Address Management (IPAM).",
  },
  {
    id: "lab-06-enterprise-simulation",
    number: "Lab 06",
    title: "Enterprise Network Simulation",
    category: "Full Architecture",
    shortDescription:
      "A simulated enterprise network combining routing, switching, VLANs, DHCP, and basic security configurations.",
    topologyImage: "/images/topologies/lab6-enterprise.svg",
    technologies: ["Cisco IOS", "Core/Distribution/Access", "OSPF", "VLANs", "NAT", "Port Security"],
    githubUrl: "https://github.com/feyisagirma/ccna-labs/tree/main/lab06-enterprise-simulation",
    pktDownloadUrl: "/projects/sample-lab.pkt",
    overview:
      "A comprehensive capstone lab synthesizing all core CCNA disciplines into a complete campus architecture. Includes a 3-tier hierarchical model (Core, Distribution, Access), redundant default gateways (HSRP concept), inter-VLAN routing, OSPF Area 0, border NAT/PAT overload, and hardened administrative security.",
    objectives: [
      "Deploy a structured 3-tier campus LAN following Cisco validated design principles.",
      "Configure multiple VLANs with redundant 802.1Q trunks and Rapid PVST+.",
      "Implement dynamic routing using OSPFv2 with route redistribution to edge gateway.",
      "Enforce port security, SSH administrative access, and PAT Internet translation.",
    ],
    devices: [
      { type: "Core Router", model: "Cisco 2911 ISR", role: "Edge Routing & Public Internet Gateway" },
      { type: "Distribution Switches", model: "2x Cisco Catalyst 3560 (L3)", role: "Layer 3 Routing & Redundant SVIs" },
      { type: "Access Switches", model: "4x Cisco Catalyst 2960", role: "VLAN End-host Segmentation" },
      { type: "Server Farm & DMZ", model: "3x Web & DNS Servers", role: "Enterprise Applications" },
    ],
    addressingTable: [
      { device: "Core-R1", interface: "G0/0", ipAddress: "10.254.1.1/30", subnetMask: "255.255.255.252", gateway: "N/A" },
      { device: "Core-R1", interface: "G0/1", ipAddress: "203.0.113.2/30", subnetMask: "255.255.255.252", gateway: "203.0.113.1" },
      { device: "Dist-SW1", interface: "Vlan10 SVI", ipAddress: "172.16.10.1/24", subnetMask: "255.255.255.0", gateway: "HSRP Active" },
      { device: "Dist-SW2", interface: "Vlan10 SVI", ipAddress: "172.16.10.2/24", subnetMask: "255.255.255.0", gateway: "HSRP Standby" },
    ],
    configurationSteps: [
      {
        step: 1,
        title: "Device Hardening & SSH Remote Access",
        commands: `! Enterprise Device Hardening Template:
enable
configure terminal
service password-encryption
no ip domain-lookup
ip domain-name enterprise.net
crypto key generate rsa modulus 2048
username admin secret Cisco@Secure123!

line vty 0 4
 transport input ssh
 login local
 exec-timeout 10 0
exit

banner motd #
************************************************************
AUTHORIZED ACCESS ONLY - UNAPPROVED ENTRY IS STRICTLY LOGGED
************************************************************#`,
      },
      {
        step: 2,
        title: "Core Routing & Dynamic Redistribution",
        commands: `! OSPF Backbone Configuration on Core:
router ospf 1
 router-id 1.1.1.1
 network 10.254.1.0 0.0.0.3 area 0
 default-information originate
exit

ip route 0.0.0.0 0.0.0.0 203.0.113.1`,
      },
    ],
    verification: [
      {
        command: "show ip route",
        output: `Gateway of last resort is 203.0.113.1 to network 0.0.0.0

S*    0.0.0.0/0 [1/0] via 203.0.113.1
      10.0.0.0/8 is variably subnetted, 4 subnets
O        172.16.10.0/24 [110/2] via 10.254.1.2, 01:22:10, GigabitEthernet0/0
O        172.16.20.0/24 [110/2] via 10.254.1.2, 01:22:10, GigabitEthernet0/0
O        172.16.30.0/24 [110/2] via 10.254.1.2, 01:22:10, GigabitEthernet0/0`,
      },
    ],
    troubleshootingNotes: [
      "Integrated spanning-tree portfast and bpduguard default on edge access ports to prevent Spanning Tree loops when workstations reboot.",
      "Configured DHCP snooping to thwart unauthorized rogue DHCP servers on the floor switches.",
    ],
    lessonsLearned:
      "Enterprise networking requires seamless cohesion between physical wiring standards, Layer 2 loop avoidance, Layer 3 fast-convergence routing, and defense-in-depth perimeter security.",
  },
];
