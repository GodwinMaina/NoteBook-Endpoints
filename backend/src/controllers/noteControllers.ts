
import mssql from 'mssql';
import { Request, Response } from "express";
import {v4} from 'uuid';
import {note} from  "../interface/Interfacenote"

import { sqlConfig } from '../config/mssql';


// Create Note
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
        const result = await pool.request()
        .execute('getNote');
        const notes: note[] = result.recordset;

        res.json(notes);
    } catch (error) {
        console.error("Error fetching notes:", error);
    } 
};


//update note
export const updateNote = async(req: Request, res: Response)=>{
    try { 
        const note_id: string = req.params.id;
        const { Title, Content, CreatedAt }: note = req.body;
        const pool = await mssql.connect(sqlConfig);

        const result = await pool.request()
            .input('note_id', mssql.VarChar, note_id)
            .input('Title', mssql.VarChar, Title)
            .input('Content', mssql.VarChar, Content)
            .input('CreatedAt', mssql.VarChar, CreatedAt)
            .execute('updateNote');

        if (result) {
           
            res.json({ message: 'Note updated successfully' });
        } 
    } catch (error) {
    
        console.error("error updating note");
       
    }    
}

// get one note by id
export const getOneNote =  async(req: Request, res: Response)=>{

    try {
        const note_id: string = req.params.id;
        const pool = await mssql.connect(sqlConfig);

        const result = await pool.request()
        .input('note_id', mssql.VarChar, note_id)
        .execute("getOneNote")

            res.json(result.recordset[0]);
       
    } catch (error) {
       
        console.error("Error fetching note:", error);
       
    }
  
}

//deletenote by id
export const deleteNote =  async(req: Request, res: Response)=>{

    try {
        const pool = await mssql.connect(sqlConfig);
        const note_id: string = req.params.id;

        const result = await pool.request()
            .input('note_Id', mssql.VarChar, note_id)
            .execute('DeleteNote');

        return result;

    } catch (error) {
        console.error('Error deleting');
       
    }    
}