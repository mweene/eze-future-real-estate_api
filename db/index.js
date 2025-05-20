const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./clients.db");

// Create the clients table if it doesn't exist
db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS clients (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      phone TEXT NOT NULL,
      plot_size TEXT NOT NULL,
      date_bought TEXT NOT NULL,
      site_name TEXT NOT NULL,
      site_plan TEXT NOT NULL
    )
  `);
});

module.exports = db;
