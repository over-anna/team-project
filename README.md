# Keyboard Shortcut Search App

## 👥 Team Members
- Poppy Dalton
- Anna Patillo
- Shion Kishaba

---

## 📌 Project Overview
This project is a web application that allows users to search and filter keyboard shortcuts.  
Each team member contributed one unique shortcut to the dataset.

---

## 🚀 Features
- Search keyboard shortcuts by keyword
- Filter shortcuts
- Display shortcut descriptions clearly

---

## 🛠️ Technologies Used
- HTML
- CSS
- JavaScript
- Fetch API (to load JSON data)

---


## ✅ App Validity
- Nu Validator : <a href="https://validator.nu/?doc=https%3A%2F%2Fover-anna.github.io%2Fteam-project%2F" target="_blank">CLICK ME</a>

## 📝 Code Sample
<p>search.js</p>
<p>It gets a text input from the page (searchBox). If the box is empty, it shows all shortcuts. It will filter the list of shortcuts to those that much, then displays the filters results. </p>
```
const searchBox = document.getElementById("searchBox");

function handleShortcutSearch() {
  const query = searchBox.value.trim().toLowerCase();

  if (!query) {
    renderShortcuts(shortcutData.shortcuts);
    return;
  }

  const results = shortcutData.shortcuts.filter(item => {
    return (
      item.shortcut.toLowerCase().includes(query) ||
      item.description.toLowerCase().includes(query) ||
      item.author.toLowerCase().includes(query)
    );
  });

  renderShortcuts(results);
}

searchBox.addEventListener("input", handleShortcutSearch);
```
