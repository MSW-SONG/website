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
});