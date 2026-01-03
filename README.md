# Schwab Mobile Trading Simulator 📈

A fully-featured US stock trading simulator inspired by Charles Schwab's mobile app design. Perfect for demos, screenshots, or practicing trading interfaces!

## ✨ Features

### 📱 Mobile-First Design
- **Full-screen support** - Enter fullscreen mode with one tap
- **Responsive layout** - Works perfectly on all screen sizes
- **Touch-optimized** - Smooth interactions designed for mobile

### 💼 Complete Trading Interface
- **Account Overview** - View total value, cash available, buying power, and gains/losses
- **Positions Page** - See all your stock holdings with real-time P&L
- **Markets Page** - Browse market indices, watchlist, and search stocks
- **Trade Page** - View recent trades and access trading history
- **More Page** - Account settings and additional features

### 🎯 Interactive Features
- **Buy/Sell Buttons** - Opens realistic trading modal (no actual trading)
- **Stock Details** - Click any stock to view details
- **Tab Navigation** - Switch between different sections
- **Search Bar** - Search for stocks (UI only)
- **Toast Notifications** - Get feedback for every action

### 🔒 Hidden Settings (Secret Feature!)
**Long press** the account card (blue gradient card at top) for 1 second to open secret settings where you can:
- Change your display name
- Adjust total account value
- Modify cash available
- Set today's profit/loss

This makes it perfect for creating realistic screenshots with custom values!

### 👁️ Privacy Features
- Tap the eye icon to hide/show account values
- All data stored locally in browser

## 🚀 How to Use

### Option 1: View Online (Recommended)
Visit: **https://adshen.github.io/stock-simulator/**

### Option 2: Local Development
```bash
cd stock-simulator
python3 -m http.server 8000
# Visit http://localhost:8000
```

### 📱 Full-Screen Experience

- Tap the fullscreen button (⛶) in the top right corner to enter fullscreen mode
- Works on both desktop and mobile browsers
- Exit fullscreen by pressing ESC or tapping the button again

## 🎨 Pages & Navigation

### 1. Account Page (Home)
- Total account value with today's change
- Quick action buttons (Buy, Sell, Transfer)
- Position preview
- Cash and buying power details

### 2. Positions Page
- Complete list of all stock holdings
- Individual stock performance
- Cost basis and current value
- Unrealized gains/losses

### 3. Markets Page
- Major indices (S&P 500, Dow Jones, NASDAQ)
- Watchlist with mini charts
- Stock search functionality
- Real-time price updates (simulated)

### 4. Trade Page
- Recent trade history
- Buy/Sell/Hold badges
- Transaction details
- Trade type tabs (Stocks, Options, ETFs)

### 5. More Page
- Account settings
- Statements & documents
- Tax center
- Research & insights
- Help & support

## 🎭 Demo Mode Tips

### Creating Realistic Screenshots
1. **Long press** the account card to open settings
2. Set your desired values:
   - Name: "Michael Chen", "Sarah Johnson", etc.
   - Total Value: Any amount (e.g., "1250000" for $1.25M)
   - Cash Available: Portion of total (e.g., "250000")
   - Today's Change: Profit or loss (e.g., "15234.50" or "-8234.67")
3. Tap "Save Changes"
4. Take screenshots!

### Hidden Features
- **Long press** account card: Secret settings
- **Eye icon**: Hide/show balances
- **Fullscreen button**: Enter fullscreen mode
- All buttons provide visual feedback

## 🛠️ Technical Details

### Built With
- Pure HTML5, CSS3, JavaScript (ES6+)
- No frameworks or dependencies
- LocalStorage for settings persistence

### Browser Support
- Chrome/Edge (recommended)
- Safari (iOS & macOS)
- Firefox
- Any modern mobile browser

### Files
- `index.html` - Main structure
- `style.css` - Styling and animations
- `script.js` - All interactive functionality
- `favicon.svg` - Browser tab icon
- `icon.svg` - App icon

## 🔐 Privacy & Security

- **No real trading** - This is a simulator only
- **No data sent** - Everything runs locally in your browser
- **No accounts** - No login or registration required
- **No tracking** - No analytics or cookies

## 📝 Customization

### Changing Colors
Edit `style.css` and modify the CSS variables:
```css
:root {
    --primary-color: #00a0df;  /* Main blue */
    --success-color: #10b981;  /* Green for profits */
    --danger-color: #ef4444;   /* Red for losses */
}
```

### Adding More Stocks
Edit the stock lists in `index.html` - just copy and paste existing stock items and change the symbols/names/values.

### Modifying Holdings
Change the position items in the HTML to show different stocks, quantities, and P&L.

## 📱 Screenshots

Perfect for:
- UI/UX portfolio demonstrations
- Financial app mockups
- Trading education materials
- Social media posts
- Pranking friends (use responsibly! 😄)

## ⚠️ Disclaimer

This is a **simulator for demonstration purposes only**. No real trading occurs. All data is fictional and for display purposes only. Not affiliated with Charles Schwab or any financial institution.

## 📄 License

Free to use for personal and educational purposes.

---

**Made with ❤️ for traders, designers, and developers**

Enjoy your virtual trading experience! 🚀📊
