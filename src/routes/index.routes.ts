import dotenv from 'dotenv'
import { Router } from 'express'
import routerRol from './rol.routes'

dotenv.config()
const URL = process.env.URL || '/api/v1'

const routes = Router()
routes.use(`${URL}/rol`, routerRol)


export default routes