import { Request, Response } from "express";
import knex from "../connections/knex";

class ControllersCRUD {
    async create(req: Request, res: Response) {
        const { content } = req.body;
        try {
            const result = await knex('contents').insert({ content }).returning('*');
            return res.status(201).json(result[0]);
        } catch (error: any) {
            console.log(error.message);
            return res.status(500).json({ mensagem: 'Erro interno do servidor, favor consultar o console para mais informações.' });
        }
    }

    async read(req: Request, res: Response) {
        try {
            const result = await knex('contents').returning('*');
            return res.status(200).json({ result });
        } catch (error: any) {
            console.log(error.message);
            return res.status(500).json({ mensagem: 'Erro interno do servidor, favor consultar o console para mais informações.' });
        }
    }

    async update(req: Request, res: Response) {
        const { id } = req.params;
        const { content } = req.body;
        try {
            const result = await knex('contents').update({ content }).where('id', id).returning('*');
            return res.status(200).json(result[0]);
        } catch (error: any) {
            console.log(error.message);
            return res.status(500).json({ mensagem: 'Erro interno do servidor, favor consultar o console para mais informações.' });
        }
    }

    async delete(req: Request, res: Response) {
        const { id } = req.params;
        try {
            await knex('contents').delete().where('id', id);
            return res.status(200).json({ mensagem: 'Conteúdo excluído com sucesso.' });
        } catch (error: any) {
            console.log(error.message);
            return res.status(500).json({ mensagem: 'Erro interno do servidor, favor consultar o console para mais informações.' });
        }
    }
}

export default new ControllersCRUD;

