import {AppDataSource} from '../data-source'
import { Asset_minus } from "../entity/asset_minus";
import { Asset_plus } from "../entity/asset_plus";
import { Request, Response } from 'express';

export const getTotalPlus = async (req : Request,res : Response) => {
    const {year,month,day} = req.body;
    const plusRepository = AppDataSource.getRepository(Asset_plus)
    
    try{
        const query = plusRepository.createQueryBuilder('asset_plus')
        .select(['asset_plus.uploaded_at','asset_plus.plus', 'asset_plus.title', 'asset_plus.content'])
          .where('YEAR(asset_plus.uploaded_at) = :year', { year })
        if(month){
            query.andWhere('MONTH(asset_plus.uploaded_at) = :month', { month })
        }
        if(day){
            query.andWhere('DAY(asset_plus.uploaded_at) = :day', {day})
        }
        const getTotalPlus = await query.getMany();

        res.json(getTotalPlus)
    }catch(err){
        console.error('Error fetching data: ', err);
        res.status(500).json({error: "Internal Server Error"})
    }
}

export const getTotalMinus = async (req : Request,res : Response) => {
    const {year,month,day} = req.body;
    const minusRepository = AppDataSource.getRepository(Asset_minus)
    
    try{
        const query =  minusRepository.createQueryBuilder('asset_minus')
        .select(['asset_minus.uploaded_at','asset_minus.minus', 'asset_minus.title', 'asset_minus.content'])
        .leftJoinAndSelect("asset_minus.category","category")
        .addSelect('category.category_name')
          .where('YEAR(asset_minus.uploaded_at) = :year', { year })
        if(month){
            query.andWhere('MONTH(asset_minus.uploaded_at) = :month', { month })
        } 
        if(day){
            query.andWhere('DAY(asset_minus.uploaded_at) = :day', { day })
        }
        const getTotalMinus =await query.getMany();

      res.json(getTotalMinus)
    }catch(err){
        console.error('Error fetching data: ', err);
        res.status(500).json({error: "Internal Server Error"})
    }
}
