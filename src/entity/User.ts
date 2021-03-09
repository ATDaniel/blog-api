import { Entity, PrimaryGeneratedColumn, Column, PrimaryColumn } from 'typeorm';

@Entity()
export class User {
  // @PrimaryGeneratedColumn('uuid')
  // id: number;
  @PrimaryColumn('varchar')
  username: string;

  @Column()
  email: string;

  @Column('varchar')
  firstName: string;

  @Column('varchar')
  lastName: string;

  @Column('int')
  age: number;
}
