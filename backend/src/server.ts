
import express, {NextFunction, Request, Response, json} from 'express'

import noteRouter from "./Routes/noteRoutes"


const app = express();

app.use(json())

//work for all routes.
app.use(noteRouter)



app.use((error: Error, req: Request, res: Response, next: NextFunction)=>{
    res.json({
        message: error.message
    })
})

let port:number = 5000;

app.listen(port, ()=>{
    console.log(`Server running on port ${port}`); 
})