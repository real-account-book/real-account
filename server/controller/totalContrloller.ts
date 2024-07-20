import {AppDataSource} from '../data-source'
import { Asset_minus } from "../entity/asset_minus";
import { Asset_plus } from "../entity/asset_plus";
import { Request, Response } from 'express';

export const getTotalPlus = async (req : Request,res : Response) => {

    // body -> params
    const {start_at, end_at} = req.params; 
    const plusRepository = AppDataSource.getRepository(Asset_plus)
    try{
        const query = plusRepository.createQueryBuilder('asset_plus')
        .select(['asset_plus.uploaded_at','asset_plus.plus', 'asset_plus.title', 'asset_plus.content'])
        .where(`asset_plus.uploaded_at >= :start_at AND asset_plus.uploaded_at <= :end_at`, {  start_at: start_at, end_at: end_at })
        const getTotalPlus = await query.getMany();

        res.json(getTotalPlus)
    }catch(err){
        console.error('Error fetching data: ', err);
        res.status(500).json({error: "Internal Server Error"})
    }
}

export const getTotalMinus = async (req : Request,res : Response) => {
    const {start_at, end_at, categoryId} = req.params;
    const minusRepository = AppDataSource.getRepository(Asset_minus)
    
    try{
        const query =  minusRepository.createQueryBuilder('asset_minus')
        .select(['asset_minus.uploaded_at','asset_minus.minus', 'asset_minus.title', 'asset_minus.content'])
        .leftJoinAndSelect("asset_minus.category","category")
        .addSelect('category.category_name')
        .where(`asset_minus.uploaded_at >= :start_at AND asset_minus.uploaded_at <= :end_at`, {  start_at: start_at, end_at: end_at })
        if(categoryId){
            query.andWhere('asset_minus.category = :categoryId', {categoryId})
        }
        const getTotalMinus =await query.getMany();
        
      res.json(getTotalMinus)
    }catch(err){
        console.error('Error fetching data: ', err);
        res.status(500).json({error: "Internal Server Error"})
    }
}
