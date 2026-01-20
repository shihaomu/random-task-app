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
        { emoji: "🧘‍♀️", text: "冥想 5 分钟" },
        { emoji: "💪", text: "做 10 个深蹲" },
        { emoji: "🤾", text: "做 1 分钟平板支撑" },
        { emoji: "🧴", text: "涂护手霜" },
        { emoji: "🦷", text: "使用牙线清洁牙齿" },
        { emoji: "🌅", text: "看一会儿日出或日落" }
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
        { emoji: "🎪", text: "尝试一个简单的魔术" },
        { emoji: "🎸", text: "学习弹一个吉他和弦" },
        { emoji: "🎲", text: "玩一个桌面游戏" },
        { emoji: "🎺", text: "听一个播客节目" },
        { emoji: "🎩", text: "看一个魔术表演视频" },
        { emoji: "🎢", text: "玩一个益智游戏" }
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
        { emoji: "📊", text: "学习一个 Excel 小技巧" },
        { emoji: "🧮", text: "心算一道数学题" },
        { emoji: "🗺️", text: "在地图上找一个陌生国家" },
        { emoji: "🔬", text: "了解一个科学原理" },
        { emoji: "📜", text: "了解一个历史事件" },
        { emoji: "🌐", text: "学习几句外语问候语" }
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
        { emoji: "⭐", text: "写下三件感恩的事" },
        { emoji: "📦", text: "整理一个抽屉" },
        { emoji: "🧤", text: "洗几件衣服" },
        { emoji: "🛒", text: "列一个购物清单" },
        { emoji: "📧", text: "清理邮件收件箱" },
        { emoji: "🏠", text: "整理一个房间角落" },
        { emoji: "🗑️", text: "扔掉三件不需要的东西" },
        { emoji: "💰", text: "记录今天的开销" },
        { emoji: "🔋", text: "给电子设备充电" },
        { emoji: "🧽", text: "擦拭一张桌子" },
        { emoji: "📋", text: "检查冰箱食材" }
    ]
};

// 将所有任务合并到一个数组
const allTasks = [
    ...taskDatabase.health,
    ...taskDatabase.entertainment,
    ...taskDatabase.learning,
    ...taskDatabase.life
];

// 从 localStorage 加载统计数据
let completedCount = parseInt(localStorage.getItem('completedCount')) || 0;
let totalCount = parseInt(localStorage.getItem('totalCount')) || 0;

// 记录最近生成的任务，避免重复（最近10个）
let recentTasks = [];

// 更新统计显示
function updateStats() {
    document.getElementById('completed-count').textContent = completedCount;
    document.getElementById('total-count').textContent = totalCount;
}

// 保存统计数据到 localStorage
function saveStats() {
    localStorage.setItem('completedCount', completedCount);
    localStorage.setItem('totalCount', totalCount);
}

// 随机选择一个任务（避免重复最近生成的任务）
function getRandomTask() {
    // 过滤掉最近生成的任务
    const availableTasks = allTasks.filter(task => {
        return !recentTasks.some(recent =>
            recent.emoji === task.emoji && recent.text === task.text
        );
    });

    // 如果可用任务列表为空（所有任务都在最近列表中），则清空最近记录
    if (availableTasks.length === 0) {
        recentTasks = [];
        return getRandomTask(); // 递归调用重新获取
    }

    // 从可用任务中随机选择一个
    const randomIndex = Math.floor(Math.random() * availableTasks.length);
    const selectedTask = availableTasks[randomIndex];

    // 将选中的任务添加到最近列表
    recentTasks.push(selectedTask);

    // 保持最近列表最多记录 10 个任务
    if (recentTasks.length > 10) {
        recentTasks.shift();
    }

    return selectedTask;
}

// 显示任务
function displayTask(task) {
    const taskContainer = document.getElementById('task-container');
    const taskId = Date.now();

    taskContainer.innerHTML = `
        <div class="task-item" data-task-id="${taskId}">
            <div class="task-content">
                <span class="task-emoji">${task.emoji}</span>
                <span class="task-text">${task.text}</span>
            </div>
            <button class="complete-btn" onclick="completeTask(${taskId}, ${JSON.stringify(task).replace(/"/g, '&quot;')})">
                <span class="btn-icon">✓</span>
                <span class="btn-text">完成</span>
            </button>
        </div>
    `;

    // 增加总计计数
    totalCount++;
    updateStats();
    saveStats();
}

// 完成任务
function completeTask(taskId, task) {
    const taskItem = document.querySelector(`[data-task-id="${taskId}"]`);
    if (taskItem && !taskItem.classList.contains('completed')) {
        taskItem.classList.add('completed');

        // 禁用完成按钮
        const completeBtn = taskItem.querySelector('.complete-btn');
        completeBtn.disabled = true;
        completeBtn.innerHTML = '<span class="btn-icon">✓</span><span class="btn-text">已完成</span>';

        // 增加完成计数
        completedCount++;
        updateStats();
        saveStats();

        // 添加到历史记录
        addToHistory(task);

        // 添加庆祝动画效果
        taskItem.style.animation = 'none';
        taskItem.offsetHeight; // 触发重排
        taskItem.style.animation = 'celebrate 0.6s ease-out';
    }
}

// 添加到历史记录
function addToHistory(task) {
    const historyList = document.getElementById('history-list');
    const now = new Date();

    // 格式化日期和时间
    const date = now.toLocaleDateString('zh-CN', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
    });
    const time = now.toLocaleTimeString('zh-CN', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });

    const li = document.createElement('li');
    li.innerHTML = `<span>[${date} ${time}] ${task.emoji} ${task.text} ✅</span>`;
    historyList.insertBefore(li, historyList.firstChild);

    // 限制历史记录数量
    while (historyList.children.length > 20) {
        historyList.removeChild(historyList.lastChild);
    }
}

// 按钮事件监听
document.getElementById('generate-btn').addEventListener('click', () => {
    const task = getRandomTask();
    displayTask(task);
});

// 键盘快捷键
document.addEventListener('keydown', (e) => {
    if (e.code === 'Space') {
        e.preventDefault();
        document.getElementById('generate-btn').click();
    }
});

// 页面加载时初始化统计
updateStats();
