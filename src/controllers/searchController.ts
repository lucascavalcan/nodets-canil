import {Request, Response} from "express";

import {Pet} from "../models/pet";
import {createMenuObject} from "../helpers/createMenuObject";

export const seacrh = (req: Request, res: Response) => {
    let query: string = req.query.q as string;

    if (!query) {
        res.redirect("/");   //se não tiver digitado nada no query, redireciona para página inicial
        return; 
    }

    let list = Pet.getFromName(query);
    
    res.render("pages/page.mustache", {
        menu: createMenuObject(""),
        list,
        query
    })
}