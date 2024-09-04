window.addEventListener('scroll', function() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    timelineItems.forEach(item => {
        const rect = item.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            item.style.transform = 'translateY(0)';
            item.style.opacity = '1';
        } else {
            item.style.transform = 'translateY(50px)';
            item.style.opacity = '0';
        }
    });
});