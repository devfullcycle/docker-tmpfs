import { BaseEntity, Column, Entity, ObjectIdColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Category extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string
}

@Entity()
export class CategoryMongoDB extends BaseEntity {
    @ObjectIdColumn()
    id: number

    @Column()
    name: string
}
