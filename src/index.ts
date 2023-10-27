import 'reflect-metadata'
import Server from './server/server'
import dotenv from 'dotenv'
import { AppDataSource } from './data-source.js'
import { error } from 'console'

dotenv.config()

const server = new Server()
server.listen()

AppDataSource.initialize().then(async(connection)=>{
  if (connection){
    console.log(`==> Connection with database successfully<==`)
  }
}).catch((error)=> console.log(error +'Connection a database failed')+ error)

