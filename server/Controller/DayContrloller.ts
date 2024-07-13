import {AppDataSource} from '../data-source'
import { Asset_minus } from "../entity/Asset_minus";
import { Asset_plus } from "../entity/Asset_plus";
import { Request, Response } from 'express';

export const getDayPlus = async (req : Request,res : Response) => {
    const {year,month,day} = req.body;
    const plusRepository = AppDataSource.getRepository(Asset_plus)
    
    try{
        const getDayPlus = await plusRepository.createQueryBuilder('asset_plus')
        .select(['asset_plus.uploaded_at','asset_plus.plus', 'asset_plus.title', 'asset_plus.content'])
          .where('YEAR(asset_plus.uploaded_at) = :year', { year })
          .andWhere('MONTH(asset_plus.uploaded_at) = :month', { month })
          .andWhere('DAY(asset_plus.uploaded_at) = :day', {day})
          .getMany();

          res.json(getDayPlus)
    }catch(err){
        console.error('Error fetching data: ', err);
        res.status(500).json({error: "Internal Server Error"})
    }
}

export const getDayMinus = async (req : Request,res : Response) => {
    const {year,month,day} = req.body;
    const minusRepository = AppDataSource.getRepository(Asset_minus)
    
    try{
        const getDayMinus = await minusRepository.createQueryBuilder('asset_minus')
        .select(['asset_minus.uploaded_at','asset_minus.minus', 'asset_minus.title', 'asset_minus.content'])
        .leftJoinAndSelect("asset_minus.category","category")
        .addSelect('category.category_name')
          .where('YEAR(asset_minus.uploaded_at) = :year', { year })
          .andWhere('MONTH(asset_minus.uploaded_at) = :month', { month })
          .andWhere('DAY(asset_minus.uploaded_at) = :day', {day})
          .getMany();

      res.json(getDayMinus)
    }catch(err){
        console.error('Error fetching data: ', err);
        res.status(500).json({error: "Internal Server Error"})
    }
}
