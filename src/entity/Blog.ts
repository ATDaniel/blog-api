import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Blog {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  author: string;

  @Column()
  isPublished: boolean;

  @Column('text')
  description: string;

  @Column('text')
  fulltext: string;
}
