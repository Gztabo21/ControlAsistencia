import {Entity, Column, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class user {

    @PrimaryGeneratedColumn()
    id_user: number;

    @Column({
        length: 100
    })
    name: string;

    @Column()
    email: string;

    @Column()
    code: string;

    @Column()
    direccion: string;

}