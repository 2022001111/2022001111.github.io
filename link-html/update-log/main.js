document.addEventListener('DOMContentLoaded', function() {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabs = document.querySelectorAll('.tab');

    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');
            const imageNormal = this.getAttribute('data-image-normal');
            const imageActive = this.getAttribute('data-image-active');

            // 切换内容显示
            tabs.forEach(tab => tab.classList.remove('active'));
            document.getElementById(tabId).classList.add('active');

            // 切换按钮背景
            tabButtons.forEach(btn => {
                btn.style.backgroundImage = `url(${btn.getAttribute('data-image-normal')})`;
                btn.classList.remove('active');
            });
            this.style.backgroundImage = `url(${imageActive})`;
            this.classList.add('active');
        });
    });
});

// 确保在DOM加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    const tabButtons = document.querySelectorAll('.tab-button');
    
    // 遍历所有按钮，设置背景图像为data-image-normal的值
    tabButtons.forEach(button => {
        const imageNormal = button.getAttribute('data-image-normal');
        button.style.backgroundImage = `url(${imageNormal})`;
    });

    // 然后添加你的按钮点击事件处理代码
    const tabs = document.querySelectorAll('.tab');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');
            const imageNormal = this.getAttribute('data-image-normal');
            const imageActive = this.getAttribute('data-image-active');

            tabs.forEach(tab => tab.classList.remove('active'));
            document.getElementById(tabId).classList.add('active');

            tabButtons.forEach(btn => {
                btn.style.backgroundImage = `url(${btn.getAttribute('data-image-normal')})`;
                btn.classList.remove('active');
            });
            this.style.backgroundImage = `url(${imageActive})`;
            this.classList.add('active');
        });
    });
});

const tabButtons = document.querySelectorAll('.tab-button');

tabButtons.forEach(button => {
    button.addEventListener('click', function() {
        // 重置所有按钮的样式
        tabButtons.forEach(btn => btn.style.color = '');
        // 更改被点击按钮的样式
        this.style.color = '#ffffff';
    });
});



// 创建一个新的Audio对象，用于播放音效
const audio = new Audio();
audio.src = '../../click.mp3'; // 替换为你的音频文件路径

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


document.addEventListener('DOMContentLoaded', function() {
    // 选取所有带有clickable-button类的按钮
    const buttons = document.querySelectorAll('.clickable-button');
    buttons.forEach(button => {
        // 为每个按钮添加点击事件监听器
        button.addEventListener('click', function() {
            // 创建一个Audio对象
            const audio = new Audio('path/to/your/click-sound.mp3');
            // 播放音效
            audio.play();
        });
    });
});


document.addEventListener('DOMContentLoaded', function() {
    // 选取所有带有clickable-button类的按钮
    const buttons = document.querySelectorAll('.tab-buttons');
    buttons.forEach(button => {
        // 为每个按钮添加点击事件监听器
        button.addEventListener('click', function() {
            // 创建一个Audio对象
            const audio = new Audio('../../click.mp3');
            // 播放音效
            audio.play();
        });
    });
});



document.addEventListener('click', function(event) {
    var target = event.target;
    if (target.classList.contains('clickable-text')) {
        var contentId = target.dataset.target;
        var hiddenContent = document.getElementById(contentId);
        if (hiddenContent.classList.contains('hidden-text')) {
            hiddenContent.classList.remove('hidden-text'); // 如果隐藏，显示它
        } else {
            hiddenContent.classList.add('hidden-text'); // 如果显示，隐藏它
        }
    }
});
