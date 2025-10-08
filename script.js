
// Mobile Menu Toggle
const hamburger = document.querySelector(".hamburger");
const mobileMenuOverlay = document.querySelector(".mobile-menu-overlay");
const body = document.body;

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  mobileMenuOverlay.classList.toggle('active');
  
  // Prevent body scrolling when menu is open
  if (mobileMenuOverlay.classList.contains('active')) {
    body.style.overflow = 'hidden';
  } else {
    body.style.overflow = '';
  }
});

// Close menu when clicking on overlay
mobileMenuOverlay.addEventListener('click', (e) => {
  if (e.target === mobileMenuOverlay) {
    hamburger.classList.remove('active');
    mobileMenuOverlay.classList.remove('active');
    body.style.overflow = '';
  }
});

// Close menu when clicking on menu links
const mobileNavLinks = document.querySelectorAll('.mobile-nav-links a');
mobileNavLinks.forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    mobileMenuOverlay.classList.remove('active');
    body.style.overflow = '';
  });
});

// Close menu on escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && mobileMenuOverlay.classList.contains('active')) {
    hamburger.classList.remove('active');
    mobileMenuOverlay.classList.remove('active');
    body.style.overflow = '';
  }
});

// Navigation Active State Handler
function setActiveNavigation() {
  // Get current page URL and hash
  const currentPath = window.location.pathname;
  const currentHash = window.location.hash;
  const currentPage = currentPath.split('/').pop() || 'index.html';
  
  // Remove active class from all nav items
  const navItems = document.querySelectorAll('.nav-bar ul li');
  const navLinks = document.querySelectorAll('.nav-bar ul li a');
  
  navItems.forEach(item => item.classList.remove('active'));
  navLinks.forEach(link => link.classList.remove('active'));
  
  // Add active class to current page nav item
  navLinks.forEach(link => {
    const href = link.getAttribute('href') || '';
    const linkText = link.textContent.trim();
    
    // Handle different link types
    if (href === 'portfolio.html' && currentPage === 'portfolio.html') {
      // Portfolio page
      link.classList.add('active');
      link.parentElement.classList.add('active');
    } else if (href === 'servicii.html' && currentPage === 'servicii.html') {
      // Services page
      link.classList.add('active');
      link.parentElement.classList.add('active');
    } else if ((currentPage === 'index.html' || currentPage === '') && 
               (linkText === 'Home' || href === '' || href === 'index.html#about' || href === '#about')) {
      // Home section on index page - check by link text or various href patterns
      link.classList.add('active');
      link.parentElement.classList.add('active');
    }
  });
}

// Handle hash changes for single-page navigation
function handleHashChange() {
  setActiveNavigation();
}

// Listen for hash changes
window.addEventListener('hashchange', handleHashChange);

// Initialize navigation on page load
document.addEventListener('DOMContentLoaded', setActiveNavigation);

// Mission Text Animation - Optimized
class MissionReveal {
  constructor() {
    this.words = document.querySelectorAll('.reveal-word');
    this.section = document.querySelector('.mission');
    this.lastScrollY = 0;
    this.ticking = false;
    this.currentWordStates = new Array(this.words.length).fill('');
    this.isInView = false;
    
    if (this.words.length > 0 && this.section) {
      this.init();
    }
  }

  init() {
    // Throttled scroll listener for better performance
    let scrollTimeout;
    window.addEventListener('scroll', () => {
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
      scrollTimeout = setTimeout(() => {
        this.handleScroll();
      }, 16); // ~60fps
    }, { passive: true });
    
    // Initial check
    this.updateAnimation();
  }

  handleScroll() {
    if (!this.ticking) {
      requestAnimationFrame(() => {
        this.updateAnimation();
        this.ticking = false;
      });
      this.ticking = true;
    }
  }

  updateAnimation() {
    const rect = this.section.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    
    // Check if section is in viewport
    const isVisible = rect.top < windowHeight && rect.bottom > 0;
    
    if (!isVisible) {
      if (this.isInView) {
        this.resetAll();
        this.isInView = false;
      }
      return;
    }
    
    this.isInView = true;
    
    // Calculate scroll progress more precisely
    const sectionTop = rect.top;
    const sectionHeight = rect.height;
    
    // Start animation when section is 20% visible from bottom
    const startPoint = windowHeight * 0.8;
    const endPoint = windowHeight * 0.2;
    
    let progress = 0;
    if (sectionTop <= startPoint) {
      const scrollDistance = startPoint - sectionTop;
      const totalDistance = startPoint - endPoint + sectionHeight;
      progress = Math.max(0, Math.min(1, scrollDistance / totalDistance));
    }
    
    this.animateWords(progress);
  }

  animateWords(progress) {
    // More gradual reveal - start slow, end fast
    const easeProgress = this.easeInOutCubic(progress);
    const totalWords = this.words.length;
    
    this.words.forEach((word, index) => {
      // Calculate when this word should start glowing (staggered)
      const wordStartProgress = (index / totalWords) * 0.7; // Start earlier for later words
      const wordProgress = Math.max(0, Math.min(1, (easeProgress - wordStartProgress) / 0.3));
      
      let newState = '';
      
      if (wordProgress <= 0) {
        newState = '';
      } else if (wordProgress <= 0.25) {
        newState = 'glow-1';
      } else if (wordProgress <= 0.5) {
        newState = 'glow-2';
      } else if (wordProgress <= 0.75) {
        newState = 'glow-3';
      } else {
        newState = 'glow-full';
      }
      
      // Only update DOM if state changed (performance optimization)
      if (this.currentWordStates[index] !== newState) {
        word.classList.remove('glow-1', 'glow-2', 'glow-3', 'glow-full');
        if (newState) {
          word.classList.add(newState);
        }
        this.currentWordStates[index] = newState;
      }
    });
  }

  // Easing function for smoother animation
  easeInOutCubic(t) {
    return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
  }

  // Method to reset all words
  resetAll() {
    this.words.forEach((word, index) => {
      word.classList.remove('glow-1', 'glow-2', 'glow-3', 'glow-full');
      this.currentWordStates[index] = '';
    });
  }
}

// Workflow Circle Animation System
class WorkflowAnimations {
  constructor() {
    this.steps = document.querySelectorAll('.workflow-step');
    this.circles = document.querySelectorAll('.step-circle');
    this.animatedSteps = new Set();
    this.observer = null;
    
    if (this.steps.length > 0) {
      this.init();
    }
  }

  init() {
    // Set up intersection observer for scroll detection
    this.observer = new IntersectionObserver(
      (entries) => this.handleIntersection(entries),
      {
        threshold: 0.6, // Trigger when 60% of element is visible
        rootMargin: '-50px 0px'
      }
    );

    // Observe all workflow steps
    this.steps.forEach(step => {
      this.observer.observe(step);
    });
  }

  handleIntersection(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const stepIndex = Array.from(this.steps).indexOf(entry.target);
        
        if (!this.animatedSteps.has(stepIndex)) {
          this.animateStep(entry.target, stepIndex);
          this.animatedSteps.add(stepIndex);
        }
      }
    });
  }

  animateStep(stepElement, index) {
    const circle = stepElement.querySelector('.step-circle');
    const glow = stepElement.querySelector('.circle-glow');
    const number = stepElement.querySelector('.step-number');
    const title = stepElement.querySelector('.step-title');
    const description = stepElement.querySelector('.step-description');

    if (!circle) return;

    // Add animation classes
    circle.classList.add('animate-in');
    
    // Staggered animations with delays
    setTimeout(() => {
      if (glow) glow.classList.add('glow-pulse');
    }, 200);

    setTimeout(() => {
      if (number) number.classList.add('number-bounce');
    }, 400);

    setTimeout(() => {
      if (title) title.classList.add('text-slide-in');
    }, 600);

    setTimeout(() => {
      if (description) description.classList.add('text-fade-in');
    }, 800);

    // Radar sweep animation
    this.createRadarSweep(circle, index);
  }

  createRadarSweep(circle, index) {
    // Create radar sweep element
    const sweep = document.createElement('div');
    sweep.className = 'radar-sweep';
    circle.appendChild(sweep);

    // Trigger sweep animation
    setTimeout(() => {
      sweep.classList.add('sweep-active');
    }, 100);

    // Remove sweep element after animation
    setTimeout(() => {
      if (sweep.parentNode) {
        sweep.parentNode.removeChild(sweep);
      }
    }, 2000);
  }
}

// Why Choose Me Section Animation System
class WhyChooseAnimations {
  constructor() {
    this.cards = document.querySelectorAll('.why-card');
    this.observer = null;
    this.animatedCards = new Set();
    
    if (this.cards.length > 0) {
      this.init();
    }
  }

  init() {
    // Set up intersection observer for scroll detection
    this.observer = new IntersectionObserver(
      (entries) => this.handleIntersection(entries),
      {
        threshold: 0.3, // Trigger when 30% of card is visible
        rootMargin: '-50px 0px'
      }
    );

    // Observe all cards
    this.cards.forEach(card => {
      // Set initial state
      card.style.opacity = '0';
      card.style.transform = 'translateY(40px)';
      card.style.transition = 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
      
      this.observer.observe(card);
    });
  }

  handleIntersection(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const cardIndex = Array.from(this.cards).indexOf(entry.target);
        
        if (!this.animatedCards.has(cardIndex)) {
          this.animateCard(entry.target, cardIndex);
          this.animatedCards.add(cardIndex);
        }
      }
    });
  }

  animateCard(card, index) {
    // Staggered animation delays
    const delay = index * 150; // 150ms delay between each card
    
    setTimeout(() => {
      card.style.opacity = '1';
      card.style.transform = 'translateY(0)';
      
      // Add a subtle bounce effect for featured card
      if (card.classList.contains('card-featured')) {
        setTimeout(() => {
          card.style.transform = 'translateY(-4px)';
          setTimeout(() => {
            card.style.transform = 'translateY(0)';
          }, 200);
        }, 300);
      }
    }, delay);
  }
}

// In-House Feeling Section Animation System
class InHouseFeelingAnimations {
  constructor() {
    this.features = document.querySelectorAll('.in-house-feature');
    this.observer = null;
    this.animatedFeatures = new Set();
    
    if (this.features.length > 0) {
      this.init();
    }
  }

  init() {
    // Set up intersection observer for scroll detection
    this.observer = new IntersectionObserver(
      (entries) => this.handleIntersection(entries),
      {
        threshold: 0.4, // Trigger when 40% of feature is visible
        rootMargin: '-30px 0px'
      }
    );

    // Observe all features
    this.features.forEach(feature => {
      this.observer.observe(feature);
    });
  }

  handleIntersection(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const featureIndex = Array.from(this.features).indexOf(entry.target);
        
        if (!this.animatedFeatures.has(featureIndex)) {
          this.animateFeature(entry.target, featureIndex);
          this.animatedFeatures.add(featureIndex);
        }
      }
    });
  }

  animateFeature(feature, index) {
    // Staggered animation delays
    const delay = index * 200; // 200ms delay between each feature
    
    setTimeout(() => {
      feature.classList.add('fade-in');
    }, delay);
  }
}

// Business Benefits Section Animation System
class BusinessBenefitsAnimations {
  constructor() {
    this.cards = document.querySelectorAll('.benefit-card');
    this.observer = null;
    this.animatedCards = new Set();
    
    if (this.cards.length > 0) {
      this.init();
    }
  }

  init() {
    // Set up intersection observer for scroll detection
    this.observer = new IntersectionObserver(
      (entries) => this.handleIntersection(entries),
      {
        threshold: 0.3, // Trigger when 30% of card is visible
        rootMargin: '-100px 0px'
      }
    );

    // Observe all cards
    this.cards.forEach(card => {
      this.observer.observe(card);
    });
  }

  handleIntersection(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const cardIndex = Array.from(this.cards).indexOf(entry.target);
        
        if (!this.animatedCards.has(cardIndex)) {
          this.animateCard(entry.target, cardIndex);
          this.animatedCards.add(cardIndex);
        }
      }
    });
  }

  animateCard(card, index) {
    // Staggered animation delays for more dynamic effect
    const baseDelay = index * 150; // 150ms delay between each card
    
    setTimeout(() => {
      card.classList.add('animate-in');
      
      // Set up mini bars animation with proper heights
      const miniBars = card.querySelectorAll('.mini-bar');
      if (miniBars.length > 0) {
        miniBars.forEach((bar, index) => {
          // Get the original height from inline style
          const originalHeight = bar.style.height;
          if (originalHeight) {
            // Store original height and reset to 0
            bar.dataset.originalHeight = originalHeight;
            bar.style.height = '0';
            
            // Animate to original height with delay
            setTimeout(() => {
              bar.style.height = originalHeight;
            }, 400 + (index * 100));
          }
        });
      }
      
      // Set up competition bars animation with proper widths
      const competitionBars = card.querySelectorAll('.bar-fill');
      if (competitionBars.length > 0) {
        competitionBars.forEach((bar) => {
          const width = bar.style.width || '100%';
          bar.style.setProperty('--target-width', width);
          bar.style.width = '0%';
        });
      }
      
      // Add subtle bounce effect after main animation
      setTimeout(() => {
        card.style.transform = 'translateY(-3px)';
        setTimeout(() => {
          card.style.transform = 'translateY(0)';
        }, 150);
      }, 400);
    }, baseDelay);
  }
}

// FAQ Accordion
class FAQAccordion {
  constructor() {
    this.items = document.querySelectorAll('.faq-item');
    this.buttons = document.querySelectorAll('.faq-question');
    this.observer = null;
    if (this.buttons.length > 0) {
      this.init();
    }
  }
  init() {
    // Expand/Collapse logic with smooth height animation and ARIA updates
    this.buttons.forEach((btn) => {
      btn.addEventListener('click', () => this.toggle(btn));
      btn.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          this.toggle(btn);
        }
      });
    });

    // Animate items on scroll in a similar way to other sections
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
          this.observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2, rootMargin: '-40px 0px' });

    this.items.forEach(item => this.observer.observe(item));
  }
  toggle(btn) {
    const expanded = btn.getAttribute('aria-expanded') === 'true';
    const panel = document.getElementById(btn.getAttribute('aria-controls'));
    const item = btn.closest('.faq-item');

    // Close any other open item for an uncluttered look
    document.querySelectorAll('.faq-item.active').forEach(openItem => {
      if (openItem !== item) {
        this.closeItem(openItem);
      }
    });

    if (expanded) {
      this.closeItem(item, panel, btn);
    } else {
      this.openItem(item, panel, btn);
    }
  }
  openItem(item, panel, btn) {
    if (!panel) panel = item.querySelector('.faq-answer');
    if (!btn) btn = item.querySelector('.faq-question');
    item.classList.add('active');
    btn.setAttribute('aria-expanded', 'true');
    panel.style.height = panel.scrollHeight + 'px';
  }
  closeItem(item, panel, btn) {
    if (!panel) panel = item.querySelector('.faq-answer');
    if (!btn) btn = item.querySelector('.faq-question');
    item.classList.remove('active');
    btn.setAttribute('aria-expanded', 'false');
    panel.style.height = '0px';
  }
}

// Image Lightbox System
class ImageLightbox {
  constructor() {
    this.overlay = document.getElementById('lightboxOverlay');
    this.image = document.getElementById('lightboxImage');
    this.closeBtn = document.getElementById('lightboxClose');
    this.loadingElement = document.getElementById('lightboxLoading');
    this.body = document.body;
    this.imageCache = new Map();
    
    console.log('Lightbox initialized:', {
      overlay: !!this.overlay,
      image: !!this.image,
      closeBtn: !!this.closeBtn
    });
    
    if (this.overlay && this.image && this.closeBtn) {
      this.init();
      window.lightboxInitialized = true;
    } else {
      console.error('Lightbox elements not found');
    }
  }

  init() {
    // Wait a bit for thumbnails to be rendered, then add listeners
    setTimeout(() => {
      this.addThumbnailListeners();
    }, 100);

    // Close button event
    this.closeBtn.addEventListener('click', () => {
      this.closeLightbox();
    });

    // Close on overlay click
    this.overlay.addEventListener('click', (e) => {
      if (e.target === this.overlay) {
        this.closeLightbox();
      }
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.overlay.classList.contains('active')) {
        this.closeLightbox();
      }
    });

    // Handle window resize to manage hover effects
    window.addEventListener('resize', () => {
      this.handleResize();
    });
  }

  addThumbnailListeners() {
    // Use event delegation on thumbnail containers instead
    const thumbnailContainers = document.querySelectorAll('.thumbnail-item');
    console.log('Found thumbnail containers:', thumbnailContainers.length);
    
    thumbnailContainers.forEach((container, index) => {
      const thumbnailImage = container.querySelector('.thumbnail-image');
      
      if (thumbnailImage) {
        console.log(`Adding listener to thumbnail ${index + 1}`);
        
        // Preload image for faster lightbox opening
        this.preloadImage(thumbnailImage.src);
        
        // Add click listener to the container
        container.addEventListener('click', (e) => {
          e.preventDefault();
          e.stopPropagation();
          console.log('Thumbnail clicked:', thumbnailImage.src);
          this.openLightbox(thumbnailImage.src, thumbnailImage.alt);
        });
        
        // Add visual feedback
        container.style.cursor = 'pointer';
        thumbnailImage.style.cursor = 'pointer';
        
        // Add improved hover effects for desktop only
        if (window.innerWidth > 768) {
          this.addThumbnailHoverEffects(container);
        }
      }
    });

    // Also try direct image listeners as backup
    const thumbnailImages = document.querySelectorAll('.thumbnail-image');
    console.log('Found thumbnail images:', thumbnailImages.length);
    
    thumbnailImages.forEach((thumbnail, index) => {
      thumbnail.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        console.log(`Direct thumbnail click ${index + 1}:`, thumbnail.src);
        this.openLightbox(thumbnail.src, thumbnail.alt);
      });
    });
  }

  handleResize() {
    // Clear hover effects on mobile devices
    if (window.innerWidth <= 768) {
      const thumbnailContainers = document.querySelectorAll('.project-thumbnails');
      thumbnailContainers.forEach(container => {
        container.classList.remove('has-hovered');
        const items = container.querySelectorAll('.thumbnail-item');
        items.forEach(item => {
          item.classList.remove('is-hovered');
        });
      });
    }
  }

  addThumbnailHoverEffects(thumbnailItem) {
    const thumbnailContainer = thumbnailItem.closest('.project-thumbnails');
    
    if (thumbnailContainer) {
      thumbnailItem.addEventListener('mouseenter', () => {
        // Only add hover effects on desktop
        if (window.innerWidth > 768) {
          // Add classes to indicate hover state
          thumbnailContainer.classList.add('has-hovered');
          thumbnailItem.classList.add('is-hovered');
        }
      });
      
      thumbnailItem.addEventListener('mouseleave', () => {
        // Remove classes when not hovering
        thumbnailContainer.classList.remove('has-hovered');
        thumbnailItem.classList.remove('is-hovered');
        
        // Also remove from all other items in case they have it
        const allItems = thumbnailContainer.querySelectorAll('.thumbnail-item');
        allItems.forEach(item => {
          item.classList.remove('is-hovered');
        });
      });
    }
  }

  preloadImage(src) {
    if (!this.imageCache.has(src)) {
      const img = new Image();
      img.onload = () => {
        this.imageCache.set(src, img);
        console.log('Preloaded image:', src);
      };
      img.onerror = () => {
        console.error('Failed to preload image:', src);
      };
      img.src = src;
    }
  }

  openLightbox(imageSrc, imageAlt) {
    console.log('Opening lightbox with:', imageSrc);
    
    // Show lightbox immediately
    this.overlay.classList.add('active');
    
    // Show loading state
    this.showLoading();
    
    // Prevent body scrolling
    this.body.style.overflow = 'hidden';
    
    // Check if image is already cached
    if (this.imageCache.has(imageSrc)) {
      console.log('Using cached image');
      this.displayImage(imageSrc, imageAlt);
    } else {
      console.log('Loading image...');
      this.loadImage(imageSrc, imageAlt);
    }
    
    // Focus on close button for accessibility
    setTimeout(() => {
      this.closeBtn.focus();
    }, 300);
  }

  showLoading() {
    if (this.loadingElement) {
      this.loadingElement.classList.remove('hidden');
    }
    this.image.classList.remove('loaded');
  }

  hideLoading() {
    if (this.loadingElement) {
      this.loadingElement.classList.add('hidden');
    }
  }

  loadImage(src, alt) {
    const img = new Image();
    
    img.onload = () => {
      console.log('Image loaded successfully');
      this.imageCache.set(src, img);
      this.displayImage(src, alt);
    };
    
    img.onerror = () => {
      console.error('Failed to load image:', src);
      this.hideLoading();
      // You could show an error message here
    };
    
    img.src = src;
  }

  displayImage(src, alt) {
    // Set image source and alt text
    this.image.src = src;
    this.image.alt = alt || 'Project image';
    
    // Hide loading and show image
    this.hideLoading();
    this.image.classList.add('loaded');
  }

  closeLightbox() {
    console.log('Closing lightbox');
    
    // Hide lightbox
    this.overlay.classList.remove('active');
    
    // Restore body scrolling
    this.body.style.overflow = '';
    
    // Reset loading states immediately
    this.hideLoading();
    this.image.classList.remove('loaded');
    
    // Clear image source after animation
    setTimeout(() => {
      this.image.src = '';
      this.image.alt = '';
    }, 300);
  }
}

// Initialize all animations when DOM is loaded
function initializePortfolio() {
  console.log('Initializing portfolio components...');
  
  new MissionReveal();
  new WorkflowAnimations();
  new WhyChooseAnimations();
  new InHouseFeelingAnimations();
  new BusinessBenefitsAnimations();
  new FAQAccordion();
  
  // Initialize lightbox with a slight delay to ensure all elements are ready
  setTimeout(() => {
    console.log('Initializing lightbox...');
    new ImageLightbox();
  }, 500);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializePortfolio);
} else {
  initializePortfolio();
}

// Also initialize on window load as backup
window.addEventListener('load', () => {
  // Only initialize lightbox again if it wasn't already initialized
  if (!window.lightboxInitialized) {
    console.log('Window loaded - initializing lightbox backup...');
    new ImageLightbox();
    window.lightboxInitialized = true;
  }
});







