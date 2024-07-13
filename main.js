// 创建一个新的Audio对象，用于播放音效
const audio = new Audio();
audio.src = 'click.mp3'; // 替换为你的音频文件路径

// 获取所有的链接元素
const links = document.querySelectorAll('a');

// 为每个链接添加点击事件监听器
links.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // 阻止默认的链接跳转行为
        audio.play(); // 播放音效

        // 播放音效后，延迟跳转到链接的目标页面
        setTimeout(() => {
            window.location.href = this.href; // 跳转到链接的目标页面
        }, 1000); // 延迟1秒后跳转，可以根据需要调整延迟时间
    });
});
