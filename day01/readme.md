
---

# JavaScript Loading Methods in HTML

## Overview
This project demonstrates different ways to load and execute JavaScript files in an HTML document.

---

## Methods for Loading JavaScript

### 1. **Problem with JavaScript in the `<head>`**
When JavaScript is loaded in the `<head>`, it runs before the HTML body is fully loaded, leading to errors when trying to access DOM elements.

### 2. **Using `async` Attribute**
```html
<script async src="app.js"></script>
```
- Downloads JavaScript in parallel.
- Executes immediately after download, not in order.

### 3. **Using `defer` Attribute**
```html
<script defer src="app.js"></script>
```
- Downloads JavaScript in parallel.
- Executes after HTML is fully loaded and in order.

### 4. **Recommended: External JavaScript File**
Use the `defer` attribute to ensure scripts run after the HTML is fully parsed and in the correct order.

```html
<script defer src="app.js"></script>
```

---

## Conclusion
- **`defer`** is the best choice for loading JavaScript after the HTML is fully parsed and maintains script order.
- **`async`** is for independent scripts but may cause order issues.

---

## Useful Links

- [Notion File - Day 1 Notes](https://www.notion.so/Day-1-Notes-1d0be281c8cd81c182daf7415b1519e0)
- [Netlify Live Site](https://clinquant-pothos-ce8acc.netlify.app/)

---