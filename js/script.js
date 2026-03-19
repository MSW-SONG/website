// 简单脚本：如果需要轮播图可在 slides 数组中添加图片路径
document.addEventListener('DOMContentLoaded', function () {
    const hero = document.querySelector('.hero');
    if (hero) {
        const slides = ['images/hero1.png'];
        let index = 0;
        // 如果有多张图则轮播
        if (slides.length > 1) {
            setInterval(() => {
                index = (index + 1) % slides.length;
                hero.style.backgroundImage = `url('${slides[index]}')`;
            }, 6000);
        }
    }

    const revealTargets = document.querySelectorAll(
        '.about-section .container, .contact-section .container, .about-page-section .container, .research-section .container, .contact-page-section .container, .news-title-item, .news-item, .direction-card, .team-member, .product-card, .equipment-card, .news-entry, .news-article, .paper-list li'
    );

    revealTargets.forEach((element, index) => {
        element.classList.add('reveal-on-scroll');
        element.style.transitionDelay = `${Math.min((index % 8) * 60, 360)}ms`;
    });

    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.18,
                rootMargin: '0px 0px -24px 0px'
            }
        );

        revealTargets.forEach((element) => observer.observe(element));
    } else {
        revealTargets.forEach((element) => element.classList.add('is-visible'));
    }
});