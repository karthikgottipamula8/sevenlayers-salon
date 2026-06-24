"use client";

import { useEffect } from 'react';

export default function ClientLogic() {
  useEffect(() => {
    // 1. Sticky Navigation & Scroll Progress
    const navbar = document.getElementById('navbar');
    const scrollBar = document.getElementById('scrollBar');

    const handleScroll = () => {
      // Sticky Nav
      if (navbar) {
        if (window.scrollY > 50) {
          navbar.classList.add('scrolled');
        } else {
          navbar.classList.remove('scrolled');
        }
      }

      // Scroll Progress
      if (scrollBar) {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        scrollBar.style.width = scrolled + '%';
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();

    // 2. Mobile Menu Toggle
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    const toggleMenu = () => {
      if (navLinks && mobileBtn) {
        navLinks.classList.toggle('active');
        const icon = mobileBtn.querySelector('i');
        if (icon) {
          if(navLinks.classList.contains('active')) {
            icon.classList.replace('ph-list', 'ph-x');
          } else {
            icon.classList.replace('ph-x', 'ph-list');
          }
        }
      }
    };

    if(mobileBtn) {
      mobileBtn.addEventListener('click', toggleMenu);
    }

    // Close mobile menu on link click
    const navItems = document.querySelectorAll('.nav-links a');
    const closeMenu = () => {
      if (navLinks) {
        navLinks.classList.remove('active');
        if(mobileBtn) {
          const icon = mobileBtn.querySelector('i');
          if (icon && icon.classList.contains('ph-x')) {
            icon.classList.replace('ph-x', 'ph-list');
          }
        }
      }
    };

    navItems.forEach(link => {
      link.addEventListener('click', closeMenu);
    });

    // 3. Scroll Reveal Animations (Intersection Observer)
    // FIX FOR BLANK PAGE: We set a timeout to ensure DOM is ready and observer works.
    setTimeout(() => {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.15
        };

        const observer = new IntersectionObserver((entries, observerInstance) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observerInstance.unobserve(entry.target); // Run once
                }
            });
        }, observerOptions);

        document.querySelectorAll('.animate-on-scroll').forEach(el => {
            observer.observe(el);
        });
    }, 100);

    // 4. Testimonial Slider
    const track = document.getElementById('testimonialTrack');
    const prevBtn = document.getElementById('prevTestimonial');
    const nextBtn = document.getElementById('nextTestimonial');
    let sliderInterval;
    
    if(track && prevBtn && nextBtn) {
        let currentIndex = 0;
        const slides = track.querySelectorAll('.testimonial-card');
        const totalSlides = slides.length;

        function updateSlider() {
            track.style.transform = `translateX(-${currentIndex * 100}%)`;
        }

        const handleNext = () => {
            currentIndex = (currentIndex + 1) % totalSlides;
            updateSlider();
        };

        const handlePrev = () => {
            currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
            updateSlider();
        };

        nextBtn.addEventListener('click', handleNext);
        prevBtn.addEventListener('click', handlePrev);

        // Auto slide
        sliderInterval = setInterval(handleNext, 5000);
    }

    // 5. Floating Particles Effect in Hero
    const particlesContainer = document.getElementById('particles');
    let particleTimeouts = [];
    if(particlesContainer && particlesContainer.children.length === 0) {
        const particleCount = 25;
        
        function createParticle() {
            if (!document.getElementById('particles')) return;
            const particle = document.createElement('div');
            particle.classList.add('particle');
            
            // Randomize properties
            const size = Math.random() * 5 + 2; // 2px to 7px
            const left = Math.random() * 100; // 0% to 100%
            const duration = Math.random() * 10 + 5; // 5s to 15s
            const delay = Math.random() * 5; // 0s to 5s

            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            particle.style.left = `${left}%`;
            particle.style.animationDuration = `${duration}s`;
            particle.style.animationDelay = `${delay}s`;
            
            particlesContainer.appendChild(particle);
            
            // Recreate particle when animation ends
            const timeoutId = setTimeout(() => {
                particle.remove();
                createParticle();
            }, (duration + delay) * 1000);
            particleTimeouts.push(timeoutId);
        }

        for (let i = 0; i < particleCount; i++) {
            createParticle();
        }
    }

    return () => {
        window.removeEventListener('scroll', handleScroll);
        if (mobileBtn) mobileBtn.removeEventListener('click', toggleMenu);
        navItems.forEach(link => link.removeEventListener('click', closeMenu));
        if (sliderInterval) clearInterval(sliderInterval);
        particleTimeouts.forEach(id => clearTimeout(id));
    };
  }, []);

  return null;
}
