# CCNA

## Part 5

Question 5.1: Which two QoS tools are used to guarantee minimum bandwidth to certain traffic? (Choose two)
A. FIFO
_B. CBWFQ_
C. LLC
_D. WFQ_
E. RSVP

Question 5.3: Which type of security program is violated when a group of employees enters a building using the ID badge of only one person?
A. intrusion detection
B. user awareness
_C. physical access control_
D. network authorization

Question 5.4: A network administrator needs to aggregate 4 ports into a single logical link which must negotiate layer 2 connectivity to ports on another switch. What must be configured when using active mode on both sides of the connection?
A. 802.1q trunks
B. Cisco vPC
C. LLDP
_D. LACP_

Question 5.5: In which situation is private IPv4 addressing appropriate for a new subnet on the network of an organization?
_A. There is limited unique address space, and traffic on the new subnet will stay local within the organization._
B. The network has multiple endpoint listeners, and it is desired to limit the number of broadcasts.
C. Traffic on the subnet must traverse a site-to-site VPN to an outside organization.
D. The ISP requires the new subnet to be advertised to the internet for web services.

Question 5.6: Aside from discarding, which two states does the switch port transition through while using RSTP (802.1w)? (Choose two)
A. listening
B. blocking
_C. forwarding_
_D. learning_
E. speaking

Question 5.7: What is a role of wireless controllers in an enterprise network?
A. serve as the first line of defense in an enterprise network
B. support standalone or controller-based architectures
_C. centralize the management of access points in an enterprise network_
D. provide secure user logins to devices on the network

Question 5.8: How do servers connect to the network in a virtual environment?
A. wireless to an access point that is physically connected to the network
B. a cable connected to a physical switch on the network
C. a virtual switch that links to an access point that is physically connected to the network
_D. a software switch on a hypervisor that is physically connected to the network_

Question 5.9: Which CRUD operation corresponds to the HTTP GET method?
_A. read_
B. update
C. create
D. delete

Question 5.10: With REST API, which standard HTTP header tells a server which media type is expected by the client?
A. Accept-Encoding: gzip, deflate
B. Accept-Patch: text/example; charset=utf-8
C. Content-Type: application/json; charset=utf-8
_D. Accept: application/json_

Question 5.11: Which device tracks the state of active connections in order to make a decision to forward a packet through?
_A. firewall_
B. wireless access point
C. router
D. wireless LAN controller

Question 5.12: Which device controls the forwarding of authentication requests for users when connecting to the network using a lightweight access point?
A. TACACS server
B. wireless access point
C. RADIUS server
_D. wireless LAN controller_

Question 5.13: Refer to the exhibit. A network administrator has been tasked with securing VTY access to a router. Which access-list entry accomplishes this task?
_A. access-list 101 permit tcp 10.1.1.0 0.0.0.255 172.16.1.0 0.0.0.255 eq ssh_
B. access-list 101 permit tcp 10.1.1.0 0.0.0.255 172.16.1.0 0.0.0.255 eq scp
C. access-list 101 permit tcp 10.1.1.0 0.0.0.255 172.16.1.0 0.0.0.255 eq telnet
D. access-list 101 permit tcp 10.1.1.0 0.0.0.255 172.16.1.0 0.0.0.255 eq https

Question 5.14: A network administrator must enable DHCP services between two sites. What must be configured for the router to pass DHCPDISCOVER messages on to the server?
_A. a DHCP Relay Agent_
B. DHCP Binding
C. a DHCP Pool
D. DHCP Snooping

Question 5.15: Refer to the exhibit. PC1 is trying to ping PC3 for the first time and sends out an ARP to S1. Which action is taken by S1?
A. It forwards it out G0/3 only
_B. It is flooded out every port except G0/0_
C. It drops the frame
D. It forwards it out interface G0/2 only

Question 5.16: Refer to the exhibit. What is the result if Gig1/11 receives an STP BPDU?
A. The port transitions to STP blocking
B. The port transitions to the root port
C. The port immediately transitions to STP forwarding
_D. The port goes into error-disable state_

Question 5.17: An engineer must configure traffic for a VLAN that is untagged by the switch as it crosses a trunk link. Which command should be used?
A. switchport trunk allowed vlan 10
_B. switchport trunk native vlan 10_
C. switchport mode trunk
D. switchport trunk encapsulation dot1q

Question 5.18: What is the maximum bandwidth of a T1 point-to-point connection?
_A. 1.544 Mbps_
B. 2.048 Mbps
C. 34.368 Mbps
D. 43.7 Mbps

Question 5.19: How does a Cisco Unified Wireless network respond to Wi-Fi channel overlap?
A. It alternates automatically between 2.4 GHz and 5 GHz on adjacent access points
B. It allows the administrator to assign channels on a per-device or per-interface basis.
C. It segregates devices from different manufacturers onto different channels.
_D. It analyzes client load and background noise and dynamically assigns a channel._

Question 5.20: What does a switch use to build its MAC address table?
A. VTP
B. DTP
C. egress traffic
_D. ingress traffic_

Question 5.21: Which network plane is centralized and manages routing decisions?
A. policy plane
_B. control plane_
C. management plane
D. data plane

Question 5.22: What does a router do when configured with the default DNS lookup settings, and a URL is entered on the CLI?
A. initiates a ping request to the URL
B. prompts the user to specify the desired IP address
C. continuously attempts to resolve the URL until the command is cancelled
_D. sends a broadcast message in an attempt to resolve the URL_

Question 5.23: Refer to the exhibit. Which switch becomes the root of the spanning tree for VLAN 110?
A. Switch 1
_B. Switch 2_
C. Switch 3
D. Switch 4

Question 5.24: Refer to the exhibit. An administrator must configure interfaces Gi1/1 and Gi1/3 on switch SW11 PC-1 and PC-2 must be placed in the Data VLAN and Phone-1 must be placed in the Voice VLAN. Which configuration meets these requirements?
A. Option A
B. Option B
_C. Option C_
D. Option D

Question 5.25: Refer to exhibit. Which configuration must be applied to the router that configures PAT to translate all addresses in VLAN 200 while allowing devices on VLAN 100 to use their own IP addresses?
A. Option A
B. Option B
C. Option C
_D. Option D_

Question 5.26: How does a switch process a frame received on Fa0/1 with the destination MAC address of 0e38.7363.657b when the table is missing the address?
_A. It floods the frame to all interfaces except Fa0/1._
B. It forwards the frame back out of interface Fa0/1.
C. It drops the frame immediately.
D. It holds the frame until the MAC address timer expires and then drops the frame.

Question 5.27: What is a benefit of VRRP?
A. It provides traffic load balancing to destinations that are more than two hops from the source.
_B. It provides the default gateway redundancy on a LAN using two or more routers._
C. It allows neighbors to share routing table information between each other.
D. It prevents loops in a Layer 2 LAN by forwarding all traffic to a root bridge, which then makes the final forwarding decision.

Question 5.28: Which protocol does an IPv4 host use to obtain a dynamically assigned IP address?
A. ARP
B. DNS
C. CDP
_D. DHCP_

Question 5.29: Refer to the exhibit. An access list is required to permit traffic from any host on interface G0/0 and deny traffic from interface Gi0/1. Which access list must be applied?
_A. Option A_
B. Option B
C. Option C
D. Option D

Question 5.30: Which condition must be met before an NMS handles an SNMP trap from an agent?
A. The NMS must be configured on the same router as the SNMP agent
B. The NMS must receive a trap and an inform message from the SNMP agent within a configured interval
_C. The NMS software must be loaded with the MIB associated with the trap_
D. The NMS must receive the same trap from two different SNMP agents to verify that it is reliable

Question 5.31: What is a characteristic of a SOHO network?
A. connects each switch to every other switch in the network
_B. enables multiple users to share a single broadband connection_
C. provides high throughput access for 1000 or more users
D. includes at least three tiers of devices to provide load balancing and redundancy

Question 5.32: Which resource is able to be shared among virtual machines deployed on the same physical server?
A. applications
B. operating system
C. VM configuration file
_D. disk_

Question 5.33: Which implementation provides the strongest encryption combination for the wireless environment?
_A. WPA2 + AES_
B. WPA + AES
C. WEP
D. WPA + TKIP

Question 5.34: Refer to the exhibit. After running the code in the exhibit, which step reduces the amount of data that the NETCONF server returns to the NETCONF client, to only the interface’s configuration?
A. Use the xml library to parse the data returned by the NETCONF server for the interface’s configuration.
_B. Create an XML filter as a string and pass it to get_config() method as an argument._
C. Create a JSON filter as a string and pass it to the get_config() method as an argument.
D. Use the JSON library to parse the data returned by the NETCONF server for the interface’s configuration.

Question 5.35: What are two functions of an SDN controller? (Choose two)
_A. coordinating VTNs_
B. Layer 2 forwarding
C. tracking hosts
_D. managing the topology_
E. protecting against DDoS attacks

Question 5.36: If a switch port receives a new frame while it is actively transmitting a previous frame, how does it process the frames?
A. The previous frame is delivered, the new frame is dropped, and a retransmission request is sent.
B. The new frame is delivered first, the previous frame is dropped, and a retransmission request is sent.
C. The two frames are processed and delivered at the same time.
_D. The new frame is placed in a queue for transmission after the previous frame._

Question 5.37: Which WAN topology provides a combination of simplicity quality, and availability?
A. partial mesh
B. full mesh
_C. point-to-point_
D. hub-and-spoke

Question 5.38: Refer to the exhibit. The ntp server 192.168.0.3 command has been configured on Router1 to make it an NTP client of router 2. Which command must be configured on Router2 so that it operates in server-only mode and relies only on its internal clock?
A. Router2(config)#ntp passive
_B. Router2(config)#ntp master 4_
C. Router2(config)#ntp server 172.17.0.1
D. Router2(config)#ntp server 192.168.0.2

Question 5.39: Refer to the exhibit. A network engineer must configured communication between PC A and the File Server. To prevent interruption for any other communications, which command must be configured?
A. Switch trunk allowed vlan 12
B. Switchport trunk allowed vlan none
_C. Switchport trunk allowed vlan add 13_
D. Switchport trunk allowed vlan remove 10-11

Question 5.40: Why does a switch flood a frame to all ports?
_A. The destination MAC address of the frame is unknown_
B. The source MAC address of the frame is unknown
C. The source and destination MAC addresses of the frame are the same
D. The frame has zero destination MAC addresses

Question 5.41: When DHCP is configured on a router, which command must be entered so the default gateway is automatically distributed?
_A. default-router_
B. default-gateway
C. ip helper-address
D. dns-server

Question 5.42: What is a network appliance that checks the state of a packet to determine whether the packet is legitimate?
A. Layer 2 switch
B. LAN controller
C. load balancer
_D. firewall_

Question 5.43: How is the native VLAN secured in a network?
_A. separate from other VLANs within the administrative domain_
B. give it a value in the private VLAN range
C. assign it as VLAN 1
D. configure it as a different VLAN ID on each end of the link

Question 5.44: Which command on a port enters the forwarding state immediately when a PC is connected to it?
_A. switch(config)#spanning-tree portfast default_
B. switch(config)#spanning-tree portfast bpduguard default
C. switch(config-if)#spanning-tree portfast trunk
D. switch(config-if)#no spanning-tree portfast

Question 5.45: What is the purpose of a southbound API in a control based networking architecture?
A. facilities communication between the controller and the applications
B. integrates a controller with other automation and orchestration tools
C. allows application developers to interact with the network
_D. facilities communication between the controller and the networking hardware_

Question 5.46: Which switch technology establishes a network connection immediately when it is plugged in?
A. UplinkFast
_B. PortFast_
C. BPDU guard
D. BackboneFast

Question 5.47: What causes a port to be placed in the err-disabled state?
A. latency
B. nothing plugged into the port
C. shutdown command issued on the port
_D. port security violation_

Question 5.48: Which technology is appropriate for communication between an SDN controller and applications running over the network?
A. OpenFlow
B. Southbound API
C. NETCONF
_D. REST API_

Question 5.49: Which security program element involves installing badge readers on data-center doors to allow workers to enter and exit based on their job roles?
_A. physical access control_
B. biometrics
C. role-based access control
D. multifactor authentication

Question 5.50: What is a characteristic of private IPv4 addressing?
_A. used without tracking or registration_
B. issued by IANA in conjunction with an autonomous system number
C. traverse the Internet when an outbound ACL is applied
D. composed of up to 65,536 available addresses

Question 5.51: Which network action occurs within the data plane?
_A. compare the destination IP address to the IP routing table_
B. make a configuration change from an incoming NETCONF RPC
C. run routing protocols (OSPF, EIGRP, RIP, BGP)
D. reply to an incoming ICMP echo request

## Part 6

Question 6.1: What are two improvements provided by automation for network management in an SDN environment? (Choose two)
_A. Artificial intelligence identifies and prevents potential design failures_
B. Data collection and analysis tools establish a baseline for the network
C. New devices are onboarded with minimal effort
D. Machine learning minimizes the overall error rate when automating troubleshooting processes
_E. Proprietary Cisco APIs leverage multiple network management tools_

Question 6.2: Refer to the exhibit. A network administrator must to configure SSH for remote access to router R1. The requirement is to use a public and private key pair to encrypt management traffic to and from the connecting client. Which configuration, when applied, meets the requirements?
A. Option A
_B. Option B_
C. Option C
D. Option D

Question 6.3: An engineer observes high usage on the 2.4GHz channels and lower usage on the 5GHz channels. What must be configured to allow clients to preferentially use 5GHz access points?
_A. Client Band Select_
B. OEAP Split Tunnel
C. 11ac MU-MIMO
D. Re-Anchor Roamed Clients

Question 6.4: When a WLAN with WPA2 PSK is configured in the Wireless LAN Controller GUI which format is supported?
A. Unicode
B. base64
_C. ASCII_
D. decimal

Question 6.5: Which networking function occurs on the data plane?
A. facilitates spanning-tree elections
B. processing inbound SSH management traffic
_C. forwarding remote client/server traffic_
D. sending and receiving OSPF Hello packets

Question 6.6: What does an SDN controller use as a communication protocol to relay forwarding changes to a southbound API?
A. XML
B. Java
C. REST
_D. OpenFlow_

Question 6.8: An administrator must secure the WLC from receiving spoofed association requests. Which steps must be taken to configure the WLC to restrict the requests and force the user to wait 10 ms to retry an association request?
A. Enable Security Association Teardown Protection and set the SA Query timeout to 10
_B. Enable the Protected Management Frame service and set the Comeback timer to 10_
C. Enable 802.1x Layer 2 security and set the Comeback timer to 10
D. Enable MAC filtering and set the SA Query timeout to 10

Question 6.9: What is the benefit of using FHRP (First Hop Redundancy Protocol)?
A. balancing traffic across multiple gateways in proportion to their loads
B. reduced management overhead on network routers
C. reduced ARP traffic on the network
_D. higher degree of availability_

Question 6.10: Which 802.11 management frame type is sent when a client roams between access points on the same SSID?
A. Authentication Request
B. Probe Request
_C. Reassociation Request_
D. Association Request

Question 6.11: What is a similarity between OM3 and OM4 fiber optic cable?
_A. Both have a 50 micron core diameter_
B. Both have a 9 micron core diameter
C. Both have a 62.5 micron core diameter
D. Both have a 100 micron core diameter

Question 6.12: Which protocol does an access point use to draw power from a connected switch?
A. Internet Group Management Protocol
_B. Cisco Discovery Protocol_
C. Adaptive Wireless Path Protocol
D. Neighbor Discovery Protocol

Question 6.13: When deploying syslog, which severity level logs informational message?
A. 0
B. 2
C. 4
_D. 6_

Question 6.14: Refer to the exhibit. Which command must be executed for Gi1/1 on SW1 to passively become a trunk port if Gi1/1 on SW2 is configured in desirable or trunk mode?
A. switchport mode trunk
B. switchport mode dot1-tunnel
_C. switchport mode dynamic auto_
D. switchport mode dynamic desirable

Question 6.15: Refer to the exhibit. An engineer must configure GigabitEthernet1/1 to accommodate voice and data traffic. Which configuration accomplishes this task?
_A. Option A_
B. Option B
C. Option C
D. Option D

Question 6.16: What describes the operation of virtual machines?
A. Virtual machines are responsible for managing and allocating host hardware resources
_B. Virtual machines are operating system instances that are decoupled from server hardware_
C. Virtual machines are the physical hardware that support a virtual environment
D. In a virtual machine environment, physical servers must run one operating system at a time

Question 6.17: What is a role of access points in an enterprise network?
_A. connect wireless devices to a wired network_
B. support secure user logins to devices or the network
C. integrate with SNMP in preventing DDoS attacks
D. serve as a first line of defense in an enterprise network

Question 6.18: Refer to the exhibit. Shortly after SiteA was connected to SiteB over a new single-mode fiber path, users at SiteA report intermittent connectivity issues with applications hosted at SiteB. What is the cause of the intermittent connectivity issue?
_A. Interface errors are incrementing_
B. An incorrect SFP media type was used at SiteA
C. High usage is causing high latency
D. The sites were connected with the wrong cable type

Question 6.19: Refer to the exhibit. Which switch becomes the permanent root bridge for VLAN 5?
A. Branch-1
B. Branch-2
_C. Branch-3_
D. Branch-4

Question 6.20: Refer to the exhibit. The entire contents of the MAC address table are shown. Sales-4 sends a data frame to Sales-1. What does the switch do as it receives the frame from Sales-4?
A. Map the Layer 2 MAC address to the Layer 3 IP address and forward the frame
_B. Insert the source MAC address and port into the forwarding table and forward the frame to Sales-1_
C. Perform a lookup in the MAC address table and discard the frame due to a missing entry
D. Flood the frame out of all ports except on the port where Sales-1 is connected

Question 6.21: Which technology allows for multiple operating systems to be run on a single host computer?
A. virtual device contexts
B. network port ID visualization
C. virtual routing and forwarding
_D. server virtualization_

Question 6.22: Refer to the exhibit. An administrator must turn off the Cisco Discovery Protocol on the port configured with last usable address in the 10.0.0.0/30 subnet. Which command set meets the requirement?
_A. interface gi0/1
no cdp enable_
B. interface gi0/1
clear cdp table
C. interface gi0/0
no cdp run
D. interface gi0/0
no cdp advertise-v2

Question 6.23
Which two QoS tools provides congestion management? (Choose two)
A. FRTS
B. CAR
_C. PQ_
D. PBR
_E. CBWFQ_

Question 6.24: What occurs when overlapping Wi-Fi channels are implemented?
A. The wireless network becomes vulnerable to unauthorized access
B. Wireless devices are unable to distinguish between different SSIDs
C. Network communications are open to eavesdropping
_D. Users experience poor wireless network performance_

Question 6.25: Which JSON data type is an unordered set of attribute-value pairs?
A. array
B. string
_C. object_
D. Boolean

Question 6.26: An engineer needs to add an old switch back into a network. To prevent the switch from corrupting the VLAN database which action must be taken?
_A. Add the switch in the VTP domain with a lower revision number_
B. Add the switch in the VTP domain with a higher revision number
C. Add the switch with DTP set to dynamic desirable
D. Add the switch with DTP set to desirable

Question 6.27: Which WLC port connects to a switch to pass normal access-point traffic?
_A. distribution system_
B. service
C. redundancy
D. console

Question 6.28: An engineering team asks an implementer to configure syslog for warning conditions and error conditions. Which command does the implementer configure to achieve the desired result?
A. logging trap 2
B. logging trap 3
_C. logging trap 4_
D. logging trap 5

Question 6.30: Which two protocols are supported on service-port interfaces? (Choose two)
A. RADIUS
B. TACACS+
_C. Telnet_
D. SCP
_E. SSH_

Question 6.31: Refer to the exhibit. How must router A be configured so that it only sends Cisco Discovery Protocol Information to router C?
A. Option A
B. Option B
C. Option C
_D. Option D_

Question 6.32: What is the function of a hub-and-spoke WAN topology?
A. supports application optimization
B. provides direct connections between subscribers
C. supports Layer 2 VPNs
_D. allows access restrictions to be implemented between subscriber sites_

Question 6.33: Which global command encrypts all passwords in the running configuration?
A. enable secret
B. enable password-encryption
_C. service password-encryption_
D. password-encrypt

## Part 7

Question 7.1: Which level of severity must be set to get informational syslogs?
A. alert
B. critical
C. notice
_D. debug_

Question 7.2: What is a characteristic of cloud-based network topology?
A. physical workstations are configured to share resources
_B. services are provided by a public, private, or hybrid deployment_
C. onsite network services are provided with physical Layer 2 and Layer 3 components
D. wireless connections provide the sole access method to services

Question 7.3: A network analyst is tasked with configured the date and time on a router using EXEC mode. The date must be set to 12:00am. Which command should be used?
A. Clock timezone
B. Clock summer-time-recurring
C. Clock summer-time date
_D. Clock set_

Question 7.4: Which HTTP status code is returned after a successful REST API request?
_A. 200_
B. 301
C. 404
D. 500

Question 7.5: Refer to the exhibit. When PC-A sends traffic to PC-B, which network component is in charge of receiving the packet from PC-A verifying the IP addresses, and forwarding the packet to PC-B?
A. Layer 2 switch
B. firewall
C. Load balancer
_D. Router_

Question 7.6: Refer to the exhibit. Which action is taken by the router when a packet is sourced from 10.10.10.2 and destined for 10.10.10.16?
_A. It discards the packets_
B. It uses a route that is similar to the destination address
C. It floods packets to all learned next hops
D. It queues the packets waiting for the route to be learned

Question 7.8: What is the function of a controller in controller-based networking?
A. It is a pair of core routers that maintain all routing decisions for a campus
B. It centralizes the data plane for the network
C. It is the card on a core router that maintains all routing decisions for a campus
_D. It serves as the centralized management point of an SDN architecture_

Question 7.9: When a switch receives a frame for a known destination MAC address, how is the frame handed?
A. flooded to all ports except the one from which it originated
B. broadcast to all ports
C. forwarded to the first available port
_D. sent to the port identified for the known MAC address_

Question 7.11: Why was the RFC 1918 address space defined?
A. preserve public IPv6 address space
B. support the NAT protocol
C. reduce instances of overlapping IP addresses
_D. conserve public IPv4 addressing_

Question 7.12: What is the purpose of using First Hop Redundancy Protocol in a specific subnet?
_A. forwards multicast hello messages between routers_
B. sends the default route to the hosts on a network
C. filter traffic based on destination IP addressing
D. ensures a loop-free physical topology

Question 7.13: After installing a new Cisco ISE server, which task must the engineer perform on the Cisco WLC to connect wireless clients on a specific VLAN based on their credentials?
A. Enable the Authorized MIC APs against auth-list or AAA.
_B. Enable the allow AAA Override_
C. Disable the LAG Mode or Next Reboot.
D. Enable the Event Driven RRM.

Question 7.15: Refer to the exhibit. Router R4 is dynamically learning the path to the server. If R4 is connected to R1 via OSPF Area 20, to R2 via R2 BGP, and to R3 via EIGRP 777, which path is installed in the routing table of R4?
_A. the path through R2, because the EBGP administrative distance is 20_
B. the path through R2, because the IBGP administrative distance is 200
C. the path through R1, because the OSPF administrative distance is 110
D. the path through R3, because the EIGRP administrative distance is lower than OSPF and BGP

Question 7.16: What is a function of the Cisco DNA Center Overall Health Dashboard?
A. It summarizes daily and weekly CPU usage for servers and workstations in the network.
B. It provides detailed activity logging for the 10 devices and users on the network.
C. It summarizes the operational status of each wireless device on the network.
_D. It provides a summary of the top 10 global issues._

Question 7.17: Which protocol requires authentication to transfer a backup configuration file from a router to a remote server?
A. TFTP
_B. FTP_
C. DTP
D. SMTP

Question 7.18: Where is the interface between the control plane and data plane within the software-defined architecture?
A. application layer and the management layer
B. application layer and the infrastructure layer
C. control layer and the application layer
_D. control layer and the infrastructure layer_

Question 7.19: Which action does the router take as it forwards a packet through the network?
A. The router replaces the source and destination labels with the sending router interface label as a source and the next hop router label as a destination
B. The router encapsulates the source and destination IP addresses with the sending router IP address as the source and the neighbor IP address as the destination
C. The router encapsulates the original packet and then includes a tag that identifies the source router MAC address and transmit transparently to the destination
_D. The router replaces the original source and destination MAC addresses with the sending router MAC address as the source and neighbor MAC address as the destination_

Question 7.20: When a site-to-site VPN is configured, which IPsec mode provides encapsulation and encryption of the entire original IP packet?
A. IPsec tunnel mode with AH
B. IPsec transport mode with AH
_C. IPsec tunnel mode with ESP_
D. IPsec transport mode with ESP

Question 7.22: What is the role of a firewall in an enterprise network?
_A. determines which packets are allowed to cross from unsecured to secured networks_
B. processes unauthorized packets and allows passage to less secure segments of the network
C. forwards packets based on stateless packet inspection
D. explicitly denies all packets from entering an administrative domain

Question 7.23: What is the benefit of configuring PortFast on an interface?
A. After the cable is connected, the interface uses the fastest speed setting available for that cable type
B. The frames entering the interface are marked with higher priority and then processed faster by a switch
_C. After the cable is connected, the interface is available faster to send and receive user data_
D. Real-time voice and video frames entering the interface are processed faster

Question 7.24: How are VLAN hopping attacks mitigated?
_A. manually implement trunk ports and disable DTP_
B. configure extended VLANs
C. activate all ports and place in the default VLAN
D. enable dynamic ARP inspection

Question 7.26: Refer to the exhibit. If R1 receives a packet destined to 172.16.1.1, to which IP address does it send the packet?
A. 192.168.12.2
B. 192.168.13.3
_C. 192.168.14.4_
D. 192.168.15.5

Question 7.27: Which two components are needed to create an Ansible script that configures a VLAN on a switch? (Choose two)
_A. task_
B. cookbook
C. recipe
D. model
_E. playbook_

Question 7.28: How are the switches in a spine-and-leaf topology interconnected?
A. Each leaf switch is connected to two spine switches, making a loop.
B. Each leaf switch is connected to a central leaf switch, then uplinked to a core spine switch.
_C. Each leaf switch is connected to each spine switch._
D. Each leaf switch is connected to one of the spine switches.

Question 7.29: In software-defined architecture, which place handles switching for traffic through a Cisco router?
_A. Data_
B. Control
C. Management
D. Application

Question 7.30: Which two protocols must be disabled to increase security for management connections to a Wireless LAN Controller? (Choose two)
_A. Telnet_
B. SSH
_C. HTTP_
D. HTTPS
E. TFTP

Question 7.31: When a client and server are not on the same physical network, which device is used to forward requests and replies between client and server for DHCP?
_A. DHCP relay agent_
B. DHCP server
C. DHCPDISCOVER
D. DHCPOFFER

Question 7.32: An implementer is preparing hardware for virtualization to create virtual machines on a host. What is needed to provide communication between hardware and virtual machines?
A. straight cable
B. router
_C. hypervisor_
D. switch

Question 7.33: What are two characteristics of the distribution layer in a three-tier network architecture? (Choose two)
_A. provides a boundary between Layer 2 and Layer 3 communications_
B. designed to meet continuous, redundant uptime requirements
C. serves as the network aggregation point
_D. physical connection point for a LAN printer_
E. is the backbone for the network topology

Question 7.34: Which QoS tool can you use to optimize voice traffic on a network that is primarily intended for data traffic?
A. WRED
B. FIFO
_C. PQ_
D.WFQ

Question 7.35
On workstations running Microsoft Windows, which protocol provides the default gateway for the device?
A. STP
B. DNS
C. SNMP
_D. DHCP_

Question 7.36: Refer to the exhibit. Which two prefixes are included in this routing table entry? (Choose two)
_A. 192.168.1.17_
_B. 192.168.1.61_
C. 192.168.1.64
D. 192.168.1.127
E. 192.168.1.254

Question 7.37: Which two primary drivers support the need for network automation? (Choose two)
A. Increasing reliance on self-diagnostic and self-healing
B. Eliminating training needs
_C. Policy-derived provisioning of resources_
D. Reducing hardware footprint
_E. Providing a single entry point for resource provisioning_

Question 7.38: What is the difference in data transmission delivery and reliability between TCP and UDP?
A. UDP sets up a connection between both devices before transmitting data. TCP uses the three-way handshake to transmit data with a reliable connection.
B. TCP transmits data at a higher rate and ensures packet delivery. UDP retransmits lost data to ensure applications receive the data on the remote end.
C. UDP is used for multicast and broadcast communication. TCP is used for unicast communication and transmits data at a higher rate with error checking.
_D. TCP requires the connection to be established before transmitting data. UDP transmits data at a higher rate without ensuring packet delivery._

Question 7.39: What are network endpoints?
_A. a threat to the network if they are compromised_
B. support inter-VLAN connectivity
C. act as routers to connect a user to the service prowler network
D. enforce policies for campus-wide traffic going to the internet

Question 7.40: What does physical access control regulate?
A. access to specific networks based on business function
B. access to servers to prevent malicious activity
C. access to computer networks and file systems
_D. access to networking equipment and facilities_

Question 7.42: What must be considered when using 802.11a?
A. It is compatible with 802.11g and 802.11-compliant wireless devices
B. It is chosen over 802.11b/g when a lower-cost solution is necessary
C. It is susceptible to interference from 2.4 GHz devices such as microwave ovens.
_D. It is used in place of 802.11b/g when many nonoverlapping channels are required_

Question 7.44: An engineer configures interface Gi1/0 on the company PE router to connect to an ISP. Neighbor discovery is disabled. Which action is necessary to complete the configuration if the ISP uses third-party network devices?
_A. Enable LLDP globally_
B. Disable autonegotiation
C. Disable Cisco Discovery Protocol on the interface
D. Enable LLDP-MED on the ISP device

Question 7.45: How does QoS optimize voice traffic?
A. reducing bandwidth usage
B. by reducing packet loss
_C. by differentiating voice and video traffic_
D. by increasing jitter

Question 7.46: Which two events occur automatically when a device is added to Cisco DNA Center? (Choose two)
_A. The device is assigned to the Global site._
B. The device is placed into the Unmanaged state.
C. The device is placed into the Provisioned state.
_D. The device is placed into the Managed state._
E. The device is assigned to the Local site.

Question 7.47: What are two benefits of using the PortFast feature? (Choose two)
A. Enabled interfaces are automatically placed in listening state
B. Enabled interfaces wait 50 seconds before they move to the forwarding state
_C. Enabled interfaces never generate topology change notifications._
D. Enabled interfaces that move to the learning state generate switch topology change notifications
_E. Enabled interfaces come up and move to the forwarding state immediately_

Question 7.48: A network administrator is asked to configure VLANs 2, 3 and 4 for a new implementation. Some ports must be assigned to the new VLANs with unused remaining. Which action should be taken for the unused ports?
A. configure port in the native VLAN
_B. configure ports in a black hole VLAN_
C. configure in a nondefault native VLAN
D. configure ports as access ports

Question 7.49: Which function is performed by DHCP snooping?
_A. rate-limits certain traffic_
B. listens to multicast traffic for packet forwarding
C. provides DDoS mitigation
D. propagates VLAN information between switches

Question 7.50: Which plane is centralized by an SDN controller?
A. data plane
B. management plane
_C. control plane_
D. services plane

Question 7.51: What are two similarities between UTP Cat 5e and Cat 6a cabling? (Choose two)
_A. Both support runs of up to 100 meters._
B. Both support runs of up to 55 meters.
C. Both operate at a frequency of 500 MHz.
_D. Both support speeds of at least 1 Gigabit._
E. Both support speeds up to 10 Gigabit.

Question 7.52: Refer to the exhibit. R5 is the current DR on the network, and R4 is the BDR. Their interfaces are flapping, so a network engineer wants the OSPF network to elect a different DR and BDR. Which set of configurations must the engineer implement?
A. Option A
B. Option B
_C. Option C_
D. Option D

Question 7.53: Refer to the exhibit. What is the metric of the route to the 192.168.10.33/28 subnet?
A. 84
B. 110
C. 128
D. 192
_E. 193_

Question 7.55
Which access layer threat-mitigation technique provides security based on identity?
A. using a non-default native VLAN
B. Dynamic ARP Inspection
C. DHCP snooping
_D. 802.1x_

## Part 8

Question 8.1: Which communication interaction takes place when a southbound API is used?
A. between the SDN controller and PCs on the network
_B. between the SDN controller and switches and routers on the network_
C. between the SDN controller and services and applications on the network
D. between network applications and switches and routers on the network

Question 8.2: What is a similarly between 1000BASE-LX and 1000BASE-T standards?
_A. Both use the same data-link header and trailer formats_
B. Both cable types support LP connectors
C. Both cable types support RJ-45 connectors
D. Both support up to 550 meters between nodes

Question 8.3: How does WPA3 improve security?
_A. It uses SAE for authentication._
B. It uses a 4-way handshake for authentication.
C. It uses RC4 for encryption.
D. It uses TKIP for encryption.

Question 8.4: Which mode must be set for APs to communicate to a Wireless LAN Controller using the Control and Provisioning of Wireless Access Points (CAPWAP) protocol?
A. bridge
B. route
C. autonomous
_D. lightweight_

Question 8.5: Refer to the exhibit. Which change to the configuration on Switch2 allows the two switches to establish an EtherChannel?
A. Change the protocol to EtherChannel mode on
_B. Change the LACP mode to active_
C. Change the LACP mode to desirable
D. Change the protocol to PAgP and use auto mode

Question 8.6: Where does wireless authentication happen?
A. SSID
B. radio
C. band
_D. Layer 2_

Question 8.7: What is the path for traffic sent from one user workstation to another workstation on a separate switch in a three-layer architecture model?
A. access – core – distribution – access
_B. access – distribution – distribution – access_
C. access – core – access
D. access -distribution – core – distribution – access

Question 8.8: What are two benefits of FHRPs? (Choose two)
A. They prevent loops in the Layer 2 network.
B. They allow encrypted traffic.
C. They are able to bundle multiple ports to increase bandwidth
_D. They enable automatic failover of the default gateway._
_E. They allow multiple devices to serve as a single virtual gateway for clients in the network_

Question 8.9
What is the purpose of an SSID?
A. It provides network security
B. It differentiates traffic entering access points
C. It identities an individual access point on a WLAN
_D. It identifies a WLAN_

Question 8.10: What are two characteristics of an SSID? (Choose two)
_A. It can be hidden or broadcast in a WLAN_
B. It uniquely identifies an access point in a WLAN
C. It uniquely identifies a client in a WLAN
_D. It is at most 32 characters long_
E. It provides secured access to a WLAN

Question 8.11: In QoS, which prioritization method is appropriate for interactive voice and video?
A. expedited forwarding
B. traffic policing
C. round-robin scheduling
_D. low-latency queuing_

Question 8.12: An engineer is configuring data and voice services to pass through the same port. The designated switch interface fastethernet0/1 must transmit packets using the same priority for data when they are received from the access port of the IP phone. Which configuration must be used?
A. interface fastethernet0/1
switchport priority extend cos 7
B. interface fastethernet0/1
switchport voice vlan untagged
C. interface fastethernet0/1
switchport voice vlan dot1p
_D. interface fastethernet0/1
switchport priority extend trust_

Question 8.13: Which port type supports the spanning-tree portfast command without additional configuration?
_A. access ports_
B. Layer 3 main interfaces
C. Layer 3 subinterfaces
D. trunk ports

Question 8.14: What is a syslog facility?
A. host that is configured for the system to send log messages
B. password that authenticates a Network Management System to receive log messages
C. group of log messages associated with the configured severity level
_D. set of values that represent the processes that can generate a log message_

Question 8.15: What are two characteristics of a public cloud implementation? (Choose two)
_A. It is owned and maintained by one party, but it is shared among multiple organizations_
B. It enables an organization to fully customize how it deploys network resources
_C. It provides services that are accessed over the Internet_
D. It is a data center on the public Internet that maintains cloud services for only one company
E. It supports network resources from a centralized third-party provider and privately-owned virtual resources

Question 8.16
Which type of traffic is sent with pure IPsec?
A. broadcast packets from a switch that is attempting to locate a MAC address at one of several remote sites
B. multicast traffic from a server at one site to hosts at another location
C. spanning-tree updates between switches that are at two different sites
_D. unicast messages from a host at a remote site to a server at headquarters_

Question 8.17: What prevents a workstation from receiving a DHCP address?
A. DTP
_B. STP_
C. VTP
D. 802.10

Question 8.18: What is a capability of FTP in network management operations?
_A. uses separate control and data connections to move files between server and client_
B. devices are directly connected and use UDP to pass file information
C. encrypts data before sending between data resources
D. offers proprietary support at the session layer when transferring data

Question 8.19: Refer to the exhibit. A network engineer is in the process of establishing IP connectivity between two sites. Routers R1 and R2 are partially configured with IP addressing. Both routers have the ability to access devices on their respective LANs. Which command set configures the IP connectivity between devices located on both LANs in each site?
A.
R1
ip route 0.0.0.0 0.0.0.0 209.165.200.225
R2
ip route 0.0.0.0 0.0.0.0 209.165.200.226
_B.
R1
ip route 0.0.0.0 0.0.0.0 209.165.200.226
R2
ip route 0.0.0.0 0.0.0.0 209.165.200.225_
C.
R1
ip route 192.168.1.0 255.255.255.0 GigabitEthernet0/0
R2
ip route 10.1.1.1 255.255.255.0 GigabitEthernet0/0
D.
R1
ip route 192.168.1.1 255.255.255.0 GigabitEthernet0/1
R2
ip route 10.1.1.1 255.255.255.0 GigabitEthernet0/1

Question 8.20: Which type of organization should use a collapsed-core architecture?
A. large and requires a flexible, scalable network design
_B. small and needs to reduce networking costs currently_
C. large and must minimize downtime when hardware fails
D. small but is expected to grow dramatically in the near future

Question 8.23: Refer to the exhibit. Between which zones do wireless users expect to experience intermittent connectivity?
A. between zones 1 and 2
B. between zones 2 and 5
_C. between zones 3 and 4_
D. between zones 3 and 6

Question 8.24: Which device permits or denies network traffic based on a set of rules?
A. access point
B. switch
C. wireless controller
_D. firewall_

Question 8.26: What is a function of a Layer 3 switch?
_A. move frames between endpoints limited to IP addresses_
B. transmit broadcast traffic when operating in Layer 3 mode exclusively
C. forward Ethernet frames between VLANs using only MAC addresses
D. flood broadcast traffic within a VLAN

Question 8.28: What is an appropriate use for private IPv4 addressing?
A. on the public-facing interface of a firewall
B. to allow hosts inside to communicate in both directions with hosts outside the organization
C. on internal hosts that stream data solely to external resources
_D. on hosts that communicates only with other internal hosts_

Question 8.29: Which 802.11 frame type is indicated by a probe response after a client sends a probe request?
A. action
_B. management_
C. control
D. data

Question 8.30: What is recommended for the wireless infrastructure design of an organization?
A. group access points together to increase throughput on a given channel
_B. configure the first three access points are configured to use channels 1, 6, and 11_
C. include a least two access points on nonoverlapping channels to support load balancing
D. assign physically adjacent access points to the same Wi-Fi channel

Question 8.31: Refer to the exhibit. For security reasons, automatic neighbor discovery must be disabled on the R5 Gi0/1 interface.
These tasks must be completed:

- Disable all neighbor discovery methods on R5 interface Gi0/1.
- Permit neighbor discovery on R5 interface Gi0/2.
- Verify there are no dynamically learned neighbors on R5 interface Gi0/1.
- Display the IP address of R6’s interface Gi0/2.
  Which configuration must be used?
  A. Option A
  B. Option B
  _C. Option C_
  D. Option D

Question 8.32: Which type of API allows SDN controllers to dynamically make changes to the network?
A. northbound API
_B. southbound API_
C. SOAP API
D. REST API

Question 8.33: What is a DNS lookup operation?
_A. serves requests over destination port 53_
B. DNS server pings the destination to verify that it is available
C. DNS server forwards the client to an alternate IP address when the primary IP is down
D. responds to a request for IP address to domain name resolution to the DNS server

Question 8.34: Refer to the exhibit. Refer to the exhibit. The access list denies Telnet access from PC-1 to RTR-1 and should allow it from other hosts. PC-2 gets “% Connection refused by remote host” when trying to Telnet. Without permitting Telnet from PC-1, what must be done to allow the traffic?
_A. Add the access-list 10 permit any command to the configuration_
B. Remove the access-class 10 in command from line vty 0 4.
C. Add the ip access-group 10 out command to interface g0/0.
D. Remove the password command from line vty 0 4.

Question 8.36: Refer to the exhibit. The DHCP server and clients are connected to the same switch. What is the next step to complete the DHCP configuration to allow clients on VLAN 1 to receive addresses from the DHCP server?
_A. Configure the ip dhcp snooping trust command on the interface that is connected to the DHCP server_
B. Configure the ip dhcp relay information option command on the interface that is connected to the DHCP server
C. Configure the ip dhcp relay information option command on the interface that is connected to the DHCP client
D. Configure the ip dhcp snooping trust command on the interface that is connected to the DHCP client

Question 8.37: Which two components comprise part of a PKI? (Choose two)
A. RSA token
B. clear-text password that authenticates connections
_C. one of more CRLs _
D. preshared key that authenticates connections
_E. CA that grants certificates_

Question 8.39: Refer to the exhibit. Which command must be issued to enable a floating static default route on router A?
A. ip route 0.0.0.0 0.0.0.0 192.168.2.1 10
B. ip route 0.0.0.0 0.0.0.0 192.168.1.2
_C. ip route 0.0.0.0 0.0.0.0 192.168.1.2 10_
D. ip default-gateway 192.168.2.1

Question 8.40: Refer to the exhibit. Router R1 currently is configured to use R3 as the primary route to the Internet, and the route uses the default administrative distance settings. A network engineer must configure R1 so that it uses R2 as a backup, but only if R3 goes down. Which command must the engineer configure on R1 so that it correctly uses R2 as a backup route, without changing the administrative distance configuration on the link to R3?
_A. ip route 0.0.0.0 0.0.0.0 g0/1 6_
B. ip route 0.0.0.0 0.0.0.0 g0/1 1
C. ip route 0.0.0.0 0.0.0.0 209.165.201.5 10
D. ip route 0.0.0.0 0.0.0.0 209.165.200.226 1

Question 8.41: Refer to the exhibit. An engineer is updating the R1 configuration to connect a new server to the management network. The PCs on the management network must be blocked from pinging the default gateway of the new server. Which command must be configured on R1 to complete the task?
A. R1(config)#ip route 172.16.2.0 255.255.255.0 192.168.1.15
_B. R1(config)#ip route 172.16.2.2 255.255.255.255 gi0/0_
C. R1(config)#ip route 172.16.2.0 255.255.255.0 192.168.1.5
D. R1(config)#ip route 172.16.2.2 255.255.255.248 gi0/1

Question 8.42: Refer to the exhibit. Which plan must be implemented to ensure optimal QoS marking practices on this network?
A. As traffic enters from the access layer on SW1 and SW2, trust all traffic markings
_B. Trust the IP phone markings on SW1 and mark traffic entering SW2 at SW2_
C. As traffic traverses MLS1 remark the traffic, but trust all markings at the access layer
D. Remark traffic as it traverses R1 and trust all markings at the access layer

Question 8.44: Refer to the exhibit. Which configuration enables DHCP addressing for hosts connected to interface FastEthernet0/1 on router R4?
A. interface FastEthernet0/1
ip helper-address 10.0.1.1
!
access-list 100 permit tcp host 10.0.1.1 eq 67 host 10.148.2.1
B. interface FastEthernet0/0
ip helper-address 10.0.1.1
!
access-list 100 permit host 10.0.1.1 host 10.148.2.1 eq bootps
C. interface FastEthernet0/0
ip helper-address 10.0.1.1
!
access-list 100 permit udp host 10.0.1.1 eq bootps host 10.148.2.1
_D. interface FastEthernet0/1
ip helper-address 10.0.1.1
!
access-list 100 permit udp host 10.0.1.1 eq bootps host 10.148.2.1_

Question 8.45: Refer to the exhibit. Which configuration allows routers R14 and R86 to form an OSPFv2 adjacency while acting as a central point for exchanging OSPF information between routers?
A. Option A
_B. Option B_
C. Option C
D. Option D

Question 8.46: Which wireless security protocol relies on Perfect Forward Secrecy?
A. WPA
_B. WPA3_
C. WPA2
D. WEP

Question 8.47: Refer to the exhibit. A network engineer must provide configured IP addressing details to investigate a firewall rule issue. Which subnet and mask identify what is configured on the en0 interface?
A. 10.8.0.0/16
B. 10.8.64.0/18
_C. 10.8.128.0/19_
D. 10.8.138.0/24

Question 8.48: A network engineer must configure two new subnets using the address block 10.70.128.0/19 to meet these requirements:

- The first subnet must support 24 hosts.
- The second subnet must support 472 hosts
- Both subnets must use the longest subnet mask possible from the address block
  Which two configurations must be used to configure the new subnets and meet a requirement to use the first available address in each subnet for the router interfaces? (Choose two)
  A. interface vlan 4722
  ip address 10.70.133.17 255.255.255.192
  B. interface vlan 3002
  ip address 10.70.147.17 255.255.255.224
  _C. interface vlan 1148
  ip address 10.70.148.1 255.255.254.0_
  D. interface vlan 1234
  ip address 10.70.159.1 255.255.254.0
  _E. interface vlan 155
  ip address 10.70.155.65 255.255.255.224_

Question 8.49: Refer to the exhibit. An administrator must connect SW1 and the printer to the network. SW2 requires DTP to be used for the connection to SW*1. The printer is configured as an access port with VLAN 5. Which set of commands completes the connectivity?
A. switchport mode trunk
switchport trunk pruning vlan add 5
*B. switchport mode dynamic desirable
switchport trunk allowed vlan add 5\*
C. switchport mode dynamic auto
switchport private-vlan association host 5
D. switchport mode dynamic auto
switchport trunk encapsulation negotiate

Question 8.50: Refer to the exhibit. Traffic sourced from the loopback0 interface is trying to connect via ssh to the host at 10.0.1.15. What is the next hop to the destination address?
_A. 192.168.0.7_
B. 192.168.0.4
C. 192.168.0.40
D. 192.168.3.5

Question 8.51: Refer to the exhibit. Shortly after SiteA was connected to SiteB over a new single-mode fiber path, users at SiteA report intermittent connectivity issues with applications hosted at SiteB. What is the cause of the intermittent connectivity issue?
_A. An incorrect type of transceiver has been inserted into a device on the link._
B. The wrong cable type was used to make the connection.
C. Heavy usage is causing high latency.
D. Physical network errors are being transmitted between the two sites.

Question 8.52: Refer to the exhibit. Which action must be taken to ensure that router A is elected as the DR for OSPF area 0?
A. Configure the OSPF priority on router A with the lowest value between the three routers
_B. Configure the router A interfaces with the highest OSPF priority value within the area._
C. Configure router A with a fixed OSPF router ID.
D. Configure router B and router C as OSPF neighbors of router A.

Question 8.53: Refer to the exhibit. Host A sent a data frame destined for host D.
What does the switch do when it receives the frame from host A?
A. It shuts down the port Fa0/1 and places it in err-disable mode.
B. It experiences a broadcast storm,
_C. It floods the frame out of all ports except port Fa0/1._
D. It drops the frame from the switch CAM table.

Question 8.54: Refer to the exhibit. An engineer has started to configure replacement switch SW1. To verify part of the configuration, the engineer issued the commands as shown and noticed that the entry for PC2 is missing. Which change must be applied to SW1 so that PC1 and PC2 communicate normally?
A. SW1(config)#interface fa0/2
SW1(config-if)#no switchport access vlan 2
SW1(config-if)#no switchport trunk allowed vlan 3
SW1 (config-if)#switchport trunk allowed vlan 2
B. SW1(config)#interface fa0/1
SW1(config-if)#no switchport access vlan 2
SW1(config-if)#switchport trunk native vlan 2
SW1(config-if)#switchport trunk allowed vlan 3
_C. SW1(config-if)#interface fa0/2
SW1(config-if)#no switchport mode trunk
SW1(config-if)#no switchport trunk allowed vlan 3
SW1(config-if)#switchport mode access_
D. SW1(config)#interface fa0/1
SW1(config-if)#no switchport access vlan 2
SW1(config-if)#switchport access vlan 3
SW1(config-if)#switchport trunk allowed vlan 2

Question 8.55: Refer to the exhibit. Which two commands must be configured on router R1 to enable the router to accept secure remote-access connections? (Choose two)
A. transport input telnet
_B. username cisco password 0 cisco_
C. login console
D. ip ssh pubkey-chain
_E. crypto key generate rsa_

Question 8.56: Which two spanning-tree states are bypassed on an interface running PortFast? (Choose two)
A. forwarding
B. blocking
C. disabled
_D. learning_
_E. listening_

Question 8.57: What is a requirement when configuring or removing LAG on a WLC?
A. The incoming and outgoing ports for traffic flow must be specified if LAG is enabled.
_B. The controller must be rebooted after enabling or reconfiguring LAG._
C. The management interface must be reassigned if LAG is disabled.
D. Multiple untagged interfaces on the same port must be supported.

Question 8.58: What is a requirement for nonoverlapping WI-FI channels?
A. different security settings
B. different transmission speeds
_C. discontinuous frequency ranges_
D. unique SSIDs

Question 8.59: An engineer must configure R1 for a new user account. The account must meet these requirements:

- It must be configured in the local database.
- The username is engineer2
- It must use the strongest password configurable.
  Which command must the engineer configure on the router?
  _A. R1(config)# username engineer2 algorithm-type scrypt secret test2021_
  B. R1(config)# username engineer2 secret 5 password $1$bUu$kZbBS1Pyh4QzwXyZ
C. R1(config)# username engineer2 privilege 1 password 7 test2021
D. R1(config)# username engineer2 secret 4 $1Sb1Ju$kZbBSlFyh4QxwXyZ

Question 8.60: Refer to the exhibit. Which configuration enables an EtherChannel to form dynamically between SW1 and SW2 by using an industry-standard protocol, and to support full IP connectivity between all PCs?
A. Option A
B. Option B
_C. Option C_
D. Option D

Question 8.63: What is the function of the controller in a software-defined network?
A. forwarding packets
_B. making routing decisions_
C. multicast replication at the hardware level
D. fragmenting and reassembling packets

Question 8.64: Refer to the exhibit. An IP subnet must be configured on each router that provides enough addresses for the number of assigned hosts and anticipates no more than 10% growth for new hosts. Which configuration script must be used?
A. Option A
B. Option B
_C. Option C_
D. Option D

Question 8.65: Refer to the exhibit. Which network prefix was learned via EIGRP?
A. 172.16.0.0/16
B. 207.165.200.0/24
_C. 192.168.2.0/24_
D. 192.168.1.0/24

Question 8.66: Refer to the exhibit. An engineer built a new L2 LACP EtherChannel between SW1 and SW2 and executed these show commands to verify the work. Which additional task allows the two switches to establish an LACP port channel?
A. Change the channel-group mode on SW1 to desirable.
_B. Change the channel-group mode on SW1 to active or passive._
C. Change the channel-group mode on SW2 to auto.
D. Configure the interface port-channel 1 command on both switches.

Question 8.67: Refer to the exhibit. A network engineer must update the configuration on Switch2 so that it sends LLDP packets every minute and the information sent via LLDP is refreshed every 3 minutes. Which configuration must the engineer apply?
A. Switch2(config)#lldp timer 60
Switch2(config)# lldp tlv-select 180
_B. Switch2(config)#lldp timer 60
Switch2(config)#lldp holdtime 180_
C. Switch2(config)#lldp timer 1
Switch2(config)#lldp tlv-select 3
D. Switch2(config)#lldp timer 1
Switch2(config)#lldp holdtime 3

Question 8.68: Refer to the exhibit. Router R1 resides in OSPF Area 0. After updating the R1 configuration to influence the paths that it will use to direct traffic, an engineer verified that each of the four Gigabit interfaces has the same route to 10.10.0.0/16. Which interface will R1 choose to send traffic to reach the route?
A. GigabitEthernet0/0
_B. GigabitEthernet0/1_
C. GigabitEthernet0/2
D. GigabitEthernet0/3

Question 8.69: An engineer is configuring remote access to a router from IP subnet 10.139.58.0/28. The domain name, crypto keys, and SSH have been configured. Which configuration enables the traffic on the destination router?
A. interface FastEthernet0/0
ip address 10.122.49.1 255.255.255.252
ip access-group 10 in
!
ip access-list standard 10
permit udp 10.139.58.0 0.0.0.7 host 10.122.49.1 eq 22
_B. line vty 0 15
access-class 120 in
!
ip access-list extended 120
permit tcp 10.139.58.0 0.0.0.15 any eq 22_
C. line vty 0 15
access-group 120 in
!
ip access-list extended 120
permit tcp 10.139.58.0 0.0.0.15 any eq 22
D. interface FastEthernet0/0
ip address 10.122.49.1 255.255.255.252
ip access-group 110 in
!
ip access-list standard 110
permit tcp 10.139.58.0 0.0.0.15 eq 22 host 10.122.49.1

Question 8.70: Which protocol is used for secure remote CLI access?
A. HTTP
B. Telnet
_C. SSH_
D. HTTPS

Question 8.71: What is a characteristic or private IPv4 addressing?
A. composed of up to 65,536 available addresses
B. issued by IANA in conjunction with an autonomous system number
_C. used without tracking or registration_
D. traverse the Internet when an outbound ACL is applied

Question 8.72: What provides centralized control of authentication and roaming in an enterprise network?
A. a LAN switch
B. a firewall
C. a lightweight access point
_D. a wireless LAN controller_

Question 8.74: Refer to the exhibit. How should the configuration be updated to allow PC1 and PC2 access to the Internet?
A. Modify the configured number of the second access list
B. Remove the overload keyword from the ip nat inside source command
_C. Add either the ip nat {inside|outside} command under both interfaces_
D. Change the ip nat inside source command to use interface GtgabitEthernet0/0

Question 8.75: OSPF must be configured between routers R1 and R2. Which OSPF configuration must be applied to router R1 to avoid a DR/BDR election?
A. router ospf 1
network 192.168.1.1 0.0.0.0 area 0
interface e1/1
ip address 192.160.1.1 255.255.255.252
ip ospf network broadcast
B. router ospf 1
network 192.168.1.1 0.0.0.0 area 0
interface e1/1
ip address 192.168.1.1 255.255.255.252
ip ospf cost 0
C. router ospf 1
network 192.168.1.1 0.0.0.0 area 0
hello interval 15
interface e1/1
ip address 192.168.1.1 255.255.255.252
_D. router ospf 1
network 192.168.1.1 0.0.0.0 area 0
interface e1/1
ip address 192.168.1.1 255.55.255.252
ip ospf network point-to-point_

Question 8.76: Refer to the exhibit. All VLANs are present in the VLAN database. Which command sequence must be applied to complete the configuration?
A. interface FastEthernet0/1
switchport trunk native vlan 10
switchport trunk allowed vlan 10,15
B. interface FastEthernet0/1
switchport mode trunk
switchport trunk allowed vlan 10,15
C. interface FastEthernet0/1
switchport trunk allowed vlan add 10
vlan 10
private-vlan isolated
_D. interface FastEthernet0/1
switchport mode access
switchport voice vlan 10_

Question 8.77: A Cisco engineer is configuring a factory-default router with these three passwords:

- The user EXEC password for console access is p4ssw0rd1.
- The user EXEC password for Telnet access is s3cr3t2.
- The password for privileged EXEC mode is priv4t3p4ss.
  Which command sequence must the engineer configure?
  _A. Option A_
  B. Option B
  C. Option C
  D. Option D

Question 8.78: Refer to the exhibit. Packets received by the router from BGP enter via a serial interface at 209.165.201.10. Each route is present within the routing table. Which interface is used to forward traffic with a destination IP of 10.10.10.24?
A. F0/10
_B. F0/11_
C. F0/12
D. F0/13

Question 8.79: What is the purpose of the ip address dhcp command?
A. to configure an interface as a DHCP server
B. to configure an interface as a DHCP relay
C. to configure an interface as a DHCP helper
_D. to configure an interface as a DHCP client_

Question 8.80: What is a function of an endpoint on a network?
_A. allows users to record data and transmit to a file server_
B. connects server and client devices to a network
C. provides wireless services to users in a building
D. forwards traffic between VLANs on a network

## Part 9

Question 9.1: Refer to the exhibit. Which two commands when used together create port channel 10? (Choose two)
_A. int range g0/0-1
channel-group 10 mode active_
B. int range g0/0-1
channel-group 10 mode desirable
_C. int range g0/0-1
channel-group 10 mode passive_
D. int range g0/0-1
channel-group 10 mode auto
E. int range g0/0-1
channel-group 10 mode on

Question 9.3: Which field within the access-request packet is encrypted by RADIUS?
A. authorized services
B. authenticator
C. username
_D. password_

Question 9.4: Refer to the exhibit. Which two configurations must the engineer apply on this network so that R1 becomes the DR? (Choose two)
_A. R1(config)#interface fastethernet0/0
R1(config-if)#ip ospf priority 200_
B. R1(config)#router ospf 1
R1(config-router)#router-id 192.168.100.1
_C. R3(config)#interface fastethernet0/0
R3(config-if)#ip ospf priority 0_
D. R1(config)#interface fastethernet0/0
R1(config-if)#ip ospf priority 0
E. R3(config)#interface fastethernet0/0
R3(config-if)#ip ospf priority 200

Question 9.5: Refer to the exhibit. The router has been configured with a supernet to accommodate the requirement for 380 users on a subnet. The requirement already considers 30% future growth. Which configuration verifies the IP subnet on router R4?
A. Subnet: 10.7.54.0
Subnet mask: 255.255.254.0
Broadcast address: 10.7.54.255
Usable IP address range: 10.7.54.1 – 10.7.55.254
_B. Subnet: 10.7.54.0
Subnet mask: 255.255.254.0
Broadcast address: 10.7.55.255
Usable IP address range: 10.7.54.1 – 10.7.55.254_
C. Subnet: 10.7.54.0
Subnet mask: 255.255.128.0
Broadcast address: 10.7.55.255
Usable IP address range: 10.7.54.1 – 10.7.55.254
D. Subnet: 10.7.54.0
Subnet mask: 255.255.255.0
Broadcast address: 10.7.54.255
Usable IP address range: 10.7.54.1 – 10.7.55.254

Question 9.6: What is a function of a Next-Generation IPS?
A. makes forwarding decisions based on learned MAC addresses
B. serves as a controller within a controller-based network
C. integrates with a RADIUS server to enforce Layer 2 device authentication rules
_D. correlates user activity with network events_

Question 9.8: Refer to the exhibit. Which two commands must be added to update the configuration of router R1 so that it accepts only encrypted connections? (Choose two)
A. username CNAC secret R!41!4319115@
_B. crypto key generate rsa 1024_
C. ip ssh version 2
D. line vty 0 4
_E. transport input ssh_

Question 9.9: Which action is taken by the data plane within a network device?
A. looks up an egress interface in the forwarding information base
B. constructs a routing table based on a routing protocol
C. provides CLI access to the network device
_D. forwards traffic to the next hop_

Question 9.10
R1 as an NTP server must have:

- NTP authentication enabled
- NTP packets sourced from Interface loopback 0
- NTP stratum 2
- NTP packets only permitted to client IP 209.165.200.225
  How should R1 be configured?
  A. Option A
  B. Option B
  C. Option C
  _D. Option D_

Question 9.11: Refer to the exhibit. Which route must be configured on R1 so that OSPF routing is used when OSPF is up. But the server is still reachable when OSPF goes down?
A. ip route 10.1.1.10 255.255.255.255 172.16.2.2 100
B. ip route 10.1.1.0 255.255.255.0 gi0/1 125
C. ip route 10.1.1.0 255.255.255.0 172.16.2.2 100
_D. ip route 10.1.1.10 255.255.255.255 gi0/0 125_

Question 9.12: How does Rapid PVST+ create a fast loop-free network topology?
A. It requires multiple links between core switches
B. It maps multiple VLANs into the same spanning-tree instance
_C. It generates one spanning-tree instance for each VLAN_
D. It uses multiple active paths between end stations

Question 9.13: Which WLC management connection type is vulnerable to man-in-the-middle attacks?
A. SSH
B. HTTPS
_C. Telnet_
D. console

Question 9.14: Refer to the exhibit. Which command configures OSPF on the point-to-point link between routers R1 and R2?
_A. network 10.0.0.0 0.0.0.255 area 0_
B. neighbor 10.1.2.0 cost 180
C. ip ospf priority 100
D. router-id 10.0.0.15

Question 9.15: Which characteristic differentiates the concept of authentication from authorization and accounting?
A. user-activity logging
B. service limitations
C. consumption-based billing
_D. identity verification_

Question 9.17: Refer to the exhibit. Traffic that is flowing over interface TenGigabitEthernet0/0 experiences slow transfer speeds. What is the reason for the issue?
A. heavy traffic congestion
B. queuing drops
C. a speed conflict
_D. a duplex incompatibility_

Question 9.18: Which type of network attack overwhelms the target server by sending multiple packets to a port until the half-open TCP resources of the target are exhausted?
_A. SYN flood_
B. reflection
C. teardrop
D. amplification

Question 9.19: Which interface mode must be configured to connect the lightweight APs in a centralized architecture?
A. WLAN dynamic
B. management
C. trunk
_D. access_

Question 9.20: Which two network actions occur within the data plane? (Choose two)
_A. Add or remove an 802.1Q trunking header._
B. Make a configuration change from an incoming NETCONF RPC.
C. Run routing protocols.
D. Reply to an incoming ICMP echo request.
_E. Match the destination MAC address to the MAC address table._

Question 9.21: Refer to the exhibit. An engineer assumes a configuration task from a peer. Router A must establish an OSPF neighbor relationship with neighbor 172.1.1.1. The output displays the status of the adjacency after 2 hours. What is the next step in the configuration process for the routers to establish an adjacency?
A. Set the router B OSPF ID to the same value as its IP address
B. Set the router B OSPF ID to a nonhost address
C. Configure a point-to-point link between router A and router B
_D. Configure router A to use the same MTU size as router B_

Question 9.22: Refer to the exhibit. All traffic enters the CPE router from interface Serial0/3 with an IP address of 192.168.50.1. Web traffic from the WAN is destined for a LAN network where servers are load-balanced. An IP packet with a destination address of the HTTP virtual IP of 192.168.1.250 must be forwarded. Which routing table entry does the router use?
A. 192.168.1.0/24 via 192.168.12.2
B. 192.168.1.128/25 via 192.168.13.3
C. 192.168.1.192/26 via 192.168.14.4
_D. 192.168.1.224/27 via 192.168.15.5_

Question 9.23: Refer to the exhibit. The link between PC1 and the switch is up, but it is performing poorly. Which interface condition is causing the performance problem?
_A. There is a duplex mismatch on the interface_
B. There is an issue with the fiber on the switch interface
C. There is a speed mismatch on the interface
D. There is an interface type mismatch

Question 9.24: What provides centralized control of authentication and roaming in an enterprise network?
A. a lightweight access point
B. a firewall
_C. a wireless LAN controller_
D. a LAN switch

Question 9.26: Refer to the exhibit. An engineer is configuring a new router on the network and applied this configuration. Which additional configuration allows the PC to obtain its IP address from a DHCP server?
A. Configure the ip dhcp relay information command under interface Gi0/1
B. Configure the ip dhcp smart-relay command globally on the router
_C. Configure the ip helper-address 172.16.2.2 command under interface Gi0/0_
D. Configure the ip address dhcp command under interface Gi0/0

Question 9.27: Refer to the exhibit. A static route must be configured on R14 to forward traffic for the 172.21.34.0/25 network that resides on R86. Which command must be used to fulfill the request?
A. ip route 172.21.34.0 255.255.255.192 10.73.65.65
B. ip route 172.21.34.0 255.255.255.0 10.73.65.65
C. ip route 172.21.34.0 255.255.128.0 10.73.65.64
_D. ip route 172.21.34.0 255.255.255.128 10.73.65.66_

Question 9.28: What is a function of Opportunistic Wireless Encryption in an environment?
A. offer compression
B. increase security by using a WEP connection
C. provide authentication
_D. protect traffic on open networks_

Question 9.29: Refer to the exhibit. A company is configuring a failover plan and must implement the default routes in such a way that a floating static route will assume traffic forwarding when the primary link goes down. Which primary route configuration must be used?
A. ip route 0.0.0.0 0.0.0.0 192.168.0.2 GigabitEthernet1/0
B. ip route 0.0.0.0 0.0.0.0 192.168.0.2 tracked
C. ip route 0.0.0.0 0.0.0.0 192.168.0.2 floating
_D. ip route 0.0.0.0 0.0.0.0 192.168.0.2_

Question 9.30: Which action implements physical access control as part of the security program of an organization?
_A. setting up IP cameras to monitor key infrastructure_
B. backing up syslogs at a remote location
C. configuring enable passwords on network devices
D. configuring a password for the console port

Question 9.31: Refer to the exhibit. An engineer is asked to insert the new VLAN into the existing trunk without modifying anything previously configured Which command accomplishes this task?
A. switchport trunk allowed vlan 100-104
B. switchport trunk allowed vlan all
_C. switchport trunk allowed vlan add 104_
D. switchport trunk allowed vlan 104

Question 9.32: Refer to the exhibit. What is a reason for poor performance on the network interface?
A. The interface is receiving excessive broadcast traffic.
_B. The cable connection between the two devices is faulty._
C. The interface is operating at a different speed than the connected device.
D. The bandwidth setting of the interface is misconfigured

Question 9.33: Refer to the exhibit. Routers R1 and R3 have the default configuration. The router R2 priority is set to 99. Which commands on R3 configure it as the DR in the 10.0.4.0/24 network?
_A. R3(config)#interface Gig0/1
R3(config-if)#ip ospf priority 100_
B. R3(config)#interface Gig0/0
R3(config-if)#ip ospf priority 100
C. R3(config)#interface Gig0/0
R3(config-if)#ip ospf priority 1
D. R3(config)#interface Gig0/1
R3(config-if)#ip ospf priority 0

Question 9.34: Which QoS per-hop behavior changes the value of the ToS field in the IPv4 packet header?
A. shaping
_B. marking_
C. policing
D. classification

Question 9.35: Refer to the exhibit. Which next-hop IP address does Router1 use for packets destined to host 10.10.13.158?
A. 10.10.10.5
B. 10.10.11.2
C. 10.10.12.2
_D. 10.10.10.9_

Question 9.36: What is one reason to implement LAG on a Cisco WLC?
A. to increase security and encrypt management frames
_B. to provide link redundancy and load balancing_
C. to allow for stateful and link-state failover
D. to enable connected switch ports to failover and use different VLANs

Question 9.37: Refer to the exhibit. Web traffic is coming in from the WAN interface. Which route takes precedence when the router is processing traffic destined for the LAN network at 10.0.10.0/24?
_A. via next-hop 10.0.1.5_
B. via next-hop 10.0.1.4
C. via next-hop 10.0.1.50
D. via next-hop 10.0.1.100

Question 9.38: Which PoE mode enables powered-device detection and guarantees power when the device is detected?
A. dynamic
_B. static_
C. active
D. auto

Question 9.39
A Cisco engineer must configure a single switch interface to meet these requirements

- accept untagged frames and place them in VLAN 20
- accept tagged frames in VLAN 30 when CDP detects a Cisco IP phone
  Which command set must the engineer apply?
  _A. switchport mode access
  switchport access vlan 20
  switchport voice vlan 30_
  B. switchport mode trunk
  switchport access vlan 20
  switchport voice vlan 30
  C. switchport mode dynamic auto
  switchport trunk native vlan 20
  switchport trunk allowed vlan 30
  switchport voice vlan 30
  D. switchport mode dynamic desirable
  switchport access vlan 20
  switchport trunk allowed vlan 30
  switchport voice vlan 30

Question 9.40: Refer to the exhibit. Which minimum configuration items are needed to enable Secure Shell version 2 access to R15?
A. Router(config)#hostname R15
R15(config)#crypto key generate rsa general-keys modulus 1024
R15(config-line)#line vty 0 15
R15(config-line)# transport input ssh
R15(config)#ip ssh source-interface Fa0/0
R15(config)#ip ssh stricthostkeycheck
B. Router(config)#ip domain-name cisco.com
Router(config)#crypto key generate rsa general-keys modulus 1024
Router(config)#ip ssh version 2
Router(config-line)#line vty 0 15
Router(config-line)# transport input all
Router(config)#ip ssh logging events
_C. Router(config)#hostname R15
R15(config)#ip domain-name cisco.com
R15(config)#crypto key generate rsa general-keys modulus 1024
R15(config)#ip ssh version 2
R15(config-line)#line vty 0 15
R15(config-line)# transport input ssh_
D. Router(config)#crypto key generate rsa general-keys modulus 1024
Router(config)#ip ssh version 2
Router(config-line)#line vty 0 15
Router(config-line)# transport input ssh
Router(config)#ip ssh logging events
R15(config)#ip ssh stricthostkeycheck

Question 9.41: Refer to the exhibit. Users need to connect to the wireless network with IEEE 802.11r-compatible devices. The connection must be maintained as users travel between floors or to other areas in the building. What must be the configuration of the connection?
A. Select the WPA Policy option with the CCKM option
B. Disable AES encryption
_C. Enable Fast Transition and select the FT 802.1x option_
D. Enable Fast Transition and select the FT PSK option

Question 9.42: Refer to the exhibit. An engineer is configuring an EtherChannel using LACP between Switches 1 and 2. Which configuration must be applied so that only Switch 1 sends LACP initiation packets?
A. Switch1(config-if)#channel-group 1 mode on
Switch2(config-if)#channel-group 1 mode passive
B. Switch1(config-if)#channel-group 1 mode passive
Switch2(config-if)#channel-group 1 mode active
_C. Switch1(config-if)#channel-group 1 mode active
Switch2(config-if)#channel-group 1 mode passive_
D. Switch1(config-if)#channel-group 1 mode on
Switch2(config-if)#channel-group 1 mode active

Question 9.43: Refer to the exhibit. Which switch becomes the root of a spanning tree for VLAN 20 if all links are of equal speed?
_A. SW1_
B. SW2
C. SW3
D. SW4

Question 9.44: Refer to the exhibit. Users on existing VLAN 100 can reach sites on the Internet. Which action must the administrator take to establish connectivity to the Internet for users in VLAN 200?
A. Define a NAT pool on the router.
_B. Update the NAT_INSIDE_RANGES ACL_
C. Configure the ip nat outside command on another interface for VLAN 200
D. Configure static NAT translations for VLAN 200

Question 9.45
Which protocol uses the SSL?
A. HTTP
_B. HTTPS_
C. SSH
D. Telnet

Question 9.47: Which value is the unique identifier that an access point uses to establish and maintain wireless connectivity to wireless network devices?
A. VLANID
_B. SSID_
C. RFID
D. WLANID

Question 9.48: A network engineer is configuring a switch so that it is remotely reachable via SSH. The engineer has already configured the host name on the router. Which additional command must the engineer configure before entering the command to generate the RSA key?
A. password password
B. crypto key generate rsa modulus 1024
_C. ip domain-name domain_
D. ip ssh authentication-retries 2

Question 9.49: Refer to the exhibit. Switch A is newly configured. All VLANs are present in the VLAN database. The IP phone and PC A on Gi0/1 must be configured for the appropriate VLANs to establish connectivity between the PCs. Which command set fulfills the requirement?
_A. SwitchA(config-if)#switchport mode access
SwitchA(config-if)#switchport access vlan 50
SwitchA(config-if)#switchport voice vlan 51_
B. SwitchA(config-if)#switchport mode access
SwitchA(config-if)#switchport access vlan 50
SwitchA(config-if)#switchport voice vlan untagged
C. SwitchA(config-if)#switchport mode trunk
SwitchA(config-if)#switchport trunk allowed vlan add 50, 51
SwitchA(config-if)#switchport voice vlan dot1p
D. SwitchA(config-if)#switchport mode trunk
SwitchA(config-if)#switchport trunk allowed vlan 50, 51
SwitchA(config-if)#switchport qos trust cos

Question 9.50: Which QoS traffic handling technique retains excess packets in a queue and reschedules these packets for later transmission when the configured maximum bandwidth has been surpassed?
_A. traffic shaping_
B. traffic policing
C. weighted random early detection
D. traffic prioritization

Question 9.51: Refer to the exhibit. R1 learns all routes via OSPF. Which command configures a backup static route on R1 to reach the 192.168.20.0/24 network via R3?
_A. R1(config)#ip route 192.168.20.0 255.255.255.0 192.168.30.2 111_
B. R1(config)#ip route 192.168.20.0 255.255.255.0 192.168.30.2 90
C. R1(config)#ip route 192.168.20.0 255.255.0.0 192.168.30.2
D. R1(config)#ip route 192.168.20.0 255.255.255.0 192.168.30.2

Question 9.52: Which Layer 2 switch function encapsulates packets for different VLANs so that the packets traverse the same port and maintain traffic separation between the VLANs?
A. VLAN numbering
B. VLAN DSCP
_C. VLAN tagging_
D. VLAN marking

Question 9.53: What is an expected outcome when network management automation is deployed?
A. A distributed management plane must be used.
_B. Software upgrades are performed from a central controller_
C. Complexity increases when new device configurations are added
D. Custom applications are needed to configure network devices

Question 9.54: Refer to the exhibit. The primary route across Gi0/0 is configured on both routers. A secondary route must be configured to establish connectivity between the workstation networks. Which command set must be configured to complete this task?
A. R1
ip route 172.16.2.0 255.255.255.240 172.16.0.2 113
R2
ip route 172.16.1.0 255.255.255.0 172.16.0.1 114
B. R1
ip route 172.16.2.0 255.255.255.240 172.16.0.5 89
R2
ip route 172.16.1.0 255.255.255.0 172.16.0.6 89
C. R1
ip route 172.16.2.0 255.255.255.248 172.16.0.5 110
R2
ip route 172.16.1.0 255.255.255.0 172.16.0.6 110
_D. R1
ip route 172.16.2.0 255.255.255.224 172.16.0.6 111
R2
ip route 172.16.1.0 255.255.255.0 172.16.0.5 112_

Question 9.55: Refer to the exhibit. Which action must be taken so that neighboring devices rapidly discover switch Cat9300?
A. Enable portfast on the ports that connect to neighboring devices
B. Configure the cdp holdtime 10 command on switch Cat9300
C. Configure the cdp timer 10 command on the neighbors of switch Cat9300
_D. Configure the cdp timer 10 command on switch Cat9300_

Question 9.56: Refer to the exhibit. SW2 is replaced due to a hardware failure. A network engineer starts to configure SW2 by copying the Fa0/1 interface configuration from SW1. Which command must be configured on the Fa0/1 interface of SW2 to enable PC1 to connect to PC2?
_A. switchport mode trunk_
B. switchport trunk native vlan 10
C. switchport trunk allowed remove 10
D. switchport mode access

Question 9.57: How do UTP and STP cables compare?
A. STP cables are cheaper to produre and easier to install and UTP cables are more expensive and harder to install.
B. UTP cables are less prone to crosstalk and interference and STP cables are more prone to crosstalk and interference.
C. UTP cables provide faster and more reliable data transfer rates and STP cables are slower and less reliable.
_D. STP cables are shielded and protect against electromagnetic interference and UTP lacks the same protection against electromagnetic interference._

Question 9.59: Which port type does a lightweight AP use to connect to the wired network when configured in FlexConnect mode with local switching and VLAN tagging?
A. EtherChannel
B. access
C. LAG
_D. trunk_

Question 9.60: An engineer is installing a new wireless printer with a static IP address on the Wi-Fi network. Which feature must be enabled and configured to prevent connection issues with the printer?
_A. passive client_
B. static IP tunneling
C. DHCP address assignment
D. client exclusion

Question 9.62: Refer to the exhibit. What must be configured to enable 802.11w on the WLAN?
_A. Set PMF to Required_
B. Enable MAC Filtering
C. Enable WPA Policy
D. Set Fast Transition to Enabled

Question 9.65: Refer to the exhibit. Which configuration establishes a Layer 2 LACP EtherChannel when applied to both switches?
A. interface range G1/1 -1/3
switchport mode access
channel-group 1 mode passive
no shutdown
B. interface range G1/1 -1/3
switchport mode trunk
channel-group 1 mode desirable
no shutdown
_C. interface range G1/1 -1/3
switchport mode trunk
channel-group 1 mode active
no shutdown_
D. interface range G1/1 -1/3
switchport mode access
channel-group 1 mode on
no shutdown

Question 9.66: Refer to the exhibit. A network engineer configures the Cisco WLC to authenticate local wireless clients against a RADIUS server. Which task must be performed to complete the process?
A. Disable the Server Status option
B. Enable the Management option
_C. Enable the Network User option_
D. Enable the Support for CoA option

Question 9.67: Which QoS queuing method discards or marks packets that exceed the desired bit rate of traffic flow?
A. shaping
_B. policing_
C. CBWFQ
D. LLQ

Question 9.68: What is the role of disaggregation in controller-based networking?
_A. It divides the control-plane and data-plane functions._
B. It summarizes the routes between the core and distribution layers of the network topology.
C. It enables a network topology to quickly adjust from a ring network to a star network
D. It streamlines traffic handling by assigning individual devices to perform either Layer 2 or Layer 3 functions.

Question 9.69
Which REST method updates an object in the Cisco DNA Center Intent API?
A. CHANGE
B. UPDATE
C. POST
_D. PUT_

Question 9.71: What is the function of Cisco Advanced Malware protection for next-generation IPS?
A. authorizing potentially compromised wireless traffic
B. URL filtering
C. authenticating end users
_D. inspecting specific files and files types for malware_

Question 9.72: An administrator must use the password complexity not manufacturer-name command to prevent users from adding “cisco” as a password. Which command must be issued before this command?
_A. Password complexity enable_
B. confreg 0x2142
C. login authentication my-auth-list
D. service password-encryption

Question 9.73: What is the function of “off-the-shelf” switches in a controller-based network?
_A. Forwarding packets_
B. Making routing decision
C. Providing a central view of the deployed network
D. Setting packet-handling policies

Question 9.74: Which two practices are recommended for an acceptable security posture in a network? (Choose two)
_A. Maintain network equipment in a secure location_
B. Backup device configurations to encrypted USB drives for secure retrieval
C. Use a cryptographic keychain to authenticate to network devices
D. Place internal email and file servers in a designated DMZ
_E. Disable unused or unnecessary ports, interfaces and services_

Question 9.75: Refer to the exhibit. What are the two steps an engineer must take to provide the highest encryption and authentication using domain credentials from LDAP? (Choose two)
A. Select WPA policy with TKIP Encryption
_B. Select WPA + WPA2 on layer 2 security_
C. Select PSK under authentication key management
D. Select Static-WEP + 802.1x on Layer 2 security
_E. Select 802.1x from under authentication key management_

Question 9.76: Refer to the exhibit. The network administrator must prevent the switch Cat9K-2 IP address from being visible in LLDP without disabling the protocol. Which action must be taken must be taken to complete the task?
_A. Configure the no lldp tlv-select-management-address command globally on Cat9K-2_
B. Configure the no lldp transmit command on interface G1/0/21 in Cat9K-1
C. Configure the no lldp receive command on interface G1/0/21 on Cat9K-1
D. Configure the no lldp mac-phy-cfg command globally on Cat9K-2

Question 9.77: Which WAN topology has the highest degree of reliability?
A. router-on-a-stick
B. Point-to-point
C. hub-and-spoke
_D. full mesh_

Question 9.78: What is a feature of WPA?
A. 802.1x authentication
B. preshared key
_C. TKIP/MIC encryption_
D. small Wi-Fi application

Question 9.79: Refer to the exhibit. R1 has taken the DROTHER role in the OSPF DR/BDR election process. Which configuration must an engineer implement so that R1 is elected as the DR?
A. R1(config)#interface FastEthernet0/0
R1(config-if)#ip ospf priority 1
R1#clear ip ospf process
_B. R1(config)#interface FastEthernet0/0
R1(config-if)#ip ospf priority 200
R1#clear ip ospf process_
C. R3(config)#interface FastEthernet0/1
R3(config-if)#ip ospf priority 200
R3#clear ip ospf process
D. R2(config)#interface FastEthernet0/2
R2(config-if)#ip ospf priority 1
R2#clear ip ospf process

Question 9.81: Refer to the exhibit. Which type of configuration is represented in the output?
A. Chef
B. JSON
C. Ansible
_D. Puppet_

Question 9.82: How does TFTP operate in a network?
A. relies on the well-known TCP port 20 to transmit data
B. requires two separate connections for control and data traffic
_C. uses block numbers to identify and mitigate data-transfer errors_
D. provides secure data transfer

Question 9.84: Refer to the exhibit. What is represented by “R1” and “SW1” within the JSON output?
A. array
B. object
_C. value_
D. key

Question 9.85: Refer to the exhibit. The following must be considered

- SW1 is fully configured for all traffic
- The SW4 and SW9 links to SW1 have been configured
- The SW4 interface Gi0/1 and Gi0/0 on SW9 have been configured
- The remaining switches have had all VLANs added to their VLAN database
  Which configuration establishes a successful ping from PC2 to PC7 without interruption to traffic flow between other PCs?
  _A. Option A_
  B. Option B
  C. Option C
  D. Option D

Question 9.86: An engineer is configuring switch SW1 to act as an NTP server when all upstream NTP server connectivity fails. Which configuration must be used?
A. SW1# config t
SW1(config)#ntp server 192.168.1.1
SW1(config)#ntp access-group server accesslist1
B. SW1# config t
SW1(config)3 ntp peer 192.168.1.1
SW1(config)#ntp access-group peer accesslist1
C. SW1# config t
SW1(config)#ntp backup
SW1(config)#ntp server 192.168.1.1
_D. SW1# config t
SW1(config)#ntp master
SW1(config)#ntp server 192.168.1.1_

Question 9.87: Refer to the exhibit. An OSPF neighbor relationship must be configured using these guidelines:

- R1 is only permitted to establish a neighbor with R2.
- R1 will never participate in DR elections.
- R1 will use a router-id of 10.1.1.1.
  Which configuration must be used?
  A. Option A
  _B. Option B_
  C. Option C
  D. Option D

Question 9.88
How does authentication differ from authorization?
_A. Authentication verifies the identity of a person accessing a network, and authorization determines what resource a user can access._
B. Authentication is used to determine what resources a user is allowed to access, and authorization is used to track what equipment is allowed access to the network
C. Authentication is used to verify a person’s identity, and authorization is used to create syslog messages for logins
D. Authentication is used to record what resource a user accesses, and authorization is used to determine what resources a user can access

Question 9.89
A user configured OSPF and advertised the Gigabit Ethernet interface in OSPF. By default, to which type of OSPF network does this interface belong?
A. point-to-multipoint
B. point-to-point
C. nonbroadcast
_D. broadcast_

Question 9.90: Refer to the exhibit. What is the effect of this configuration?
A. Egress traffic is passed only if the destination is a DHCP server.
B. All ingress and egress traffic is dropped because the interface is untrusted.
C. All ARP packets are dropped by the switch.
_D. The switch discards all ingress ARP traffic with invalid MAC-to-IP address bindings._

Question 9.91: Refer to the exhibit. Which prefix did router R1 learn from internal EIGRP?
_A. 192.168.2.0/24_
B. 192.168.1.0/24
C. 192.168.3.0/24
D. 172.16.1.0/24

Question 9.92: Refer to the exhibit. Router R1 must be configured to reach the 10.0.3.0 network from the 10.0.1.0/24 segment. Which command must be used to configure the route?
A. route add 10.0.3.0 0.255.255.255 10.0.4.2
B. route add 10.0.3.0 mask 255.255.255.0 10.0.4.3
C. ip route 10.0.3.0 0.255.255.255 10.0.4.2
_D. ip route 10.0.3.0 255.255.255.0 10.0.4.3_

Question 9.93: What is a benefit for external users who consume public cloud resources?
A. implemented over a dedicated WAN
B. located in the same data center as the users
C. all hosted on physical servers
_D. accessed over the Internet_

Question 9.94: In an SDN architecture, which function of a network node is centralized on a controller?
A. provides protocol access for remote access devices
B. discards a message due filtering
C. creates the IP routing table
_D. makes a routing decision_

Question 9.95: Refer to the exhibit. An engineer must configure neighbor discovery between the company router and an ISP. What is the next step to complete the configuration if the ISP uses a third-party router?
A. Disable CDP on gi0/0.
B. Disable auto-negotiation.
C. Enable LLDP TLVs on the ISP router.
_D. Enable LLDP globally._

Question 9.96: Which SDN plane forwards user-generated traffic?
A. policy plane
B. management plane
_C. data plane_
D. control plane

Question 9.97: When should an engineer implement a collapsed-core architecture?
A. for large networks that are connected to multiple remote sites
B. the access and distribution layers must be on the same device
C. only when using VSS technology
_D. for small networks with minimal need for growth_

Question 9.98: Refer to the exhibit. Routers R1 and R2 have been configured with their respective LAN interfaces. The two circuits are operational and reachable across WAN. Which command set establishes failover redundancy if the primary circuit goes down?
_A. R1(config)#ip route 0.0.0.0 0.0.0.0 10.10.10.6 2
R2(config)#ip route 0.0.0.0 0.0.0.0 10.10.10.5 2_
B. R1(config)#ip route 10.10.13.10 255.255.255.255 10.10.10.6
R2(config)#ip route 192.166.0.100 255.255.255.255 10.10.10.5
C. R1(config)#ip route 10.10.13.10 255.255.255.255 10.10.10.2
R2(config)#ip route 192.168.0.100 255.255.255.255 10.10.10.1
D. R1(config)#ip route 0.0.0.0 0.0.0.0 10.10.10.6
R2(config)#ip route 0.0.0.0 0.0.0.0 10.10.10.5

Question 9.102: Which two wireless security standards use Counter Mode Cipher Block Chaining Message Authentication Code Protocol for encryption and data integrity? (Choose two)
_A. WPA2_
_B. WPA3_
C. WEP
D. WPA
E. Wi-Fi 6

Question 9.103: What is a practice that protects a network from VLAN hopping attacks?
A. Implement port security on internet-facing VLANs.
B. Configure an ACL to prevent traffic from changing VLANs.
_C. Assign all access ports to VLANs other than the native VLAN._
D. Enable dynamic ARP inspection.

Question 9.104: Refer to the exhibit. When router R1 is sending traffic to IP address 10.56.192.1, which interface or next hop address does it use to route the packet?
A. 0.0.0.0/0
B. Vlan57
_C. 10.56.0.1_
D. 10.56.128.19

Question 9.105: What is a function of MAC learning on a switch?
_A. A static MAC address is manually added to the MAC table._
B. MAC address learning is disabled by default on all VLANs.
C. Frames received for a destination MAC address not listed in the address table are dropped.
D. The MAC address table is used to populate the ARP table.

Question 9.106: What is the difference between 1000BASE-LX/LH and 1000BASE-ZX interfaces?
A. 1000BASE-LX/LH interoperates with multimode and single-mode fiber, and 1000BASE-ZX needs a conditioning patch cable with a multimode.
B. 1000BASE-ZX is supported on links up to 1000km, and 1000BASE-LX/LH operates over links up to 70 km.
C. 1000BASE-ZX interoperates with dual-rate 100M/1G 10Km SFP over multimode fiber, and 1000BASE-LX/LH supports only single-rate.
_D. 1000BASE-LX/LH is supported on links up to 10km, and 1000BASE-ZX operates over links up to 70 km._

Question 9.107: What is the effect when loopback interfaces and the configured router ID are absent during the OSPF Process configuration?
A. The router ID 0.0.0.0 is selected and placed in the OSPF process.
B. No router ID is set, and the OSPF protocol does not run.
_C. The highest up/up physical interface IP address is selected as the router ID._
D. The lowest IP address is incremented by 1 and selected as the router ID.

Question 9.108: Refer to the exhibit. What is expected when PCA sends data to PCB after their initial communication?
_A. The source and destination MAC addresses remain the same_
B. The switch rewrites the source and destination MAC addresses with its own
C. The source MAC address is changed
D. The destination MAC address is replaced with ffff.ffff.ffff

## Part 10

Question 10.1: Refer to the exhibit. An engineer is asked to configure router R1 so that it forms an OSPF single-area neighbor relationship with R2. Which command sequence must be implemented to configure the router?
A. router ospf 10
network 10.0.0.0 0.0.0.3 area 0
network 10.0.2.0 0.0.0.255 area 0
_B. router ospf 10
network 10.0.0.0 0.0.0.3 area 0
network 10.0.1.0 0.0.0.255 area 0_
C. router ospf 10
network 10.0.0.0 0.0.0.3 area 0
network 10.0.2.0 255.255.255.0 area 0
D. router ospf 10
network 10.0.0.0 0.0.0.252 area 0
network 10.0.1.0 0.0.0.255 area 0

Question 10.3: What is the collapsed layer in collapsed core architectures?
A. core and WAN
B. access and WAN
C. distribution and access
_D. core and distribution_

Question 10.4: What is the MAC address used with VRRP as a virtual address?
A. 00-00-0C-07-AD-89
_B. 00-00-5E-00-01-0a_
C. 00-07-C0-70-AB-01
D. 00-C6-41-93-90-91

Question 10.6: Refer to the exhibit. All routers in the network are configured. R2 must be the DR. After the engineer connected the devices, R1 was elected as the DR. Which command sequence must be configure on R2 to be elected as the DR in the network?
A. R2(config)#interface gi0/0
R2(config-if)#ip ospf priority 1
_B. R2(config)#interface gi0/0
R2(config-if)#ip ospf priority 100_
C. R2(config)#router ospf 1
R2(config-router)#router-id 10.100.100.100
D. R2(config)#router ospf 1
R2(config-router)#router-id 192.168.2.7

Question 10.7: Which set of 2.4 GHz nonoverlapping wireless channels is standard in the United States?
A. channels 2, 7, 9, and 11
B. channels 1, 6, 11, and 14
C. channels 2, 7, and 11
_D. channels 1, 6, and 11_

Question 10.8: Which command entered on a switch configured with Rapid-PVST+ listens and learns for a specific time period?
A. switch(config)#spanning-tree vlan 1 max-age 6
B. switch(config)#spanning-tree vlan 1 hello-time 10
C. switch(config)#spanning-tree vlan 1 priority 4096
_D. switch(config)#spanning-tree vlan 1 forward-time 20_

Question 10.10: Refer to the exhibit. An engineer is configuring a Layer 3 port-channel interface with LACP. The configuration on the first device is complete, and it is verified that both interfaces have registered the neighbor device in the CDP table. Which task on the neighbor device enables the new port channel to come up without negotiating the channel?
A. Bring up the neighboring interfaces using the no shutdown command.
B. Change the EtherChannel mode on the neighboring interfaces to auto
_C. Modify the static EtherChannel configuration of the device to passive mode_
D. Configure the IP address of the neighboring device

Question 10.11: Refer to the exhibit. What is the next hop for traffic entering R1 with a destination of 10.1.2.126?
A. 10.165.20.126
B. 10.165.20.146
_C. 10.165.20.166_
D. 10.165.20.226

Question 10.12: Refer to the exhibit. A network engineer must configure R1 so that it sends all packets destined to the 10.0.0.0/24 network to R3, and all packets destined to PC1 to R2. Which configuration must the engineer implement?
A. R1(config)#ip route 10.0.0.0 255.255.0.0 172.16.0.2
R1(config)#ip route 10.0.0.5 255.255.255.255 192.168.0.2
B. R1(config)#ip route 10.0.0.0 255.255.255.0 172.16.0.2
R1(config)#ip route 10.0.0.5 255.255.255.255 192.168.0.2
C. R1(config)#ip route 10.0.0.0 255.255.0.0 192.168.0.2
R1(config)#ip route 10.0.0.0 255.255.255.0 172.16.0.2
_D. R1(config)#ip route 10.0.0.0 255.255.255.0 192.168.0.2
R1(config)#ip route 10.0.0.5 255.255.255.255 172.16.0.2_

Question 10.15: What is the purpose of the Cisco DNA Center controller?
_A. to securely manage and deploy network devices_
B. to scan a network and generate a layer 2 network diagram
C. to provide Layer 3 services to autonomous access points
D. to secure physical access to a data center

Question 10.16: Refer to the exhibit. An engineer must configure router R2 so it is elected as the DR on the WAN subnet. Which command sequence must be configured?
A. interface gigabitethernet0/0
ip address 10.0.1.1 255.255.255.224
ip ospf priority 98
B. interface gigabitethernet0/0
ip address 10.0.1.1 255.255.255.0
ip ospf priority 255
C. interface gigabitethernet0/0
ip address 10.0.0.34 255.255.255.248
ip ospf priority 0
_D. interface gigabitethernet0/0
ip address 10.0.0.34 255.255.255.224
ip ospf priority 100_

Question 10.17: Refer to the exhibit. R1 has just received a packet from host A that is destined to host B. Which route in the routing table is used by R1 to reach host B?
A. 10.10.13.0/25[1/0] via 10.10.10.2
B. 10.10.13.0/25[110/2] via 10.10.10.6
C. 10.10.13.0/25[110/2] via 10.10.10.2
_D. 10.10.13.0/25[108/0] via 10.10.10.10_

Question 10.18: Refer to the exhibit. The given Windows PC is requesting the IP address of the host at www.cisco.com. To which IP address is the request sent?
A. 192.168.1.226
_B. 192.168.1.253_
C. 192.168.1.100
D. 192.168.1.254

Question 10.19: What is a feature of TFTP?
A. provides secure data transfer
B. relies on the well-known TCP port 20 to transmit data
C. uses two separate connections for control and data traffic
_D. offers anonymous user login ability_

Question 10.20: Which access point mode relies on a centralized controller tor management, roaming, and SSID configuration?
A. repeater mode
B. bridge mode
_C. lightweight mode_
D. autonomous mode

Question 10.21: Which command creates a static NAT binding for a PC address of 10.1.1.1 to the public routable address 209.165.200.225 assigned to the PC?
A. R1(config)#ip nat outside source static 209.165.200.225 10.1.1.1
B. R1(config)#ip nat inside source static 209.165.200.225 10.1.1.1
C. R1(config)#ip nat outside source static 10.1.1.1 209.165.200.225
_D. R1(config)#ip nat inside source static 10.1.1.1 209.165.200.225_

Question 10.22: Refer to the exhibit. Packets received by the router from BGP enter via a serial interface at 209.165.201.1. Each route is present within the routing table. Which interface is used to forward traffic with a destination IP of 10.1.1.19?
_A. F0/0_
B. F0/1
C. F0/3
D. F0/4

Question 10.23: Which two REST API status-code classes represent errors? (Choose two)
A. 1XX
B. 2XX
C. 3XX
_D. 4XX_
_E. 5XX_

Question 10.24: An engineer has configured the domain name, user name, and password on the local router. What is the next step to complete the configuration for a Secure Shell access RSA key?
_A. crypto key generate rsa_
B. crypto key pubkey-chain rsa
C. crypto key import rsa pem
D. crypto key zeroize rsa

Question 10.25
Which encryption method is used by WPA3?
A. TKIP
B. SAE
C. PSK
_D. AES_

Question 10.26: An engineer is configuring remote access to a router from IP subnet 10.139.58.0/28. The domain name, crypto keys, and SSH have been configured. Which configuration enables the traffic on the destination router?
A. interface FastEthernet0/0
ip address 10.122.49.1 255.255.255.248
ip access-group 10 in
ip access-list standard 10
permit udp 10.139.58.0 0.0.0.7 host 10.122.49.1 eq 22
B. interface FastEthernet0/0
ip address 10.122.49.1 255.255.255.252
ip access-group 105 in
ip access-list standard 105
permit tcp 10.139.58.0 0.0.0.7 eq 22 host 10.122.49.1
_C. interface FastEthernet0/0
ip address 10.122.49.1 255.255.255.252
ip access-group 110 in
ip access-list extended 110
permit tcp 10.139.58.0 0.0.0.15 host 10.122.49.1 eq 22_
D. interface FastEthernet0/0
ip address 10.122.49.1 255.255.255.240
access-group 120 in
ip access-list extended 120
permit tcp 10.139.58.0 255.255.255.248 any eq 22

Question 10.27: What is a function of spine-and-leaf architecture?
A. mitigates oversubscription by adding a layer of leaf switches
B. limits payload size of traffic within the leaf layer
_C. offers predictable latency of the traffic path between end devices_
D. exclusively sends multicast traffic between servers that are directly connected to the spine

Question 10.28: What differentiates device management enabled by Cisco DNA Center from traditional campus device management?
A. CLI-oriented device
_B. centralized_
C. per-device
D. device-by-device hands-on

Question 10.29: Refer to the exhibit. Router R1 is added to the network and configured with the 10.0.0.64/26 and 10.0.20.0/24 subnets. However, traffic destined for the LAN on R3 is not accessible. Which command when executed on R1 defines a static route to reach the R3 LAN?
A. ip route 10.0.15.0 255.255.255.0 10.0.20.1
B. ip route 10.0.15.0 255.255.255.192 10.0.20.1
C. ip route 10.0.0.64 255.255.255.192 10.0.20.3
_D. ip route 10.0.15.0 255.255.255.0 10.0.20.3_

Question 10.31: What is a zero-day exploit?
A. It is when an attacker inserts malicious code into a SQL server.
_B. It is when a new network vulnerability is discovered before a fix is available._
C. It is when the perpetrator inserts itself in a conversation between two parties and captures or alters data.
D. It is when the network is saturated with malicious traffic that overloads resources and bandwidth.

Question 10.32: Refer to the exhibit. After a recent security breach and a RADIUS failure, an engineer must secure the console port of each enterprise router with a local username and password. Which configuration must the engineer apply to accomplish this task?
A. Option A
_B. Option B_
C. Option C
D. Option D

Question 10.33: Which command implies the use of SNMPv3?
A. snmp-server community
B. snmp-server host
C. snmp-server enable traps
_D. snmp-server user_

Question 10.34: Refer to the exhibit. Clients on the WLAN are required to use 802.11r. What action must be taken to meet the requirement?
A. Enable CCKM under Authentication Key Management
B. Under Protected Management Frames, set the PMF option to Required
_C. Set the Fast Transition option to Enable and enable FT 802.1X under Authentication Key Management_
D. Set the Fast Transition option and the WPA gtk-randomize State to disable

Question 10.35: When a switch receives a frame for an unknown destination MAC address, how is the frame handled?
A. broadcast to all ports on the switch
_B. flooded to all ports except the origination port_
C. forwarded to the first available port
D. inspected and dropped by the switch

Question 10.36: What is the default port-security behavior on a trunk link?
A. It causes a network loop when a violation occurs.
B. It disables the native VLAN configuration as soon as port security is enabled.
_C. It places the port in the err-disabled state if it learns more than one MAC address._
D. It places the port in the err-disabled state after 10 MAC addresses are statically configured.

Question 10.37: Refer to the exhibit. How many objects are present in the given JSON-encoded data?
A. one
B. four
C. seven
_D. nine_

Question 10.38: What are two examples of multifactor authentication? (Choose two)
A. single sign-on
_B. unique user knowledge_
C. passwords that expire
_D. soft tokens_
E. shared password responsibility

Question 10.39: Refer to the exhibit. What is the subnet mask of the route to the 10.10.13.160 prefix?
A. 255.255.255.240
B. 255.255.255.128
C. 255.255.248.0
_D. 255.255.255.248_

Question 10.40: Refer to the exhibit. Routers R1, R2, and R3 use a protocol to identify their neighbors’ IP addresses, hardware platforms, and software versions. A network engineer must configure R2 to avoid sharing any neighbor information with R3, and maintain its relationship with R1. What action meets this requirement?
A. Configure the no lldp run command globally
B. Configure the no lldp receive command on g0/1
C. Configure the no cdp run command globally
_D. Configure the no cdp enable command on g0/2_

Question 10.41: What is a function of an endpoint?
A. It passes unicast communication between hosts in a network
_B. It is used directly by an individual user to access network services_
C. It provides security between trusted and untrusted sections of the network
D. It transmits broadcast traffic between devices in the same VLAN

Question 10.42
Refer to the exhibit. A network engineer started to configure port security on a new switch. These requirements must be met:

- MAC addresses must be learned dynamically.
- Log messages must be generated without disabling the interface when unwanted traffic is seen.
  Which two commands must be configured to complete this task? (Choose two)
  A. SW(config-if)#switchport port-security mac-address 0010.7B84.45E6
  _B. SW(config-if)#switchport port-security maximum 2_
  C. SW(config-if)#switchport port-security mac-address sticky
  D. SW(config-if)#switchport port-security violation shutdown
  _E. SW(config-if)#switchport port-security violation restrict_

Question 10.43: What are two features of the DHCP relay agent? (Choose two)
_A. minimizes the necessary number of DHCP servers_
B. assigns DNS locally and then forwards request to DHCP server
_C. is configured under the Layer 3 interface of a router on the client subnet_
D. allows only MAC-to-IP reservations to determine the local subnet of a client
E. permits one IP helper command under an individual Layer 3 interface

Question 10.44: Refer to the exhibit. A network engineer must configure router R1 with a host route to the server. Which command must the engineer configure?
_A. R1(config)#ip route 10.10.10.10 255.255.255.255 192.168.0.2_
B. R1(config)#ip route 10.10.10.0 255.255.255.0 192.168.0.2
C. R1(config)#ip route 0.0.0.0 0.0.0.0 192.168.0.2
D. R1(config)#ip route 192.168.0.2 255.255.255.255 10.10.10.10

Question 10.45: In a cloud-computing environment, what is rapid elasticity?
_A. automatic adjustment of capacity based on need_
B. control and monitoring of resource consumption by the tenant
C. pooling resources in a multitenant model based on need
D. self-service of computing resources by the tenant

Question 10.47: What must be considered for a locally switched FlexConnect AP if the VLANs that are used by the AP and client access are different?
A. The APs must be connected to the switch with multiple links in LAG mode.
B. The native VLAN must match the management VLAN of the AP.
_C. The switch port mode must be set to trunk._
D. IEEE 802.1Q trunking must be disabled on the switch port.

Question 10.48: Which command configures the Cisco WLC to prevent a serial session with the WLC CLI from being automatically logged out?
A. config sessions maxsessions 0
B. config serial timeout 9600
_C. config serial timeout 0_
D. config sessions timeout 0

Question 10.50: Refer to the exhibit. An architect is managing a wireless network with APs from several branch offices connecting to the WLC in the data center. There is a new requirement for a single WLAN to process the client data traffic without sending it to the WLC. Which action must be taken to complete the request?
A. Enable local HTTP profiling
_B. Enable FlexConnect Local Switching_
C. Enable local DHCP Profiling
D. Enable Disassociation Imminent

Question 10.51: What is a function of MAC address learning?
A. It is disabled by default on all interfaces connected to trunks
B. It increases security on the management VLAN
_C. It is enabled by default on all VLANs and interfaces_
D. It increases the potential for MAC address flooding

Question 10.52: A Cisco engineer at a new branch office is configuring a wireless network with access points that connect to a controller that is based at corporate headquarters. Wireless client traffic must terminate at the branch office and access-point survivability is required in the event of a WAN outage. Which access point mode must be selected?
A. Lightweight with local switching disabled
B. Local with AP fallback enabled
C. OfficeExtend with high availability disabled
_D. FlexConnect with local switching enabled_

Question 10.53: What is an advantage of using auto mode versus static mode for power allocation when an access point is connected to a PoE switch port?
A. The default level is used for the access point
_B. It detects the device is a powered device_
C. All four pairs of the cable are used
D. Power policing is enabled at the same time

Question 10.56: Refer to the exhibit. After configuring a new static route on the CPE, the engineer entered this series of commands to verify that the new configuration is operating normally. When is the static default route installed into the routing table?
_A. when the default route learned over external BGP becomes invalid_
B. when 203.0.113.1 is no longer reachable as a next hop
C. when the default route learned over external BGP changes its next hop
D. when a route to 203.0.113.1 is learned via BGP

Question 10.57: Refer to the exhibit. Wireless LAN access must be set up to force all clients from the NA WLAN to authenticate against the local database. The WLAN is configured for local EAP authentication. The time that users access the network must not be limited. Which action completes this configuration?
A. Check the Guest User Role check box
B. Clear the Lifetime (seconds) value
C. Set the Lifetime (seconds) value to 0
_D. Uncheck the Guest User check box_

Question 10.58: Which remote access protocol provides unsecured remote CLI access?
_A. Telnet_
B. SSH
C. console
D. Bash

Question 10.59: Refer to the exhibit. An engineer must configure the interface that connects to PC1 and secure it in a way that only PC1 is allowed to use the port. No VLAN tagging can be used except for a voice VLAN. Which command sequence must be entered to configure the switch?
A. SW1(config-if)#switchport mode nonegotiate
SW1(config-if)#switchport port-security
SW1(config-if)#switchport port-security maximum 1
_B. SW1(config-if)#switchport mode access
SW1(config-if)#switchport port-security
SW1(config-if)#switchport port-security mac-address 0050.7966.6800_
C. SW1(config-if)#switchport mode dynamic desirable
SW1(config-if)#switchport port-security mac-address 0050.7966.6800
SW1 (config-if)#switchport port-security mac-address sticky
D. SW1(config-if)#switchport mode dynamic auto
SW1(config-if)#switchport port-security
SW1(config-if)#switchport port-security violation restrict

Question 10.62: Which two functions does a WLC perform in the lightweight access-point architecture that an AP performs independently in an autonomous architecture? (Choose two)
_A. handling the association, authentication, and roaming of wireless clients_
B. encrypting and decrypting traffic that uses the WAP protocol family
C. preventing collisions between wireless clients on the same RF channel
_D. managing RF channels, including transmission power_
E. sending and processing beacon frames

Question 10.63: Refer to the exhibit. How must OSPF be configured on the GigabitEthernet0/0 interface of the neighbor device to achieve the desired neighbor relationship?
A. Router(config)#interface GigabitEthernet 0/0
Router(config-if)#ip ospf cost 5
B. Router(config)#interface GigabitEthernet 0/0
Router(config-if)#ip ospf 1 area 2
_C. Router(config)#interface GigabitEthernet 0/0
Router(config-if)#ip ospf network point-to-point_
D. Router(config)#interface GigabitEthernet 0/0
Router(config-if)#ip ospf priority 1

Question 10.64: What causes a port to be placed in the err-disabled state?
A. latency
B. nothing plugged into the port
C. shutdown command issued on the port
_D. link flapping_

Question 10.65: Which function forwards frames to ports that have a matching destination MAC address?
A. frame pushing
B. frame filtering
C. frame flooding
_D. frame switching_

Question 10.66: Refer to the exhibit. The SW1 and SW2 Gi0/0 ports have been preconfigured. An engineer is given these requirements:

- Allow all PCs to communicate with each other at Layer 3.
- Configure untagged traffic to use VLAN 5.
- Disable VLAN 1 from being used.
  Which configuration set meets these requirements?
  A. Option A
  B. Option B
  C. Option C
  _D. Option D_

Question 10.67: Refer to the exhibit. What is the cause of the issue?
A. STP
B. shutdown command
C. port security
_D. wrong cable type_

Question 10.69: Refer to the exhibit. A network engineer must configure the link with these requirements:

- Consume as few IP addresses as possible.
- Leave at least two additional useable IP addresses for future growth.
  Which set of configurations must be applied?
  _A. R1(config-if)#ip address 10.10.10.1 255.255.255.248
  R2(config-if)#ip address 10.10.10.4 255.255.255.248_
  B. R1(config-if)#ip address 10.10.10.1 255.255.255.240
  R2(config-if)#ip address 10.10.10.12 255.255.255.240
  C. R1 (config-if)#ip address 10.10.10.1 255.255.255.252
  R2(config-if)#ip address 10.10.10.2 255.255.255.252
  D. R1 (config-if)#ip address 10.10.10.1 255.255.255.0
  R2(config-if)#ip address 10.10.10.5 255.255.255.0

Question 10.70: What is a function of Layer 3 switches?
_A. They route traffic between devices in different VLANs._
B. They transmit broadcast traffic when operating in Layer 3 mode exclusively.
C. They forward Ethernet frames between VLANs using only MAC addresses.
D. They move frames between endpoints limited to IP addresses.

Question 10.72: Refer to the exhibit. Which router or router group are NTP clients?
_A. R1, R2, and R3_
B. R1
C. R2 and R3
D. R1, R3, and R4

Question 10.73: A network engineer is replacing the switches that belong to a managed-services client with new Cisco Catalyst switches. The new switches will be configured for updated security standards, including replacing Telnet services with encrypted connections and doubling the modulus size from 1024. Which two commands must the engineer configure on the new switches? (Choose two)
_A. transport input ssh_
B. transport input all
C. crypto key generate rsa general-keys modulus 1024
D. crypto key generate rsa usage-keys
_E. crypto key generate rsa modulus 2048_

Question 10.74: Refer to the exhibit. An engineer is checking the routing table in the main router to identify the path to a server on the network. Which route does the router use to reach the server at 192.168.2.2?
A. S 192.168.2.0/28 [1/0] via 10.1.1.1
B. S 192.168.1.0/30 [1/0] via 10.1.1.1
C. S 192.168.0.0/20 [1/0] via 10.1.1.1
_D. S 192.168.2.0/29 [1/0] via 10.1.1.1_

Question 10.75: Refer to the exhibit. In which structure does the word “warning” directly reside?
_A. array_
B. object
C. Boolean
D. string

Question 10.76: Refer to the exhibit. After applying this configuration to router R1, a network engineer is verifying the implementation. If all links are operating normally, and the engineer sends a series of packets from PC1 to PC3, how are the packets routed?
_A. They are routed to 172.16.20.2._
B. They are distributed sent round robin to interfaces S0/0/0 and S0/0/1.
C. They are routed to 192.168.100.2.
D. They are routed to 10.0.0.2.

Question 10.77: A network administrator plans an update to the Wi-Fi networks in multiple branch offices. Each location is configured with an SSID called “Office”. The administrator wants every user who connects to the SSID at any location to have the same access level. What must be set the same on each network to meet the requirement?
A. radio policy
_B. security policies_
C. NAS-ID configuration
D. profile name

Question 10.78: Refer to the exhibit. Which command set configures ROUTER-1 to allow Internet access for users on the 192.168.1.0/24 subnet while using 209.165.202.129 for Port Address Translation?
A. ip nat pool CCNA 192.168.0.0 192.168.1.255 netmask 255.255.255.0
access-list 10 permit 192.168.0.0 0.0.0.255
ip nat inside source list 10 pool CCNA overload
B. ip nat pool CCNA 209.165.202.129 209.165.202.129 netmask 255.255.255.255
access-list 10 permit 192.168.1.0 255.255.255.0
ip nat inside source list 10 pool CCNA overload
C. ip nat pool CCNA 192.168.0.0 192.168.1.255 netmask 255.255.255.0
access-list 10 permit 192.168.0.0 255.255.255.0
ip nat inside source list 10 pool CCNA overload
_D. ip nat pool CCNA 209.165.202.129 209.165.202.129 netmask 255.255.255.255
access-list 10 permit 192.168.1.0 0.0.0.255
ip nat inside source list 10 pool CCNA overload_

Question 10.79: Refer to the exhibit. A multivendor network exists and the company is implementing VoIP over the network for the first time. Which configuration is needed to implement the neighbor discovery protocol on the interface and allow it to remain off for the remaining interfaces?
A. SW1(config)#no cdp enable
SW1 (config)#interface gigabitethernet1/0/1
SW1(config-if)#cdp run
B. SW1(config)#lldp enable
SW1(config)#interface gigabitethernet1/0/1
SW1(config-if)#lldp run
C. SW1(config)#lldp run
SW1 (config)#interface gigabitethernet1/0/1
SW1(config-if)#lldp enable
_D. SW1(config)#no cdp run
SW1(config)#interface gigabitethernet1/0/1
SW1(config-if)#lldp transmit
SW1(config-if)#lldp receive_

Question 10.80: A network architect is considering whether to implement Cisco DNA Center to deploy devices on a new network. The organization is focused on reducing the time it currently takes to deploy devices in a traditional campus design. For which reason would Cisco DNA Center be more appropriate than traditional management options?
A. Cisco DNA Center provides zero-touch provisioning to third-party devices.
_B. Cisco DNA Center supports deployment with a single pane of glass._
C. Cisco DNA Center minimizes the level of syslog output when reporting on Cisco devices.
D. Cisco DNA Center reduces the need for analytics on third-party access points and devices.

Question 10.81: How do TCP and UDP fit into a query-response model?
A. TCP avoids using sequencing, and UDP avoids using acknowledgments.
B. TCP uses error detection for packets, and UDP uses error recovery.
_C. TCP establishes a connection prior to sending data, and UDP sends immediately._
D. TCP encourages out-of-order packet delivery, and UDP prevents re-ordering.

Question 10.83: Which interface type enables an application running on a client to send data over an IP network to a server?
A. southbound interface
_B. application programming interface_
C. northbound interface
D. Representational State Transfer application programming interface

Question 10.84: Refer to the exhibit. A network administrator must permit traffic from the 10.10.0.0/24 subnet to the WAN on interface Serial0. What is the effect of the configuration as the administrator applies the command?
A. The sourced traffic from IP range 10.0.0.0 – 10.0.0.255 is allowed on Serial0.
B. The permit command fails and returns an error code.
_C. The router fails to apply the access list to the interface._
D. The router accepts all incoming traffic to Serial0 with the last octet of the source IP set to 0.

Question 10.85: Refer to the exhibit. A packet sourced from 10.10.10.1 is destined for 10.10.8.14. What is the subnet mask of the destination route?
A. 255.255.254.0
_B. 255.255.255.240_
C. 255.255.255.248
D. 255.255.255.252

Question 10.86
What are two reasons to implement IPv4 private addressing on a network? (Choose two)
A. to expand the routing table on the router
B. to facilitate renumbering when merging networks
C. to enable internal applications to treat the private IPv4 addresses as unique
_D. to conserve global unique IPv4 addresses_
_E. to provide protection from external denial-of-service attacks_

Question 10.87: Refer to the exhibit. A guest WLAN must be created that prompts the client for a username and password on the local web page of the WLC. Which two actions must be performed on the Layer 2 tab before enabling the Authentication option on the Layer 3 tab? (Choose two)
_A. Uncheck the MAC Filtering option check box._
B. Set the Security Type option to Personal.
C. Change the WPA Encryption option from TKIP to CCMP128(AES).
_D. Set the Layer 2 Security option to None._
E. Uncheck the WPA Policy option check box, and check the WPA2 Policy option check box.

Question 10.88: Which script paradigm does Puppet use?
_A. manifests and modules_
B. strings and marionettes
C. recipes and cookbooks
D. playbooks and roles

Question 10.89: Which IPsec transport mode encrypts the IP header and the payload?
A. pipe
_B. tunnel_
C. control
D. transport

Question 10.90: What does WPA3 provide in wireless networking?
A. increased security and requirement of a complex configuration
B. backward compatibility with WPA and WPA2
C. optional Protected Management Frame negotiation
_D. safeguards against brute force attacks with SAE_

Question 10.91: Refer to the exhibit. With which metric does router R1 learn the route to host 172.16.0.202?
A. 0
B. 110
_C. 32445_
D. 3184439

Question 10.92: Which two actions are taken as the result of traffic policing? (Choose two)
A. bursting
B. fragmentation
_C. dropping_
D. remarking
_E. buffering_

Question 10.93: Refer to the exhibit. Which IP route command created the best path for a packet destined for 10.10.10.3?
A. ip route 10.0.0.0 255.0.0.0 g0/0
B. ip route 10.10.10.1 255.255.255.255 g0/0
_C. ip route 10.10.10.0 255.255.255.240 g0/0_
D. ip route 10.10.0.0 255.255.252.0 g0/0

Question 10.94: A WLC sends alarms about a rogue AP, and the network administrator verifies that the alarms are caused by a legitimate autonomous AP. How must the alarms be stopped for the MAC address of the AP?
A. Place the AP into manual containment.
B. Remove the AP from WLC management.
C. Manually remove the AP from Pending state.
_D. Set the AP Class Type to Friendly._

Question 10.95: Which security method is used to prevent man-in-the-middle attack?
A. authorization
B. authentication
_C. anti-replay_
D. accounting

## Part 11

Question 11.1: What is the function of a northbound API in a network architecture that separates the control and application layers?
A. It upgrades software and restores files.
B. It relies on global provisioning and configuration.
C. It supports distributed processing for configuration.
_D. It provides a path between an SDN controller and network applications._

Question 11.4: What is a purpose of traffic shaping?
A. It enables dynamic flow identification.
B. It enables policy-based routing.
C. It provides best-effort service.
_D. It limits bandwidth usage._

Question 11.6: Which type of port is used to connect to the wired network when an autonomous AP maps two VLANs to its WLANs?
A. LAG
B. EtherChannel
_C. trunk_
D. access

Question 11.7: Refer to the exhibit. The network engineer is configuring router R2 as a replacement router on the network. After the initial configuration is applied it is determined that R2 failed to show R1 as a neighbor. Which configuration must be applied to R2 to complete the OSPF configuration and enable it to establish the neighbor relationship with R1?
_A. Option A_
B. Option B
C. Option C
D. Option D

Question 11.8: What is a characteristics of a collapsed-core network topology?
_A. It allows the core and distribution layers to run as a single combined layer._
B. It enables the core and access layers to connect to one logical distribution device over an EtherChannel.
C. It enables all workstations in a SOHO environment to connect on a single switch with internet access.
D. It allows wireless devices to connect directly to the core layer, which enables faster data transmission.

Question 11.9: What is the purpose of configuring different levels of syslog for different devices on the network?
A. to rate-limit messages for different severity levels from each device
_B. to set the severity of syslog messages from each device_
C. to identify the source from which each syslog message originated
D. to control the number of syslog messages from different devices that are stored locally

Question 11.10: Which interface enables communication between a program on the controller and a program on the networking devices?
A. northbound interface
B. software virtual interface
_C. southbound interface_
D. tunnel interface

Question 11.12: What is the primary purpose of private address space?
_A. conserve globally unique address space_
B. simplify the addressing in the network
C. limit the number of nodes reachable via the Internet
D. reduce network complexity

Question 11.13: What is a reason to configure a trunk port that connects to a WLC distribution port?
A. Eliminate redundancy with a link failure in the data path.
_B. Allow multiple VLAN to be used in the data path._
C. Provide redundancy if there is a link failure for out-of-band management.
D. Permit multiple VLANs to provide out-of-band management.

Question 11.14: Refer to the exhibit. Traffic from R1 to the 10.10.2.0/24 subnet uses 192.168.1.2 as its next hop. An network engineer wants to update the R1 configuration so that traffic with destination 10.10.2.1 passes through router R3, and all other traffic to the 10.10.2.0/24 subnet passes through R2. Which command must be used?
A. ip route 10.10.2.1 255.255.255.255 192.168.1.4 115
B. ip route 10.10.2.0 255.255.255.0 192.168.1.4 100
C. ip route 10.10.2.0 255.255.255.0 192.168.1.4 115
_D. ip route 10.10.2.1 255.255.255.255 192.168.1.4 100_

Question 11.15: Which cipher is supported for wireless encryption only with the WPA2 standard?
A. AES256
_B. AES_
C. RC4
D. SHA

Question 11.16: Refer to the exhibit. Which entry is the longest prefix match for host IP address 192.168.10.5?
A. 1
_B. 2_
C. 3
D. 4

Question 11.17: Which two features introduced in SNMPv2 provide the ability to retrieve large amounts of data in one request? (Choose two)
A. Get
B. GetNext
C. Set
_D. GetBulk_
_E. Inform_

Question 11.18:Refer to the exhibit. A packet sourced from 172.18.33.2 is destined for 172.18.32.38. Where does the router forward the packet?
_A. GigabitEthernet0/0_
B. Loopback0
C. 10.1.1.1
D. 10.1.1.3

Question 11.20: Refer to the exhibit. A newly configured PC fails to connect to the internet using TCP port 80 to www.cisco.com. Which setting must be modified for the connection to work?
_A. Subnet Mask_
B. DNS Servers
C. Default Gateway
D. DHCP Server

Question 11.21: What does a switch do when it receives a frame whose destination MAC address is missing from the MAC address table?
_A. It floods the frame unchanged across all remaining ports in the incoming VLAN._
B. It appends the table with a static entry for the MAC and shuts down the port.
C. It updates the CAM table with the destination MAC address of the frame.
D. It changes the checksum of the frame to a value that indicates an invalid frame.

Question 11.22:Which enhancement is implemented in WPA3?
A. applies 802.1x authentication
B. uses TKIP
C. employs PKI to identify access points
_D. protects against brute force attacks_

Question 11.23: Which type of address is shared by routers in a HSRP implementation and used by hosts on the subnet as their default gateway address?
A. multicast address
B. loopback IP address
_C. virtual IP address_
D. broadcast address

Question 11.24: What are two reasons a switch experiences frame flooding? (Choose two)
A. A defective patch cable is connected to the switch port
_B. Topology changes are occurring within spanning-tree_
C. An aged MAC table entry is causing excessive updates
D. Port-security is configured globally
_E. The forwarding table has overflowed_

Question 11.25: Why is TCP desired over UDP for application that require extensive error checking, such as HTTPS?
_A. UDP operates without acknowledgments, and TCP sends an acknowledgment for every packet received._
B. UDP reliably guarantees delivery of all packets, and TCP drops packets under heavy load.
C. UDP uses flow control mechanisms for the delivery of packets, and TCP uses congestion control for efficient packet delivery.
D. UDP uses sequencing data for packets to arrive in order, and TCP offers the capability to receive packets in random order.

Question 11.26: To improve corporate security, an organization is planning to implement badge authentication to limit access to the data center. Which element of a security program is being deployed?
A. user training
B. user awareness
C. vulnerability verification
_D. physical access control_

Question 11.28: The address block 192.168.32.0/24 must be subnetted into smaller networks. The engineer must meet these requirements:

- Create 8 new subnets
- Each subnet must accommodate 30 hosts
- Interface VLAN 10 must use the last usable IP in the first new subnet
- A Layer 3 interface is used
  Which configuration must be applied to the interface?
  A. no switchport mode access
  ip address 192.168.32.62 255.255.255.240
  B. switchport
  ip address 192.168.32.65 255.255.255.240
  C. no switchport mode trunk
  ip address 192.168.32.97 255.255.255.224
  _D. no switchport
  ip address 192.168.32.30 255.255.255.224_

Question 11.29: Refer to the exhibit. How many JSON objects are presented?
_A. 1_
B. 2
C. 3
D. 4

Question 11.30: Refer to the exhibit. PC1 regularly sends 1800 Mbps of traffic to the server. A network engineer needs to configure the EtherChannel to disable Port Channel 1 between SW1 and SW2 when the Ge0/0 and Ge0/1 ports on SW2 go down. Which configuration must the engineer apply to the switch?
A. SW2#configure terminal
SW2(config)# interface port-channel 1
SW2(config-if)#lacp port-priority 32000
B. SW2#configure terminal
SW2(config)#interface port-channel 1
SW2(config-if)#lacp max-bundle 2
C. SW2#configure terminal
SW2(config)#lacp system-priority 32000
_D. SW2#configure terminal
SW2(config)#interface port-channel 1
SW2(config-if)#port-channel min-links 2_

Question 11.32: Refer the exhibit. What is the cause of poor performance on router R19?
A. excessive collisions
B. speed and duplex mismatch
_C. port oversubscription_
D. excessive CRC errors

Question 11.33: An engineer is configuring a switch port that is connected to a VoIP handset. Which command must the engineer configure to enable port security with a manually assigned MAC address of abcd.abcd.abcd on voice VLAN 4?
A. switchport port-security mac-address abcd.abcd.abcd
B. switchport port-security mac-address abcd.abcd.abcd vlan 4
C. switchport port-security mac-address sticky abcd.abcd.abcd vlan 4
_D. switchport port-security mac-address abcd.abcd.abcd vlan voice_

Question 11.35: How does encryption protect the wireless network?
A. via integrity checks to identify wireless forgery attacks in the frame
B. via specific ciphers to detect and prevent zero-day network attacks
_C. via an algorithm to change wireless data so that only the access point and client understand it_
D. via a policy to prevent unauthorized users from communicating on the wireless network

Question 11.36: Which device segregates a network into separate zones that have their own security policies?
A. IPS
_B. firewall_
C. access point
D. switch

Question 11.37: What is a specification for SSIDS?
A. They are a Cisco proprietary security feature.
B. They must include one number and one letter.
C. They define the VLAN on a switch.
_D. They are case sensitive._

Question 11.38: Refer to the exhibit. An engineer is configuring a new Cisco switch NewSW, to replace SW2. The details have been provided:

- Switches SW1 and SW2 are third-party devices without support for trunk ports
- The existing connections must be maintained between PC1 PC2 and PC3
- Allow the switch to pass traffic from future VLAN 10. Which configuration must be applied?
  _A. Option A_
  B. Option B
  C. Option C
  D. Option D

Question 11.39: What is a reason to implement IPv4 private addressing?
_A. Reduce the risk of a network security breach_
B. Comply with PCI regulations
C. Comply with local law
D. Reduce the size of the forwarding table on network routers

Question 11.40: Which is a fact related to FTP?
A. It uses block numbers to identify and mitigate data-transfer errors
B. It always operates without user authentication
C. It relies on the well-known UDP port 69.
_D. It uses two separate connections for control and data traffic_

Question 11.41: Which two protocols are used by an administrator for authentication and configuration on access points? (Choose two)
A. Kerberos
B. 802.1Q
_C. 802.1x_
D. TACACS+
_E. RADIUS_

Question 11.42: Refer to the exhibit. What is the next step to complete the implementation for the partial NAT configuration shown?
A. Reconfigure the static NAT entries that overlap the NAT pool
_B. Configure the NAT outside interface_
C. Modify the access list for the internal network on e0/1
D. Apply the ACL to the pool configuration

Question 11.43: Which type of IPv4 address type helps to conserve the globally unique address classes?
A. multicast
_B. private_
C. loopback
D. public

Question 11.48: How does the router manage traffic to 192.168.12.16?
_A. It selects the RIP route because it has the longest prefix inclusive of the destination address._
B. It load-balances traffic between all three routes.
C. It chooses the OSPF route because it has the longest prefix inclusive of the destination address.
D. It chooses the EIGRP route because it has the lowest administrative distance.

Question 11.51: What is the benefit of using private IPv4 addressing?
A. to provide reliable connectivity between like devices
B. to enable secure connectivity over the Internet
_C. to shield internal network devices from external access_
D. to be routable over an external network

Question 11.52: Which QoS feature drops traffic that exceeds the committed access rate?
A. weighted fair queuing
B. FIFO
C. shaping
_D. policing_

Question 11.53: Two switches have been implemented and all interfaces are at the default configuration level. A trunk link must be implemented between two switches with these requirements:

- using an industry-standard trunking protocol
- permitting VLANs 1-10 and denying other VLANs
  How must the interconnecting ports be configured?
  A. switchport mode trunk
  switchport trunk allowed vlans 1-10
  switchport trunk native vlan 11
  _B. switchport mode trunk
  switchport trunk encapsulation dot1q
  switchport trunk allowed vlans 1-10_
  C. switchport mode dynamic desirable
  channel-group 1 mode desirable
  switchport trunk encapsulation isl
  switchport trunk allowed vlan except 11-4094
  D. switchport mode dynamic
  channel-protocol lacp
  switchport trunk allowed vlans 1-10

Question 11.54: Refer to the exhibit. A network engineer is configuring a WLAN to connect with the 172.16.10.0/24 network on VLAN 20. The engineer wants to limit the number of devices that connect to the WLAN on the USERWL SSID to 125. Which configuration must the engineer perform on the WLC?
_A. In the WLAN configuration, set the Maximum Allowed Clients value to 125._
B. In the Advanced configuration, set the DTIM value to 125.
C. In the Controller IPv6 configuration, set the Throttle value to 125.
D. In the Management Software activation configuration, set the Clients value to 125.

Question 11.55: Why would a network administrator choose to implement automation in a network environment?
A. to centralize device information storage
_B. to simplify the process of maintaining a consistent configuration state across all devices_
C. to deploy the management plane separately from the rest of the network
D. to implement centralized user account management

Question 11.56: When deploying a new network that includes both Cisco and third-party network devices, which redundancy protocol avoids the interruption of network traffic if the default gateway router fails?
A. FHRP
_B. VRRP_
C. HSRP
D. GLBP

Question 11.57: Refer to the exhibit. A network administrator configures the CPE to provide internet access to the company headquarters. Traffic must be load-balanced via ISP1 and ISP2 to ensure redundancy. Which two command sets must be configured on the CPE router? (Choose two)
A. ip route 0.0.0.0 0.0.0.0 198.51.100.1
ip route 0.0.0.0 0.0.0.0 203.0.113.1 2
_B. ip route 0.0.0.0 128.0.0.0 198.51.100.1
ip route 128.0.0.0 128.0.0.0 203.0.113.1
ip route 0.0.0.0 0.0.0.0 198.51.100.1
ip route 0.0.0.0 0.0.0.0 203.0.113.1_
C. ip route 0.0.0.0 128.0.0.0 198.51.100.1
ip route 128.0.0.0 128.0.0.0 203.0.113.1
D. ip route 0.0.0.0 0.0.0.0 198.51.100.1 255
ip route 0.0.0.0 0.0.0.0 203.0.113.1 255
ip route 128.0.0.0 128.0.0.0 203.0.113.1
_E. ip route 0.0.0.0 0.0.0.0 198.51.100.1
ip route 0.0.0.0 0.0.0.0 203.0.113.1_

Question 11.58: Refer to the exhibit. A network administrator is configuring a router for user access via SSH. The service-password encryption command has been issued. The configuration must meet these requirements:

- Create the username as CCUser.
- Create the password as NA!2$cc.
- Encrypt the user password.
  What must be configured to meet the requirements?
  A. username CCUser password NA!2$cc
enable password level 5 NA!2$cc
  B. username CCUser privilege 15 password NA!2$cc
enable secret 0 NA!2$cc
  _C. username CCUser secret NA!2$cc_
  D. username CCUser privilege 10 password NA!2$cc

Question 11.60: Refer to the exhibit. What is the subnet mask for route 172.16.4.0?
A. 255.255.255.192
_B. 255.255.248.0_
C. 255.255.254.0
D. 255.255.240.0

Question 11.61: Which interface or port on the WLC is the default for in-band device administration and communications between the controller and access points?
A. virtual interface
_B. management interface_
C. console port
D. service port

Question 11.63: A company has each office using wireless access with multiple SSIDs while limiting roaming capabilities, covering different locations on the internal office LAN, guest networks, and BYOD access for employees. Which change must be enabled to improve the customer experience during SSID changes?
A. Assisted Roaming Prediction Optimization
B. Fast Transition
C. Neighbor List Dual Band
_D. Fast SSID Change_

Question 11.64: Refer to the exhibit. The EtherChannel is configured with a speed of 1000 and duplex as full on both ends of channel group 1. What is the next step to configure the channel on switch A to respond to but not initiate LACP communication?
A. interface range gigabitethernet0/0/0 -15
channel-group 1 mode desirable
B. interface range gigabitethernet0/0/0 -15
channel-group 1 mode on
C. interface port-channel 1
channel-group 1 mode auto
_D. interface port-channel 1
channel-group 1 mode passive_

Question 11.65: Which two VPN technologies are recommended by Cisco for multiple branch offices and large-scale deployments? (Choose two)
A. IPsec remote access
B. site-to-site VPN
C. clientless VPN
_D. GETVPN_
_E. DMVPN_

Question 11.66: Refer to the exhibit. How many arrays are present in the JSON data?
A. one
_B. three_
C. six
D. nine

Question 11.67: Refer to the exhibit. An administrator received a call from a branch office regarding poor application performance hosted at the headquarters. Ethernet 1 is connected between Router1 and the LAN switch. What identifies the issue?
_A. There is a duplex mismatch._
B. The MTU is not set to the default value.
C. The link is over utilized.
D. The QoS policy is dropping traffic.

Question 11.68: Refer to the exhibit. A network engineer updates the existing configuration on interface fastethernet1/1 switch SW1. It must establish an EtherChannel by using the same group designation with another vendor switch. Which configuration must be performed to complete the process?
A. interface port-channel 2
channel-group 2 mode desirable
B. interface fastethernet 1/1
channel-group 2 mode on
C. interface port-channel 2
channel-group 2 mode auto
_D. interface fastethernet 1/1
channel-group 2 mode active_

Question 11.69: Refer to the exhibit. Local access for R4 must be established and these requirements must be met:

- Only Telnet access is allowed.
- The enable password must be stored securely.
- The enable password must be applied in plain text
- Full access to R4 must be permitted upon successful login
  Which configuration script meets the requirements?
  A. Option A
  _B. Option B_
  C. Option C
  D. Option D

Question 11.70: A packet from a company’s branch office is destined to host 172.31.0.1 at headquarters. The sending router has three possible matches in its routing table for the packet: prefixes 172.31.0.0/16, 172.31.0.0/24, and 172.31.0.0/25. How does the router handle the packet?
A. It sends the traffic via the default gateway 0.0.0.0/0.
B. It sends the traffic via prefix 172.31.0.0/16.
_C. It sends the traffic via prefix 172.31.0.0/25._
D. It sends the traffic via prefix 172.31.0.0/24.

Question 11.71: Which action must be taken when password protection is implemented?
A. Store passwords as contacts on a mobile device with single-factor authentication.
B. Share passwords with senior IT management to ensure proper oversight.
C. Include special characters and make passwords as long as allowed.
_D. Use less than eight characters in length when passwords are complex._

Question 11.72
When an access point is seeking to join a wireless LAN controller, which message is sent to the AP-Manager interface?
A. DHCP request
B. DHCP discover
C. discovery response
_D. discovery request_

Question 11.73: What is a reason why an administrator would choose to implement an automated network management approach?
_A. Reduce inconsistencies in the network configuration._
B. Increase recurrent management costs.
C. Enable “box by box” configuration and deployment.
D. Decipher simple password policies.

Question 11.74: Which device separates networks by security domains?
A. access point
_B. firewall_
C. intrusion protection system
D. wireless controller

Question 11.75: Which two characteristics are representative of virtual machines (VMs)? (Choose two)
A. A VM on a hypervisor is automatically interconnected to other VMs.
B. A VM on an individual hypervisor shares resources equally.
C. Each VMs operating system depends on its hypervisor.
_D. Each VM runs independently of any other VM in the same hypervisor._
_E. multiple VMs operate on the same underlying hardware._

Question 11.76: Refer to the exhibit. According to the output, which parameter set is validated using the routing table of R7?
A. R7 is missing a gateway of last resort.
R7 is receiving routes that were redistributed from BGP
R7 will forward traffic destined to 10.90.8.0/24.
B. R7 is missing a gateway of last resort.
R7 is receiving routes that were redistributed in EIGRP
R7 will forward traffic destined to 10.90.8.0/24.
C. R7 has a gateway of last resort available.
R7 is receiving routes that were redistributed from BGP
R7 will drop traffic destined to 10.90.8.0/24
_D. R7 has a gateway of last resort available.
R7 is receiving routes that were redistributed in EIGRP
R7 will drop traffic destined to 10.90.8.0/24._

Question 11.77: Refer to the exhibit. A packet sourced from 10.10.10.1 is destined for 172.16.3.254. What is the subnet mask of the destination route?
A. 0.0.0.0
_B. 255.255.254.0_
C. 255.255.255.0
D. 255.255.255.255

Question 11.78: What is the operating mode and role of a backup port on a shared LAN segment in Rapid PVST+?
_A. blocking mode and provides an alternate path toward the designated bridge_
B. listening mode and provides an alternate path toward the root bridge
C. forwarding mode and provides the lowest-cost path to the root bridge for each VLAN
D. learning mode and provides the shortest path toward the root bridge handling traffic away from the LAN

Question 11.79: Which DSCP per-hop forwarding behavior is divided into subclasses based on drop probability?
A. class-selector
_B. assured_
C. expedited
D. default

Question 11.80: What occurs when a switch receives a frame that has a destination that is an unknown MAC address?
_A. The frame is flooded to all interfaces in the VLAN to which the frame belongs._
B. The frame is flooded to all interfaces in the switch.
C. The frame is discarded
D. The MAC address table of the switch is flushed

## Part 12

Question 12.2: Refer to the exhibit. An engineer must configure a floating static route on an external EIGRP network. The destination subnet is the /29 on the LAN interface of R86. Which command must be executed on R14?
A. ip route 10.80.65.0 255.255.248.0 10.73.65.66 1
B. ip route 10.80.65.0 255.255.255.240 fa0/1 89
_C. ip route 10.80.65.0 255.255.255.248 10.73.65.66 171_
D. ip route 10.73.65.66 0.0.0.224 10.80.65.0 255

Question 12.4: A network engineer is implementing a corporate SSID for WPA3-Personal security with a PSK. Which encryption cipher must be configured?
A. GCMP128
B. GCMP256
C. CCMP256
_D. CCMP128_

Question 12.5: What is the functionality of the Cisco DNA Center?
A. data center network policy controller
_B. software-defined controller for automation of devices and services_
C. console server that permits secure access to all network devices
D. IP address pool distribution scheduler

Question 12.6: Which IP header field is changed by a Cisco device when QoS marking is enabled?
A. Header Checksum
_B. Type of Service_
C. DSCP
D. ECN

Question 12.8: Refer to the exhibit. PC A is communicating with another device at IP address 10.227.225.255. Through which router does router Y route the traffic?
A. router A
B. router B
C. router C
_D. router D_

Question 12.9
What are two protocols within the IPsec suite? (Choose two)
A. 3DES
_B. AH_
_C. ESP_
D. TLS
E. AES

Question 12.11: What are two benefits of private IPv4 addressing? (Choose two)
_A. reuses addresses at multiple sites_
B. provides external internet network connectivity
_C. conserves globally unique address space_
D. propagates routing information to WAN links
E. provides unlimited address ranges

Question 12.12: Refer to the exhibit. Router R14 is in the process of being configured. Which configuration must be used to establish a host route to PC 10?
A. ip route 10.80.65.10 255.255.255.254 10.80.65.1
B. ip route 10.73.65.66 0.0.0.255 10.80.65.10
_C. ip route 10.80.65.10 255.255.255.255 10.73.65.66_
D. ip route 10.73.65.65 255.0.0.0 10.80.65.10

Question 12.13: Refer to the exhibit. A static route must be configured on R86 to forward traffic for the 172.16.34.0/29 network, which resides on R14. Which command must be used to fulfill the request?
_A. ip route 172.16.34.0 255.255.255.248 10.73.65.65_
B. ip route 172.16.34.0 255.255.255.224 10.73.65.66
C. ip route 10.73.65.65 255.255.255.248 172.16.34.0
D. ip route 172.16.34.0 0.0.0.7 10.73.65.64

Question 12.14: Refer to the exhibit. The network engineer is configuring a new WLAN and is told to use a setup password for authentication instead of the RADIUS servers. Which additional set of tasks must the engineer perform to complete the configuration?
A. Disable PMF
Enable PSK
Enable 802.1x
B. Select WPA Policy
Select WPA2 Policy
Enable FT PSK
_C. Select WPA2 Policy
Disable PMF
Enable PSK_
D. Select WPA Policy
Enable CCKM
Enable PSK

Question 12.15: Refer to the exhibit. An engineer is updating the management access configuration of switch SW1 to allow secured, encrypted remote configuration. Which two commands or command sequences must the engineer apply to the switch? (Choose two)
_A. SW1(config)#line vty 0 15
SW1(config-line)#transport input ssh_
B. SW1(config)# crypto key generate rsa
C. SW1(config)# interface f0/1
SW1(config-if)# switch port mode trunk
_D. SW1(config)#enable secret ccnaTest123_
E. SW1(config)# username NEW secret R3mote123

Question 12.16: Refer to the exhibit. Which two values does router R1 use to identify valid routes for the R3 loopback address 1.1.1.3/32? (Choose two)
A. lowest cost to reach the next hop
_B. lowest administrative distance_
_C. lowest metric_
D. highest metric
E. highest administrative distance

Question 12.17: Refer to the exhibit. What is represented by the word “switch” in line 2 of the JSON schema?
A. object
_B. key_
C. value
D. array

Question 12.18: Refer to the exhibit. User traffic originating within site B is failing to reach an application hosted on IP address 192.168.0.10, which is located within site A. What is determined by the routing table?
A. The traffic to 192.168.0.10 requires a static route to be configured in router1
_B. The lack of a default route prevents delivery of the traffic_
C. The default gateway for site B is configured incorrectly.
D. The traffic is blocked by an implicit deny in an ACL on router2.

Question 12.19: Which cable type must be used to interconnect one switch using 1000 BASE-SX GBIC modules and another switch using 1000 BASE-SX SFP modules?
A. LC to LC
_B. LC to SC_
C. SC to SC
D. SC to ST

Question 12.21: Which channel-group mode must be configured when multiple distribution switch interfaces connected to a WLC are bundled?
A. channel-group mode active
_B. channel-group mode on_
C. channel-group mode desirable
D. channel-group mode passive

Question 12.22: Refer to the exhibit. An engineer must translate the PC1 IP address to 10.199.77.100 and permit PC1 to ping the loopback 0 interface on router R2. Which configuration must be used?
_A. Option A_
B. Option B
C. Option C
D. Option D

Question 12.24: A network engineer must configure an interface with IP address 10.10.10.145 and a subnet mask equivalent to 11111111.11111111.11111111.11111000. Which subnet mask must the engineer use?
A. /27
B. /28
_C. /29_
D. /30

Answer: C
Question 12.25: Which two server types support domain name to IP address resolution? (Choose two)
A. ESX host
B. web
_C. resolver_
_D. authoritative_
E. file transfer

Question 12.26
Refer to the exhibit.

The router R1 is in the process of being configured. Routers R2 and R3 are configured correctly for the new environment. Which two commands must be configured on R1 for PC1 to communicate to all PCs on the 10.10.10.0/24 network? (Choose two)
A. ip route 10.10.10.8 255.255.255.248 g0/1
B. ip route 10.10.10.10 255.255.255.255 g0/1
C. ip route 10.10.10.0 255.255.255.248 192.168.2.2
_D. ip route 10.10.10.0 255.255.255.0 192.168.2.3_
_E. ip route 10.10.10.10 255.255.255.255 192.168.2.2_

Question 12.27: Which switching feature removes unused MAC addresses from the MAC address table, which allows new MAC addresses to be added?
A. MAC move
_B. MAC address aging_
C. dynamic MAC address learning
D. MAC address auto purge

Question 12.28: Which two northbound APIs are found in a software-defined network? (Choose two)
_A. SOAP_
B. OpFlex
_C. REST_
D. NETCONF
E. OpenFlow

Question 12.29: What uses HTTP messages to transfer data to applications residing on different hosts?
_A. REST_
B. OpenStack
C. OpFlex
D. OpenFlow

Question 12.30: Refer to the exhibit. What is the next-hop IP address for R2 so that PC2 reaches the application server via EIGRP?
A. 10.10.10.5
B. 192.168.20.1
_C. 10.10.10.6_
D. 192.168.30.1

Question 12.32: A switch is forwarding a frame out of all interfaces except the interface that received the frame. What is the technical term for this process?
A. CDP
B. multicast
_C. flooding_
D. ARP

Question 12.33: What is a characteristic of RSA?
A. It uses preshared keys for encryption
_B. It is an asymmetric encryption algorithm_
C. It requires both sides to have identical keys for encryption
D. It is a symmetric decryption algorithm.

Question 12.34: Refer to the exhibit. All interfaces are in the same VLAN. All switches are configured with the default STP priorities. During the STP elections, which switch becomes the root bridge?
_A. MDF-DC-3: 08:0E:18:1A:3C:9D_
B. MDF-DC-4: 08:E0:19:A1:B3:19
C. MDF-DC-2: 08:0E:18:22:05:97
D. MDF-DC-1: 08:E0:43:78:24:50

Question 12.35: Which advantage does the network assurance capability of Cisco DNA Center provide over traditional campus management?
A. Cisco DNA Center leverages YANG and NETCONF to assess the status of fabric and nonfabric devices, and traditional campus management uses CLI exclusively
_B. Cisco DNA Center correlates information from different management protocols to obtain insights, and traditional campus management requires manual analysis_
C. Cisco DNA Center automatically compares security postures among network devices, and traditional campus management needs manual comparisons
D. Cisco DNA Center handles management tasks at the controller to reduce the load on infrastructure devices, and traditional campus management uses the data backbone.

Question 12.36: Which signal frequency appears 60 times per minute?
_A. 1 Hz signal_
B. 1 GHz signal
C. 60 Hz signal
D. 60 GHz signal

Question 12.37: Which port type does a lightweight AP use to connect to the wired network when it is configured in local mode?
_A. access_
B. trunk
C. EtherChannel
D. LAG

Question 12.38: Refer to the exhibit. A network administrator configures an interface on a new switch so that it connects to interface Gi1/0/1 on switch Cat9300-1. Which configuration must be applied to the new interface?
A. switchport trunk encapsulation dot1q
switchport trunk native vlan 321
switchport trunk allowed vlan 100-300
B. switchport mode dynamic desirable
switchport trunk native vlan 321
switchport trunk allowed vlan 100,200,300
C. switchport nonegotiate
switchport access vlan 321
switchport trunk allowed vlan except 2-1001
_D. switchport mode trunk
switchport trunk native vlan 321
switchport trunk allowed vlan 100,200,300_

Question 12.39: What is the function of a controller in a software-defined network?
A. multicast replication at the hardware level
_B. setting packet-handling policies_
C. forwarding packets
D. fragmenting and reassembling packets

Question 12.40: A client experiences slow throughput from a server that is directly connected to the core switch in a data center. A network engineer finds minimal latency on connections to the server, but data transfers are unreliable, and the output of the show interfaces counters errors command shows a high FCS-Err count on the interface that is connected to the server. What is the cause of the throughput issue?
A. high bandwidth usage
_B. a physical cable fault_
C. a speed mismatch
D. a cable that is too long

Question 12.41: Which component controls and distributes physical resources for each virtual machine?
A. physical enclosure
B. OS
_C. hypervisor_
D. CPU

Question 12.42: Which command enables HTTP access to the Cisco WLC?
A. config network secureweb enable
B. config certificate generate webadmin
_C. config network webmode enable_
D. config network telnet enable

Question 12.44: What is the primary purpose of a console port on a Cisco WLC?
A. out-of-band management via an IP transport
_B. out-of-band management via an asynchronous transport_
C. in-band management via an asynchronous transport
D. in-band management via an IP transport

Question 12.46: What does the implementation of a first-hop redundancy protocol protect against on a network?
A. BGP neighbor flapping
_B. default gateway failure_
C. root-bridge loss
D. spanning-tree loops

Question 12.47: Refer to the exhibit. Which interface is chosen to forward traffic to the host at 192.168.0.55?
_A. GigabitEthernet0/1_
B. Null0
C. GigabitEthernet0/3
D. GigabitEthernet0/2

Question 12.48: Refer to the exhibit. SW1 and SW12 represent two companies that are merging. They use separate network vendors. The VLANs on both sides have been migrated to share IP subnets. Which command sequence must be issued on both sides to join the two companies and pass all VLANs between the companies?
_A. switchport mode trunk
switchport trunk encapsulation dot1q_
B. switchport mode trunk
switchport trunk allowed vlan all
switchport dot1q ethertype 0800
C. switchport mode dynamic desirable
switchport trunk allowed vlan all
switchport trunk native vlan 7
D. switchport dynamic auto
switchport nonegotiate

Question 12.49: A Cisco engineer notices that two OSPF neighbors are connected using a crossover Ethernet cable. The neighbors are taking too long to become fully adjacent. Which command must be issued under the interface configuration on each router to reduce the time required for the adjacency to reach the FULL state?
A. ip ospf priority 0
B. ip ospf network broadcast
C. ip ospf dead-interval 40
_D. ip ospf network point-to-point_

Question 12.50: Refer to the exhibit. How many objects, keys, and JSON list values are present?
A. three objects, three keys, and two JSON list values
B. one object, three keys, and two JSON list values
C. three objects, two keys, and three JSON list values
_D. one object, three keys, and three JSON list values_

Question 12.51: What is a benefit of a point-to-point leased line?
A. full-mesh capability
B. flexibility of design
C. low cost
_D. simplicity of configuration_

Question 12.52: What are two differences between WPA2 and WPA3 wireless security? (Choose two)
_A. WPA3 uses SAE for stronger protection than WPA2, which uses AES_
_B. WPA2 uses 128-bit key encryption, and WPA3 supports 128-bit and 192-bit key encryption_
C. WPA3 uses AES for stronger protection than WPA2, which uses SAE
D. WPA3 uses AES for stronger protection than WPA2, which uses TKIP
E. WPA2 uses 192-bit key encryption, and WPA3 requires 256-bit key encryption

Question 12.53: Refer to the exhibit. Each router must be configured with the last usable IP address in the subnet. Which configuration fulfills this requirement?
A. Option A
_B. Option B_
C. Option C
D. Option D

it is still the best choice.
Question 12.54: Refer to the exhibit. A network engineer is updating the configuration on router R1 to connect a new branch office to the company network. R2 has been configured correctly. Which command must the engineer configure so that devices at the new site communicate with the main office?
A. ip route 172.25.25.1 255.255.255.255 g0/2
B. ip route 172.25.25.0 255.255.255.0 192.168.2.1
C. ip route 172.25.25.1 255.255.255.255 g0/1
_D. ip route 172.25.25.0 255.255.255.0 192.168.2.2_

Question 12.55: Which two transport layer protocols carry syslog messages? (Choose two)
_A. TCP_
_B. UDP_
C. ARP
D. RTP
E. IP

Question 12.56: Refer to the exhibit. A packet sourced from 10.10.10.32 is destined for the Internet. What is the administrative distance for the destination route?
A. 0
_B. 1_
C. 2
D. 32

Question 12.57: When is the PUT method used within HTTP?
_A. to update a DNS server_
B. when a read-only operation is required
C. to display a web site
D. when a nonidempotent operation is needed

Question 12.58: What describes a northbound REST API for SDN?
A. network-element-facing interface for the control and data planes
_B. application-facing interface for GET, POST, PUT, and DELETE methods_
C. network-element-facing interface for GET, POST, PUT, and DELETE methods
D. application-facing interface for SNMP GET requests

Question 12.59: Refer to the exhibit. SW1 supports connectivity for a lobby conference room and must be secured. The engineer must limit the connectivity from PC1 to the SW1 and SW2 network. The MAC addresses allowed must be limited to two. Which configuration secures the conference room connectivity?
A. interface gi1/0/15
switchport port-security
switchport port-security mac-address 0000.abcd.0004 vlan 100
B. interface gi1/0/15
switchport port-security mac-address 0000.abcd.0004 vlan 100
C. interface gi1/0/15
switchport port-security mac-address 0000.abcd.0004 vlan 100
interface switchport secure-mac limit 2
_D. interface gi1/0/15
switchport port-security
switchport port-security maximum 2_

Question 12.60: Refer to the exhibit. Load-balanced traffic is coming in from the WAN destined to a host at 172.16.1.190. Which next-hop is used by the router to forward the request?
A. 192.168.7.4
B. 192.168.7.7
_C. 192.168.7.35_
D. 192.168.7.40

Question 12.61: Refer to the exhibit. The network engineer is configuring router R2 as a replacement router on the network. After the initial configuration is applied it is determined that R2 failed to show R1 as a neighbor. Which configuration must be applied to R2 to complete the OSPF configuration and enable it to establish the neighbor relationship with R1?
A. Option A
B. Option B
C. Option C
_D. Option D_

Question 12.62: Refer to the exhibit. The DHCP server is configured with a DHCP pool for each of the subnets represented. Which command must be configured on switch SW1 to allow DHCP clients on VLAN 10 to receive dynamic IP addresses from the DHCP server?
A. SW1(config-if)#ip helper-address 192.168.10.2
B. SW1(config-if)#ip helper-address 192.168.20.1
_C. SW1(config-if)#ip helper-address 192.168.20.2_
D. SW1(config-if)#ip helper-address 192.168.10.1

Question 12.65: Refer to the exhibit. An engineer executed the script and added commands that were not necessary for SSH and now must remove the commands. Which two commands must be executed to correct the configuration? (Choose two)
A. no ip domain name ccna.cisco.com
B. no login local
_C. no ip name-server 198.51.100.210_
_D. no service password-encryption_
E. no hostname CPE

Question 12.67: What is a reason to implement LAG on a Cisco WLC?
A. Enable the connected switch ports to use different Layer 2 configurations.
_B. Increase the available throughput on the link._
C. Allow for stateful failover between WLCs.
D. Increase security by encrypting management frames.

Question 12.68: What are two port types used by a Cisco WLC for out-of-band management? (Choose two)
A. redundant
B. distribution system
_C. service_
D. management
_E. console_

Question 12.70: Refer to the exhibit. Routers R1 and R2 are configured with RIP as the dynamic routing protocol. A network engineer must configure R1 with floating static route to serve as a backup route to network 192.168.23.0. Which command must the engineer configure on R1?
A. ip route 192.168.23.0 255.255.255.255 192.168.13.3 121
B. ip route 192.168.23.0 255.255.255.0 192.168.13.3 100
C. ip route 192.168.23.0 255.255.255.0 192.168.13.3
_D. ip route 192.168.23.0 255.255.255.0 192.168.13.3 121_

Question 12.71: What are two facts that differentiate optical-fiber cabling from copper cabling? (Choose two)
_A. It carries signals for longer distances._
_B. It provides greater throughput options._
C. It carries electrical current further distances for PoE devices.
D. It is less expensive when purchasing patch cables.
E. It has a greater sensitivity to changes in temperature and moisture

Question 12.72: Why would VRRP be implemented when configuring a new subnet in a multivendor environment?
A. to ensure that the spanning-tree forwarding path to the gateway is loop-free
B. when a gateway protocol is required that supports more than two Cisco devices for redundancy
C. to interoperate normally with all vendors and provide additional security features for Cisco devices
_D. to enable normal operations to continue after a member failure without requiring a change in a host ARP cache_

Question 12.73: What must a network administrator consider when deciding whether to configure a new wireless network with APs in autonomous mode or APs running in cloud-based mode?
_A. Autonomous mode APs are less dependent on an underlay but more complex to maintain than APs in cloud-based mode_
B. Autonomous mode APs are easy to deploy and automate than APs in cloud-based mode
C. Cloud-based mode APs are easy to deploy but harder to automate than APs in autonomous mode
D. Cloud-based mode APs rely on underlays and are more complex to maintain than APs in autonomous mode

Question 12.74: Under the CRUD model, which two HTTP methods support the UPDATE operation? (Choose two)
_A. PUT_
_B. PATCH_
C. DELETE
D. POST
E. GET

Question 12.75: What are two advantages of implementing a controller-based architecture instead of a traditional network architecture? (Choose two)
A. It supports complex and high-scale IP addressing schemes.
_B. It provides increased scalability and management options._
C. It allows for seamless connectivity to virtual machines.
_D. It enables configuration task automation._
E. It increases security against denial-of-service attacks.

Question 12.76: Refer to the exhibit. The switches are connected via a Cat5 Ethernet cable that was successfully tested. The interfaces are configured as access ports and are both in a “down” status. What is the cause of this issue?
A. The switches are configured with incompatible duplex settings.
_B. The speed settings on the switches are mismatched._
C. The distance between the two switches is not supported by Cat5.
D. The portfast command is missing from the configuration.

Question 12.77: Refer to the exhibit. A technician receives a report of network slowness and the issue has been isolated to the interface FastEthernet0/13. What is the root cause of the issue?
_A. physical errors_
B. local buffer overload
C. duplicate IP addressing
D. err-disabled port on the far end

Question 12.78: A router received three destination prefixes: 10.0.0.0/8, 10.0.0.0/16, and 10.0.0.0/24. When the show ip route command is executed, which output does it return?
A. Gateway of last resort is 172.16.1.1 to network 0.0.0.0
O E2 10.0.0.0/24[110/5] via 192.168.3.1, 0:01:00, Ethernet2
B. Gateway of last resort is 172.16.1.1 to network 0.0.0.0
O E2 10.0.0.0/16[110/5] via 192.168.2.1, 0:01:00, Ethernet1
O E2 10.0.0.0/24[110/5] via 192.168.3.1, 0:01:00, Ethernet2
C. Gateway of last resort is 172.16.1.1 to network 0.0.0.0
O E2 10.0.0.0/8 [110/5] via 192.168.1.1, 0:01:00, Ethernet0
_D. Gateway of last resort is 172.16.1.1 to network 0.0.0.0
O E2 10.0.0.0/8 [110/5] via 192.168.1.1, 0:01:00, Ethernet0
O E2 10.0.0.0/16[110/5] via 192.168.2.1, 0:01:00, Ethernet1
O E2 10.0.0.0/24[110/5] via 192.168.3.1, 0:01:00, Ethernet2_

Question 12.79: Refer to the exhibit. A network engineer configures the CCNA WLAN so that clients must reauthenticate hourly and to limit the number of simultaneous connections to the WLAN to 10. Which two actions complete this configuration? (Choose two)
_A. Set the Maximum Allowed Clients value to 10._
B. Enable the Client Exclusion option and set the value to 3600.
C. Set the Maximum Allowed Clients Per AP Radio value to 10.
D. Enable the Wi-Fi Direct Clients Policy option.
_E. Enable the Enable Session Timeout option and set the value to 3600._

Question 12.80: Which state is bypassed in Rapid PVST+ when PortFast is enabled on a port?
A. discarding
_B. learning_
C. blocking
D. forwarding

Question 12.81: When a switch receives a frame from an unknown source MAC address, which action does the switch take with the frame?
A. It floods the frame out all interfaces, including the interface it was received on.
B. It attempts to send the frame back to the source to ensure that the source MAC address is still available for transmissions.
C. It sends the frame to ports within the CAM table identified with an unknown source MAC address.
_D. It associate the source MAC address with the LAN port on which it was received and saves it to the MAC address table._

Question 12.82: What is a function of a southbound API?
A. Automate configuration changes between a server and a switching fabric.
_B. Manage flow control between an SDN controller and a switching fabric._
C. Use orchestration to provision a virtual server configuration from a web server.
D. Facilitate the information exchange between an SDN controller and application.

Question 12.83: Refer to the exhibit. Which interface condition is occurring in this output?
_A. bad NIC_ (“1876 runts”)
B. duplex mismatch
C. collisions
D. high throughput

Question 12.84: Refer to the exhibit. Which interface condition is occurring in this output?
A. bad NIC
B. duplex mismatch
C. collisions
_D. high throughput_ (Both txload and rxload are “255/255”)

Question 12.85: The clients and DHCP server reside on different subnets. Which command must be used to forward requests and replies between clients on the 10.10.0.1/24 subnet and the DHCP server at 192.168.10.1?
A. ip route 192.168.10.1
_B. ip helper-address 192.168.10.1_
C. ip dhcp address 192.168.10.1
D. ip default-gateway 192.168.10.1

Question 12.86: What is the PUT method within HTTP?
_A. It replaces data at the destination._
B. It displays a web site.
C. It is a read-only operation.
D. It is a nonidempotent operation.

Question 12.87: Refer to the exhibit. A network engineer started to configure two directly-connected routers as shown. Which command sequence must the engineer configure on R2 so that the two routers become OSPF neighbors?
A. interface GigabitEthernet0/1
ip ospf 1 area 0
_B. interface GigabitEthernet0/1
ip ospf 1 area 1_
C. router ospf 1
network 192.168.12.0 0.0.0.127 area 0
D. router ospf 1
network 192.168.12.1 0.0.0.0 area 1

Question 12.88: Refer to the exhibit. What does route 10.0.1.3/32 represent in the routing table?
A. all hosts in the 10.0.1.0 subnet
B. the source 10.0.1.100
_C. a single destination address_
D. the 10.0.0.0 network

Question 12.89: Refer to the exhibit. A Cisco engineer creates a new WLAN called lantest. Which two actions must be performed so that only high-speed 2.4-Ghz clients connect? (Choose two)
_A. Enable the Status option._
B. Set the Interface/Interface Group(G) to an interface other than guest.
_C. Set the Radio Policy option to 802.11g only._
D. Set the Radio Policy option to 802.11a only.
E. Enable the Broadcast SSID option.

Question 12.90: Refer to the exhibit. Which two values does router R1 use to determine the best path to reach destinations in network 1.0.0.0/8? (Choose two)
_A. longest prefix match_
B. lowest cost to reach the next hop
C. highest administrative distance
D. highest metric
_E. lowest metric_

Question 12.91: An engineer is configuring SSH version 2 exclusively on the R1 router. What is the minimum configuration required to permit remote management using the cryptographic protocol?
A. Option A
B. Option B
C. Option C
_D. Option D_

Question 12.93: Refer to the exhibit. Which interface condition is occurring in this output?
A. queueing
_B. duplex mismatch_ (139 collisions)
C. collisions
D. high throughput

Question 12.94: A router has two static routes to the same destination network under the same OSPF process. How does the router forward packets to the destination if the next-hop devices are different?
A. The router chooses the next hop with the lowest IP address.
_B. The router load-balances traffic over all routes to the destination._
C. The router chooses the next hop with the lowest MAC address.
D. The router chooses the route with the oldest age.

Question 12.95: Refer to the exhibit. Which interface condition is occurring in this output?
_A. high throughput_ (“txload 255/255, rxload 255/255” )
B. queueing
C. bad NIC
D. broadcast storm

Question 12.96: Which property is shared by 10GBase-SR and 10GBase-LR interfaces?
A. Both use the multimode fiber type.
B. Both require UTP cable media for transmission.
C. Both use the single-mode fiber type.
_D. Both require fiber cable media for transmission._

Question 12.97: A network engineer is upgrading a small data center to host several new applications, including server backups that are expected to account for up to 90% of the bandwidth during peak times. The data center connects to the MPLS network provider via a primary circuit and a secondary circuit. How does the engineer inexpensively update the data center to avoid saturation of the primary circuit by traffic associated with the backups?
A. Place the backup servers in a dedicated VLAN.
B. Configure a dedicated circuit for the backup traffic.
C. Assign traffic from the backup servers to a dedicated switch.
_D. Advertise a more specific route for the backup traffic via the secondary circuit._

Question 12.98: Refer to the exhibit. The network engineer is configuring router R2 as a replacement router on the network. After the initial configuration is applied it is determined that R2 failed to show R1 as a neighbor. Which configuration must be applied to R2 to complete the OSPF configuration and enable it to establish the neighbor relationship with R1?
_A. Option A_
B. Option B
C. Option C
D. Option D

Question 12.99: What are two characteristics of a small office / home office connection environment? (Choose two)
_A. It supports between 1 and 50 users._
B. It requires a core, distribution, and access layer architecture.
C. It supports between 50 and 100 users.
_D. A router port connects to a broadband connection._
E. It requires 10Gb ports on all uplinks.

Question 12.100: Which syslog severity level is considered the most severe and results in the system being considered unusable?
A. Critical
_B. Emergency_
C. Alert
D. Error

Question 12.102: Which benefit does Cisco DNA Center provide over traditional campus management?
A. Cisco DNA Center leverages SNMPv3 for encrypted management, and traditional campus management uses SNMPv2.
_B. Cisco DNA Center leverages APIs, and traditional campus management requires manual data gathering._
C. Cisco DNA Center automates SSH access for encrypted entry, and SSH is absent from traditional campus management.
D. Cisco DNA Center automates HTTPS for secure web access, and traditional campus management uses HTTP.

Question 12.103: Refer to the exhibit. Which interface condition is occurring in this output?
A. bad NIC
B. broadcast storm
_C. queueing_ (“Output queue: 185/300”)
D. duplex mismatch

Question 12.105: What is the role of community strings in SNMP operations?
A. It serves as a sequence tag on SNMP traffic messages.
_B. It serves as a password to protect access to MIB objects._
C. It passes the Active Directory username and password that are required for device access.
D. It translates alphanumeric MIB output values to numeric values.

Question 12.109: How will Link Aggregation be implemented on a Cisco Wireless LAN Controller? (similar to an old question)
A. To pass client traffic, two or more ports must be configured
B. The EtherChannel must be configured in “mode active”
C. When enabled, the WLC bandwidth drops to 500 Mbps
_D. One functional physical port is needed to pass client traffic_

Question 12.110:Refer to the exhibit. An engineer booted a new switch and applied this configuration via the console port. Which additional configuration must be applied to allow administrators to authenticate directly to global configuration mode via Telnet using a local username and password? (similar to an old question)
A.
R1(config)#username admin
R1(config-if)#line vty 0 4
R1(config-line)#password p@ss1234
B.
R1(config)#username admin
R1(config-if)#line vty 0 4
R1(config-line)#password p@ss1234
R1(config-line)#transport input telnet
C.
R1(config)#username admin secret p@ss1234
R1(config-if)#line vty 0 4
R1(config-line)#login local
R1(config)#enable secret p@ss1234
_D.
R1(config)#username admin privilege 15 secret p@ss1234
R1(config-if)#line vty 0 4
R1(config-line)#login local_

Question 12.111: What is the definition of backdoor malware?
A. malicious program that is used to launch other malicious programs
B. malicious code that infects a user machine and then uses that machine to send spam
C. malicious code with the main purpose of downloading other malicious code
_D. malicious code that is installed onto a computer to allow access by an unauthorized user_

Question 12.112: Refer to the exhibit. Host A switch interface is configured in VLAN 2. Host D sends a unicast packet destined for the IP address of host A. What does the switch do when it receives the frame from host D?
_A. It floods the frame out of every port except the source port._
B. It shuts down the source port and places It in err-disable mode.
C. It drops the frame from the MAC table of the switch.
D. It creates a broadcast storm.

Question 12.113: Which functionality is provided by the console connection on a Cisco WLC?
A. secure In-band connectivity for device administration
_B. out-of-band management_
C. HTTP-based GUI connectivity
D. unencrypted in-band connectivity for file transfers

Question 12.114: Refer to the exhibit. Which next-hop IP address has the least desirable metric when sourced from R1?
A. 10.10.10.4
B. 10.10.10.2
C. 10.10.10.5
_D. 10.10.10.3_

## Part 13

Question 13.1: Refer to the exhibit. A new VLAN and switch are added to the network. A remote engineer configures OldSwitch and must ensure that the configuration meets these requirements:

- accommodates current configured VLANs
- expands the range to include VLAN 20
- allows for IEEE standard support for virtual LANs
  Which configuration on the NewSwitch side of the link meets these requirements?
  _A.
  no switchport trunk encapsulation isl
  switchport trunk encapsulation dot1q
  switchport trunk allowed vlan add 20_
  B.
  switchport nonnegotiate
  no switchport trunk allowed vlan 5,10
  switchport trunk allowed vlan 5,10,15,20
  C.
  no switchport mode trunk
  switchport trunk encapsulation isl
  switchport mode access vlan 20
  D.
  switchport mode dynamic
  channel-group 1 mode active
  switchport trunk allowed vlan 5,10,15,20

Question 13.4
How does frame switching function on a switch?
A. forwards frames to a neighbor port using CDP
B. modifies frames that contain a known source VLAN
C. inspects and drops frames from unknown destinations
_D. forwards known destinations to the destination port_

Answer: D
Question 13.5
What is used as a solution for protecting an individual network endpoint from attack?
A. Router
B. Wireless controller
_C. Antivirus software_
D. Cisco DNA Center

Question 13.6: Refer to Exhibit. An engineer is building a new Layer 2 LACP EtherChannel between SW1 and SW2. and they executed the given show commands to verify the work. Which additional task must be performed so that the switches successfully bundle the second member in the LACP port-channel?
A. Configure the switchport trunk allowed vlan 300 command on SW1 port-channel 1
B. Configure the switchport trunk allowed vlan 300 command on interface Fa0/2 on SW1
C. Configure the switchport trunk allowed vlan add 300 command on interface Fa0/2 on SW2
_D. Configure the switchport trunk allowed vlan add 300 command on SW1 port-channel 1_

Question 13.7: Which two HTTP methods are suitable for actions performed by REST-based APIs? (Choose two)
A. REMOVE
B. REDIRECT
_C. POST_
_D. GET_
E. POP

Question 13.8: What provides connection redundancy increased bandwidth and load sharing between a wireless LAN controller and a Layer 2 switch?
A. VLAN trunking
B. tunneling
C. first hop redundancy
_D. link aggregation_

Question 13.10
When the LAG configuration is updated on a Cisco WLC, which additional task must be performed when changes are complete?
A. Flush all MAC addresses from the WLC
B. Re-associate the WLC with the access point.
C. Re-enable the WLC interfaces
_D. Reboot the WLC_

Question 13.11
Which Cisco proprietary protocol ensures traffic recovers immediately, transparently, and automatically when edge devices or access circuits fail?
A. SLB
B. FHRP
C. VRRP
_D. HSRP_

Question 13.13
What is an enhancement implemented in WPA3?
A. employs PKI and RADIUS to identify access points
B. applies 802.1x authentication and AES-128 encryption
C. uses TKIP and per-packet keying
_D. defends against deauthentication and disassociation attacks_

Question 13.16
What are two disadvantages of a full-mesh topology? (Choose two)
A. It needs a high MTU between sites.
_B. It has a high implementation cost._
C. It must have point-to-point communication.
_D. It requires complex configuration._
E. It works only with BGP between sites.

Question 13.18: How does MAC learning function on a switch?
A. broadcasts frames to all ports without queueing
_B. adds unknown source MAC addresses to the address table_
C. sends a retransmission request when a new frame is received
D. sends frames with unknown destinations to a multicast group

Question 13.19: What is the purpose of classifying network traffic in QoS?
A. services traffic according to its class
_B. identifies the type of traffic that will receive a particular treatment_
C. writes the class identifier of a packet to a dedicated field in the packet header
D. configures traffic-matching rules on network devices

Question 13.20: What is a benefit of using private IPv4 addressing?
_A. Multiple companies can use the same addresses without conflicts._
B. Direct connectivity is provided to internal hosts from outside an enterprise network.
C. Communication to the internet is reachable without the use of NAT.
D. All external hosts are provided with secure communication to the Internet.

Question 13.21: What is the advantage of separating the control plane from the data plane within an SDN network?
_A. decreases overall network complexity_
B. limits data queries to the control plane
C. reduces cost
D. offloads the creation of virtual machines to the data plane

Question 13.23: Why is a first-hop redundancy protocol implemented?
_A. to protect against default gateway failures_
B. to prevent loops in a network
C. to enable multiple switches to operate as a single unit
D. to provide load-sharing for a multilink segment

Question 13.24: Which WPA mode uses PSK authentication?
A. Local
B. Client
C. Enterprise
_D. Personal_

Question 13.26: What is a function of the core and distribution layers in a collapsed-core architecture?
A. The router must use IPv4 and IPv6 addresses at Layer 3.
B. The core and distribution layers are deployed on two different devices to enable failover.
C. The router can support HSRP for Layer 2 redundancy in an IPv6 network.
_D. The router operates on a single device or a redundant pair._

Question 13.28: Refer to the exhibit. Which switch becomes the root bridge?
A. SW 1
Bridge Priority – 32768
mac-address 0f:d7:9e:13:ab:82
B. SW 4
Bridge Priority – 40960
mac-address 05:d8:33:09:8f:89
_C. SW3
Bridge Priority – 32768
mac-address 01:1c:6c:66:b7:70_
D. SW2
Bridge Priority – 40960
mac-address 04:44:97:51:63:17

Question 13.29: Refer to the exhibit. A newly configured PC fails to connect to the internet using TCP port 80 to www.cisco.com. Which setting must be modified for the connection to work?
A. Subnet Mask
B. DNS Servers
_C. Default Gateway_
D. DHCP Server

Question 13.30: Refer to the exhibit. All interfaces are configured with duplex auto and ip ospf network broadcast. Which configuration allows routers R14 and R86 to form an OSPFv2 adjacency and act as a central point for exchanging OSPF information between routers?
A. Option A
_B. Option B_
C. Option C
D. Option D

Question 13.32: An engineer must configure a core router with a floating static default route to the backup router at 10.200.0.2. Which command meets the requirements?
A. ip route 0.0.0.0 0.0.0.0 10.200.0.2 floating
B. ip route 0.0.0.0 0.0.0.0 10.200.0.2
_C. ip route 0.0.0.0 0.0.0.0 10.200.0.2 10_
D. ip route 0.0.0.0 0.0.0.0 10.200.0.2 1

Question 13.33: Which interface is used to send traffic to the destination network?
A. G0/1
B. G0/8
C. G0/24
_D. G0/17_

Question 13.34: Refer to the exhibit. How does router R1 handle traffic to the 172.16.1.4/30 subnet?
A. It sends all traffic over the path via 172.16.4.4
B. It sends all traffic over the path via 10.0.1 100
C. It sends all traffic over the path via 172.16.9.5 using 172.16.4.4 as a backup
_D. It load-balances traffic over 172.16.9.5 and 172.16.4.4_

Question 13.36: What is a characteristic of an SSID in wireless networks?
A. uses policies to prevent unauthorized users
B. identifies an access point on a WLAN
C. prompts a user for a login ID
_D. associates a name to a WLAN_

Question 13.37: Refer to the exhibit. What is represented by the word “port” within this JSON schema?
A. value
B. array
_C. key_
D. object

Question 13.40: Refer to the exhibit. What is represented by the word “ge3/36” within this JSON schema?
_A. value_
B. array
C. key
D. object

Question 13.42: What is a characteristic of encryption in wireless networks?
A. uses policies to prevent unauthorized users
_B. prevents the interception of data as it transits a network_
C. provides increased protection against spyware
D. converts electrical current to radio waves

Question 13.43: What is a characteristic of private IPv4 addressing?
A. complies with PCI regulations
B. is used on internal hosts that stream data solely to external resources
_C. provides an added level of protection against internet threats_
D. enables secure connectivity over the internet

Question 13.44: Refer to the exhibit. Which interface is used to send traffic to the destination network?
_A. G0/12_
B. G0/1
C. G0/9
D. G0/19

Question 13.44: Refer to the exhibit. Which interface is used to send traffic to the destination network?
A. G0/11
_B. G0/20_
C. G0/9
D. G0/16

Question 13.47: What is a characteristic of an SSID in wireless networks?
_A. broadcasts a beacon signal to announce its presence by default_
B. uses policies to prevent unauthorized users
C. converts electrical current to radio waves
D. prompts a user for a login ID

Question 13.48: Refer to the exhibit. The P2P Blocking Action option is disabled on the WLC. The security team has a new requirement for each client to retain their assigned IP addressing as the clients move between locations in the campus network. Which action completes this configuration?
A. Set the P2P Blocking Action option to Forward-UpStream.
_B. Enable the Static IP Tunneling option._
C. Check the DHCP Addr. Assignment check box.
D. Disable the Coverage Hole Detection option.

Question 13.50: What is a reason why a company would choose to use network automation in an enterprise?
_A. Provide data services faster._
B. Enable network segmentation.
C. Mitigate spanning-tree loop avoidance.
D. Implement granular QoS.

Question 13.51: Refer to the exhibit. A packet sourced from 172.16.32.254 is destined for 172.16.32.8. What is the subnet mask of the preferred destination route?
A. 255.255.224.0
B. 255.255.255.0
_C. 255.255.255.192_
D. 255.255.255.252

Question 13.52: Which WLC interface provides out-of-band management in the Cisco Unified Wireless Network Architecture?
A. dynamic
B. AP-Manager
C. virtual
_D. service port_

Question 13.54: Which IPsec encryption mode is appropriate when the destination of a packet differs from the security termination point?
_A. tunnel_
B. main
C. aggressive
D. transport

Question 13.55: Why is UDP more suitable than TCP for applications that require low latency, such as VoIP?
A. UDP reliably guarantees delivery of all packets, and TCP drops packets under heavy load.
B. TCP uses congestion control for efficient packet delivery, and UDP uses flow control mechanisms for the delivery of packets.
C. UDP uses sequencing data for packets to arrive in order, and TCP offers the capability to receive packets in random order.
_D. TCP sends an acknowledgment for every packet that is received, and UDP operates without acknowledgments._

Question 13.56: Refer to the exhibit. Users at a branch office are experiencing application performance issues, poor VoIP audio quality, and slow downloads. What is the cause of the issues?
A. QoS queuing
_B. interface configuration_
C. broadcast storm
D. overutilization

Question 13.57: Refer to the exhibit. Router OldR is replacing another router on the network with the intention of having OldR and R2 exchange routes. After the engineer applied the initial OSPF configuration, the routes were still missing on both devices. Which command sequence must be issued before the clear IP ospf process command is entered to enable the neighbor relationship?
_A. OldR(config)#router ospf 1
OldR(config-router)#no router-id 192.168.1.1_
B. OldR(config)#interface g0/0/0
OldR(config-if)#ip ospf dead-interval 15
C. OldR(config)#interface g0/0/0
OldR(config-if)#ip ospf hello-interval 15
D. OldR(config)#router ospf 1
OldR(config-router)# network 192.168.1.0 255.255.255.0 area 2

Question 13.58: Refer to the exhibit. PC A is communicating with another device at IP address 10.225.34.225. Through which router does router Y route the traffic?
A. router A
B. router B
_C. router C_
D. router D

Question 13.59: An engineer needs to configure an access point to forward all client traffic through a wireless controller. Which mode must be enabled to accomplish this task?
_A. local_
B. monitor
C. autonomous
D. rogue detector

Question 13.60: What is the root port in STP?
A. It is the port with the highest priority toward the root bridge.
B. It is the port that is elected only when the root bridge has precisely one port on a single LAN segment.
_C. It is the port on a switch with the lowest cost to reach the root bridge._
D. It is the port on the root switch that leads to the designated port on another switch.

Question 13.61: An Ethernet frame arrived at switch interface G0/1, but the destination MAC address is missing from the MAC address table. How does the switch process the frame?
A. It sends an ARP request to attempt to locate the destination.
B. It updates the destination to FFFF.FFFF.FFFF.
C. It drops the frame and notifies the sending host.
_D. It floods the frame out of the remaining switch interfaces._

Question 13.62: In which circumstance would a network architect decide to implement a global unicast subnet instead of a unique local unicast subnet?
A. when the subnet must be available only within an organization
B. when the subnet does not need to be routable
C. when the addresses on the subnet must be equivalent to private IPv4 addresses
_D. when the subnet must be routable over the internet_

Question 13.63: Which Windows command is used instead of the route print command to display the contents of the IP routing table?
A. netstat-n
B. ipconfig
C. ifconfig
_D. netstat-r_

Question 13.64
What differentiates the Cisco OfficeExtend AP mode from FlexConnect AP mode?
A. FlexConnect allows a personal SSID to be configured on the AP, and personal SSIDs are not supported with OfficeExtend.
B. OfficeExtend does not support DTLS tunneling of traffic to the WLC, and FlexConnect tunnels traffic to the WLC with DTLS.
_C. OfficeExtend tunnels all traffic through the WLC, and FlexConnect terminates client traffic at the AP switch port._
D. FlexConnect must be deployed behind a router that NATs the client traffic, and OfficeExtend uses public IP sources.

Question 13.65: Which type of IPv4 address must be assigned to a server to protect it from external access and allow only internal users access while restricting internet access?
A. global unicast
B. public
_C. private_
D. multicast

Question 13.66: Which function generally performed by a traditional network device is replaced by a software-defined controller?
A. encryption and decryption for VPN link processing
_B. building route tables and updating the forwarding table_
C. changing the source or destination address during NAT operations
D. encapsulation and decapsulation of packets in a data-link frame

Question 13.68: What describes the functionality of southbound APIs?
A. They use HTTP messages to communicate.
_B. They enable communication between the controller and the network device._
C. They convey information from the controller to the SDN applications.
D. They communicate with the management plane.

Question 13.69: What are two purposes of HSRP? (Choose two)
_A. It groups two or more routers to operate as one virtual router._
_B. It improves network availability by providing redundant gateways._
C. It passes configuration information to hosts in a TCP/IP network.
D. It helps hosts on the network to reach remote subnets without a default gateway.
E. It provides a mechanism for diskless clients to autoconfigure their IP parameters during boot.

Question 13.70: Refer to the exhibit. A network engineer must configure an access list on a new Cisco IOS router. The access list must deny HTTP traffic to network 10.125.128.32/27 from the 192.168.240.0/20 network, but it must allow the 192.168.240.0/20 network to reach the rest of the 10.0.0.0/8 network. Which configuration must the engineer apply?
A. Option A
B. Option B
_C. Option C_
D. Option D

Question 13.71: A DHCP pool has been created with the name NOCC. The pool is using 192.168.20.0/24 and must use the next to last usable IP address as the default gateway for the DHCP clients. What is the next step in the process?
_A. default-router 192.168.20.253_
B. network 192.168.20.254 255.255.255.0 secondary
C. ip default-gateway 0.0.0.0 0.0.0.0 192.168.20.253
D. next-server 192.168.20.254

Question 13.72: What is the role of SNMP in the network?
A. to monitor network devices and functions using a TCP underlay that operates on the presentation layer
B. to collect data directly from network devices using an SSL underlay that operates on the transport layer
_C. to monitor and manage network devices using a UDP underlay that operates on the application layer_
D. to collect telemetry and critical information from network devices using an SSH underlay that operates on the network layer

Question 13.73: Refer to the exhibit. What is represented beginning with line 1 and ending with line 5?
A. object
B. key
C. value
_D. array_

Question 13.75: What are two reasons to implement DHCP in a network? (Choose two)
A. manually control and configure IP addresses on network devices
_B. reduce administration time in managing IP address ranges for clients_
_C. control the length of time an IP address is used by a network device_
D. dynamic control over the best path to reach an IP address
E. access a website by name instead of by IP address

Question 13.76: What does traffic shaping do?
A. It modifies the QoS attributes of a packet
B. It sets QoS attributes within a packet
_C. It queues excess traffic_
D. It organizes traffic into classes

Question 13.78: Which enhancements were implemented as part of WPA3?
A. TKIP encryption improving WEP and per-packet keying
_B. forward secrecy and SAE in personal mode for secure initial key exchange_
C. 802.1x authentication and AES-128 encryption
D. AES-64 in personal mode and AES-128 in enterprise mode

Question 13.79: How is a configuration change made to a wireless AP in lightweight mode?
A. SSH connection to the management IP of the AP
B. HTTPS connection directly to the out-of-band address of the AP
_C. CAPWAP/LWAPP connection via the parent WLC_
D. EoIP connection via the parent WLC

Question 13.80: Which Rapid PVST+ feature should be configured on a switch port to immediately send traffic to a connected server as soon as it is active?
A. loop guard
B. BPDU guard
C. uplinkfast
_D. portfast_

Question 13.81: How is noise defined in Wi-Fi?
A. signals from other Wi-Fi networks that interfere with the local signal
B. measured difference between the desired Wi-Fi signal and an interfering Wi-Fi signal
C. ratio of signal-to-noise rating supplied by the wireless device
_D. any interference that is not Wi-Fi traffic that degrades the desired signal_

Question 13.82: Refer to the exhibit. Which set of commands must be applied to the two switches to configure an LACP Layer 2 EtherChannel?
A. Option A
B. Option B
_C. Option C_
D. Option D

Question 13.83: An administrator is configuring a Cisco Catalyst switch so that it will accept management connections only from hosts in the 203.0.113.0/24 network. Other traffic passing through the switch must transit without interruption. Which two configurations must the engineer apply to the router? (Choose two)
A. ip access-list extended Management
permit tcp any range 22 23 203.0.113.0 0.0.0.255
_B. line vty 0 15
access-class Management in_
C. ip access-list standard Management
permit 203.0.113.0 255.255.255.0
D. interface range vlan 1 – 4094
ip access-group Management out
_E. ip access-list standard Management
permit 203.0.113.0 0.0.0.255_

Question 13.84: Which interface on the WLC is limited to one when LAG is in use?
_A. AP-manager_
B. virtual
C. trunk
D. service

Question 13.85: Refer to the exhibit. Connections must be blocked from PC2 to the file server while still allowing PC2 to connect to other network hosts and devices. Which configuration must be used to complete the task?
A. Option A
_B. Option B_
C. Option C
D. Option D

Question 13.86: Which protocol does a REST API use to communicate?
_A. HTTP_
B. STP
C. SNMP
D. SSH

Question 13.87: What is a function of a firewall on an enterprise network?
A. It acts as the intermediary device between the enterprise and its ISP
B. It serves as a default gateway to hosts on the internet
C. It processes traffic based on stateless inspection
_D. It allows and denies ingress and egress traffic_

Question 13.88: Which encryption mode is used when a packet is sent from a site-to-site VPN connection where the source and destination IP address portion of a packet is unencrypted?
A. PPTP
B. Secure Shell
_C. Transport_
D. PPPoE

Question 13.89: Refer to the exhibit. An engineer just installed network 10.120.10.0/24. Which configuration must be applied to the R14 router to add the new network to its OSPF routing table?
_A. router ospf 100
network 10.120.10.0 0.0.0.255 area 0_
B. router ospf 100 area 0
network 10.120.10.0 0.0.0.255
C. router ospf 120
network 10.120.10.0 255.255.255.0 area 0
ip route 10.120.10.0 255.255.255.0 fa0/1
D. router ospf 100
network 10.120.10.0 255.255.255.0 area 0

Question 13.90: Which key function is provided by the data plane?
A. making routing decisions
B. exchanging routing table data
_C. forwarding traffic to the next hop_
D. originating packets

Question 13.91: Refer to the exhibit. An engineer configures interface fa0/1 on SW1 and SW2 to pass traffic from two different VLANs. For security reasons, company policy requires the native VLAN to be set to a nondefault value. Which configuration meets this requirement?
A. Option A
B. Option B
C. Option C
_D. Option D_

Question 13.92: Which fact must the engineer consider when implementing syslog on a new network?
A. Syslog defines the software or hardware component that triggered the message
B. By default, all message levels are sent to the syslog server
_C. The logging level defines the severity of a particular message_
D. There are 16 different logging levels (0-15)

Question 13.93: Which cable type must be used when connecting a router and switch together using these criteria?

- Pins 1 and 2 are receivers and pins 3 and 6 are transmitters
- Auto detection MDI-X is unavailable
  A. crossover
  B. rollover
  C. console
  _D. straight-through_

Question 13.94: Refer to the exhibit. An administrator is configuring a new WLAN for a wireless network that has these requirements

- Dual-band clients that connect to the WLAN must be directed to the 5-GHz spectrum
- Wireless clients on this WLAN must be able to apply VLAN settings on the returned RADIUS attributes
  Which two actions meet these requirements? (Choose two)
  _A. Enable the Client Band Select option._
  B. Enable the Coverage Hole Detection option
  _C. Enable the Allow AAA Override option_
  D. Set the MFP Client Protection option to Required
  E. Enable the Aironet IE option

Question 13.96: What is the purpose of the service-set identifier?
_A. It identifies a wireless network for a mobile device to connect_
B. It identifies the wired network to which a network device is connected
C. It identifies the wireless network to which an application must connect
D. It identifies the wired network to which a user device is connected

Question 13.97: In what way does a network supervisor reduce maintenance costs while maintaining network integrity on a traditionally managed network?
A. They install an automated network-monitoring system to provide early warning of network issues
B. They employ additional network administrators to proactively manage the network
_C. They use automation to centralize network-management tasks_
D. They automate change-management processes that verify issue resolution

Question 13.98: How does a network administrator securely manage an AP in lightweight mode?
_A. using the WLC GUI via HTTPS_
B. using the CLI via an out-of-band connection
C. using the CLI via a virtual interface with SSH
D. using the AP GUI via an in-band SSH connection

Question 13.99: Which protocol is implemented when an organization must verify network performance, troubleshoot issues and use an agent to communicate between monitoring tools and end devices?
A. FTP
B. NTP
C. NFS
_D. SNMP_

Question 13.100: What is the difference between AAA authentication and authorization?
A. Authentication controls the system processes a user accesses, and authorization logs the activities the user initiates.
B. Authentication identifies a user who is attempting to access a system, and authorization validates the user s password
_C. Authentication identifies and verifies a user who is attempting to access a system, and authorization controls the tasks the user performs_
D. Authentication verifies a username and password, and authorization handles the communication between the authentication agent and the user database

Question 13.101: Which syslog message logging level displays interface line protocol up/down events?
A. informational
B. alerts
C. debugging
_D. notifications_

Question 13.102: Which standard is required when more than one distribution system port and only one IP address are configured for a Cisco WLC?
_A. 802.3ad_
B. 802.1q
C. 802.1d
D. 802.1af

## Part 14

Question 14.1: A network administrator wants the syslog server to filter incoming messages into different files based on their importance. Which filtering criteria must be used?
A. message body
B. process ID
_C. level_
D. facility

Question 14.2: What is a characteristic of frame switching?
A. populates the ARP table with the egress port
B. drops received MAC addresses not listed in the address table
_C. stores and forwards frames in a buffer and uses error checking_
D. rewrites the source and destination MAC address

Question 14.3: Refer to the exhibit. What is represented by the word “R20” within this JSON schema?
_A. value_
B. array
C. key
D. object

Question 14.4: Refer to the exhibit. Router R1 receives static routing updates from routers A, B, C. and D. The network engineer wants R1 to advertise static routes in OSPF area 1. Which summary address must be advertised in OSPF?
A. 10.1.40.0/25
B. 10.1.40.0/24
C. 10.1.41.0/25
_D. 10.1.40.0/23_

Question 14.5: Refer to the exhibit. Which switch becomes the root bridge?
A. SW 1
Bridge Priority – 28672
mac-address 00:10:a1:51:57:51
B. SW 2
Bridge Priority – 28672
mac-address 00:10:a1:82:03:94
C. SW3
Bridge Priority – 12288
mac-address 00:10:a1:95:2b:77
_D. SW4
Bridge Priority – 12288
mac-address 00:10:a1:03:42:e8_

Question 14.6
Which two values or settings must be entered when configuring a new WLAN in the Cisco Wireless LAN Controller GUI? (Choose two)
A. management interface settings
B. QoS settings
C. ip address of one or more access points
_D. SSID_
_E. Profile name_

Question 14.10: What must be considered before deploying virtual machines?
A. location of the virtual machines within the data center environment
B. whether to leverage VSM to map multiple virtual processors to two or more virtual machines
_C. resource limitations, such as the number of CPU cores and the amount of memory_
D. support for physical peripherals, such as monitors, keyboards, and mice

Question 14.11: What is the role of the root port in a switched network?
A. It replaces the designated port when the designated port fails
_B. It is the best path to the root from a nonroot switch_
C. It replaces the designated port when the root port fails
D. It is administratively disabled until a failover occurs

Question 14.12: Which type of encryption does WPA1 use for data protection?
A. AES
_B. TKIP_
C. PEAP
D. EAP

Question 14.13: Refer to the exhibit. Packets are flowing from 192.168.10.1 to the destination at IP address 192.168.20.75. Which next hop will the router select for the packet?
A. 10.10.10.1
_B. 10.10.10.11_
C. 10.10.10.12
D. 10.10.10.14

Question 14.14
What happens when a switch receives a frame with a destination MAC address that recently aged out?
A. The switch references the MAC address aging table for historical addresses on the port that received the frame
B. The switch floods the frame to all ports in all VLANs except the port that received the frame
C. The switch drops the frame and learns the destination MAC address again from the port that received the frame
_D. The switch floods the frame to all ports in the VLAN except the port that received the frame_

Question 14.15
What is used to identify spurious DHCP servers?
A. DHCPREQUEST
_B. DHCPDISCOVER_
C. DHCPACK
D. DHCPOFFER

Question 14.16: Refer to the exhibit. Which per-hop QoS behavior is R1 applying to incoming packets?
_A. queuing_
B. marking
C. shaping
D. policing

Question 14.17: What is the temporary state that switch ports always enter immediately after the boot process when Rapid PVST+ is used?
_A. discarding_
B. listening
C. forwarding
D. learning

Question 14.18: A wireless access point is needed and must meet these requirements:

- “zero-touch” deployed and managed by a WLC
- process only real-time MAC functionality
- used in a split-MAC architecture.
  Which access point type must be used?
  A. autonomous
  _B. lightweight_
  C. mesh
  D. cloud-based

Question 14.19: Which components are contained within a virtual machine?
A. physical resources, including the NIC, RAM, disk, and CPU
_B. configuration files backed by physical resources from the Hypervisor_
C. applications running on the Hypervisor
D. processes running on the Hypervisor and a guest OS

Question 14.20
Refer to the exhibit.

An engineer assigns IP addressing to the current VLAN with three PCs. The configuration must also account for the expansion of 30 additional VLANs using the same Class C subnet for subnetting and host count. Which command set fulfills the request while reserving address space for the expected growth?
A. Switch(config)#interface vlan 10
Switch(config-if)#ip address 192.168.0.1 255.255.255.252
_B. Switch(config)#interface vlan 10
Switch(config-if)#ip address 192.168.0.1 255.255.255.248_
C. Switch(config)#interface vlan 10
Switch(config-if)#ip address 192.168.0.1 255.255.255.0
D. Switch(config)#interface vlan 10
Switch(config-if)#ip address 192.168.0.1 255.255.255.128

Question 14.21: Which interface IP address serves as the tunnel source for CAPWAP packets from the WLC to an AP?
A. service
B. trunk
_C. AP-manager_
D. virtual AP connection

Question 14.22: What does a switch search for in the CAM table when forwarding a frame?
A. source MAC address and aging time
B. destination MAC address and flush time
C. source MAC address and source port
_D. destination MAC address and destination port_

Question 14.23: Which type of hypervisor operates without an underlying OS to host virtual machines?
_A. Type 1_
B. Type 2
C. Type 3
D. Type 12

Question 14.24: Refer to the exhibit. What does the host do when using the IPv4 Preferred function?
A. It continues to use a statically assigned IPv4 address
B. It forces the DNS server to provide the same IPv4 address at each renewal
_C. It requests the same IPv4 address when it renews its lease with the DHCP server_
D. It prefers a pool of addresses when renewing the IPv4 host IP address

Question 14.26: How does MAC learning function?
A. restricts ports to a maximum of 10 dynamically-learned addresses
B. increases security on the management VLAN
_C. associates the MAC address with the port on which it is received_
D. drops received MAC addresses not listed in the address table

Question 14.27: What are two capabilities provided by VRRP within a LAN network? (Choose two)
_A. load sharing_
B. bandwidth optimization
C. dynamic routing updates
_D. redundancy_
E. granular QoS

Question 14.29: Refer to the exhibit. A network engineer executes the show ip route command on router D. What is the next hop to network 192.168.1.0/24 and why?
A. The next hop is 10.0.2.1 because it is a link-state routing protocol
_B. The next hop is 10.0.0.1 because it has a better administrative distance_
C. The next hop is 10.0.2.1 because it uses distance vector routing
D. The next hop is 10.0.0.1 because it has a higher metric

Question 14.32: Refer to the exhibit. Which interface is used to send traffic to the destination network?
_A. G0/6_
B. G0/3
C. G0/16
D. G0/23

Question 14.33: Which AP mode is used for capturing wireless traffic and forwarding that traffic to a PC that is running a packet analyzer?
A. monitor
_B. sniffer_
C. bridge
D. rouge detector

Question 14.34: What is a characteristic of a Layer 2 switch?
A. provides a single broadcast domain for all connected devices
B. tracks the number of active TCP connections
C. offers one collision domain for all connected devices
_D. makes forwarding decisions based on MAC addresses_

Question 14.35: What is a characteristic of frame switching?
A. inspects and drops frames from unknown destinations
_B. floods unknown destinations to all ports except the receiving port_
C. forwards frames to a neighbor port using CDP
D. protects against denial of service attacks

Question 14.36: Which interface is used for out-of-band management on a WLC?
A. dynamic
B. management
_C. service port_
D. virtual

Question 14.37: Refer to the exhibit. Which interface condition is occurring in this output?
A. bad NIC
B. broadcast storm
C. queueing
_D. duplex mismatch_ ("480 collisions")

Question 14.38: Refer to the exhibit. Which interface is used to send traffic to the destination network?
_A. F0/2_
B. F0/20
C. F0/12
D. F0/10

Question 14.39: Why would an administrator choose to implement an automated network management solution?
A. to enable ‘box by box” configuration and deployment
B. to limit recurrent management costs
_C. to reduce operational costs_
D. to support simpler password policies

Question 14.40: Refer to the exhibit. A Cisco WLC administrator is creating a new wireless network with enhanced SSID security. The new network must operate at 2.4 GHz with 54 Mbps of throughput. Which set of tasks must the administrator perform to complete the configuration?
A. Check the Broadcast SSID check box and set the Radio Policy to 802.11a only.
B. Uncheck the Broadcast SSID check box and set the Radio Policy to 802.11a/g only.
C. Check the Broadcast SSID check box and set the Radio Policy to 802.11g only.
_D. Uncheck the Broadcast SSID check box and set the Radio Policy to 802.11g only._

Question 14.41: Under which condition is TCP preferred over UDP?
_A. TCP is used when data reliability is critical, and UDP is used when missing packets are acceptable_
B. UDP is used when low latency is optimal, and TCP is used when latency is tolerable
C. UDP is used when data is highly interactive, and TCP is used when data is time-sensitive
D. TCP is used when dropped data is more acceptable, and UDP is used when data is accepted out-of-order

Question 14.42: Which device protects an internal network from the Internet?
_A. firewall_
B. Layer 2 switch
C. router
D. access point

Question 14.43: An engineer must update the configuration on two PCs in two different subnets to communicate locally with each other. One PC is configured with IP address 192.168.25.128/25 and the other with 192.168.25.100/25. Which network mask must the engineer configure on both PCs to enable the communication?
A. 255.255.255.248
_B. 255.255.255.0_
C. 255.255.255.252
D. 255.255.255.224

Question 14.44: Which type of protocol is VRRP?
A. uses dynamic IP address assignment
B. uses a destination IP address 224.0.0.102 for router-to-router communication
C. uses Cisco-proprietary First Hop Redundancy Protocol
_D. allows two or more routers to act as a default gateway_

Question 14.45: How are RFC 1918 IP addresses used in a network?
A. They are used instead of public addresses for increased security.
B. They are used by internet service providers to route over the internet.
C. They are used to access the internet from the internal network without conversion.
_D. They are used with NAT to preserve public IPv4 addresses._

Question 14.46: A network architect is deciding whether to implement Cisco autonomous access points or lightweight access points. Which fact about firmware updates must the architect consider?
_A. Unlike autonomous access points, lightweight access points require a WLC to implement remote firmware updates._
B. Unlike lightweight access points, autonomous access points can recover automatically from a corrupt firmware update
C. Unlike lightweight access points, which require redundant WLCs to support firmware upgrades, autonomous access points require only one WLC.
D. Unlike autonomous access points, lightweight access points store a complete copy of the current firmware for backup.

Question 14.47: A DHCP pool has been created with the name CONTROL. The pool uses the next to last usable IP address as the default gateway for the DHCP clients. The server is located at 172.16.32.15. What is the next step in the process for clients on the 192.168.52.0/24 subnet to reach the DHCP server?
A. ip forward-protocol udp 137
B. ip default-network 192.168.52.253
C. ip default-gateway 192.168.52.253
_D. ip helper-address 172.16.32.15_

Question 14.48: Refer to the exhibit. When router R1 receives a packet with destination IP address 10.56.0.62, through which interface does it route the packet?
A. Vlan59
B. Vlan60
C. Null0
_D. Vlan58_

Question 14.49: Refer to the exhibit. A network engineer is verifying the settings on a new OSPF network. All OSPF configurations use the default values unless otherwise indicated. Which router does the engineer expect will be elected as the DR when all devices boot up simultaneously?
A. R1
B. R2
C. R3
_D. R4_

Question 14.50: Refer to the exhibit. What is the issue with the interface GigabitEthernet0/0/1 ?
A. cable disconnect
_B. duplex mismatch_ (“line protocol is down”, “50 collisions”, “half duplex” )
C. port security
D. high throughput

Question 14.51: Refer to the exhibit. Which type of JSON data is shown?
A. string
B. sequence
_C. object_
D. Boolean

Question 14.52: By default, how long will the switch continue to know a workstation MAC address after the workstation stops sending traffic?
A. 200 seconds
_B. 300 seconds_
C. 600 seconds
D. 900 seconds

Question 14.53: Refer to the exhibit. Rapid PVST+ mode is on the same VLAN on each switch. Which switch becomes the root bridge and why?
A. SW3, because its priority is the highest
B. SW2, because its MAC address is the highest
_C. SW4, because its priority is highest and its MAC address is lower_
D. SW1, because its priority is the lowest and its MAC address is higher

Question 14.55: Which selections must be used on the WLC when implementing a RADIUS server for wireless authentication?
A. Client Exclusion and SSH
B. Network Access Control State and SSH
C. 802.1x and the MAC address of the server
_D. AAA Override and the IP address of the server_

Question 14.56: How does a hub handle a frame traveling to a known destination MAC address differently than a switch?
A. The hub forwards the frame to all ports in the FIB table, and a switch forwards the frame the destination MAC is known.
_B. The hub forwards the frame to all ports, and a switch forwards the frame to the known destination._
C. The hub forwards the frame using the information in the MAC table, and a switch uses data in its routing table.
D. The hub forwards the frame only to the port connected to the known MAC address,and a switch forwards the frame to all ports.

Question 14.57: What is the purpose of an ESSID?
A. It provides greater security than a standard SSID.
B. It supports fast roaming features such as 802.11 r, 802.11k, and 802.11v.
C. It serves as the wireless MAC address of the access point.
_D. It allows multiple access points to provide a common network for client connections._

Question 14.58: Which port-security violation mode drops traffic from unknown MAC addresses and forwards an SNMP trap?
_A. restrict_
B. protect
C. shutdown VLAN
D. shutdown

Question 14.59: Which physical component is distributed among multiple virtual machines running on the same hypervisor?
_A. hardware resources_
B. network interfaces
C. backplane network
D. external storage

Question 14.60: Which cable type must be used when connecting two like devices together using these criteria?

- Pins 1 to 3 and 2 to 6 are required.
- Auto detection MDI-X is unavailable.
  A. straight-through
  B. console
  _C. crossover_
  D. rollover

Question 14.61: PC1 tries to send traffic to newly installed PC2. The PC2 MAC address is not listed in the MAC address table of the switch, so the switch sends the packet to all ports in the same VLAN. Which switching concept does this describe?
A. MAC address aging
B. MAC address table
C. spanning-tree protocol
_D. frame flooding_

Question 14.64: Which two tasks support the physical access control element of a security program? (Choose two)
_A. Deploy a video surveillance system_
B. Run a workshop on corporate security policies
_C. Implement badge access to critical locations_
D. Develop slideshows about new security regulations
E. Disperse information about how to protect the organization’s confidential data

Question 14.66: Which interface condition is occurring in this output?
A. broadcast storm
B. bad NIC
_C. queueing_
D. duplex mismatch

Question 14.67
Network security team noticed that an increasing number of employees are becoming victims of phishing attacks. Which security program should be implemented to mitigate the problem?
_A. user awareness training_
B. email system patches
C. software firewall enabled on all PCs
D. physical access control

Question 14.68: How does IPsec provide secure networking for applications within an organization?
A. It leverages TFTP providing secure file transfers among peers on the network.
B. It provides GRE tunnels to transmit traffic securely between network nodes.
_C. It enables sets of security associations between peers._
D. It takes advantage of FTP to secure file transfers between nodes on the network.

Question 14.69: Company has decided to require multifactor authentication for all systems. Which set of parameters meets the requirement?
_A. personal 10-digit PIN and RSA certificate_
B. complex password and personal 10-digit PIN
C. password of 8 to 15 characters and personal 12-digit PIN
D. fingerprint scanning and facial recognition

Question 14.70: What should a network administrator consider when deciding to implement automation?
_A. Manual changes frequently lead to configuration errors and inconsistencies._
B. Network automation typically is limited to the configuration and management of virtual devices within a network.
C. Network automation typically increases enterprise management operating costs.
D. Automated systems may have difficulty expanding network changes at scale.

Question 14.71: Which capability does TFTP provide?
_A. loads configuration files on systems without data storage devices_
B. provides secure file access within the LAN
C. provides encryption mechanisms for file transfer across a WAN
D. provides authentication for data communications over a private data network

Question 14.72: Refer to the exhibit. The switch cat9k-acc-1 connects users to the campus LAN. Printing services are inaccessible through the network. Which interface issue is causing the connectivity problems?
_A. A bad checksum is causing Ethernet frames to drop._
B. Excessive collisions are causing dropped frames.
C. A large number of broadcast packets are resulting in a port reset.
D. The interface output queue cannot process the Ethernet frames.

Question 14.73: Which connection type is used when an engineer connects to an AP without a configured IP address or dial-up number to manage the device?
A. VIY
_B. console_
C. AUX
D. Ethernet

Question 14.74: Refer to the exhibit. A network engineer must configure the WLC to allow only DHCP and DNS packets for User1 and User2. Which configuration must be used?
A. Enable Web Authentication for 802.1X standard in the Layer 2 Security configuration
B. Enable Fallback Policy with MAC filtering under the Layer 3 Security configuration
_C. Enable Web policy and Authentication in the Layer 3 Security configuration_
D. Enable Web Authentication under the AAA Server configuration on the WLAN

Question 14.75: Which type of wired port is required when an AP offers one unique SSID, passes client data and management traffic, and is in autonomous mode?
A. default
B. trunk
_C. access_
D. LAG

Question 14.76: Refer to the exhibit. VoIP is being implemented in the network using VLAN ID 73 and named “VoIP”. Each user needs a Cisco IP phone at their desk. Switchport e0/0 has been configured as an access port in the data VLAN. Cisco Discovery Protocol is enabled globally. Which command sequence completed the configuration?
A. Option A
B. Option B
_C. Option C_
D. Option D

Question 14.77: Refer to the exhibit. PC A is communicating with another device at IP address 10.227.151.255.Through which router does router Y route the traffic?
A. router A
B. router B
C. router C
_D. router D_

Question 14.78: Refer to the exhibit. What is preventing host A from reaching the internet?
A. LAN and WAN network segments are different.
B. IP address assignment is incorrect.
C. The default gateway should be the first usable IP address.
_D. The domain name server is unreachable._

Question 14.80: Refer to the exhibit. An LACP EtherChannel between two directly connected switches is in the configuration process. Which command must be configured on switch SW2s Gi0/1-2 interfaces to establish the channel to SW1?
A. channel-group 1 mode desirable
B. channel-group 1 mode on
_C. channel-group 1 mode active_
D. channel-group 1 mode auto

Question 14.81: An on-site service desk technician must verify the IP address and DNS server information on a user’s Windows computer. Which command must the technician enter at the command prompt on the user’s computer?
_A. ipconfig /all_
B. show interface
C. netstat -r
D. ifconfig -a

Question 14.82: What are two functions of DHCP servers? (Choose two)
_A. support centralized IP management_
B. issue DHCPDISCOVER messages when added to the network
C. respond to client DHCPOFFER requests by Issuing an IP address
D. prevent users from assigning their own IP addresses to hosts
_E. assign dynamic IP configurations to hosts in a network_

Question 14.83: Which SNMP message type is reliable and precedes an acknowledgment response from the SNMP manager?
_A. Inform_
B. Get
C. Traps
D. Set

Question 14.84
When more than one AP-Manager interface is provisioned on a wireless LAN controller, how is the request handled by the AP?
A. The discovery response from the AP to the AP-Manager interface disables the WLAN port
B. The AP join request fails and must be configured statically on the AP-Manager interface
C. The first AP-Manager interface to respond is chosen by the AP
_D. The AP-Manager with the fewest number of APs is used by the AP to join_

Question 14.85: What is a service that is provided by a wireless controller?
A. It issues IP addresses to wired devices.
_B. It manages interference in a dense network._
C. It provides Layer 3 routing between wired and wireless devices.
D. It mitigates threats from the internet.

Question 14.87: Refer to the exhibit. Which address will the client contact to renew their IP address when the current lease expires?
A. 192.168.25.103
_B. 192.168.25.100_
C. 192.168.25.1
D. 192.168.25.254

Question 14.88: Refer to the exhibit. A secondary route is required on router R1 to pass traffic to the LAN network on R2 if the primary link fails. Which command must be entered to configure the router?
A. ip route 10.0.2.0 256.255.255.248 null0 93
B. ip route 10.0.2.0 255.255.255.240 10.0.0.6 91
C. ip route 10.0.2.0 255.255.255.240 10.0.0.7 92
_D. ip route 10.0.2.0 255.255.255.248 10.0.0.6 91_

Question 14.90: Refer to the exhibit. What is missing from this output for it to be executed?
A. square bracket ( [ ) at the beginning
_B. curly brace ( } ) at the end_
C. double quotes (” “) around the “Cisco Devices” string
D. exclamation point (!) at the beginning of each line

Question 14.91: Refer to the exhibit. The LACP EtherChannel is configured, and the last change is to modify the interfaces on SwitchA to respond to packets received, but not to initiate negotiation. The interface range gigabitethernet0/0/0-15 command is entered. What must be configured next?
A. SwitchA(config-if-range)#channel-group 1 mode desirable
_B. SwitchA(config-if-range)#channel-group 1 mode passive_
C. SwitchA(config-if-range)#channel-group 1 mode auto
D. SwitchA(config-if-range)#channel-group 1 mode active

Question 14.92: What are two benefits for using private IPv4 addressing? (Choose two)
A. They supply redundancy in the case of failure
_B. They alleviate the shortage of public IPv4 addresses._
_C. They provide a layer of security from Internet threats._
D. They offer Internet connectivity to endpoints on private networks
E. They allow for Internet access from IoT devices

Question 14.93: Which EtherChannel mode must be configured when using LAG on a WLC?
_A. On_
B. active
C. auto
D. passive

Question 14.94: Refer to the exhibit. The engineer configured the VLANs on the new AccSw2 switch. A router on-a-stick is connected to both switches. How must the ports be configured on AccSw2 to establish full connectivity between the two switches and for Server1?
A. Option A
_B. Option B_
C. Option C
D. Option D

Question 14.95: A network administrator is evaluating network security in the aftermath of an attempted ARP spoofing attack. If Port-channel1 is the uplink interface of the access-layer switch toward the distribution-layer switch, which two configurations must the administrator configure on the access-layer switch to provide adequate protection? (Choose two)
A. Option A
_B. Option B_
C. Option C
D. Option D
_E. Option E_

Question 14.96: What is the maximum number of concurrent Telnet sessions that a Cisco WLC supports?
A. 3
_B. 5_
C. 6
D. 15

Question 14.97: What are two functions of a firewall within an enterprise? (Choose two)
A. It serves as an endpoint for a site-to-site VPN in standalone mode.
_B. It enables traffic filtering based on URLs._
_C. It provides support as an endpoint for a remote access VPN in multiple context mode._
D. It offers Layer 2 services between hosts.
E. It enables wireless devices to connect to the network.

Question 14.98: How does Chef configuration management enforce a required device configuration?
_A. The installed agent on the device connects to the Chef Infra Server and pulls its required configuration from the cookbook._
B. The Chef Infra Server uses its configured cookbook to push the required configuration to the remote device requesting updates.
C. The Chef Infra Server uses its configured cookbook to alert each remote device when it is time for the device to pull a new configuration.
D. The installed agent on the device queries the Chef Infra Server and the server responds by pushing the configuration from the cookbook.

Question 14.99: What is an Ansible inventory?
A. collection of actions to perform on target devices, expressed in YAML format
B. unit of Python code to be executed within Ansible
C. device with Ansible installed that manages target devices
_D. file that defines the target devices upon which commands and tasks are executed_

Question 14.100: Which two host addresses are reserved for private use within an enterprise network? (Choose two)
_A. 10.172.76.200_
B. 12.17.1.20
C. 172.15.2.250
D. 192.169.32.10
_E. 172.31.255.100_

Question 14.101: What is the recommended switch load-balancing mode for Cisco WLCs?
A. source-destination MAC address
B. destination IP address
C. destination MAC address
_D. source-destination IP address_

Question 14.102: Refer to the exhibit.
Which configuration enables SW2 to establish an LACP EtherChannel?
A. Option A
_B. Option B_
C. Option C
D. Option D

Question 14.103: What is a function of FTP?
A. relies on the well-known UDP port 69 for data transfer
B. uses block numbers to identify and mitigate data-transfer errors
_C. uses two separate connections for control and data traffic_
D. always operates without user connection validation

Question 14.104: Refer to the exhibit. What is the metric for the route to the 192.168.10.33 host?
A. 84
B. 110
C. 192
_D. 193_

Question 14.105: Which two statements distinguish authentication from accounting? (Choose two)
_A. Only authentication challenges users for their credentials and returns a response._
B. Only authentication supports user-activity audits.
_C. Only authentication validates “who you are.”_
D. Only authentication records the duration of a user’s connection.
E. Only authentication provides supporting information for billing users.

Question 14.106: Which set of methods is supported with the REST API?
A. GET, PUT, ERASE, CHANGE
B. GET, POST, ERASE, CHANGE
C. GET, POST, MOD, ERASE
_D. GET, PUT, POST, DELETE_

## Part 15

Question 15.1: Refer to the exhibit. A network engineer is configuring a WLAN to use a WPA2 PSK and allow only specific clients to join. Which two actions must be taken to complete the process? (Choose two)
A. Enable the CCKM option for Authentication Key Management
B. Enable the 802.1X option for Authentication Key Management
_C. Enable the WPA2 Policy option_
D. Enable the OSEN Policy option
_E. Enable the MAC Filtering option_

Question 15.2: What is the RFC 4627 default encoding for JSON text?
_A. UTF-8_
B. GB18030
C. UCS-2
D. Hex

Question 15.3: Refer to the exhibit. Which type of JSON data is represented?
A. number
_B. array_
C. object
D. string

Question 15.4: A network engineer is configuring a new router at a branch office. The router is connected to an upstream WAN network that allows the branch to communicate with the head office. The central time server with IP address 172.24.54.8 is located behind a firewall at the head office. Which command must the engineer configure so that the software clock of the new router synchronizes with the time server?
A. ntp client 172.24.54.8
B. ntp master 172.24.54.8
C. ntp peer 172.24.54.8
_D. ntp server 172.24.54.8_

Question 15.5: Refer to the exhibit. Router-WAN1 has a new connection via Gi0/0 to the ISP. Users running the web applications indicate that connectivity is unstable to the internet. What is causing the interface issue?
A. Broadcast packets are rejected because ARP timeout is enabled
B. The receive buffer is full due to a broadcast storm
_C. Frames are discarded due to a half-duplex negotiation_ (“input errors” 100 and high “collision” 100)
D. Small frames less than 64 bytes are rejected due to size

Question 15.6: Refer to the exhibit. All routers in the network are configured correctly, and the expected routes are being exchanged among the routers. Which set of routes are learned from neighbors and installed on router 2?
A. Option A
B. Option B
C. Option C
_D. Option D_

Question 15.7: Refer to the exhibit. Which switch in this configuration will be elected as the root bridge?
A. SW1: 0C:4A:82.:65:62:72
B. SW2: 0C:0A:A8:1A:3C:9D
C. SW3: 0C:0A:18:81:B3:19
_D. SW4: 0C:0A:05:22:05:97_

Question 15.8: Refer to the exhibit. How will the device handle a packet destined to IP address 100.100.100.100?
_A. It will always prefer the static route over dynamic routes and choose the route
S 100.100.0.0/16 [1/0] via 192.168.4.1_
B. It will choose the route with the lowest metric
R 100.0.0.0/8 [120/2] via 192.168.3.1, 00:00:13, Ethernet0/3
C. It will choose the route with the highest metric
D 100.100.100.0/24 [90/435200] via 192.168.2.1, 00:00:13, Ethernet0/2
D. It will choose the route with the longest match
O 100.100.100.100/32 [110/21] via 192.168.1.1, 00:05:57, Ethernet0/1

Question 15.9: Refer to the exhibit. Network services must be enabled on interface Gi1/0/34. Which configuration meets the needs for this implementation?
A. Option A
B. Option B
C. Option C
_D. Option D_

Question 15.10: Refer to the exhibit. Which configuration parameter is preventing host С from reaching the internet?
A. IP address assignment
_B. default gateway_
C. IP network mask
D. automatic DNS

Question 15.11
Refer to the exhibit. Which switch in this configuration will be elected as the root bridge?
SW1 0С:0A:05:22:05:97
SW2 0С:4A:82:07:57:58
SW3 0C:0A:A8:1A:3C:9D
SW4 0С:0A:18:A1:B3:19
A. SW1
B. SW2
C. SW3
_D. SW4_

Question 15.12: Refer to the exhibit. An engineer is creating a secure preshared key based SSID using WPA2 for a wireless network running on 2.4 GHz and 5 GHz. Which two tasks must the engineer perform to complete the process? (Choose two)
A. Select the 802.1x option for Auth Key Management
_B. Select the AES (CCMP128) option for WPA2 WPA3 Encryption_
C. Select the AES option for Auth Key Management
_D. Select the PSK option for Auth Key Management_
E. Select the WPA Policy option.

Question 15.13: Which Rapid PVST+ port state does a port operate in without receiving BPDUs from neighbors or updating the address database?
A. listening
B. forwarding
_C. disabled_
D. blocking

Question 15.14: Which protocol should be used to transfer large files on a company intranet that allows TCP 20 and 21 through the firewall?
_A. FTP_
B. REST API
C. TFTP
D. SMTP

Question 15.15: Which alternative to password authentication is implemented to allow enterprise devices to log in to the corporate network?
_A. digital certificates_
B. magic links
C. one-time passwords
D. 90-day renewal policies

Question 15.16: Which guideline helps to create a secure password policy?
A. forbidding users from storing passwords in a password manager
B. allowing passwords used by service accounts to never expire
_C. requiring complex, lengthy passwords instead of simple, short ones_
D. restricting password sharing to a very small group

Question 15.17: Refer to the exhibit.
A. Option A
_B. Option B_
C. Option C
D. Option D

Question 15.18: How does machine learning contribute to the effectiveness of intrusion detection systems?
A. It assigns security clearance levels.
B. It dictates security policy updates.
C. It monitors for outdated software.
_D. It identifies patterns indicating intrusions._

Question 15.19: Refer to the exhibit. The route for 10.220.100.96/27 has been very unstable. The same route has four backups to routers A, B, C, and D via the respective methods. The routing protocol defaults for router Y have not been changed. When the current route for 10.220.100.96/27 becomes unavailable, which router will router Y use to route traffic to 10.220.100.96/27?
A. router A
_B. router B_
C. router C
D. router D

Question 15.20: What must be considered when planning an IPsec VPN deployment?
_A. IPsec transport mode allows intermediate devices to see the final destination of the packet_
B. In IPsec tunnel mode, only the IP payload is encrypted
C. IPsec transport mode increases GRE tunnel security over tunnel mode.
D. IPsec transport mode does not encrypt the Layer 4 header, which allow full examination of the packet

Question 15.21: Where are the real-time control functions processed in a split MAC architecture?
A. central WLC
_B. individual AP_
C. centralized cloud management platform
D. client device

Question 15.22: Which group of channels in the 802.11b/g/n/ac/ax 2.4 GHz frequency bands are nonoverlapping channels?
A. channels 1,6, and 10
B. channels 1,5, and 11
_C. channels 1,6, and 11_
D. channels 1,5, and 10

Question 15.23: Which IPsec mode encapsulates the entire IP packet?
_A. tunnel_
B. transport
C. SSL VPN
D. Q-in-Q

Question 15.24: Which mechanism allows WPA3 to provide a higher degree of security than its predecessors?
A. automatic device pairing
B. special-character support in preshared keys
C. certificate-based authentication
_D. SAE password-based key exchange_

Question 15.25: Refer to the exhibit. Which switch in this configuration will be elected as the root bridge?
SW1 0С:B4:86:22:42:37
SW2 0С:0B:15:22:05:97
SW3 0C:0B:15:1A:3C:9D
SW4 0С:B0:18:A1:B3:19
A. SW1
B. SW2
_C. SW3_
D. SW4

Question 15.26: Refer to the exhibit. Which switch in this configuration will be elected as the root bridge?
SW1 0С:E4:85:71:03:80
SW2 0С:0E:1A:22:05:97
SW3 0C:E0:A1:1A:3C:9D
SW4 0С:00:18:A1:B3:19
A. SW1
_B. SW2_
C. SW3
D. SW4

Question 15.27
Which authentication method requires the user to provide a physical attribute to authenticate successfully?
A. certificate
B. password
C. multifactor
_D. biometric_

Question 15.28: Refer to the exhibit. An engineer is using the Cisco WLC GUI to configure a WLAN for WPA2 encryption with AES and preshared key Cisc0123456. After the engineer selects the WPA + WPA2 option from the Layer 2 Security drop-down list, which two tasks must they perform to complete the process? (Choose two)
_A. Select PSK from the Auth Key Mgmt drop-down list, set the PSK Format to ASCII, and enter the key_
B. Select CCKM from the Auth Key Mgmt drop-down list, set the PSK Format to Hex, and enter the key
C. Select ASCII from the PSK Format drop-down list, enter the key, and leave the Auth Key Mgmt setting blank
D. Select the WPA2 Policy, AES, and TKIP check boxes
_E. Select the WPA2 Policy and AES check boxes._

Question 15.29: Which protocol does Ansible use to push modules to nodes in a network?
_A. SSH_
B. Kerberos
C. SNMP
D. Telnet

Question 15.30: Which function does an iterative DNS query serve in the domain name resolution process?
A. Encrypt communication automatically between DNS clients and servers.
_B. Allow a DNS client to contact several DNS servers until the correct information is found._
C. Obtain information directly from all root DNS servers configured within the scope.
D. Update records dynamically across multiple DNS servers at the same time.

Question 15.31: What is the difference between controller-based networks and traditional networks as they relate to control-plane and/or data-plane functions?
_A. Controller-based networks centralize all important control-plane functions, and traditional networks distribute control-plane functions._
B. Traditional networks centralize all important control-plane functions, and controller-based networks distribute control-plane functions.
C. Traditional networks centralize all important data-plane functions, and controller-based networks distribute data-plane functions.
D. Controller-based networks centralize all important data-plane functions, and traditional networks distribute data-plane functions.

Question 15.32: Which factor must be considered during the implementation of an IPsec VPN?
A. IPsec transport mode leaves the Layer 4 header unencrypted for inspection.
B. IPsec transport mode increases GRE tunnel security over tunnel mode.
C. In IPsec tunnel mode, only the IP payload is encrypted.
_D. In IPsec tunnel mode, the entire original IP datagram is encrypted._

Question 15.33: What is the default interface for in-band wireless network management on a WLC?
_A. wireless management_
B. redundant port
C. service port
D. out-of-band

Question 15.34: Why choose Cisco DNA Center for automated lifecycle management?
A. to perform upgrades without service interruption
B. to provide software redundancy in the network
_C. to provide fast and accurate deployment of patches and updates_
D. to allow SSH access to all nodes in the network

Question 15.35: What are the two main capabilities of tunnel mode in IPsec site-to-site VPNs ? (Choose two.)
A. It authenticates the data field in original packet.
_B. It encrypts the complete IP packet with the data field._
C. It secures only the data field in the packet.
D. It transmits with the original packet header visible.
_E. It inserts a new IPsec header with new IP address._

Question 15.36: How does AI contribute to network traffic analysis?
A. It simplifies traffic route mapping.
B. It enhances data packet delivery speeds.
_C. It analyzes patterns for anomaly detection._
D. It eliminates network threats.

Question 15.37: Which type of traffic is sent with pure IPsec?
A. spanning-tree updates between switches that are at two different sites
_B. unicast messages from a host at a remote site to a server at headquarters_
C. broadcast packets from a switch that is attempting to locate a MAC address at one of several remote sites
D. multicast traffic from a server at one site to hosts at another location

Question 15.38: Refer to the exhibit. With a reference bandwidth of 100 Gb on all routers, which path does router Y use to get to network 192.168.1.0/24?
A. router C > D > A > F
B. router E > B > F
C. router E > F
_D. router C > D > A > B > F_

Question 15.39: What is a characteristic of RSA?
A. It requires both sides to have identical keys.
B. it is a private-key gencryption algorithm.
C. It uses preshared keys for encryption.
_D. it is a public-key cryptosystem._

Question 15.40: What is a functionality of the control plane in the network?
A. It provides CLI access to the network device.
_B. It exchanges topology information with other routers._
C. It looks up an egress interface in the forwarding information base.
D. It forwards traffic to the next hop.

Question 15.41
What is the purpose of the URI string in a REST request?
A. to specify the way in which a remote resource is modified
_B. to identify a resource on a target server_
C. to respond with the data content encoding for a request
D. to transport data or payload to a remote resource

Question 15.42: Refer to the exhibit. What is the prefix length for the route that router1 will use to reach host A?
A. /25
B. /27
C. /28
_D. /29_

Question 15.43
Under what condition would a FlexConnect wireless architecture be preferable over other architectural choices?
A. when the connection latency to several remote offices is anticipated to surpass 300 milliseconds
B. when there is a need for high-precision location-based services at various remote offices
_C. when centralized management is needed for several remote offices that lack individual WLCs_
D. when each remote office necessitates its own local WLC for network management

Question 15.44: Refer to the exhibit. Inter-VLAN routing is configured on SW1. Client A is running Linux as an OS in VLAN 10 with a default gateway IP 10.0.0.1 but cannot ping client B in VLAN 20 running Windows. What action must be taken to verify that client A has the correct IP settings?
_A. Run the ifconfig command on client A to confirm that its IP and subnet mask fall within 255.254.0.0._
B. Run the ipconfig command on client A and ensure that the IP address is within the host range of 10.0.0.1 – 10.0.255.254.
C. Run the ipconfig command on client A to confirm that the correct 10.0.0.1 default gateway is used.
D. Run the ifconfig command on client A to confirm that the subnet mask is set to 255.255.128.0

Question 15.45: Refer to the exhibit. This ACL is configured to allow client access only to HTTP, HTTPS, and DNS services via UDP. The new administrator wants to add TCP access to the DNS service. Which configuration updates the ACL efficiently?
A. Option A
B. Option B
C. Option C
_D. Option D_

Question 15.46: Refer to the exhibit. The Wi-Fi SSID “Office WLan” has Layer 2 Security configured with MAC filtering enabled. What additional security is provided by this specific feature?
A. There is Galois cache algorithm configured that provides strong encryption and authentication.
B. There is a strong mutual authentication used between NAC and the network devices using x.509 standard.
_C. There is an extra layer of security that ensures only authorized devices with known MAC addresses connect to the network._
D. There is a robust security mechanism configured to protect against various Layer 2 and Layer 3 attacks.

Question 15.47: What are two reasons to configure PortFast on a switch port attached to an end host? (Choose two)
A. to enable the number of MAC addresses learned on the port to 1
_B. to protect the operation of the port from topology change processes_
_C. to enable the pod to enter the forwarding state immediately when the host boots up_
D. to prevent the port from participating in Spanning Tree Protocol operations
E. to block another switch or host from communicating through the port

Question 15.48: Refer to the exhibit. The user has connectivity to devices on network 192.168.3.0/24 but cannot reach users on the network 10.10.1.0/24. What is the first step to verify connectivity?
A. Is the internet reachable?
_B. Is the default gateway reachable?_
C. Is the DNS server reachable?

Question 15.49: Which solution is appropriate when mitigating password attacks where the attacker was able to sniff the clear-text password of the system administrator?
A. next-generation firewall to keep stateful packet inspection
_B. multifactor authentication using two separate authentication sources_
C. ACL to restrict incoming Telnet sessions “admin” accounts
D. IPS with a block list of known attack vectors

Question 15.50: A network engineer starts to implement a new wireless LAN by configuring the authentication server and creating the dynamic interface. What must be performed next to complete the basic configuration?
A. Install the management interface and add the management IP.
B. Configure high availability and redundancy for the access points.
C. Enable Telnet and RADIUS access on the management interface.
_D. Create the new WLAN and bind the dynamic interface to it._

Question 15.52: Which advantage does machine learning offer for network security?
_A. It improves real-time threat detection._
B. It manages firewall rule sets.
C. It enforces password complexity requirements.
D. It controls VPN access permissions.

Question 15.53: Which AP feature provides a captive portal for users to authenticate register and accept terms before accessing the internet?
A. One-Click
_B. Hotspot_
C. Enhanced Bluetooth
D. Whole Home

Question 15.54: What does the term “split MAC” refer to in a wireless architecture?
_A. divides data link layer functions between the AP and WLC_
B. combines the management and control functions from the data-forwarding functions
C. uses different MAC addresses for 2.4 GHz and 5 GHz bands on the same AP
D. leverages two APs to handle control and data traffic

Question 15.55: Which plane is centralized in software-defined networking?
A. application
B. services
_C. control_
D. data

Question 15.56: How does machine learning improve the detection of unauthorized network access?
A. It monitors for outdated software.
B. It dictates security policy updates.
_C. It identifies patterns indicating intrusions._
D. It assigns security clearance levels.

Question 15.57: Refer to the exhibit. The My WLAN wireless LAN was configured with WPA2 Layer 2 PSK security. Which additional configuration must the administrator perform to allow users to connect to this WLAN on a different subnet called Data?
A. Enable Broadcast SSID and select data from the Interface/Interface Group drop-down list.
_B. Enable Status and select data from the Interface/Interface Group drop-down list._
C. Enable Status and set the NAS-ID to data.
D. Enable Status and enable Broadcast SSID.

Question 15.58: Refer to the exhibit. Company A wants to use a RADIUS server to service all user and device authentication attempts with a more secure and granular authentication approach. Not all client devices support dot1x authentication. Which two configuration changes must be made to accomplish the task? (Choose two)
_A. Enable AutoConfig iPSK under the Layer 2 tab._
_B. Select Authentication server under the AAA servers tab._
C. Configure Enterprise Security type under the Layer 2 tab.
D. Set Authentication under the Layer 3 tab.
E. Enable WPA2 Policy under the Layer 2 tab.

Question 15.59: A network architect planning a new Wi-Fi network must decide between autonomous, cloud-based, and split MAC architectures. Which two facts should the architect consider? (Choose two)
_A. Lightweight access points are solely used by split MAC architectures._
B. Cloud-based architectures uniquely use the CAPWAP protocol to communicate between access points and clients.
C. Each of the three architectures must use WLCs to manage their access points.
_D. All three architectures use access points to manage the wireless devices connected to the wired infrastructure._
E. Autonomous architectures exclusively use tunneling protocols to manage access points remotely.

Question 15.60: Which AP mode serves as the primary hub in a point-to-multipoint network topology?
_A. bridge_
B. SE-Connect
C. FlexConnect
D. local

Question 15.61: How does network automation help reduce network downtime?
A. Emails can be generated based on when a network admin performs a network change, which increases visibility.
_B. Configuration templates and testing can be built into implementation, which increases the success rate of a network change._
C. Changes can be implemented in parallel across multiple devices at once, which increases the speed of the change rate.
D. By using automation platforms with intent-based configuration, all changes are checked for possible outages before being implemented.

Question 15.63: What is the difference between SNMP traps and SNMP polling?
_A. SNMP traps are initiated using a push model at the network device, and SNMP polling is initiated at the server._
B. SNMP traps are used for proactive monitoring, and SNMP polling is used for reactive monitoring.
C. SNMP traps are initiated by the network management system, and network devices initiate SNMP polling.
D. SNMP traps send periodic updates via the MIB, and SNMP polling sends data on demand.

Question 15.64: Refer to the exhibit. Which functionalities will this SSID have while being used by wireless clients?
A. decreases network security against air sniffing attacks and discourages the use of complex passwords
_B. increases network security against offline dictionary attacks and discourages time-consuming brute force attacks_
C. increases network security against man in the middle attacks and discourages denial of service attacks
D. decreases network security against offline dictionary attacks and encourages easy access to the network

Question 15.65: What is the role of syslog level 7 in network device health monitoring?
A. It provides information about error conditions visible on the network device.
B. It shares normal operational messages from the network equipment.
_C. It sends outputs from various debug commands on the device._
D. It warns about emergency conditions on the network appliance.

Question 15.66: Which architecture is best for small offices with minimal wireless needs and no central management?
A. cloud-based AP
B. split MAC
_C. autonomous AP_
D. mesh network

Question 15.70: Which header must be included in a REST request from an application that requires JSON- formatted content?
_A. Content-Type: application/json_
B. Accept-Encoding: application/json
C. Accept: application/json
D. Accept-Language: application/json

Question 15.71: Why would a network administrator choose to implement RFC 1918 address space?
A. to route traffic on the internet
B. to limit the number of hosts on the network
C. to provide overlapping address space with another network
_D. to provide flexibility in the IP network design_

Question 15.72: What is the total number of users permitted to simultaneously browse the controller management pages when using the AireOS GUI?
A. 2
_B. 5_
C. 8
D. 9

Question 15.73: What is the main purpose of SSH management access?
A. To validate management access with username and domain name only
B. To allow passwords protected with HTTPS encryption to be sent
C. To support DES 56-bit and 3DES (168-bit) ciphers
_D. To enable secured access to the inbound management interface_

Question 15.74: How does automation leverage data models to reduce the operational complexity of a managed network?
A. Reduces the response time for specific requests to devices with many interfaces
_B. Allows the controller to be vendor-agnostic_
C. Categorizes traffic and provides insights
D. Streamlines monitoring using SNMP and other polling tools

Question 15.75: What is the function of generative AI in network operations?
_A. It creates synthetic network configurations._
B. It deploys network firmware updates.
C. It disables unused services.
D. It computes optimal data storage solutions.

Question 15.76: An organization developed new security policies and decided to print the policies and distribute them to all personnel so that employees review and apply the policies. Which element of a security program is the organization implementing?
A. Asset identification
_B. User training_
C. Physical access control
D. Vulnerability control

Question 15.77: Which feature, when used on a WLC, allows it to bundle its distribution system ports into one 802.3ad group?
A. QinQ
B. ISL
C. PAgP
_D. LAG_

Question 15.78: Refer to the exhibit. What is represented by the word “switch” within this JSON schema?
A. array
B. value
_C. key_
D. object

Question 15.79: What is the maximum length of characters used in an SSID?
A. 16
_B. 32_
C. 48
D. 64

Question 15.80: Which statement describes virtualization on containers?
_A. It is a type of operating system virtualization that allows the host operating system to control the different CPU memory processes._
B. It emulates a physical computer and enables multiple machines to run with many operating systems on a physical machine.
C. It separates virtual machines from each other and allocates memory, processors, and storage to compute.
D. It contains a guest operating system and virtual partition of hardware for OS and requires application libraries.

Question 15.81: Why would a network administrator implement the HSRP protocol?
_A. To provide network redundancy in the case of a router failure_
B. To use an open standard protocol that is configured on Cisco and third-party routers
C. To allow hosts in a network to use the same default gateway virtual IP when load-balancing traffic
D. To allow clients to be configured with multiple default gateway IPs

Question 15.82: Refer to the exhibit. A network engineer is adding another physical interface as a new member to the existing Port-Channel1 bundle. Which command set must be configured on the new interface to complete the process?
A. switchport mode trunk
channel-group 1 mode active
_B. no switchport
channel-group 1 mode active_
C. no switchport
channel-group 1 mode on
D. switchport
switchport mode trunk

Question 15.83: Refer to the exhibit. Configurations for the switch and PCs are complete. Which configuration must be applied so that VLANs 2 and 3 communicate back and forth?
A. interface GigabitEthernet0/0
ip address 10.10.2.10 255.255.252.0
B. interface GigabitEthernet0/0.3
encapsulation dot1Q 10
ip address 10.10.2.10 255.255.255.252
_C. interface GigabitEthernet0/0.10
encapsulation dot1Q 3
ip address 10.10.2.10 255.255.254.0_
D. interface GigabitEthernet0/0.3
encapsulation dot1Q 3 native
ip address 10.10.2.10 255.255.252.0

Question 15.84: Refer to the exhibit. During initial configuration testing, the Windows workstation PC1 cannot connect with the 172.16.2.0/24 network. Which set of actions corrects the configuration?
A. Change the IP address to 172.16.1.9 and change the DNS server to 172.16.1.12 only.
B. Change the IP address to 172.16.1.6 and change the DNS servers to 172.16.1.12 and 172.16.1.13.
C. Change the IP address to 172.16.1.9 and change the default gateway to 172.16.1.7.
_D. Change the IP address to 172.16.1.6 and change the subnet mask to 255.255.255.248._

Question 15.85: Refer to the exhibit. Which configuration is needed to configure a WLAN with WPA2 only and with a password that is 63 characters long?
A. Disable WPA Encryption and then enable FT PSK.
B. Enable PSK using Hex format and then disable WPA Policy.
_C. Disable WPA Policy and WPA Encryption and then enable PSK using ASCII._
D. Enable PSK and FT PSK and then disable WPA Policy.

Question 15.86: Refer to the exhibit. What is the administrative distance for the advertised prefix that includes the host IP address 10.30.0.1?
A. 10.0.0.2
_B. 110_
C. 30
D. 2

Question 15.87: What is the term used to describe a method of connecting multiple switches in a network to allow traffic to flow between them, typically used for larger networks to increase bandwidth?
A. LAG
_B. trunk_
C. EtherChannel
D. access

Question 15.88: What is an advantage of using SDN versus traditional networking when it comes to security?
_A. It creates a unified control point making security policies consistent across all devices_
B. It exposes an API to configure locally per device for security policies
C. Security is managed near the perimeter of the network with firewalls, VPNs, and IPS
D. Devices communicate with each other to establish a security policy

Question 15.89 (repeated): What is a difference between RADIUS and TACACS+?
A. RADIUS is most appropriate for dial authentication, but TACACS+ can be used for multiple types of authentication
B. TACACS+ encrypts only password information and RADIUS encrypts the entire payload
_C. TACACS+ separates authentication and authorization, and RADIUS merges them_
D. RADIUS logs all commands that are entered by the administrator, but TACACS+ logs only start, stop, and interim commands

Question 15.91: Refer to the exhibit. How does router R1 forward packets destined to 10.0.4.10?
A. via 10.0.4.2
B. via FastEthernet1/1
C. via FastEthernet0/1
_D. via 10.0.0.2_

Question 15.92 (repeated): Which configuration management mechanism uses TCP port 22 by default when communicating with managed nodes?
_A. Ansible_
B. Python
C. Puppet
D. Chef

Question 15.93 (repeated): How do AAA operations compare regarding user identification, user services and access control?
A. Authorization provides access control and authentication tracks user services
_B. Authentication identifies users and accounting tracks user services_
C. Accounting tracks user services, and authentication provides access control
D. Authorization identifies users and authentication provides access control

Question 15.94 (repeated): Refer to the exhibit. What are two conclusions about this configuration? (Choose two)
A. The designated port is FastEthernet 2/1
B. This is a root bridge
_C. The spanning-tree mode is Rapid PVST+_
D. The spanning-tree mode is PVST+
_E. The root port is FastEthernet 2/1_

Question 15.95 (repeated): Refer to the exhibit. An extended ACL has been configured and applied to router R2. The configuration failed to work as intended. Which two changes stop outbound traffic on TCP ports 25 and 80 to 10.0.20.0/26 from the 10.0.10.0/26 subnet while still allowing all other traffic? (Choose two)
A. Add a “permit ip any any” statement to the beginning of ACL 101 for allowed traffic
_B. Add a “permit ip any any” statement at the end of ACL 101 for allowed traffic_
_C. The source and destination IPs must be swapped in ACL 101_
D. The ACL must be configured the Gi0/2 interface inbound on R1
E. The ACL must be moved to the Gi0/1 interface outbound on R2

Question 15.96 (repeated): R1 has learned route 10.10.10.0/24 via numerous routing protocols. Which route is installed?
A. route with the lowest cost
B. route with the next hop that has the highest IP
C. route with the shortest prefix length
_D. route with the lowest administrative distance_

Question 15.97 (repeated): Which command must be entered to configure a DHCP relay?
_A. ip helper-address_
B. ip address dhcp
C. ip dhcp relay
D. ip dhcp pool

Question 15.98: Refer to the exhibit. Which settings must be verified on workstation 1 to establish IP connectivity to server 1 using the server’s fully qualified domain name?
A. Option A
_B. Option B_
C. Option C
D. Option D

Question 15.99 (repeated): Refer to the exhibit. Which path is used by the router for Internet traffic?
A. 209.165.200.0/27
B. 10.10.10.0/28
_C. 0.0.0.0/0_
D. 10.10.13.0/24

Question 15.100 (repeated): Refer to the exhibit. If the network environment is operating normally, which type of device must be connected to interface FastEthernet 0/1?
A. DHCP client
B. access point
_C. router_
D. PC

Question 15.101 (repeated): Refer to the exhibit. To which device does Router1 send packets that are destined to host 10.10.13.165?
A. Router2
_B. Router3_
C. Router4
D. Router5

Question 15.102 (repeated): Refer to the exhibit. Router R1 is running three different routing protocols. Which route characteristic is used by the router to forward the packet that it receives for destination IP 172.16.32.1?
_A. longest prefix_
B. metric
C. cost
D. administrative distance

Question 15.104 (repeated): When a WPA2-PSK WLAN is configured in the Wireless LAN Controller, what is the minimum number of characters that is required for the passphrase?
A. 6
_B. 8_
C. 12
D. 18

Question 15.105 (repeated): Which purpose does a northbound API serve in a controller-based networking architecture?
A. communicates between the controller and the physical network hardware
B. reports device errors to a controller
C. generates statistics for network hardware and traffic
_D. facilitates communication between the controller and the applications_

Question 15.107 (repeated): Refer to the exhibit. A packet is being sent across router R1 to host 172.16.3.14. To which destination does the router send the packet?
A. 207.165.200.246 via Serial0/1/0
B. 207.165.200.254 via Serial0/0/0
_C. 207.165.200.254 via Serial0/0/1_
D. 207.165.200.250 via Serial0/0/0

Question 15.108 (repeated): Refer to the exhibit. An engineer must add a subnet for a new office that will add 20 users to the network. Which IPv4 network and subnet mask combination does the engineer assign to minimize wasting addresses?
A. 10.10.225.48 255.255.255.240
B. 10.10.225.32 255.255.255.240
C. 10.10.225.48 255.255.255.224
_D. 10.10.225.32 255.255.255.224_

Question 15.109 (repeated): What are two recommendations for protecting network ports from being exploited when located in an office space outside of an IT closet? (Choose two)
_A. shut down unused ports_
B. enable the PortFast feature on ports
_C. implement port-based authentication_
D. configure ports to a fixed speed
E. configure static ARP entries

Question 15.110 (repeated): Which technology must be implemented to configure network device monitoring with the highest security?
_A. SNMPv3_
B. IP SLA
C. NetFlow
D. syslog

Question 15.111 (repeated): Which API is used in controller-based architectures to interact with edge devices?
A. overlay
B. northbound
C. underlay
_D. southbound_

Question 15.113 (repeated): R1 has learned route 192.168.12.0/24 via IS-IS, OSPF, RIP and Internal EIGRP. Under normal operating conditions, which routing protocol is installed in the routing table?
A. IS-IS
B. RIP
_C. Internal EIGRP_
D. OSPF

Question 15.114: Which type of traffic is sent with pure IPsec?
A. multicast traffic from a server at one site to hosts at another location
B. spanning-tree updates between switches that are at two different sites
C. broadcast packets from a switch that is attempting to locate a MAC address at one of several remote sites
_D. unicast messages from a host at a remote site to a server at headquarters_

Question 15.115: Refer to the exhibit. Which prefix did router R1 learn from internal EIGRP?
A. 192.168.1.0/24
B. 192.168.3.0/24
_C. 192.168.2.0/24_
D. 172.16.1.0/24

Question 15.116 (repeated): Refer to the exhibit. An engineer is configuring NAT to translate the source subnet of 10.10.0.0/24 to any one of three addresses: 192.168.3.1, 192.168.3.2, or 192.168.3.3. Which configuration should be used?
A. Option A
B. Option B
_C. Option C_
D. Option D

Question 15.118 (repeated): How does HSRP provide first hop redundancy?
A. It load-balances traffic by assigning the same metric value to more than one route to the same destination in the IP routing table
B. It load-balances Layer 2 traffic along the path by flooding traffic out all interfaces configured with the same VLAN
C. It forwards multiple packets to the same destination over different routed links and data path
_D. It uses a shared virtual MAC and a virtual IP address to a group of routers that serve as the default gateway for hosts on a LAN_

Question 15.119 (repeated): What is a function of TFTP in network operations?
A. transfers a configuration files from a server to a router on a congested link
_B. transfers IOS images from a server to a router for firmware upgrades_
C. transfers a backup configuration file from a server to a switch using a username and password
D. transfers files between file systems on a router

Question 15.121:Refer to the exhibit. What is the value of the administrative distance for the default gateway?
A. 110
B. 0
_C. 1_
D. 10

## Part 16

Question 16.1: Refer to the exhibit. VLAN 23 is being implemented between SW1 and SW2. The command show interface ethernet0/0 switchport has been issued on SW1. Ethernet0/0 on SW1 is the uplink to SW2. Which command when entered on the uplink interface allows PC 1 and PC 2 to communicate without impact to the communication between PC 11 and PC 12?
A. switchport trunk allowed vlan 2-1001
_B. switchport trunk allowed vlan add 23_
C. switchport trunk allowed vlan 23
D. switchport trunk allowed vlan 22-23

Question 16.2: Which default condition must be considered when an encrypted mobility tunnel is used between two Cisco WLCs?
A. The tunnel uses the EoIP protocol to transmit data traffic.
B. TCP port 443 and UDP 21 are used.
C. The tunnel uses the IPsec protocol for encapsulation.
_D. Control and data traffic encryption are enabled._

Question 16.3: Why are API keys used to enforce rate limiting?
_A. to uniquely identify clients to monitor their usage patterns_
B. to encrypt data to prevent excessive usage
C. to contain embedded permissions that automatically expire
D. to track the geographical location of each request

Question 16.4: What are two behaviors of a point-to-point WAN topology? (Choose two)
A. It uses a single router to route traffic between sites.
_B. It leverages a dedicated connection._
_C. It connects remote networks through a single line._
D. t delivers redundancy between the central office and branch offices.
E. It provides direct connections between each router in the topology.

Question 16.5: Refer to the exhibit. What is occurring on this switch?
A. A high number of frames smaller than 64 bytes are received.
_B. Frames are dropped after 16 failed transmission attempts._
C. The internal transmit buffer is overloaded.
D. An excessive number of frames greater than 1518 bytes are received.

Question 16.6: Which technology allows multiple operating systems to run a single physical server?
A. cloud computing
_B. virtualization_
C. application hosting
D. containers

Question 16.7: Which security element uses a combination of one-time passwords, a login name, and a personal smartphone?
A. software-defined segmentation
_B. multifactor authentication_
C. attribute-based access control
D. rule-based access control

Question 16.8: Refer to the exhibit. Which tasks must be performed on the Download File tab to install new software using TCP port 22?
A. Set the File Type to Code, set the Transfer Mode to SFTP, and specify the IP address of the WLC.
B. Set the File Type to Configuration, set the Transfer Mode to FTP, and specify the IP address of the file server.
_C. Set the File Type to Code, set the Transfer Mode to SFTP, and specify the IP address of the file server._
D. Set the File Type to Configuration, set the Transfer Mode to SFTP, and specify the IP address of the WLC.

Question 16.9: Which role do predictive AI models play in network load balancing?
_A. They anticipate future traffic spikes._
B. They assign IP addresses to devices.
C. They select correct cabling types for deployment.
D. They solely monitor historical traffic volumes.

Question 16.10: Which AP mode wirelessly connects two separate network segments each set up within a different campus building?
A. mesh
B. local
_C. bridge_
D. point-to-point

Question 16.11: Which technology allows for logical Layer 3 separation on physical network equipment?
A. Virtual Switch System
_B. Virtual Route Forwarding_
C. IPsec Transport Mode
D. Time Division Multiplexer

Question 16.12: Which action prevents debug messages from being sent via syslog while allowing other messages when an abnormally high number of syslog messages are generated by a device with the debug process turned on?
A. Use an access list to filter out the syslog messages.
B. Turn off the logging monitor in global configuration mode.
C. Disable logging to the console.
_D. Set the logging trap severity level to informational._

Question 16.13
Which interface on the WLC is used exclusively as a DHCP relay?
A. distribution
B. service
C. AP-manager
_D. virtual_

Question 16.14: How is AI used to identify issues within network traffic?
A. It exclusively predicts device malfunctions.
B. It enhances data packet delivery speeds.
C. It simplifies traffic route mapping.
_D. It analyzes patterns for anomaly detection._

Question 16.15: Why does an administrator choose to implement a remote access IPsec VPN?
_A. to establish an encrypted tunnel between a remote user and a private network over the internet_
B. to allow access to an enterprise network using any internet-enabled location via a web browser using SSL
C. to provide a secure link between an HTTPS server, authentication subsystem, and an end-user
D. to use cryptography for authentication between a device and user over a negotiated VPN gateway

Question 16.16: Which IP address is used when an administrator must open a web-based management session with a lightweight AP?
_A. WLC IP_
B. gateway IP
C. autonomous AP IP
D. ACS IP

Question 16.17: Which two principles must be considered when using per-hop behavior in QoS? (Choose two)
A. Policing is not supported on subinterfaces.
B. Shaping and rate limiting have the same effect.
C. Shaping drops excessive traffic without adding traffic delay.
_D. Shaping levels out traffic bursts by delaying excess traffic._
_E. Policing is performed in the inbound and outbound directions._

Question 16.18: What differentiates the TCP and UDP protocols?
A. TCP tracks segments being transmitted or received by assigning segment numbers, and UDP adjusts data flow according to network conditions.
_B. TCP establishes a connection with the device on the other end before transferring, and UDP transfers without establishing a connection._
C. TCP sends data at a constant rate with error checking on upper protocol layers, and UDP provides error- checking and sequencing.
D. TCP immediately transmits data without waiting for a handshake, and UDP awaits a response from the receiver before sending additional data.

Question 16.19: What is a characteristic of an SSID in wireless networks?
A. provides protection against spyware
B. used to identify a Wireless LAN Controller
_C. enables wireless clients to connect to a specific network_
D. the password used to connect to an access point

Question 16.20: In which way does generative AI aid network simulations?
A. It computes optimal data storage solutions.
_B. It creates synthetic network configurations._
C. It deploys network firmware updates.
D. It produce a greenfield network design.

Question 16.22 (repeated): Refer to the exhibit. What commands are needed to add a subinterface to Ethernet0/0 on R1 to allow for VLAN 20, with IP address 10.20.20.1/24?
A. R1 (config)#interface ethernet0/0
R1 (config)#encapsulation dot1q 20
R1(config)#ip address 10.20.20.1 255.255.255.0
_B. R1 (config)#interface ethernet0/0.20
R1 (config)#encapsulation dot1q 20
R1(config)#ip address 10.20.20.1 255.255.255.0_
C. R1 (config)#interface ethernet0/0.20
R1(config)#ip address 10.20.20.1 255.255.255.0
D. R1 (config)#interface ethernet0/0
R1(config)#ip address 10.20.20.1 255.255.255.0

Question 16.23: What is a functionality of HSRP?
A. It provides router redundancy and route reconvergence when a router fails.
B. It enlists gratuitous ARP to update a client’s ARP cache when the active router switches over.
C. It requires active and standby routes to provide failover in the case of a router failure.
_D. It uses virtual MAC addressing to provide gateway redundancy on a LAN._

Question 16.24: Refer to the exhibit. If the default gateway is the first usable IP address in the subnet, what is the default gateway?
_A. 10.8.128.1_
B. 10.8.132.1
C. 10.8.138.1
D. 10.8.144.1

Question 16.25: Refer to the exhibit. Which interface does a packet take to reach the destination address of 10.10.10.14?
A. Serial 0/0
_B. FastEthernet 0/1_
C. FastEthernet 0/0
D. FastEthernet 0/2

Question 16.26: Refer to the exhibit. A network engineer is configuring a wireless LAN with Web Passthrough Layer 3 Web Policy. Which action must the engineer take to complete the configuration?
A. Enable the WPA Policy.
B. Set the Layer 2 Security to 802.1X.
C. Enable TKIP and CCMP256 WPA2 Encryption.
_D. Set the Layer 2 Security to None._

Question 16.28: What is a characteristic of a Layer 2 switch?
A. transfers all frames received to every connected device
B. maintains stateful transaction information
_C. offers link bundling to servers_
D. transmits exclusively at half duplex

Question 16.29: Refer to the exhibit. What is represented in line 2 within this JSON schema?
A. array
B. value
C. key
_D. object_

Question 16.31: What is a characteristic of private IPv4 addressing?
A. reduces the forwarding table on network routers
B. traverses the internet when an outbound ACL is applied
_C. address space which is isolated from the internet_
D. eliminates the need for routing between devices

Question 16.32: Which two HTTP verbs does a REST-based API call to create a resource? (Choose two)
A. GET
B. DELETE
_C. POST_
_D. PUT_
E. PATCH

Question 16.33: Refer to the exhibit. Considering default routing protocol configurations were used, which routing protocol is used to learn the 10.255.2.2/32 route?
_A. EIGRP_
B. BGP
C. RIP
D. OSPF

Question 16.34: An application in the network is being scaled up from 300 servers to 600. Each server requires 3 network connections to support production, backup, and management traffic. Each connection resides on a different subnet. The router configuration for the production network must be configured first using a subnet in the 10.0.0.0/8 network. Which command must be configured on the interface of the router to accommodate the requirements and limit wasted IP address space?
A. ip address 10.10.10.1 255.255.255.240
B. ip address 10.10.10.1 255.255.240.0
C. ip address 10.10.10.1 255.255.254.0
_D. ip address 10.10.10.1 255.255.252.0_

Question 16.35: Which interface is used by an administrator to access the WLC GUI to update configuration settings?
_A. management_
B. service
C. dynamic
D. virtual

Question 16.36: Refer to the exhibit. A switch receives a frame with the destination MAC address 3C:5D:7E:9F:1A:2B.
How does the switch handle the frame?
_A. It floods the frame to all ports except the incoming port._
B. It switches the frame to a predetermined port based on settings.
C. It ages out the frame until the MAC address becomes known.
D. It drops the frame to avoid unnecessary network congestion.

Question 16.37: Which statement describes virtual machines?
_A. They include a guest OS and the service._
B. They facilitate local management of infrastructure devices.
C. They use a supervisor to provide management for services.
D. They enable the network to become agile and hardware-centric.

Question 16.38: Which combination of methods satisfies the minimum security requirements when a new multifactor authentication solution is deployed?
A. password of 8 to 15 characters and personal 12-digit PIN
B. authorized USB dongle and mobile phone
_C. complex password and time-based one-time password_
D. fingerprint scanning and facial recognition

Question 16.39: Refer to the exhibit. Of the routes learned with dynamic routing protocols, which has the least preferred metric?
A. Local
B. EIGRP
C. OSPF
_D. RIP_

Question 16.40: Refer to the exhibit. Which interface does a packet take to reach the host address of 192.168.18.16?
_A. GigabitEthernet1/0_
B. GigabitEthernet0/0
C. GigabitEthernet2/0
D. Null0

Question 16.41: Refer to the exhibit. Which next hop is used to route packets to the application server at 152.168.32.85?
A. 10.10.1.2
_B. 10.10.2.2_
C. 10.10.3.2
D. 10.10.4.2

Question 16.42: Refer to the exhibit. What is the correct next hop for router R1 to reach IP addresses 192.168.2.86 and 10.20.1.50?
A. 172.16.1.4
B. 172.16.1.1
_C. 172.16.1.2_
D. 172.16.1.3

Question 16.43: A default route must be configured to use the IP address of 192.168.1.1 until a WAN circuit is installed. The WAN circuit will use a dynamic routing protocol with an Administrative Distance of 20. Which configuration must be applied to allow the dynamic route to take precedence when it is in place?
A. ip route 0.0.0.0 0.0.0.0 192.168.1.1
_B. ip route 0.0.0.0 0.0.0.0 192.168.1.1 25_
C. ip route 0.0.0.0 0.0.0.0 192.168.1.1 track 1
D. ip route 0.0.0.0 0.0.0.0 192.168.1.1 20

Question 16.44: What is the main capability of multifactor authentication?
A. Identifying permissions for end users using three authentication factors
B. Authenticating and authorizing end users using two authentication factors
_C. Confirming end-user identity using two or more authentication factors_
D. Verifying end-user access permissions using two authentication factors

Question 16.45: Refer to the exhibit. After a recent internal security audit, the network administrator decided to block all P2P-capable devices from the selected SSID. Which configuration setting must the administrator apply?
A. Set the P2P Block Action to Drop.
B. Select a correctly configured Layer 2 ACL.
_C. Set the Wi-Fi Direct Client Policy to Not-Allow._
D. Set the MFP Client Protection to Required.

Question 16.46: Which switch port configuration must be configured when connected to an AP running in FlexConnect mode, and the WLANs use flex local switching?
A. access port with one VLAN
_B. trunk port with pruned VLANs_
C. Layer 3 port with an IP address
D. tagged port with MAC Filtering enabled

Question 16.47: What is a reason to implement HSRP on a network?
_A. to ensure that user traffic in a LAN rapidly recovers from the failure of an edge routing device_
B. to provide load balancing over multiple gateways in a LAN network
C. to optimally route traffic based on the forwarding capacity of the edge routing devices in the LAN network
D. to identify the closest hop to the default gateway in a LAN network

Question 16.48: Which feature is mandatory when configuring a new SSID for a wireless network running WPA3-Personal mode?
A. Opportunistic Wireless Encryption
_B. Protected Management Frame_
C. Enhanced Open
D. Fast Transition

Question 16.49: Refer to the exhibit. The loopback IP of R3 has been learned via the two interfaces on R1. R1 is configured with a reference bandwidth of 10 Gbps. Based on the metric calculations, which next hop IP would be used for outgoing routing?
A. 10.12.0.5
B. 10.12.0.2
C. 10.12.0.1
_D. 10.12.0.6_

Question 16.50: Which feature of Digest Authentication prevents credentials from being sent in plaintext?
A. SSL/TLS encryption
_B. Challenge-response mechanism_
C. Token-based authorization
D. Public key infrastructure

Question 16.51: Which type of port configuration is used to carry traffic for multiple VLANs?
A. LAG
B. EtherChannel
_C. trunk_
D. access

Question 16.52: Refer to the exhibit. How will router R1 handle packets destined to 192.168.64.22?
A. It will use the static route to 10.1.1.1.
B. It will use the route with the highest AD and highest destination IP.
C. It will route the packets to 10.1.1.2.
_D. It will drop the packets._

Question 16.53: Which option in the port configuration of an Ethernet switch allows traffic from multiple VLANs to travel over the same physical link?
A. LAG
B. EtherChannel
_C. trunk_
D. access

Question 16.54: Refer to the exhibit. OSPF neighbors routers A, B, C, and D are sending a route for 10.227.150.160/27. When the current route for 10.227.150.160/27 becomes unavailable, which cost will router Y use to route traffic to 10.227.150.160/27?
A. Cost 20
_B. Cost 30_
C. Cost 40
D. Cost 50

Question 16.55: Refer to the exhibit. What is the administrative distance for the advertised prefix that includes the host IP address 192.168.20.1?
A. 0
B. 192.168.10.2
C. 24
_D. 1_

Question 16.56: Refer to the exhibit. HQC needs to use a configuration that:

- Handles up to 150,000 concurrent connections
- Minimizes consumption of public IP addresses
  Which configuration meets the requirements?
  A. ip nat pool NATPOOL 209.165.201.1 209.165.201.5 netmask 255.255.255.248
  ip nat inside source list HQC interface gigabitEthernet0/0 overload
  B. ip nat pool NATPOOL 209.165.200.225 209.165.200.226 netmask 255.255.255.252
  ip nat outside source list HQC pool NATPOOL overload
  _C. ip nat pool NATPOOL 209.165.201.1 209.165.201.3 netmask 255.255.255.248
  ip nat inside source list HQC pool NATPOOL overload_
  D. ip nat pool NATPOOL 209.165.201.1 209.165.201.248 netmask 255.255.255.248
  ip nat outside source list HQC pool NATPOOL overload

Question 16.57: How are API keys used to enforce rate limiting?
A. To encrypt data sent in the API request
B. To define the network path the API request should take
C. To specify the type of data format the client prefers to receive
_D. To uniquely identify each client application_

Question 16.58: Refer to the exhibit. Which routes are configured with their default administrative distances?
A. EIGRP
_B. OSPF_
C. RIP
D. Local

Question 16.59: Which security protocol is appropriate for a WPA3 implementation?
A. TKIP
_B. GCMP_
C. MD5
D. CCMP

Question 16.60: Refer to the exhibit. A network engineer must replicate the AccessSw1 NTP configuration on a new switch. The engineer could not access privileged mode on AccessSw1 to view its configuration. Which command must be applied to the new switch to replicate the configuration?
_A. ntp server 2001:db8:12::1_
B. ntp master 3
C. ntp master
D. ntp server 127.127.1.1

Question 16.61: Which role does AI play in monitoring network data now?
A. It exclusively predicts device malfunctions.
B. It simplifies traffic route mapping.
_C. It analyzes patterns anomaly detection._
D. It enhances data packet delivery speeds.

Question 16.62: What is a characteristic of a Layer 2 switch?
A. maintains stateful transaction information
B. prioritizes traffic using deep packet inspection
_C. uses the data link layer for communications_
D. provides a-single broadcast domain for all connected devices

Question 16.63: Which file transfer protocol omits a username or password requirement and acknowledges all data sent?
A. FTP
_B. TFTP_
C. SCP
D. SFTP

Question 16.64: Refer to the exhibit. A network engineer must configure the CPE router to allow computers in the 172.20.1.0/24 network to obtain their IP configurations from the central DHCP server. Which configuration must the engineer apply to the CPE?
_A. interface GigabitEthernet0/1
ip helper-address 172.20.255.11_
B. interface GigabitEthernet0/0
ip helper-address 172.20.255.1
C. interface GigabitEthernet0/0
ip helper-address 172.20.1.1
D. interface GigabitEthernet0/1
ip helper-address 172.20.254.1

Question 16.65: Refer to the exhibit. An engineer was asked to update a wireless LAN controller configuration on a newly deployed SSID “Office”. However, the configuration was not well documented or commented. What can the engineer determine about this configuration?
A. There is an additional protection level that helps secure the data frames exchanged between wireless clients and the access points for all wireless devices.
B. There is an extended delay that helps minimizing the time it takes for client devices to stay connected after roaming activity for Apple and Android devices.
C. There is an advanced secure algorithm put into the service to add an extra level of quality assurance for wireless delivery networks.
_D. There is a seamless transition mechanism used to expedite roaming for compatible devices by authenticating them before potential roaming occurs._

Question 16.66: What is the difference between the TCP and UDP protocols?
_A. TCP ensures ordered, reliable data delivery, and UDP offers low latency and high throughput._
B. TCP manages multicast and broadcast data transfers, and UDP only handles unicast communications.
C. TCP discovers neighboring devices on a local network segment, and UDP prevents Layer 2 switching loops.
D. TCP identities devices by their MAC addresses, and UDP identities devices by their IP addresses.

Question 16.67: Refer to the exhibit. A packet is being sent across router R1 to host 172.16.0.14. To which destination does the router send the packet?
_A. 209.165.200.246 via Serial0/1/0_
B. 209.165.200.254 via Serial0/0/0
C. 209.165.200.254 via Serial0/0/1
D. 209.165.200.250 via Serial0/0/0

Question 16.68: Refer to the exhibit. Users will be using a preconfigured secret key and SSID and must have a secured key hashing algorithm configured. The AAA server must not be used for the user authentication method. Which action completes the task?
_A. Configure PSK-SHA2._
B. Configure PSK Format HEX with key string.
C. Set CCMP128(AES).
D. Enable AutoConfig iPSK.

Question 16.69: Which two features are provided by Ansible in network automation? (Choose two)
A. supplies network credentials
B. pushes configurations to client
C. launches job templates using version control
_D. uses YAML language_
_E. offers agentless deployment_

Question 16.70: Which type of VPN connection is used when an employee accesses a secure server from a public Wi-Fi?
A. site-to-site
B. router-to-router
_C. remote_
D. open

Question 16.71: What is the role of nonoverlapping channels in a wireless environment?
_A. to reduce interference_
B. to allow for channel bonding
C. to enable faster roaming
D. to increase bandwidth

Question 16.72: Refer to the exhibit. What is represented in line 3 within this JSON schema?
A. array
B. value
C. key
_D. object_

Question 16.73: Which security program element helps protect against employees unintentionally leaking sensitive information via email?
A. workstation screen recordings
_B. user awareness campaigns_
C. controlled internet access
D. physical access controls

Question 16.74: What is the purpose of the logging facility?
_A. It indicates the program or process that generated the syslog event._
B. It contains the text message that describes the syslog event.
C. It defines the severity of the syslog event.
D. It represents the timestamp of the syslog event.

Question 16.75: Which AP mode provides a wireless connection between two network segments?
A. root
B. local
C. FlexConnect
_D. bridge_

Question 16.76: What is the purpose of a CNAME record?
_A. to associate an alias to a canonical domain name_
B. to map a domain name to an IP address
C. to identify the authoritative name server for a domain
D. to direct email to a mail server

Question 16.77: Refer to the exhibit. The static routes were implemented on the border router. What is the next hop IP address for a ping sent to 172.16.153.154 from the border router?
A. 10.35.47.17
B. 10.65.34.19
C. 10.12.13.14
_D. 10.56.22.23_

Question 16.78: Which cable type must be used when connecting a router and switch together?
A. console
B. rollover
_C. straight-through_
D. crossover
