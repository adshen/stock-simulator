# 📱 App Icons

## Current Setup

The app uses **SVG icons** which work perfectly for:
- Browser tabs (favicon)
- PWA installation
- All screen sizes (scalable vector graphics)

### Files
- `favicon.svg` - Browser tab icon (32x32)
- `icon.svg` - App icon for PWA (512x512)

## SVG Icon Features

✅ **Schwab-inspired design**
- Schwab blue gradient background (#00a0df to #0066a1)
- White stock chart line with upward trend
- Large "S" letter for branding
- Modern, professional look

## Generate PNG Icons (Optional)

If you need PNG versions for better compatibility:

### Method 1: Use the Generator Page
1. Open `generate-icons.html` in your browser
2. Click the download buttons
3. Save as `icon-192.png` and `icon-512.png`

### Method 2: Online Converter
1. Go to https://cloudconvert.com/svg-to-png
2. Upload `icon.svg`
3. Set size to 192x192 and 512x512
4. Download both versions

### Method 3: Command Line (if you have ImageMagick)
```bash
# Install ImageMagick first
# macOS: brew install imagemagick
# Ubuntu: sudo apt install imagemagick

# Generate icons
convert icon.svg -resize 192x192 icon-192.png
convert icon.svg -resize 512x512 icon-512.png
```

## Update manifest.json for PNG

If you generate PNG icons, update `manifest.json`:

```json
"icons": [
  {
    "src": "icon-192.png",
    "sizes": "192x192",
    "type": "image/png"
  },
  {
    "src": "icon-512.png",
    "sizes": "512x512",
    "type": "image/png"
  }
]
```

## Browser Support

- **SVG icons**: Supported by all modern browsers (Chrome, Safari, Firefox, Edge)
- **PNG icons**: Better for older devices/browsers

The current SVG setup works great for 95%+ of users! 🎉

