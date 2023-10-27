import { Request, Response } from 'express' 
import { AppDataSource } from '../data-source'
import { Rol } from '../models/Rol'
import { Usuario } from '../models/Usuario'

const usuarioRepository = AppDataSource.getRepository(Usuario)

class UsuarioController{
}