const shortcutGrid = document.getElementById("shortcutGrid");

let shortcutData = { shortcuts: [] };

fetch("./assets/data/shortcut-data.json")
  .then(response => {
    if (!response.ok) {
      throw new Error("Failed to load shortcut data");
    }
    return response.json();
  })
  .then(data => {
    shortcutData = data;
    renderShortcuts(shortcutData.shortcuts);
  })
  .catch(error => {
    console.error(error);
    shortcutGrid.innerHTML = "<p class='text-danger'>Failed to load shortcuts.</p>";
  });

function renderShortcuts(items) {
  shortcutGrid.innerHTML = "";

  if (items.length === 0) {
    shortcutGrid.innerHTML = "<p class='text-muted'>No shortcuts found.</p>";
    return;
  }

  items.forEach(item => {
    const col = document.createElement("div");
    col.className = "col-lg-3 col-md-4 col-sm-12";

    col.innerHTML = `
      <div class="card h-100 shadow-sm p-3">
        <div class="card-body">

          <h5 class="card-title">${item.shortcut}</h5>

          <p class="card-text">
            ${item.description}
          </p>

          <p class="small text-muted">
            Author: <span id="author">${item.author}</span>
          </p>

        </div>
      </div>
    `;

    shortcutGrid.appendChild(col);
  });
}
