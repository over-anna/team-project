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
