import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, RelationId} from 'typeorm'
import {Rol} from './Rol'

@Entity()

export class Usuario{
    @PrimaryGeneratedColumn("increment")
   id: number
   @Column()
   name: string
   @Column()
   lastname: string
   @Column()
   login: string
   @Column()
   password: string
    @ManyToOne(()=>Rol)
    rol: Rol
    @RelationId((usuario:Usuario)=> usuario.rol)
    rolId: number

}
