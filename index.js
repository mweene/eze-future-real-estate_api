const express = require("express");
const port = process.env.PORT || 5052;

const app = express();
app.use(express.json());

app.get("/api/clients", (req, res) => {
  res.send(dummyData);
});

app.get("/api/clients/:clientID", (req, res) => {
  const id = parseInt(req.params.clientID);
  const client = dummyData.find((client) => client.id === id);

  res.send(client);
});

app.post("/api/clients", (req, res) => {
  const id = dummyData.length + 1;
  dummyData.push({ id, ...req.body });

  res.status(201).send({ date: "resource added successfully" });
});

app.put("/api/clients/:clientID", (req, res) => {
  const id = parseInt(req.params.clientID);
  if (!id) res.status(401).send({ message: "resource not found" });

  const index = dummyData.findIndex((item) => item.id === id);
  dummyData[index] = { id, ...req.body };

  res.status(200).send({ message: "resource updated" });
});

app.delete("/api/clients/:clientID", (req, res) => {
  const id = parseInt(req.params.clientID);
  dummyData = dummyData.filter((data) => data.id !== id);

  res.send({ message: "successfully deleted the item" });
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

let dummyData = [
  {
    id: 1,
    name: "harrison mweene",
    plot_size: "20m x 20m",
    site_name: "site A",
  },
  { id: 2, name: "tapewa mweene", plot_size: "25m x 40m", site_name: "site A" },
  { id: 3, name: "memory daka", plot_size: "40m x 40m", site_name: "site A" },
  {
    id: 4,
    name: "james p lungu",
    plot_size: "25m x 25m",
    site_name: "site A+",
  },
];
