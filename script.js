// 初始化
document.addEventListener('DOMContentLoaded', function() {
    initializeLongPress();
    loadSettings();
});

// ============ 全屏功能 ============
function showFullscreen() {
    const elem = document.documentElement;
    
    if (!document.fullscreenElement) {
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        } else if (elem.webkitRequestFullscreen) { /* Safari */
            elem.webkitRequestFullscreen();
        } else if (elem.msRequestFullscreen) { /* IE11 */
            elem.msRequestFullscreen();
        }
        showToast('Entered fullscreen mode');
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.webkitExitFullscreen) { /* Safari */
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) { /* IE11 */
            document.msExitFullscreen();
        }
        showToast('Exited fullscreen mode');
    }
}

// ============ 页面切换 ============
function switchPage(pageId) {
    // 隐藏所有页面
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));
    
    // 显示目标页面
    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        targetPage.classList.add('active');
    }
    
    // 更新底部导航状态
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => item.classList.remove('active'));
    
    // 找到对应的导航按钮并激活
    const navButtons = {
        'accountPage': 0,
        'positionsPage': 1,
        'marketPage': 2,
        'tradePage': 3,
        'morePage': 4
    };
    
    const index = navButtons[pageId];
    if (index !== undefined && navItems[index]) {
        navItems[index].classList.add('active');
    }
}

// ============ 交易弹窗 ============
function showTradeModal(type) {
    const modal = document.getElementById('tradeModal');
    const title = document.getElementById('tradeModalTitle');
    
    title.textContent = type === 'BUY' ? 'Buy Stock' : 'Sell Stock';
    modal.classList.add('active');
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.classList.remove('active');
}

function confirmTrade() {
    const symbol = document.getElementById('tradeSymbol').value;
    const quantity = document.getElementById('tradeQuantity').value;
    
    if (!symbol || !quantity) {
        showToast('Please fill in all fields');
        return;
    }
    
    closeModal('tradeModal');
    showToast(`Order placed: ${quantity} shares of ${symbol}`);
    
    // 清空表单
    document.getElementById('tradeSymbol').value = '';
    document.getElementById('tradeQuantity').value = '';
}

// ============ 设置功能（隐藏入口 - 长按资产卡片） ============
let longPressTimer;
let isLongPress = false;

function initializeLongPress() {
    const accountCard = document.getElementById('accountCard');
    
    accountCard.addEventListener('touchstart', function(e) {
        isLongPress = false;
        longPressTimer = setTimeout(function() {
            isLongPress = true;
            openSettings();
        }, 1000); // 长按 1 秒
    });
    
    accountCard.addEventListener('touchend', function(e) {
        clearTimeout(longPressTimer);
    });
    
    accountCard.addEventListener('touchmove', function(e) {
        clearTimeout(longPressTimer);
    });
    
    // 桌面端支持
    accountCard.addEventListener('mousedown', function(e) {
        isLongPress = false;
        longPressTimer = setTimeout(function() {
            isLongPress = true;
            openSettings();
        }, 1000);
    });
    
    accountCard.addEventListener('mouseup', function(e) {
        clearTimeout(longPressTimer);
    });
    
    accountCard.addEventListener('mouseleave', function(e) {
        clearTimeout(longPressTimer);
    });
}

function openSettings() {
    const modal = document.getElementById('settingsModal');
    
    // 加载当前设置
    document.getElementById('settingsUserName').value = 
        localStorage.getItem('userName') || 'John Smith';
    document.getElementById('settingsTotalValue').value = 
        localStorage.getItem('totalValue') || '428567.89';
    document.getElementById('settingsCashAvailable').value = 
        localStorage.getItem('cashAvailable') || '85234.12';
    document.getElementById('settingsTodayChange').value = 
        localStorage.getItem('todayChange') || '3245.67';
    
    modal.classList.add('active');
    showToast('Settings opened - Long press detected!');
}

function saveSettings() {
    const userName = document.getElementById('settingsUserName').value;
    const totalValue = document.getElementById('settingsTotalValue').value;
    const cashAvailable = document.getElementById('settingsCashAvailable').value;
    const todayChange = document.getElementById('settingsTodayChange').value;
    
    // 保存到 localStorage
    localStorage.setItem('userName', userName);
    localStorage.setItem('totalValue', totalValue);
    localStorage.setItem('cashAvailable', cashAvailable);
    localStorage.setItem('todayChange', todayChange);
    
    // 更新显示
    updateDisplay();
    
    closeModal('settingsModal');
    showToast('Settings saved successfully!');
}

function loadSettings() {
    const userName = localStorage.getItem('userName');
    const totalValue = localStorage.getItem('totalValue');
    const cashAvailable = localStorage.getItem('cashAvailable');
    const todayChange = localStorage.getItem('todayChange');
    
    if (userName || totalValue || cashAvailable || todayChange) {
        updateDisplay();
    }
}

function updateDisplay() {
    const userName = localStorage.getItem('userName') || 'John Smith';
    const totalValue = localStorage.getItem('totalValue') || '428567.89';
    const cashAvailable = localStorage.getItem('cashAvailable') || '85234.12';
    const todayChange = localStorage.getItem('todayChange') || '3245.67';
    
    // 更新用户名
    document.getElementById('userName').textContent = userName;
    
    // 更新总资产
    const totalValueNum = parseFloat(totalValue);
    document.getElementById('totalValue').textContent = 
        '$' + totalValueNum.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2});
    
    // 更新可用现金
    const cashNum = parseFloat(cashAvailable);
    document.getElementById('cashAvailable').textContent = 
        '$' + cashNum.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2});
    
    // 更新今日变化
    const changeNum = parseFloat(todayChange);
    const changePercent = (changeNum / totalValueNum * 100).toFixed(2);
    
    const changeValueElement = document.getElementById('todayChange');
    const changePercentElement = document.getElementById('todayPercent');
    
    changeValueElement.textContent = 
        (changeNum >= 0 ? '+$' : '-$') + Math.abs(changeNum).toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2});
    changePercentElement.textContent = 
        '(' + (changeNum >= 0 ? '+' : '') + changePercent + '%)';
    
    // 更新颜色
    if (changeNum >= 0) {
        changeValueElement.className = 'change-value profit';
        changePercentElement.className = 'change-percent profit';
    } else {
        changeValueElement.className = 'change-value loss';
        changePercentElement.className = 'change-percent loss';
    }
}

// ============ 资产显示/隐藏 ============
let isAssetHidden = false;

function toggleAssetVisibility() {
    const totalValueElement = document.getElementById('totalValue');
    const cashAvailableElement = document.getElementById('cashAvailable');
    const todayChangeElement = document.getElementById('todayChange');
    const todayPercentElement = document.getElementById('todayPercent');
    
    if (isAssetHidden) {
        // 显示真实数据
        loadSettings();
        updateDisplay();
        isAssetHidden = false;
    } else {
        // 隐藏数据
        totalValueElement.textContent = '••••••••';
        cashAvailableElement.textContent = '••••••••';
        todayChangeElement.textContent = '••••••';
        todayPercentElement.textContent = '(••••)';
        isAssetHidden = true;
    }
}

// ============ 股票详情 ============
function showStockDetail(symbol) {
    showToast(`Viewing ${symbol} details`);
    // 这里可以扩展显示股票详情页面
}

// ============ 交易标签切换 ============
function selectTradeTab(tab) {
    const tabs = document.querySelectorAll('.trade-tab');
    tabs.forEach(t => t.classList.remove('active'));
    
    event.target.classList.add('active');
    showToast(`Switched to ${tab}`);
}

// ============ Toast 通知 ============
function showToast(message) {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 2000);
}

// ============ 点击模态框外部关闭 ============
document.addEventListener('click', function(event) {
    const tradeModal = document.getElementById('tradeModal');
    const settingsModal = document.getElementById('settingsModal');
    
    if (event.target === tradeModal) {
        closeModal('tradeModal');
    }
    
    if (event.target === settingsModal) {
        closeModal('settingsModal');
    }
});

// ============ 防止双指缩放 ============
document.addEventListener('touchstart', function(event) {
    if (event.touches.length > 1) {
        event.preventDefault();
    }
}, { passive: false });

let lastTouchEnd = 0;
document.addEventListener('touchend', function(event) {
    const now = Date.now();
    if (now - lastTouchEnd <= 300) {
        event.preventDefault();
    }
    lastTouchEnd = now;
}, false);

// ============ 时间问候语 ============
function updateGreeting() {
    const hour = new Date().getHours();
    let greeting = 'Good Morning';
    
    if (hour >= 12 && hour < 18) {
        greeting = 'Good Afternoon';
    } else if (hour >= 18) {
        greeting = 'Good Evening';
    }
    
    const greetingElement = document.querySelector('.greeting-text');
    if (greetingElement) {
        greetingElement.textContent = greeting;
    }
}

// 页面加载时更新问候语
updateGreeting();

// 每分钟更新一次问候语
setInterval(updateGreeting, 60000);
