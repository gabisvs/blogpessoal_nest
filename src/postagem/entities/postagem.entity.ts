import { Transform, TransformFnParams } from "class-transformer";
import { IsNotEmpty } from "class-validator";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Tema } from "../../tema/entities/tema.entity";

@Entity({name: "tb_postagens"}) // Criando a Tabela
export class Postagem{

    @PrimaryGeneratedColumn() // Chave Primária Autoincremental
    id: number; 
    
    @Transform(({ value }: TransformFnParams) => value?.trim()) // Bloquear apenas espaços em branco
    @IsNotEmpty() // Não aceitar titulo vazio
    @Column({length: 100, nullable: false}) // Definir o tamanho e não aceitar valor númerico
    titulo: string;

    @Transform(({ value }: TransformFnParams) => value?.trim())
    @IsNotEmpty() 
    @Column({length: 1000, nullable: false})
    texto: string;

    @UpdateDateColumn() // A Data e Hora serão preenchidas automáticamente
    data: Date;

    // Muitos para Um, ou seja, Muitas postagens, possuem um tema 
    @ManyToOne(() => Tema, (tema)=> tema.postagem, {
        onDelete: "CASCADE"
    })
    tema: Tema; 
}