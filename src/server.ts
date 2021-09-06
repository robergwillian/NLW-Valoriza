// importar express de express, se tiver os ... no express
// utilizar yarn add @types/express -D para adicionar as ependencias de tipo
import express, { response } from "express"

// inicializa o servidor com express
const app = express();



// 
  // GET      => BUSCAR UMA INFORMAÇÃO (LISTAGEM DE PRODUTOS, USUARIOS, ETC )
  // POST     => INSERIR (CRIAR) UMA INFORMAÇÃO 
  // PUT      => ALTERAR UMA INFORMAÇÃO
  // DELETE   => EXCLUIR UM DADO
  // PATCH    => ALTERAR UMA INFORMAÇÃO ESPECIFICA (ALTERAR SENHA DE USUARIO POR EX)


//criando rotas
app.get("/test", (req,res) =>{
  //request => Entrando
  //response => SAINDO
  return res.send("Ola NLW")

})

app.post("/test-post", (req, res) =>{
  return res.send("OLA NLW METODO POST")
})


//http://localhost:3000
app.listen(3000, () => console.log("SERVER IS RUNNING NLW"))