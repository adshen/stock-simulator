// 动态更新股票数据（模拟实时更新）
function updateStockPrices() {
    const stockItems = document.querySelectorAll('.stock-item');
    
    stockItems.forEach(item => {
        const priceElement = item.querySelector('.price');
        const changeElement = item.querySelector('.change');
        
        // 随机生成价格变动
        const currentPrice = parseFloat(priceElement.textContent);
        const changePercent = (Math.random() - 0.5) * 4; // -2% 到 +2%
        const newPrice = currentPrice * (1 + changePercent / 100);
        
        // 更新价格
        priceElement.textContent = newPrice.toFixed(2);
        changeElement.textContent = `${changePercent >= 0 ? '+' : ''}${changePercent.toFixed(2)}%`;
        
        // 更新颜色
        if (changePercent >= 0) {
            priceElement.className = 'price profit';
            changeElement.className = 'change profit';
        } else {
            priceElement.className = 'price loss';
            changeElement.className = 'change loss';
        }
    });
}

// 点击按钮效果
document.addEventListener('DOMContentLoaded', () => {
    // 买入按钮
    const buyButtons = document.querySelectorAll('.btn-buy');
    buyButtons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            const stockName = this.closest('.stock-item').querySelector('.stock-name').textContent;
            showToast(`买入 ${stockName}`);
        });
    });
    
    // 卖出按钮
    const sellButtons = document.querySelectorAll('.btn-sell');
    sellButtons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            const stockName = this.closest('.stock-item').querySelector('.stock-name').textContent;
            showToast(`卖出 ${stockName}`);
        });
    });
    
    // 标签页切换
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            tabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            showToast(this.textContent);
        });
    });
    
    // 底部导航切换
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            navItems.forEach(i => i.classList.remove('active'));
            this.classList.add('active');
            showToast(this.querySelector('span').textContent);
        });
    });
    
    // 资产眼睛图标（显示/隐藏资产）
    const assetEye = document.querySelector('.asset-eye');
    const assetValue = document.querySelector('.asset-value');
    let isHidden = false;
    
    assetEye.addEventListener('click', function() {
        if (isHidden) {
            assetValue.textContent = '328,456.78';
        } else {
            assetValue.textContent = '******';
        }
        isHidden = !isHidden;
    });
});

// 显示提示信息
function showToast(message) {
    // 移除已存在的提示
    const existingToast = document.querySelector('.toast');
    if (existingToast) {
        existingToast.remove();
    }
    
    // 创建新提示
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    toast.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: rgba(0, 0, 0, 0.8);
        color: white;
        padding: 12px 24px;
        border-radius: 8px;
        font-size: 14px;
        z-index: 1000;
        animation: fadeInOut 1.5s ease-in-out;
    `;
    
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.remove();
    }, 1500);
}

// 添加淡入淡出动画
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInOut {
        0% { opacity: 0; transform: translate(-50%, -50%) scale(0.9); }
        20% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
        80% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
        100% { opacity: 0; transform: translate(-50%, -50%) scale(0.9); }
    }
`;
document.head.appendChild(style);

// 每5秒更新一次股票价格（可选）
// setInterval(updateStockPrices, 5000);

