// Main JavaScript file for CRHC website

document.addEventListener("DOMContentLoaded", () => {
  // Smooth scrolling for anchor links
  const links = document.querySelectorAll('a[href^="#"]')
  links.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault()
      const target = document.querySelector(this.getAttribute("href"))
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }
    })
  })

  // Add scroll effect to navbar
  const navbar = document.querySelector(".navbar")
  let lastScrollTop = 0

  window.addEventListener("scroll", () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop

    if (scrollTop > lastScrollTop && scrollTop > 100) {
      // Scrolling down
      navbar.style.transform = "translateY(-100%)"
    } else {
      // Scrolling up
      navbar.style.transform = "translateY(0)"
    }

    lastScrollTop = scrollTop
  })

  // Add animation to stats numbers
  const observerOptions = {
    threshold: 0.5,
    rootMargin: "0px 0px -100px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const statNumber = entry.target.querySelector(".stat-number")
        if (statNumber && !statNumber.classList.contains("animated")) {
          animateNumber(statNumber)
          statNumber.classList.add("animated")
        }
      }
    })
  }, observerOptions)

  // Observe all stat items
  const statItems = document.querySelectorAll(".stat-item")
  statItems.forEach((item) => {
    observer.observe(item)
  })

  // Animate member cards on scroll
  const memberCards = document.querySelectorAll(".member-card, .activity-card, .about-card")
  const cardObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1"
          entry.target.style.transform = "translateY(0)"
        }
      })
    },
    {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    },
  )

  memberCards.forEach((card) => {
    card.style.opacity = "0"
    card.style.transform = "translateY(30px)"
    card.style.transition = "opacity 0.6s ease, transform 0.6s ease"
    cardObserver.observe(card)
  })

  // Code animation typing effect
  const codeLines = document.querySelectorAll(".code-line")
  if (codeLines.length > 0) {
    animateCodeLines()
  }

  // Add hover effect to skill tags
  const skillTags = document.querySelectorAll(".skill-tag, .tag")
  skillTags.forEach((tag) => {
    tag.addEventListener("mouseenter", function () {
      this.style.transform = "scale(1.05)"
      this.style.boxShadow = "0 5px 15px rgba(0, 255, 136, 0.3)"
    })

    tag.addEventListener("mouseleave", function () {
      this.style.transform = "scale(1)"
      this.style.boxShadow = "none"
    })
  })

  // Mobile menu toggle (if needed in future)
  const mobileMenuToggle = document.querySelector(".mobile-menu-toggle")
  const navMenu = document.querySelector(".nav-menu")

  if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener("click", () => {
      navMenu.classList.toggle("active")
    })
  }
})

// Animate numbers function
function animateNumber(element) {
  const target = Number.parseInt(element.textContent.replace(/[^\d]/g, ""))
  const suffix = element.textContent.replace(/[\d]/g, "")
  let current = 0
  const increment = target / 50
  const timer = setInterval(() => {
    current += increment
    if (current >= target) {
      element.textContent = target + suffix
      clearInterval(timer)
    } else {
      element.textContent = Math.floor(current) + suffix
    }
  }, 30)
}

// Animate code lines typing effect
function animateCodeLines() {
  const codeAnimation = document.querySelector(".code-animation")
  if (!codeAnimation) return

  const lines = codeAnimation.querySelectorAll(".code-line")
  lines.forEach((line, index) => {
    line.style.opacity = "0"
    line.style.transform = "translateX(-20px)"

    setTimeout(() => {
      line.style.transition = "opacity 0.5s ease, transform 0.5s ease"
      line.style.opacity = "1"
      line.style.transform = "translateX(0)"
    }, index * 200)
  })
}

// Add particle effect to hero section
function createParticles() {
  const hero = document.querySelector(".hero")
  if (!hero) return

  for (let i = 0; i < 50; i++) {
    const particle = document.createElement("div")
    particle.className = "particle"
    particle.style.cssText = `
            position: absolute;
            width: 2px;
            height: 2px;
            background: rgba(0, 255, 136, 0.3);
            border-radius: 50%;
            pointer-events: none;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: float ${3 + Math.random() * 4}s ease-in-out infinite;
            animation-delay: ${Math.random() * 2}s;
        `
    hero.appendChild(particle)
  }
}

// Add CSS animation for particles
const style = document.createElement("style")
style.textContent = `
    @keyframes float {
        0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0; }
        50% { transform: translateY(-20px) rotate(180deg); opacity: 1; }
    }
    
    .particle {
        animation: float 6s ease-in-out infinite;
    }
`
document.head.appendChild(style)

// Initialize particles
setTimeout(createParticles, 1000)

// Add loading animation
window.addEventListener("load", () => {
  document.body.classList.add("loaded")
})

// Utility function for smooth animations
function easeInOutCubic(t) {
  return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1
}

// Add scroll progress indicator
function addScrollProgress() {
  const progressBar = document.createElement("div")
  progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 3px;
        background: linear-gradient(90deg, #00ff88, #4ecdc4);
        z-index: 9999;
        transition: width 0.1s ease;
    `
  document.body.appendChild(progressBar)

  window.addEventListener("scroll", () => {
    const scrolled = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
    progressBar.style.width = scrolled + "%"
  })
}

// Initialize scroll progress
addScrollProgress()
