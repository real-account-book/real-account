
import {AppDataSource} from '../data-source'
import { Asset_plus } from "../Entity/Asset_plus";
import { Request, Response } from 'express';

export const addPlus = async (req : Request,res : Response) => {
    const {plus, title, content, uploaded_at} = req.body;
    const plusRepository = AppDataSource.getRepository(Asset_plus)
   
    try{
      const addPlus = await plusRepository.createQueryBuilder('asset_plus')
      .insert()
      .into('asset_plus')
      .values({
        plus : plus, 
        title : title, 
        content : content, 
        uploaded_at : uploaded_at
      })
      .execute()

      res.json(addPlus)
    }catch(err){
        console.error('Error fetching data: ', err);
        res.status(500).json({error: "Internal Server Error"})
    }
}

export const deletePlus = async (req : Request,res : Response) => {
    const {plus_id} = req.params;
    const plusRepository = AppDataSource.getRepository(Asset_plus)
    
    try{
      const deletePlus = await plusRepository.createQueryBuilder('asset_plus')
      .delete()
      .from('asset_plus')
      .where("asset_plus.plus_id = :plus_id", {plus_id : plus_id})
      .execute();

      res.json(deletePlus)
    }catch(err){
        console.error('Error fetching data: ', err);
        res.status(500).json({error: "Internal Server Error"})
    }
}


export const updatePlus = async (req : Request,res : Response) => {
    const {plus_id, plus, title, content} = req.body;
    const plusRepository = AppDataSource.getRepository(Asset_plus)
    
    try{
      const updatePlus = await plusRepository.createQueryBuilder('asset_plus')
      .update()
      .set({plus: plus, title: title, content: content})
      .where("asset_plus.plus_id = :plus_id", {plus_id : plus_id})
      .execute();
 

      res.json(updatePlus)
    }catch(err){
        console.error('Error fetching data: ', err);
        res.status(500).json({error: "Internal Server Error"})
    }
}
