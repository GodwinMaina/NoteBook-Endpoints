"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const noteControllers_1 = require("../controllers/noteControllers");
const noteRouter = (0, express_1.Router)();
// createNote
noteRouter.post('/', noteControllers_1.createNote);
// getNote
noteRouter.get('/', noteControllers_1.getNote);
// updateNote
noteRouter.put('/update/:id', noteControllers_1.updateNote);
//getOneNote
noteRouter.get('/:id', noteControllers_1.getOneNote);
//deletenote
noteRouter.delete('/delete/:id', noteControllers_1.deleteNote);
exports.default = noteRouter;
