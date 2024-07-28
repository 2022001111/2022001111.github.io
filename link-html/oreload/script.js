document.addEventListener('DOMContentLoaded', function() {
    const progressElement = document.querySelector('.progress');
    const percentageElement = document.querySelector('.percentage');
    const animationDuration = 4000; // 动画持续时间，单位毫秒
    // 在69%处添加更多的值以延长停顿时间
    const extendedPauseSteps = 50; // 停顿的步数
    const animationSteps = [0, ...Array.from({length: 67}, (_, i) => i + 1), ...Array.from({length: extendedPauseSteps}, (_, i) => 69), ...Array.from({length: 32}, (_, i) => 70 + i)];
    const stepDuration = animationDuration / (animationSteps.length - 1); // 每一步的持续时间

    let currentStep = 0;
    let animationStart = null;

    function updatePercentage(timestamp) {
        if (!animationStart) animationStart = timestamp;
        const progress = timestamp - animationStart;
        // 确保在69%时停留更长的时间
        const stepIndex = Math.min(Math.floor(progress / stepDuration), animationSteps.length - 1);
        const percentage = animationSteps[stepIndex];
        percentageElement.textContent = `${percentage}%`;

        if (progress < animationDuration) {
            requestAnimationFrame(updatePercentage);
        } else {
            percentageElement.textContent = '100%';
            progressElement.classList.add('progress-done');
            // 添加跳转逻辑
            window.location.href = '../update-log/index.html'; // 替换为您想要跳转的网页地址
        }
    }

    requestAnimationFrame(updatePercentage);
});
