// importar express de express, se tiver os ... no express
// utilizar yarn add @types/express -D para adicionar as ependencias de tipo
import express, { response } from "express"
import "reflect-metadata"
import { router } from "./routes"
import "./database"

// inicializa o servidor com express
const app = express();

app.use(express.json());


app.use(router);


//http://localhost:3000
app.listen(3000, () => console.log("SERVER IS RUNNING NLW"))