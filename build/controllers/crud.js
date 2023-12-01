"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const knex_1 = __importDefault(require("../connections/knex"));
class ControllersCRUD {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { content } = req.body;
            try {
                const result = yield (0, knex_1.default)('contents').insert({ content }).returning('*');
                return res.status(201).json(result[0]);
            }
            catch (error) {
                console.log(error.message);
                return res.status(500).json({ mensagem: 'Erro interno do servidor, favor consultar o console para mais informações.' });
            }
        });
    }
    read(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield (0, knex_1.default)('contents').returning('*');
                return res.status(200).json({ result });
            }
            catch (error) {
                console.log(error.message);
                return res.status(500).json({ mensagem: 'Erro interno do servidor, favor consultar o console para mais informações.' });
            }
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const { content } = req.body;
            try {
                const result = yield (0, knex_1.default)('contents').update({ content }).where('id', id).returning('*');
                return res.status(200).json(result[0]);
            }
            catch (error) {
                console.log(error.message);
                return res.status(500).json({ mensagem: 'Erro interno do servidor, favor consultar o console para mais informações.' });
            }
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                yield (0, knex_1.default)('contents').delete().where('id', id);
                return res.status(200).json({ mensagem: 'Conteúdo excluído com sucesso.' });
            }
            catch (error) {
                console.log(error.message);
                return res.status(500).json({ mensagem: 'Erro interno do servidor, favor consultar o console para mais informações.' });
            }
        });
    }
}
exports.default = new ControllersCRUD;
