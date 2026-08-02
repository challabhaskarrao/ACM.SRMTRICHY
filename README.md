<div align="center">
  <img src="public/assets/acm-logo.png" alt="ACM SRM TRICHY Logo" width="160"/>
  <h1>🎓 ACM SRMIST Tiruchirappalli Student Chapter 🚀</h1>
  <p><strong>Official website of the ACM Student Chapter at SRM Institute of Science and Technology, Tiruchirappalli.</strong></p>
  <p>A clean, white-first, premium SaaS-quality web application built to showcase workshops, events, and computing chapter initiatives.</p>

  <br/>

  <!-- Badges for Repository Visibility -->
  [![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
  [![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5.4-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
  [![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-FF0050?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)](LICENSE)
  [![Deployed on Vercel](https://img.shields.io/badge/Vercel-Live-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://acm-srmtrichy.vercel.app/)
  [![Node.js](https://img.shields.io/badge/Node.js-≥22-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)

</div>

---

## 📑 Table of Contents

- [🌟 About the Project](#-about-the-project)
- [✨ Features & Highlights](#-features--highlights)
- [🛠️ Technology Stack](#️-technology-stack)
- [📦 Getting Started](#-getting-started)
- [🚀 Live Deployment](#-live-deployment)
- [📂 Project Structure](#-project-structure)
- [🤝 Contributing](#-contributing)
- [📬 Contact Us](#-contact-us)
- [📄 License](#-license)

---

## 🌟 About the Project

Welcome to the official repository for the **ACM SRMIST Tiruchirappalli Student Chapter** website! 🌐 This platform serves as the digital home for our computing community, showcasing our technical events, leadership, galleries, and onboarding opportunities.

The website has been completely redesigned with a **premium, white-first minimalist SaaS aesthetic** (inspired by modern industry leaders like bavio.in), prioritizing clean hierarchy, consistent spacing, and smooth interactive components.

---

## ✨ Features & Highlights

Here is what makes this website special:

*   **⚪ Premium White-First Theme**: Rebuilt the entire design system using a light-mode foundation (`#FFFFFF` background, `#F8FAFC` light surfaces, and `#E5E7EB` borders) with ACM's signature cyan (`#06b6d4`) as a sophisticated accent color.
*   **📱 Universal Responsiveness**: Thoroughly audited and optimized for all viewports from **320px** (mobile screens) to **1920px** (large desktops), ensuring no horizontal scrolling, overflowing containers, or broken grids.
*   **🎭 Silky Smooth Animations**:
    *   **Interactive Bento Grids**: Utilizes `MagicBento` component with custom-tuned mouse spotlights and border glow effects on the `/events` and `/gallery` pages.
    *   **Rotating Typography**: Employs interactive `RotatingText` for dynamic text loops in the Hero section.
    *   **Curtain Splash Screen**: A premium animated white curtain splash screen on load.
*   **🗓️ Event & Gallery Management**: Dedicated, clean multi-column layouts showcasing bootcamp highlights, guest lectures, and student strategies.
*   **👥 Affiliation Onboarding (Join Us Flow)**:
    *   An animated `JoinModal` built with clean input fields, custom options selection, and mail confirmation integration.
*   **⚡ Modern Tech Stack**: Built with Next.js 14, React 18, and TypeScript, configured for **Node.js 22 LTS** compatibility.

---

## 🛠️ Technology Stack

| Technology | Version | Purpose |
|---|---|---|
| [Next.js](https://nextjs.org/) | 14.2 | App Router Framework |
| [React](https://react.dev/) | 18.3 | UI Library |
| [TypeScript](https://www.typescriptlang.org/) | 5.4 | Type Safety |
| [Tailwind CSS](https://tailwindcss.com/) | 3.4 | Utility-first Styling |
| [Framer Motion](https://www.framer.com/motion/) | 11.0 | Declarative Animations |
| [GSAP](https://gsap.com/) | 3.12 | Advanced Animations |
| [Three.js](https://threejs.org/) | 0.164 | 3D Graphics |
| [Lenis](https://lenis.studiofreight.com/) | 1.1 | Smooth Scrolling |

---

## 📦 Getting Started

### Prerequisites

- **Node.js** >= 22.0.0 (LTS recommended)
- **npm** >= 10.0.0

### Installation

```bash
# Clone the repository
git clone https://github.com/challabhaskarrao/ACM.SRMTRICHY.git

# Navigate to the project directory
cd ACM.SRMTRICHY

# Install dependencies
npm install

# Start the development server
npm run dev
```

The app will be available at `http://localhost:3000` 🎉

### Build for Production

```bash
npm run build
npm start
```

---

## 🚀 Live Deployment

The website has been successfully deployed and is live for the world to see!

**🔗 Visit our live site here:** [https://acm-srmtrichy.vercel.app/](https://acm-srmtrichy.vercel.app/) ✨

---

## 📂 Project Structure

```
ACM.SRMTRICHY/
├── app/                    # Next.js App Router pages
│   ├── events/             # Events page
│   ├── gallery/            # Gallery page
│   ├── globals.css         # Global styles
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Home page
├── components/             # Reusable UI components
│   ├── FloatingLogo.tsx    # Animated floating logo
│   ├── GlassCard.tsx       # Glassmorphism card
│   ├── JoinModal.tsx       # Join chapter modal
│   ├── MagicBento.tsx      # Interactive bento grid
│   ├── Navbar.tsx          # Navigation bar
│   ├── RotatingText.tsx    # Rotating text animation
│   ├── SplashScreen.tsx    # Loading splash screen
│   └── ThreeScene.tsx      # 3D scene component
├── sections/               # Page sections
│   ├── About.tsx           # About section
│   ├── Hero.tsx            # Hero banner
│   ├── TeamLeadership.tsx  # Team display
│   └── ...                 # Other sections
├── public/assets/          # Static assets (images, videos)
├── next.config.js          # Next.js configuration
├── tailwind.config.js      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Project metadata & dependencies
```

---

## 🤝 Contributing

Contributions are welcome! Please read our [Contributing Guidelines](CONTRIBUTING.md) for details on how to submit pull requests, report issues, and contribute to the project.

---

## 📬 Contact Us

Have questions, suggestions, or want to collaborate?
Feel free to drop us an email at: **[connect@srmtrichy.acm.org](mailto:connect@srmtrichy.acm.org)** ✉️

---

## 📄 License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.

---
<div align="center">
  <i>Designed and developed with ❤️ by the ACM SRM Trichy Team.</i>
  <br/><br/>
  <a href="https://acm-srmtrichy.vercel.app/">
    <img src="https://img.shields.io/badge/🌐_Visit_Live_Site-06b6d4?style=for-the-badge" alt="Visit Live Site"/>
  </a>
</div>
