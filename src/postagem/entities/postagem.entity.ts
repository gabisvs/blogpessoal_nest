import { IsNotEmpty } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({name: "tb_postagens"}) // Criando a Tabela
export class Postagem{

    @PrimaryGeneratedColumn() // Chave Primária Autoincremental
    id: number; 
    
    @IsNotEmpty() // Não aceitar titulo vazio
    @Column({length: 100, nullable: false}) // Definir o tamanho e não aceitar valor númerico
    titulo: string;

    @IsNotEmpty() 
    @Column({length: 1000, nullable: false})
    texto: string;

    @UpdateDateColumn() // A Data e Hora serão preenchidas automáticamente
    data: Date;

}