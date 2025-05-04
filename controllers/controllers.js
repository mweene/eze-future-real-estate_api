const db = require('../db');

exports.getClients = (req, res, next) => {
  db.all('SELECT FROM clienst', [], (err, rows) => {
    if(err) return next(err);
    res.json(rows);
  });
};

exports.addClient = (req, res, next) => {
  const {name,phone,email} = req.body;
  db.run('INSERT INTO clients (name, phone, email) VALUES(?,?,?)', [name, phone, email],
    err => {
      if (err) return next(err);
      res.status(201).json({id: this.lastID});
    }
  );
};
