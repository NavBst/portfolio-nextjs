# Modern Portfolio Website 🚀

[![Next.js](https://img.shields.io/badge/Next.js-13.0-blueviolet.svg)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18.0-blue.svg)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.0-38B2AC.svg)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](./LICENSE)

A modern, responsive portfolio website built with Next.js 13, featuring stunning 3D animations, dynamic project showcases, and seamless interactions.

![Portfolio Preview](public/app.svg)

## ✨ Features

- 🎨 Modern UI/UX with sleek animations
- 🌐 Fully responsive design
- 🚀 Server-side rendering with Next.js 13
- 💫 Interactive 3D elements and animations
- ⚡️ Fast loading and optimal performance
- 🎯 SEO optimized
- 🎨 Tailwind CSS for styling
- 📱 Mobile-first approach

## 🛠️ Tech Stack

- **Framework**: [Next.js 13](https://nextjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: 
  - [Motion](https://www.motion.dev/)
  - [GSAP](https://greensock.com/gsap/)
  - [Three.js](https://threejs.org/)
- **Deployment**: [Vercel](https://vercel.com)

## 🚀 Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/NavBst/portfolio-nextjs.git
   cd portfolio-nextjs
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
portfolio/
├── app/                # Next.js 13 app directory
│   ├── layout.js      # Root layout
│   ├── page.js        # Home page
│   └── globals.css    # Global styles
├── components/        # React components
│   ├── Hero.jsx      # Hero section
│   ├── Grid.jsx      # Grid layout
│   └── ui/           # UI components
├── data/             # Static data and content
├── lib/              # Utility functions
├── public/           # Static assets
└── styles/           # Additional styles
```

## 🎨 Key Components

- **Hero Section**: Engaging introduction with 3D animations
- **Project Grid**: Interactive project showcase with hover effects
- **Recent Projects**: Dynamic project cards with 3D pin effect
- **Experience Timeline**: Visual representation of work history
- **Contact Form**: Interactive contact section
- **Floating Navigation**: Smooth scrolling navigation

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_SITE_URL=your-site-url
# Add any other environment variables
```

### Customization

1. Update `data/index.js` with your personal information
2. Modify theme colors in `tailwind.config.js`
3. Add your projects in the projects array
4. Customize animations in respective components

## 📱 Responsive Design

The portfolio is fully responsive across all devices:
- Mobile-first approach
- Fluid typography
- Adaptive layouts
- Optimized images
- Touch-friendly interactions

## ⚡ Performance

- Server-side rendering for faster initial load
- Image optimization with Next.js Image component
- Minimized JavaScript bundles
- Efficient component rendering
- Optimized asset loading

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Three.js](https://threejs.org/docs)
- [Motion](https://www.motion.dev/docs)

## 📧 Contact

Navneet Bisht - [Github](https://github.com/NavBst)

Project Link: [https://github.com/NavBst/portfolio-nextjs](https://github.com/NavBst/portfolio-nextjs)

---

<div align="center">
Made with ❤️ by Navneet Bisht
</div>
