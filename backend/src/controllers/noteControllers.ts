
import mssql from 'mssql';
import { Request, Response } from "express";
import {v4} from 'uuid';
import {note} from  "../interface/Interfacenote"

import { sqlConfig } from '../config/mssql';


// Create Notes
export const createNote = async(req: Request, res: Response)=>{

        try {

            const {Title,Content,CreatedAt }:note =req.body;

            const id = v4();
            const pool = await mssql.connect(sqlConfig);

        let note = (await pool.request()
        .input("note_id", mssql.VarChar, id)
        .input("Title", mssql.VarChar, Title)
        .input("Content", mssql.VarChar, Content)
        .input("CreatedAt", mssql.VarChar, CreatedAt)
        .execute('createNote')).rowsAffected

        console.log(note);
        
        return res.json({
            message: "Note created successfully",
        })

    } catch (error) {
        return res.json({error: error})
    }
};




//get All notes
export const getNote = async(req: Request, res: Response)=>{
    try {

        const pool = await mssql.connect(sqlConfig);       
        const result = await pool.request().query('SELECT * FROM Notes');
        const notes: note[] = result.recordset;

        res.json(notes);
    } catch (error) {
        console.error("Error fetching notes:", error);

    } 
};


export const updateNote = async(req: Request, res: Response)=>{
    try { 
        const noteId: string = req.params.id;
        const { Title, Content, CreatedAt }: note = req.body;
        const pool = await mssql.connect(sqlConfig);

        const result = await pool.request()
            .input('note_id', mssql.VarChar, noteId)
            .input('Title', mssql.VarChar, Title)
            .input('Content', mssql.VarChar, Content)
            .input('CreatedAt', mssql.VarChar, CreatedAt)
            .execute('updateNote');

        if (result.rowsAffected[0] === 1) {
           
            res.json({ message: 'Note updated successfully' });
        } else {

            res.status(404).json({ error: 'Note not found' });
        }
    } catch (error) {
    
        console.error("Error updating note:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }



    
}

export const getOneNote =  async(req: Request, res: Response)=>{

    try {

        const noteId: string = req.params.id;
        const pool = await mssql.connect(sqlConfig);

        const result = await pool.request()
            .input('noteId', mssql.VarChar, noteId)
            .query('SELECT * FROM Notes WHERE id = @noteId');

            res.json(result.recordset[0]);
       
    } catch (error) {
       
        console.error("Error fetching note:", error);
       
    }



    
}

export const deleteNote =  async(req: Request, res: Response)=>{


    
}