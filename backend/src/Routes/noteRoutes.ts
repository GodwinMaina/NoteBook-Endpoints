
import { Router } from "express";

import {createNote,getNote, updateNote, getOneNote,deleteNote} from "../controllers/noteControllers";


const noteRouter = Router();

// createNote
noteRouter.post('/', createNote)

// getNote
noteRouter.get('/', getNote)

// updateNote
noteRouter.put('/update/:id',updateNote)

//getOneNote
noteRouter.get('/:id', getOneNote)

//deletenote
noteRouter.delete('/delete/:id', deleteNote)



export default noteRouter;