import { StatusCodes } from 'http-status-codes';
import {AppDataSource} from '../data-source'
import { Asset_minus } from "../entity/asset_minus";
import { Request, Response } from 'express';
import { useSearchMinus } from '../migration/useSearch';

export const addMinus = async (req : Request,res : Response) => {
    const {minus, category , title, content, uploaded_at} = req.body;
    const minusRepository = AppDataSource.getRepository(Asset_minus);

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
      .execute();
      if(addMinus.raw >= 1){
        return res.status(StatusCodes.OK).json(addMinus)
      }

    }catch(err){
        console.error('Error fetching data: ', err);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({message: "데이터를 입력하는 데에 오류가 발생했습니다."})
    }
}


export const deleteMinus = async (req : Request,res : Response) => {
    const {minusId} = req.params;
    const minusRepository = AppDataSource.getRepository(Asset_minus)

    try{
      const minusInUse = await useSearchMinus(Number(minusId))
      if(!minusInUse){
        return res.status(StatusCodes.BAD_REQUEST).json({error: "출금내역이 존재하지 않습니다!"})
      }

      const deleteMinus = await minusRepository.createQueryBuilder('asset_minus')
      .delete()
      .from('asset_minus')
      .where("asset_minus.minus_id = :minus_id", {minus_id : minusId })
      .execute();

      if(deleteMinus.affected == 1){
        return res.status(StatusCodes.OK).json(deleteMinus)
      }

    }catch(err){
      console.error('Error fetching data: ', err);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({message: "데이터를 입력하는 데에 오류가 발생했습니다."})
    }
}


export const updateMinus = async (req : Request,res : Response) => {
    const {minusId} = req.params
    const {minus, category, title, content, uploaded_at} = req.body;
    const minusRepository = AppDataSource.getRepository(Asset_minus)

    try{
      const minusInUse = await useSearchMinus(Number(minusId))
      if(!minusInUse){
        return res.status(StatusCodes.BAD_REQUEST).json({error: "출금내역이 존재하지 않습니다!"})
      }
      
      const updateMinus = await minusRepository.createQueryBuilder('asset_minus')
      .update()
      .set({minus: minus, category: category,title: title, content: content, uploaded_at: uploaded_at})
      .where("asset_minus.minus_id = :minus_id", {minus_id : minusId})
      .execute();
 
      if(updateMinus.affected == 1){
        return res.status(StatusCodes.OK).json(updateMinus)
      }
      
    }catch(err){
      console.error('Error fetching data: ', err);
      res.status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({message: "데이터를 입력하는 데에 오류가 발생했습니다."})
    }
}
