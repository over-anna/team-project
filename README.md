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
Here's the fetch

- scripts
```scripts/search.js
fetch("./assets/data/video-data.json")
  .then(response => {
    if (!response.ok) {
      throw new Error("Failed to load video data");
    }
    return response.json();

  })
  .then(data => {

    videoData = data;
    console.log('video Data', videoData)

    renderObjectResults(shortcuts.shortcuts);

  });

