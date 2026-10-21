# Feyisa Girma - Professional Network Engineer Portfolio

A modern, responsive personal portfolio website engineered specifically for an aspiring Network Engineer who has completed comprehensive CCNA training and practical networking labs (with official Cisco certification pending).

Designed with the exact layout, dark navy color palette, and glassmorphism styling of the reference portfolio, customized for networking and IT infrastructure engineering.

---

## 🚀 Key Features

- **Navy & Cisco Blue Design Aesthetic:** Built with the `#07111F` dark navy background, `#008CFF` bright Cisco blue accents, subtle glowing borders, and glassmorphism cards.
- **Hero Section:** Prominent title, introductory bio, networking tools banner (Cisco IOS, Packet Tracer, Wireshark, Linux, OSPF), and an engineer portrait placeholder.
- **About Me & Personal Details Card:** Includes key profile highlights, contact information card (Phone: `0951395410`, Education: `4th year IT student`, Languages: `Afaan oromo, Amharic and English`), and a working **Download CV** button.
- **Accurate Certification Status:** Prominently communicates `"CCNA Training Completed | Certification Pending"` across the site to maintain technical credibility and compliance with Cisco guidelines.
- **Technical Skills Matrix:** 6 categorization cards featuring networking fundamentals, routing, switching, network services, security (ACLs & Port Security), and CLI tools.
- **Featured Networking Labs (3-Column Layout):**
  - **Lab 01:** VLAN and Inter-VLAN Routing (Router-on-a-Stick, 802.1Q)
  - **Lab 02:** OSPF Routing Configuration (Area 0, Router-ID, LSAs)
  - **Lab 03:** DHCP and NAT Configuration (PAT Overload, Pools)
  - **Lab 04:** Network Security Using ACLs (Extended ACL 101, Port Security)
  - **Lab 05:** Subnetting and VLSM Design (Classless addressing, /24 to /30 subnets)
  - **Lab 06:** Enterprise Network Simulation (3-Tier Campus, OSPF, HSRP)
- **Interactive Lab Detail Modal:** Clicking any lab opens a modal with:
  - High-resolution SVG network topology diagram
  - Detailed lab objectives & devices used
  - Comprehensive IP addressing table
  - Cisco IOS CLI command blocks with one-click **Copy to Clipboard**
  - Real CLI verification outputs (`show ip route`, `show vlan brief`, `ping`)
  - Troubleshooting gotchas & lessons learned
  - Direct download for Packet Tracer (`.pkt`) files and GitHub repo links
- **Training & Education Timeline:** Details CCNA 200-301 curriculum domains and 4th-year BSc in IT studies.
- **Functional Contact Section:** Direct mailto form generator with automatic URI prefilling, instant email clipboard copy, and quick links.
- **Modern Tech Stack:** React 18, Vite, Tailwind CSS, Lucide React icons, and standard HTML5/CSS3.

---

## 📁 Project Structure

```text
├── public/
│   ├── cv/
│   │   └── Feyisa_Girma_Resume.pdf       # Downloadable resume PDF
│   ├── images/
│   │   ├── networking-bg.svg             # Abstract datacenter / fiber backdrop
│   │   ├── portrait-engineer.svg         # Portrait placeholder graphic
│   │   └── topologies/                   # High-res SVG network diagrams
│   │       ├── lab1-vlan.svg
│   │       ├── lab2-ospf.svg
│   │       ├── lab3-dhcp-nat.svg
│   │       ├── lab4-acl.svg
│   │       ├── lab5-vlsm.svg
│   │       └── lab6-enterprise.svg
│   └── projects/
│       └── sample-lab.pkt                # Downloadable Packet Tracer file
├── src/
│   ├── components/
│   │   ├── Navbar.jsx                    # Sticky navigation with mobile menu
│   │   ├── Hero.jsx                      # Hero section with portrait & CTA
│   │   ├── About.jsx                     # Bio, credentials & info card
│   │   ├── Skills.jsx                    # 6 Technical skill cards
│   │   ├── FeaturedLabs.jsx              # 3-column project cards layout
│   │   ├── LabDetailModal.jsx            # Detailed lab inspection modal
│   │   ├── Education.jsx                 # CCNA & University timeline
│   │   ├── Contact.jsx                   # Contact form & social cards
│   │   └── Footer.jsx                    # Dynamic copyright & back to top
│   ├── data/
│   │   ├── personalInfo.js               # EDITABLE: Contact, bio, & links
│   │   ├── skills.js                     # EDITABLE: Technical skills & tools
│   │   ├── labs.js                       # EDITABLE: All lab specs & IOS configs
│   │   └── education.js                  # EDITABLE: Training & degree data
│   ├── App.jsx                           # Main layout & scroll tracking
│   ├── index.css                         # Tailwind CSS & custom utilities
│   └── main.jsx                          # React application entry point
├── package.json
├── tailwind.config.js
└── vite.config.js
```

---

## 🛠️ Windows 10 Installation & Execution Guide

### Prerequisites
1. **Node.js** (v18 or higher recommended; tested on v24). Download from [nodejs.org](https://nodejs.org/).
2. **Visual Studio Code** (recommended editor).

### Step 1: Open in Visual Studio Code
1. Open Visual Studio Code.
2. Select **File > Open Folder...** and choose `c:\Users\ITMAN\Documents\Network Engineers portoflio`.

### Step 2: Open the Terminal in VS Code
Press `` Ctrl + ` `` or click **Terminal > New Terminal**.

> [!NOTE]
> If your Windows PowerShell throws a script restriction error (`npm.ps1 cannot be loaded because running scripts is disabled on this system`), simply use `npm.cmd` instead of `npm`, or run:
> ```powershell
> Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
> ```

### Step 3: Install Dependencies
Dependencies are already configured. If needed, reinstall with:
```powershell
npm.cmd install
```

### Step 4: Run the Local Development Server
Launch the development server:
```powershell
npm.cmd run dev
```

The terminal will display the local URL:
```text
  VITE v5.4.11  ready in 320 ms

  ➜  Local:   http://localhost:3000/
  ➜  Network: use --host to expose
```
Hold `Ctrl` and click the link, or open your web browser and navigate to `http://localhost:3000`.

### Step 5: Build for Production
To create an optimized production build:
```powershell
npm.cmd run build
```
This generates the ready-to-deploy static assets inside the `dist/` directory.

To preview the production build locally:
```powershell
npm.cmd run preview
```

---

## ✏️ How to Customize Your Portfolio Information

All portfolio content is decoupled into separate, readable JavaScript configuration files in the `src/data/` directory:

### 1. Replacing Your Photograph
1. Save your photo into `public/images/` (for example: `public/images/feyisa-photo.jpg`).
2. Open `src/data/personalInfo.js`.
3. Update line 23:
   ```javascript
   portraitImage: "/images/feyisa-photo.jpg",
   ```

### 2. Updating Personal & Contact Details
Open `src/data/personalInfo.js` and modify:
- `contactDetails.location`: Set your specific city or region.
- `contactDetails.email`: Your preferred professional email address.
- `socialLinks.linkedin`: Link to your public LinkedIn profile.
- `socialLinks.github`: Link to your GitHub account.

### 3. Updating Your Resume / CV File
Replace the sample PDF located at `public/cv/Feyisa_Girma_Resume.pdf` with your actual resume PDF using the exact same file name.

### 4. Customizing Networking Labs & Adding Real Work
Open `src/data/labs.js`:
- Each lab object includes fields for `title`, `overview`, `objectives`, `addressingTable`, `configurationSteps`, `verification`, and `troubleshootingNotes`.
- You can place your actual Packet Tracer `.pkt` files in `public/projects/` and update `pktDownloadUrl: "/projects/your-lab-file.pkt"`.
- Replace the topology diagrams in `public/images/topologies/` with screenshots from your Cisco Packet Tracer workspace if desired.

### 5. Editing Skills
Open `src/data/skills.js` to add, reorder, or customize the skill sets and tools.

---

## 🌐 Deployment Instructions

### Option 1: Deploying to Vercel (Recommended & Free)
1. Push your repository to GitHub:
   ```powershell
   git init
   git add .
   git commit -m "Initial commit: Network Engineer Portfolio"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```
2. Visit [vercel.com](https://vercel.com/) and log in with your GitHub account.
3. Click **Add New... > Project** and import your portfolio repository.
4. Framework Preset will be automatically detected as **Vite**.
5. Click **Deploy**. Your portfolio will be live in under 60 seconds with a free `.vercel.app` URL and free SSL!

### Option 2: Deploying to GitHub Pages
1. Install `gh-pages`:
   ```powershell
   npm.cmd install gh-pages --save-dev
   ```
2. In `vite.config.js`, add your repository base:
   ```javascript
   export default defineConfig({
     base: '/<your-repo-name>/',
     plugins: [react()],
   });
   ```
3. In `package.json`, add deploy scripts:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
4. Run `npm.cmd run deploy`.

---

## 📄 License
This project is open-source and available under the MIT License.
