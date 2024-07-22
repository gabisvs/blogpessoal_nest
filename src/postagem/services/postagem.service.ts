import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { Postagem } from "../entities/postagem.entity";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class PostagemService{

    constructor(
        @InjectRepository(Postagem)
        private postagemRepository: Repository<Postagem>
    ){}

    async findAll(): Promise<Postagem[]>{
        // Equivalente a SELECT * FROM tb_postagem 
        return await this.postagemRepository.find();
    }


}