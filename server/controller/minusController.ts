import {AppDataSource} from '../data-source'
import { Asset_minus } from "../entity/asset_minus";
import { Request, Response } from 'express';

export const addMinus = async (req : Request,res : Response) => {
    const {minus, category , title, content, uploaded_at} = req.body;
    const minusRepository = AppDataSource.getRepository(Asset_minus)
   
    try{
      const addMinus = await minusRepository.createQueryBuilder('asset_minus')
      .insert()
      .values({
        minus : minus,
        title : title, 
        content : content, 
        uploaded_at : uploaded_at,
        category: category
      })
      .execute()

      res.json(addMinus)
    }catch(err){
        console.error('Error fetching data: ', err);
        res.status(500).json({error: "Internal Server Error"})
    }
}


export const deleteMinus = async (req : Request,res : Response) => {
    const {minusId} = req.params;
    const minusRepository = AppDataSource.getRepository(Asset_minus)
    
    try{
      const deletePlus = await minusRepository.createQueryBuilder('asset_minus')
      .delete()
      .from('asset_minus')
      .where("asset_minus.minus_id = :minus_id", {minus_id : minusId })
      .execute();

      res.json(deletePlus)
    }catch(err){
        console.error('Error fetching data: ', err);
        res.status(500).json({error: "Internal Server Error"})
    }
}


export const updateMinus = async (req : Request,res : Response) => {
    const {minusId} = req.params
    const {minus, category_id, title, content} = req.body;
    const minusRepository = AppDataSource.getRepository(Asset_minus)
    
    try{
      const updateMinus = await minusRepository.createQueryBuilder('asset_minus')
      .update()
      .set({minus: minus, category: category_id,title: title, content: content})
      .where("asset_minus.minus_id = :minus_id", {minus_id : minusId})
      .execute();
 

      res.json(updateMinus)
    }catch(err){
        console.error('Error fetching data: ', err);
        res.status(500).json({error: "Internal Server Error"})
    }
}
