import connetDB from "@/utils/connetDB";
import bcrypt from "bcrypt";
import Users from "@/models/userModul";
import { Request, Response } from "express";
import valid from "@/utils/valid";

connetDB();

export default async (req: Request, res: Response) => {
    switch(req.method){
        case 'POST':
            await register(req, res);
            break;
    }
}

const register = async (req: Request, res: Response) => {
    try{
        const { name, email, password, cf_password } = req.body;

        const errMsg = valid(name, email, password, cf_password);

        if(errMsg) return res.status(400).json({ err: errMsg });

        const passwordHash = await bcrypt.hash(password, 12);

        const newUser = new Users({ name, email, password: passwordHash, cf_password });

        console.log(newUser)

        res.json({msg: 'User created'});
    
    }catch(err: any){
        return res.status(500).json({ err: err.message });
    }
}