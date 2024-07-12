import { Between } from 'typeorm';
import {AppDataSource} from '../data-source'
import { Asset_minus } from "../Entity/Asset_minus";
import { Asset_plus } from "../Entity/Asset_plus";
import { Request, Response } from 'express';

export const getMonthPlus = async (req : Request,res : Response) => {
    const {startDate, endDate} = req.body;
    const plusRepository = AppDataSource.getRepository(Asset_plus)
    
    try{
      const getPlus = await plusRepository.findBy({
        uploaded_at : Between(startDate, endDate)
      })
      res.json(getPlus)
    }catch(err){
        console.error('Error fetching data: ', err);
        res.status(500).json({error: "Internal Server Error"})
    }
}

export const getMonthMinus = async (req: Request,res: Response) => {
  const {year, month} = req.body;
  const minusRepository = AppDataSource.getRepository(Asset_minus)
  try{
    const getMinus = await minusRepository.createQueryBuilder('asset_minus')
    .select(['asset_minus.uploaded_at','asset_minus.plus', 'asset_minus.title', 'asset_minus.content'])
      .where('YEAR(asset_minus.uploaded_at) = :year', { year })
      .andWhere('MONTH(asset_minus.uploaded_at) = :month', { month })
      .getMany();
      res.json(getMinus)
  }catch(err){
    console.error('Error fetching data: ', err);
    res.status(500).json({error: "Internal Server Error"})
  }
}
