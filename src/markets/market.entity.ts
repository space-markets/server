import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from 'typeorm';
import { Field, ObjectType, ID } from '@nestjs/graphql';

@Entity({ name: 'markets' })
@ObjectType()
export default class Market {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field({ nullable: false })
  @Column({ nullable: false })
  brand: string;

  @Field({ nullable: false })
  @Column({ nullable: false, unique: true })
  email: string;

  @Field({ nullable: false })
  @Column({ nullable: false })
  password: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  phone?: string;

  @Field()
  @Column()
  logo: string;

  @Field({ nullable: false })
  @Column({ nullable: false, unique: true })
  cnpj: string;

  @Field({ nullable: false })
  @Column({ nullable: false, unique: true})
  cep: string;

  @Field({ nullable: false })
  @Column({ nullable: false })
  number: number;

  @Field({ name: 'created_at' })
  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @Field({ name: 'updated_at' })
  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @Field({ name: 'deleted_at' })
  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt?: Date;
}