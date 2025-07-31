// Epstein Investigation App - Main JavaScript
class EpsteinInvestigationApp {
    constructor() {
        this.baseYouTubeUrl = 'https://youtu.be/PjPHq-Ez0nc?si=LvfQ9ZNDo9R5uEFG';
        this.segments = window.INVESTIGATION_SEGMENTS || [];
        this.categoryColors = window.CATEGORY_COLORS || {};
        this.videoInfo = window.VIDEO_INFO || {};
        this.init();
    }

    init() {
        this.renderSegments();
        this.setupEventListeners();
        this.addLoadingAnimations();
        console.log('Epstein Investigation App initialized with', this.segments.length, 'segments');
    }

    renderSegments() {
        const grid = document.getElementById('segmentsGrid');
        if (!grid) return;
        
        grid.innerHTML = '';

        this.segments.forEach((segment, index) => {
            const card = this.createSegmentCard(segment, index);
            grid.appendChild(card);
        });
    }

    createSegmentCard(segment, index) {
        const card = document.createElement('div');
        card.className = 'segment-card loading';
        card.setAttribute('data-segment-id', segment.id);
        card.setAttribute('tabindex', '0');
        card.setAttribute('role', 'button');
        card.setAttribute('aria-label', `Play segment: ${segment.title}`);
        
        const categoryColor = this.categoryColors[segment.category] || '#4a5568';
        const imageFilenames = {
            1: 'segment1_investigation_opening.png',
            2: 'segment2_precision_tracking.png', 
            3: 'segment3_island_overview.png',
            4: 'segment4_continued_visits.png',
            5: 'segment5_wealthy_visitors.png',
            6: 'segment6_trump_tower.png',
            7: 'segment7_european_data_gap.png',
            8: 'segment8_data_broker_model.png',
            9: 'segment9_maxwell_capture.png'
        };
        const imageUrl = `assets/images/${imageFilenames[segment.id]}`;
        
        card.innerHTML = `
            <div class="card-image">
                <img src="${imageUrl}" 
                     alt="${segment.title} - Screenshot from Epstein investigation at ${segment.timestampStart}"
                     onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjIyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjIyMCIgZmlsbD0iIzY4NzU5YSIvPjx0ZXh0IHg9IjIwMCIgeT0iMTEwIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNiIgZmlsbD0iI2ZmZmZmZiIgdGV4dC1hbmNob3I9Im1pZGRsZSI+U2VnbWVudCAke3NlZ21lbnQuaWR9PC90ZXh0Pjwvc3ZnPg=='" />
                <div class="category-badge" style="background-color: ${categoryColor};">
                    ${segment.category}
                </div>
                <div class="segment-number">Segment ${segment.id}</div>
            </div>
            <div class="card-content">
                <h3 class="card-title">${segment.title}</h3>
                <p class="card-summary">${segment.summary}</p>
                <div class="card-quote">${segment.quote}</div>
                <div class="keywords">
                    ${segment.keywords.map(keyword => 
                        `<span class="keyword-tag">${keyword}</span>`
                    ).join('')}
                </div>
                <div class="card-footer">
                    <div class="timestamp">
                        <i class="fas fa-clock"></i>
                        <span>${segment.timestampStart} - ${segment.timestampEnd}</span>
                    </div>
                    <a href="${this.generateYouTubeUrl(segment.timestampSeconds)}" 
                       target="_blank" 
                       class="watch-button"
                       onclick="window.investigationApp.trackSegmentClick(${segment.id}); event.stopPropagation();"
                       aria-label="Watch ${segment.title} on YouTube">
                        <i class="fab fa-youtube"></i>
                        Watch Segment
                    </a>
                </div>
            </div>
        `;

        // Add staggered loading animation
        setTimeout(() => {
            card.classList.remove('loading');
        }, index * 100);

        return card;
    }


    generateYouTubeUrl(timestampSeconds) {
        return `${this.baseYouTubeUrl}&t=${timestampSeconds}s`;
    }

    setupEventListeners() {
        // Card interactions
        document.querySelectorAll('.segment-card').forEach(card => {
            card.addEventListener('click', (e) => {
                if (!e.target.closest('.watch-button')) {
                    const segmentId = card.getAttribute('data-segment-id');
                    this.handleCardClick(segmentId);
                }
            });

            card.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    const segmentId = card.getAttribute('data-segment-id');
                    this.handleCardClick(segmentId);
                }
            });

            // Hover effects
            card.addEventListener('mouseenter', () => {
                this.handleCardHover(card, true);
            });

            card.addEventListener('mouseleave', () => {
                this.handleCardHover(card, false);
            });
        });

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            this.handleKeyboardNavigation(e);
        });

        // Scroll animations
        window.addEventListener('scroll', () => {
            this.handleScroll();
        });
    }

    handleCardClick(segmentId) {
        const segment = this.segments.find(s => s.id == segmentId);
        if (segment) {
            this.trackSegmentClick(segmentId);
            const url = this.generateYouTubeUrl(segment.timestampSeconds);
            window.open(url, '_blank');
        }
    }

    handleCardHover(card, isHovering) {
        const img = card.querySelector('img');
        if (isHovering) {
            card.style.transform = 'translateY(-8px)';
            card.style.boxShadow = '0 12px 24px rgba(0, 0, 0, 0.15)';
        } else {
            card.style.transform = 'translateY(0)';
            card.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
        }
    }

    handleKeyboardNavigation(e) {
        const cards = document.querySelectorAll('.segment-card');
        const currentFocus = document.activeElement;
        
        if (!currentFocus.classList.contains('segment-card')) return;
        
        const currentIndex = Array.from(cards).indexOf(currentFocus);
        let nextIndex;
        
        switch(e.key) {
            case 'ArrowDown':
            case 'ArrowRight':
                e.preventDefault();
                nextIndex = (currentIndex + 1) % cards.length;
                cards[nextIndex].focus();
                break;
            case 'ArrowUp':
            case 'ArrowLeft':
                e.preventDefault();
                nextIndex = (currentIndex - 1 + cards.length) % cards.length;
                cards[nextIndex].focus();
                break;
        }
    }

    handleScroll() {
        const cards = document.querySelectorAll('.segment-card');
        const triggerBottom = window.innerHeight * 0.8;

        cards.forEach(card => {
            const cardTop = card.getBoundingClientRect().top;
            if (cardTop < triggerBottom) {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }
        });
    }

    addLoadingAnimations() {
        // Add loading states for initial render
        const cards = document.querySelectorAll('.segment-card');
        cards.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            card.style.transition = 'all 0.6s ease';
            
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, index * 150);
        });
    }

    trackSegmentClick(segmentId) {
        // Analytics tracking
        console.log(`Segment ${segmentId} clicked - tracking engagement`);
        
        // Could integrate with analytics platforms
        if (typeof gtag !== 'undefined') {
            gtag('event', 'segment_click', {
                'segment_id': segmentId,
                'video_title': 'Epstein Investigation',
                'investigation_focus': 'location_data'
            });
        }

        // Track specific segment for research purposes
        const segment = this.segments.find(s => s.id == segmentId);
        if (segment) {
            console.log(`Tracked: ${segment.title} at ${segment.timestampStart}`);
        }
    }

    // Utility methods
    searchSegments(query) {
        return this.segments.filter(segment => 
            segment.title.toLowerCase().includes(query.toLowerCase()) ||
            segment.summary.toLowerCase().includes(query.toLowerCase()) ||
            segment.quote.toLowerCase().includes(query.toLowerCase()) ||
            segment.keywords.some(keyword => 
                keyword.toLowerCase().includes(query.toLowerCase())
            )
        );
    }

    filterByCategory(category) {
        return this.segments.filter(segment => segment.category === category);
    }

    getSegmentById(id) {
        return this.segments.find(segment => segment.id === id);
    }

    // Export data for debugging/analysis
    exportSegmentData() {
        return {
            segments: this.segments,
            categories: this.categoryColors,
            videoInfo: this.videoInfo,
            totalSegments: this.segments.length
        };
    }
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    try {
        const app = new EpsteinInvestigationApp();
        
        // Make app globally available for console debugging
        window.investigationApp = app;
        
        // Add loading completion handler
        document.body.classList.add('loaded');
        
        console.log('🔍 Epstein Investigation App loaded successfully');
        console.log('📊 Available segments:', app.segments.length);
        console.log('🎯 Categories:', Object.keys(app.categoryColors));
        console.log('🛠️ Debug methods available on window.investigationApp');
        
    } catch (error) {
        console.error('Failed to initialize Epstein Investigation App:', error);
    }
});

// Service Worker registration (optional for offline functionality)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('SW registered: ', registration);
            })
            .catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}