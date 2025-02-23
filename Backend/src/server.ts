import express from "express";
import bodyParser from "body-parser"; // opcional si usas express.json()
import router from "./router/router"; // Importa tus rutas

const app = express();
const PORT = 3001;

app.get("/info", (req, res) => {
    res.send("Estoy aquí");
});
app.use(bodyParser.json()); 
app.use("/api", router);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
