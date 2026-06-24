import ClientLogic from './ClientLogic';

export default function Home() {
  return (
    <>
      <ClientLogic />

      {/* Floating Navigation */}
      <header id="navbar">
        <div className="container nav-container">
          <a href="#" className="logo">
            <span className="logo-highlight">SEVEN</span>
            <span className="logo-sub">LAYERS UNISEX SALON</span>
          </a>
          <nav className="nav-links">
            <a href="#home">Home</a>
            <a href="#services">Services</a>
            <a href="#gallery">Gallery</a>
            <a href="#academy">Academy</a>
            <a href="#contact">Contact</a>
          </nav>
          <div className="mobile-menu-btn">
            <i className="ph ph-list"></i>
          </div>
        </div>
      </header>

      {/* Floating Action Buttons */}
      <div className="floating-actions">
        <a href="https://wa.me/919966468896" target="_blank" rel="noreferrer" className="float-btn float-whatsapp" aria-label="WhatsApp Us">
          <i className="ph-fill ph-whatsapp-logo"></i>
        </a>
        <a href="tel:+919966468896" className="float-btn float-call" aria-label="Call Us">
          <i className="ph-fill ph-phone-call"></i>
        </a>
      </div>

      {/* Scroll Progress */}
      <div className="scroll-progress-container">
        <div className="scroll-progress-bar" id="scrollBar"></div>
      </div>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="particles-container" id="particles"></div>
        <div className="hero-overlay"></div>
        <img src="/assets/hero_bg.png" alt="Luxury Salon Interior" className="hero-bg" loading="lazy" />
        
        <div className="container hero-content text-center">
          <h1 className="animate-up">Transform Your Style With Professional Salon Experts</h1>
          <p className="subtitle animate-up delay-1">Hair &bull; Beauty &bull; Skin Care &bull; Grooming &bull; Training Academy</p>
          <div className="hero-buttons animate-up delay-2">
            <a href="#contact" className="btn btn-primary">Book Appointment</a>
            <a href="https://wa.me/919966468896" target="_blank" rel="noreferrer" className="btn btn-outline">WhatsApp Now</a>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="trust section-padding">
        <div className="container">
          <div className="section-header text-center animate-on-scroll">
            <h2>Why Clients Choose Seven Layers</h2>
            <div className="divider"></div>
          </div>
          <div className="trust-grid">
            <div className="trust-card glass-card animate-on-scroll">
              <div className="icon-wrapper"><i className="ph ph-scissors"></i></div>
              <h3>Professional Hair Stylists</h3>
              <p>Expert cuts, coloring, and styling tailored to your unique personality and lifestyle.</p>
            </div>
            <div className="trust-card glass-card animate-on-scroll delay-1">
              <div className="icon-wrapper"><i className="ph ph-sparkle"></i></div>
              <h3>Premium Beauty Treatments</h3>
              <p>Luxurious bridal and party makeup ensuring you shine on your special day.</p>
            </div>
            <div className="trust-card glass-card animate-on-scroll delay-2">
              <div className="icon-wrapper"><i className="ph ph-drop"></i></div>
              <h3>Advanced Skin Care</h3>
              <p>Rejuvenating facials and skin therapies for a healthy, glowing complexion.</p>
            </div>
            <div className="trust-card glass-card animate-on-scroll delay-3">
              <div className="icon-wrapper"><i className="ph ph-graduation-cap"></i></div>
              <h3>Certified Training Academy</h3>
              <p>Learn from industry experts and build a successful career in beauty and styling.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services section-padding">
        <div className="container">
          <div className="section-header text-center animate-on-scroll">
            <h2>Our Premium Services</h2>
            <div className="divider"></div>
          </div>
          
          <div className="services-grid">
            {/* Category 1 */}
            <div className="service-category glass-card animate-on-scroll">
              <div className="service-img-container">
                <img src="/assets/service_hair.png" alt="Hair Services" loading="lazy" />
                <div className="service-overlay">
                  <h3>Hair Services</h3>
                </div>
              </div>
              <ul className="service-list">
                <li><span>Hair Cut</span></li>
                <li><span>Hair Styling</span></li>
                <li><span>Hair Spa</span></li>
                <li><span>Hair Smoothening</span></li>
                <li><span>Hair Coloring</span></li>
                <li><span>Hair Treatments</span></li>
              </ul>
            </div>

            {/* Category 2 */}
            <div className="service-category glass-card animate-on-scroll delay-1">
              <div className="service-img-container">
                <img src="/assets/service_beauty.png" alt="Beauty Services" loading="lazy" />
                <div className="service-overlay">
                  <h3>Beauty Services</h3>
                </div>
              </div>
              <ul className="service-list">
                <li><span>Bridal Makeup</span></li>
                <li><span>Party Makeup</span></li>
                <li><span>Facials</span></li>
                <li><span>Cleanup</span></li>
                <li><span>Bleach</span></li>
                <li><span>Threading</span></li>
              </ul>
            </div>

            {/* Category 3 */}
            <div className="service-category glass-card animate-on-scroll delay-2">
              <div className="service-img-container">
                <img src="/assets/service_skin.png" alt="Skin Care" loading="lazy" />
                <div className="service-overlay">
                  <h3>Skin Care</h3>
                </div>
              </div>
              <ul className="service-list">
                <li><span>Skin Treatments</span></li>
                <li><span>Facial Therapies</span></li>
                <li><span>Glow Treatments</span></li>
                <li><span>Rejuvenation Services</span></li>
              </ul>
            </div>

            {/* Category 4 */}
            <div className="service-category glass-card animate-on-scroll">
              <div className="service-img-container">
                <img src="/assets/service_grooming.png" alt="Men's Grooming" loading="lazy" />
                <div className="service-overlay">
                  <h3>Men's Grooming</h3>
                </div>
              </div>
              <ul className="service-list">
                <li><span>Hair Cut</span></li>
                <li><span>Beard Styling</span></li>
                <li><span>Hair Spa</span></li>
                <li><span>Grooming Packages</span></li>
              </ul>
            </div>

            {/* Category 5 */}
            <div className="service-category glass-card animate-on-scroll delay-1">
              <div className="service-img-container">
                <img src="/assets/service_hair.png" alt="Kids Styling" loading="lazy" style={{ filter: 'hue-rotate(45deg)' }} />
                <div className="service-overlay">
                  <h3>Kids Styling</h3>
                </div>
              </div>
              <ul className="service-list">
                <li><span>Trendy Kids Haircuts</span></li>
                <li><span>Special Occasion Styling</span></li>
              </ul>
            </div>

            {/* Category 6 */}
            <div className="service-category glass-card animate-on-scroll delay-2">
              <div className="service-img-container">
                <img src="/assets/hero_bg.png" alt="Training Academy" loading="lazy" />
                <div className="service-overlay">
                  <h3>Training Academy</h3>
                </div>
              </div>
              <ul className="service-list">
                <li><span>Hair Styling Course</span></li>
                <li><span>Makeup Course</span></li>
                <li><span>Beauty Course</span></li>
                <li><span>Professional Certification</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="gallery section-padding">
        <div className="container">
          <div className="section-header text-center animate-on-scroll">
            <h2>Salon Transformations</h2>
            <div className="divider"></div>
          </div>
          
          <div className="masonry-grid">
            <div className="masonry-item animate-on-scroll">
              <img src="/assets/service_hair.png" alt="Hair Transformation" loading="lazy" />
              <div className="item-overlay"><span>Hair Styling</span></div>
            </div>
            <div className="masonry-item animate-on-scroll">
              <img src="/assets/service_beauty.png" alt="Bridal Makeup" loading="lazy" />
              <div className="item-overlay"><span>Bridal Makeup</span></div>
            </div>
            <div className="masonry-item animate-on-scroll">
              <img src="/assets/service_skin.png" alt="Skin Care" loading="lazy" />
              <div className="item-overlay"><span>Skin Care</span></div>
            </div>
            <div className="masonry-item animate-on-scroll">
              <img src="/assets/service_grooming.png" alt="Grooming" loading="lazy" />
              <div className="item-overlay"><span>Grooming</span></div>
            </div>
            <div className="masonry-item animate-on-scroll">
              <img src="/assets/hero_bg.png" alt="Training" loading="lazy" />
              <div className="item-overlay"><span>Training Sessions</span></div>
            </div>
            <div className="masonry-item animate-on-scroll">
              <img src="/assets/service_hair.png" alt="Hair Coloring" loading="lazy" style={{ filter: 'saturate(1.5)' }} />
              <div className="item-overlay"><span>Coloring</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* Training Academy Section */}
      <section id="academy" className="academy section-padding">
        <div className="container">
          <div className="academy-content flex-row">
            <div className="academy-text animate-on-scroll">
              <h2>Build Your Beauty Career</h2>
              <div className="divider left"></div>
              <p>Join our professional training academy and learn industry-standard beauty, makeup, hair styling, and salon management skills from experienced experts.</p>
              <ul className="feature-list">
                <li><i className="ph-fill ph-check-circle"></i> Professional Trainers</li>
                <li><i className="ph-fill ph-check-circle"></i> Practical Sessions</li>
                <li><i className="ph-fill ph-check-circle"></i> Certification</li>
                <li><i className="ph-fill ph-check-circle"></i> Career Guidance</li>
              </ul>
              <a href="#contact" className="btn btn-primary mt-4">Enquire About Courses</a>
            </div>
            <div className="academy-image animate-on-scroll delay-1">
              <div className="image-wrapper glass-card">
                <img src="/assets/hero_bg.png" alt="Training Academy Session" loading="lazy" />
                <div className="floating-badge">
                  <span className="number">10+</span>
                  <span className="text">Years<br/>Experience</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials section-padding">
        <div className="container">
          <div className="section-header text-center animate-on-scroll">
            <h2>What Our Clients Say</h2>
            <div className="divider"></div>
          </div>
          
          <div className="testimonial-slider animate-on-scroll">
            <div className="testimonial-track" id="testimonialTrack">
              {/* Slide 1 */}
              <div className="testimonial-card glass-card">
                <div className="stars">
                  <i className="ph-fill ph-star"></i><i className="ph-fill ph-star"></i><i className="ph-fill ph-star"></i><i className="ph-fill ph-star"></i><i className="ph-fill ph-star"></i>
                </div>
                <p className="review">"Absolutely amazing experience! The hair styling was perfect, and the staff is extremely professional. The ambiance feels truly luxurious."</p>
                <h4 className="client-name">- Priya S.</h4>
              </div>
              {/* Slide 2 */}
              <div className="testimonial-card glass-card">
                <div className="stars">
                  <i className="ph-fill ph-star"></i><i className="ph-fill ph-star"></i><i className="ph-fill ph-star"></i><i className="ph-fill ph-star"></i><i className="ph-fill ph-star"></i>
                </div>
                <p className="review">"Got my bridal makeup done here. I have never felt so beautiful. They pay attention to every detail and the skin prep was fantastic."</p>
                <h4 className="client-name">- Anjali R.</h4>
              </div>
              {/* Slide 3 */}
              <div className="testimonial-card glass-card">
                <div className="stars">
                  <i className="ph-fill ph-star"></i><i className="ph-fill ph-star"></i><i className="ph-fill ph-star"></i><i className="ph-fill ph-star"></i><i className="ph-fill ph-star"></i>
                </div>
                <p className="review">"Best men's grooming in town. The beard styling was sharp and the hair spa was very relaxing. Highly recommended."</p>
                <h4 className="client-name">- Rahul V.</h4>
              </div>
            </div>
            <div className="slider-controls">
              <button id="prevTestimonial"><i className="ph ph-caret-left"></i></button>
              <button id="nextTestimonial"><i className="ph ph-caret-right"></i></button>
            </div>
          </div>
        </div>
      </section>

      {/* Instagram Section */}
      <section className="instagram section-padding">
        <div className="container text-center animate-on-scroll">
          <h2>Follow Our Latest Work</h2>
          <div className="divider"></div>
          <div className="insta-placeholder">
            <i className="ph-light ph-instagram-logo"></i>
            <p>Check out our live transformations on Instagram</p>
            <a href="https://www.instagram.com/seven_layers_salon/" target="_blank" rel="noreferrer" className="btn btn-outline mt-3">Visit Instagram</a>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section id="contact" className="location-contact section-padding">
        <div className="container">
          <div className="section-header text-center animate-on-scroll">
            <h2>Visit Our Salon</h2>
            <div className="divider"></div>
          </div>
          
          <div className="contact-layout">
            {/* Map */}
            <div className="map-container animate-on-scroll">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113400.91680582093!2d78.33083693240292!3d17.433230491032997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9b006a8e52a9%3A0xc33e147e4eb178b6!2sSeven%20layers%20unisex%20salon!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade">
              </iframe>
            </div>
            
            {/* Contact Card */}
            <div className="contact-card glass-card animate-on-scroll delay-1">
              <h3>Contact Information</h3>
              <div className="contact-item">
                <i className="ph-fill ph-phone"></i>
                <div>
                  <span>Phone</span>
                  <p>+91 9966468896</p>
                </div>
              </div>
              <div className="contact-item">
                <i className="ph-fill ph-whatsapp-logo"></i>
                <div>
                  <span>WhatsApp</span>
                  <p>+91 9966468896</p>
                </div>
              </div>
              <div className="contact-item">
                <i className="ph-fill ph-clock"></i>
                <div>
                  <span>Working Hours</span>
                  <p>Mon - Sun: 9:00 AM - 9:00 PM</p>
                </div>
              </div>
              
              <div className="contact-actions mt-4">
                <a href="tel:+919966468896" className="btn btn-primary w-100 mb-2 text-center">Call Now</a>
                <a href="https://wa.me/919966468896" target="_blank" rel="noreferrer" className="btn btn-outline w-100 text-center">WhatsApp Appointment</a>
                <a href="https://maps.app.goo.gl/H9wNt82gDcDqsVGp6" target="_blank" rel="noreferrer" className="btn btn-text w-100 text-center mt-2">Get Directions <i className="ph ph-arrow-right"></i></a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="container footer-content">
          <div className="footer-brand">
            <a href="#" className="logo">
              <span className="logo-highlight">SEVEN</span><br/>
              <span className="logo-sub">LAYERS UNISEX SALON</span>
            </a>
            <p>Transforming looks and building careers with professional experts in a luxurious environment.</p>
            <div className="social-links">
              <a href="https://www.instagram.com/seven_layers_salon/" target="_blank" rel="noreferrer" aria-label="Instagram"><i className="ph-fill ph-instagram-logo"></i></a>
              <a href="https://wa.me/919966468896" target="_blank" rel="noreferrer" aria-label="WhatsApp"><i className="ph-fill ph-whatsapp-logo"></i></a>
            </div>
          </div>
          
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#gallery">Gallery</a></li>
              <li><a href="#academy">Training Academy</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-links">
            <h4>Services</h4>
            <ul>
              <li><a href="#services">Hair Styling</a></li>
              <li><a href="#services">Bridal Makeup</a></li>
              <li><a href="#services">Skin Care</a></li>
              <li><a href="#services">Men's Grooming</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom text-center">
          <p>&copy; 2026 Seven Layers Unisex Salon & Training Academy. All Rights Reserved.</p>
        </div>
      </footer>
    </>
  );
}
