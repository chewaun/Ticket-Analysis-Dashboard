import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { OneToMany } from "typeorm";
import { Ticket } from "./Ticket";

@Entity()
export class ResolutionCategory {
    
    @PrimaryGeneratedColumn()
    id : number;

    @Column()
    name: String;

    @OneToMany(type => Ticket, ticket => ticket.resolutionCategory)
    tickets: Ticket[]

}

