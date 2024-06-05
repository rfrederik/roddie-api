import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Score {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    score: number

    constructor(score: Partial<Score>) {
        Object.assign(this, score)
    }
}
