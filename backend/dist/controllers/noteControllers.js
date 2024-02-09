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
exports.deleteNote = exports.getOneNote = exports.updateNote = exports.getNote = exports.createNote = void 0;
const mssql_1 = __importDefault(require("mssql"));
const uuid_1 = require("uuid");
const mssql_2 = require("../config/mssql");
// Create Notes
const createNote = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { Title, Content, CreatedAt } = req.body;
        const id = (0, uuid_1.v4)();
        const pool = yield mssql_1.default.connect(mssql_2.sqlConfig);
        let note = (yield pool.request()
            .input("note_id", mssql_1.default.VarChar, id)
            .input("Title", mssql_1.default.VarChar, Title)
            .input("Content", mssql_1.default.VarChar, Content)
            .input("CreatedAt", mssql_1.default.VarChar, CreatedAt)
            .execute('createNote')).rowsAffected;
        console.log(note);
        return res.json({
            message: "Note created successfully",
        });
    }
    catch (error) {
        return res.json({ error: error });
    }
});
exports.createNote = createNote;
//get All notes
const getNote = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const pool = yield mssql_1.default.connect(mssql_2.sqlConfig);
        const result = yield pool.request().query('SELECT * FROM Notes');
        const notes = result.recordset;
        res.json(notes);
    }
    catch (error) {
        console.error("Error fetching notes:", error);
    }
});
exports.getNote = getNote;
const updateNote = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const noteId = req.params.id;
        const { Title, Content, CreatedAt } = req.body;
        const pool = yield mssql_1.default.connect(mssql_2.sqlConfig);
        const result = yield pool.request()
            .input('note_id', mssql_1.default.VarChar, noteId)
            .input('Title', mssql_1.default.VarChar, Title)
            .input('Content', mssql_1.default.VarChar, Content)
            .input('CreatedAt', mssql_1.default.VarChar, CreatedAt)
            .execute('updateNote');
        if (result.rowsAffected[0] === 1) {
            res.json({ message: 'Note updated successfully' });
        }
        else {
            res.status(404).json({ error: 'Note not found' });
        }
    }
    catch (error) {
        console.error("Error updating note:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});
exports.updateNote = updateNote;
const getOneNote = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const noteId = req.params.id;
        const pool = yield mssql_1.default.connect(mssql_2.sqlConfig);
        const result = yield pool.request()
            .input('noteId', mssql_1.default.VarChar, noteId)
            .query('SELECT * FROM Notes WHERE id = @noteId');
        res.json(result.recordset[0]);
    }
    catch (error) {
        console.error("Error fetching note:", error);
    }
});
exports.getOneNote = getOneNote;
const deleteNote = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
});
exports.deleteNote = deleteNote;
