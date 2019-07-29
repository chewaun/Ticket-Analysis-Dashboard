import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { ManyToOne } from "typeorm";
import { ResolutionCategory } from "./ResolutionCategory";
import { JoinColumn } from "typeorm";

@Entity()
export class Ticket {
    
    @PrimaryGeneratedColumn()
    id : number;

    @Column()
    number: number;

    @Column()
    description: string;
    
    @Column()
    priority: string;

    @Column({type: "datetime", name: "open_date"})
    openDate;

    @Column({type: "datetime", name: "closed_date"})
    closedDate;

    @Column({name: "resolution_category_id"})
    resolutionCategoryId: number;

    @Column()
    remark: string;

    @ManyToOne(type => ResolutionCategory, resolutionCategory => resolutionCategory.tickets)
    @JoinColumn({name: "resolution_category_id"})
    resolutionCategory: ResolutionCategory



}