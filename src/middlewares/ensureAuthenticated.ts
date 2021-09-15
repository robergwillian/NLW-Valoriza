import {Request, Response, NextFunction} from "express"
import { verify } from "jsonwebtoken"

interface IPayload{
  sub: string;
}


export function ensureAuthenticated(request: Request, response: Response, next: NextFunction){

  //Receber o token
  const authToken = request.headers.authorization

  
  // Validar se token esta preenchido
  if(!authToken){
    return response.status(401).end()
  }
  
  const [,token] = authToken.split(" ")
  // Validar se token é valido
  try {
    const { sub } = verify(token, "94c10e255fd63778e4d0caf19cc135b7") as IPayload
    
  // Recuperar informações do usuario
    request.user_id = sub
    return next()
    
  } catch (error) {
    return response.status(401).end();
  }


}

