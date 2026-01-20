// 任务数据库
const taskDatabase = {
    health: [
        { emoji: "💧", text: "喝一杯温水" },
        { emoji: "🧘", text: "做 5 分钟深呼吸" },
        { emoji: "🚶", text: "站起来走动 5 分钟" },
        { emoji: "🤸", text: "做 10 个伸展动作" },
        { emoji: "👀", text: "远眺 1 分钟，放松眼睛" },
        { emoji: "🍎", text: "吃一个水果" },
        { emoji: "😴", text: "休息 10 分钟" },
        { emoji: "🏃", text: "做 20 个开合跳" },
        { emoji: "🌿", text: "打开窗户呼吸新鲜空气" },
        { emoji: "🧘‍♀️", text: "冥想 5 分钟" }
    ],
    entertainment: [
        { emoji: "🎵", text: "听一首喜欢的歌" },
        { emoji: "📺", text: "看一个有趣的短视频" },
        { emoji: "🎮", text: "玩一局小游戏" },
        { emoji: "📚", text: "读几页书" },
        { emoji: "🎨", text: "画一幅简单的画" },
        { emoji: "🎤", text: "唱一首歌" },
        { emoji: "📸", text: "拍一张照片" },
        { emoji: "🎬", text: "看一个电影预告片" },
        { emoji: "🎭", text: "看一个喜剧片段" },
        { emoji: "🎪", text: "尝试一个简单的魔术" }
    ],
    learning: [
        { emoji: "📖", text: "学习一个新单词" },
        { emoji: "💡", text: "阅读一篇有趣的文章" },
        { emoji: "✍️", text: "写几句日记" },
        { emoji: "🔍", text: "搜索一个感兴趣的话题" },
        { emoji: "🎯", text: "设定一个今天的小目标" },
        { emoji: "📝", text: "整理今天的待办事项" },
        { emoji: "🌍", text: "了解一个世界趣闻" },
        { emoji: "🎓", text: "观看一个教育视频" },
        { emoji: "💭", text: "思考一个创意点子" },
        { emoji: "📊", text: "学习一个 Excel 小技巧" }
    ],
    life: [
        { emoji: "🧹", text: "整理一下桌面" },
        { emoji: "🌱", text: "给植物浇浇水" },
        { emoji: "☕", text: "泡一杯喜欢的饮品" },
        { emoji: "🌞", text: "晒晒太阳" },
        { emoji: "📱", text: "清理一下手机相册" },
        { emoji: "🎁", text: "给朋友发个问候" },
        { emoji: "🍰", text: "做一个小零食" },
        { emoji: "🧥", text: "整理一件衣服" },
        { emoji: "💬", text: "和身边的人聊聊天" },
        { emoji: "⭐", text: "写下三件感恩的事" }
    ]
};

// 将所有任务合并到一个数组
const allTasks = [
    ...taskDatabase.health,
    ...taskDatabase.entertainment,
    ...taskDatabase.learning,
    ...taskDatabase.life
];

// 随机选择一个任务
function getRandomTask() {
    const randomIndex = Math.floor(Math.random() * allTasks.length);
    return allTasks[randomIndex];
}

// 随机选择多个任务（不重复）
function getRandomMultipleTasks(count) {
    const shuffled = [...allTasks].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, Math.min(count, allTasks.length));
}

// 显示任务
function displayTasks(tasks) {
    const taskContainer = document.getElementById('task-container');

    if (tasks.length === 1) {
        const task = tasks[0];
        taskContainer.innerHTML = `
            <div class="task-item">
                <span class="task-emoji">${task.emoji}</span>
                <span class="task-text">${task.text}</span>
            </div>
        `;
    } else {
        taskContainer.innerHTML = tasks.map(task => `
            <div class="task-item">
                <span class="task-emoji">${task.emoji}</span>
                <span class="task-text">${task.text}</span>
            </div>
        `).join('');
    }
}

// 添加到历史记录
function addToHistory(tasks) {
    const historyList = document.getElementById('history-list');
    const timestamp = new Date().toLocaleTimeString('zh-CN', {
        hour: '2-digit',
        minute: '2-digit'
    });

    tasks.forEach(task => {
        const li = document.createElement('li');
        li.innerHTML = `<span>[${timestamp}] ${task.emoji} ${task.text}</span>`;
        historyList.insertBefore(li, historyList.firstChild);
    });

    // 限制历史记录数量
    while (historyList.children.length > 20) {
        historyList.removeChild(historyList.lastChild);
    }
}

// 按钮事件监听
document.getElementById('generate-btn').addEventListener('click', () => {
    const task = getRandomTask();
    displayTasks([task]);
    addToHistory([task]);
});

document.getElementById('generate-multiple-btn').addEventListener('click', () => {
    const tasks = getRandomMultipleTasks(5);
    displayTasks(tasks);
    addToHistory(tasks);
});

// 键盘快捷键
document.addEventListener('keydown', (e) => {
    if (e.code === 'Space') {
        e.preventDefault();
        document.getElementById('generate-btn').click();
    }
});
