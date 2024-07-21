
import { StatusCodes } from 'http-status-codes';
import {AppDataSource} from '../data-source'
import { Asset_plus } from "../entity/asset_plus";
import { Request, Response } from 'express';
import { useSearchPlus } from '../migration/useSearchMinus';

export const addPlus = async (req : Request,res : Response) => {
    const {plus, title, content, uploaded_at} = req.body;
    const plusRepository = AppDataSource.getRepository(Asset_plus);
   
    try{
      const addPlus = await plusRepository.createQueryBuilder('asset_plus')
      .insert()
      .values({
        plus : plus, 
        title : title, 
        content : content, 
        uploaded_at : uploaded_at
      })
      .execute();
      if(addPlus.raw >= 1){
        return res.status(StatusCodes.OK).json(addPlus)
      }else{
        return res.status(StatusCodes.BAD_REQUEST).end()
      }
    }catch(err){
      console.error('Error fetching data: ', err);
      res.status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({message: "데이터를 입력하는 데에 오류가 발생했습니다."});
    }
}

export const deletePlus = async (req : Request,res : Response) => {
    const {plusId} = req.params;
    const plusRepository = AppDataSource.getRepository(Asset_plus)
    
    try{
      const plusInUse = await useSearchPlus(Number(plusId))
      if(!plusInUse){
        return res.status(StatusCodes.BAD_REQUEST).json({error: "입금내역이 없습니다!!"})
      }

      const deletePlus = await plusRepository.createQueryBuilder('asset_plus')
      .delete()
      .from('asset_plus')
      .where("asset_plus.plus_id = :plus_id", {plus_id : plusId})
      .execute();

      if(deletePlus.affected == 1){
        return res.status(StatusCodes.OK).json(deletePlus)
      }
    }catch(err){
      console.error('Error fetching data: ', err);
      res.status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({message: "데이터를 입력하는 데에 오류가 발생했습니다."})
    }
}


export const updatePlus = async (req : Request,res : Response) => {
    const {plusId} = req.params;
    const {plus, title, content, uploaded_at} = req.body;
    const plusRepository = AppDataSource.getRepository(Asset_plus)
    
    try{
      const plusInUse = await useSearchPlus(Number(plusId))
      if(!plusInUse){
        return res.status(StatusCodes.BAD_REQUEST).json({error: "입금내역이 없습니다!!"})
      }
      
      const updatePlus = await plusRepository.createQueryBuilder('asset_plus')
      .update()
      .set({plus: plus, title: title, content: content, uploaded_at: uploaded_at})
      .where("asset_plus.plus_id = :plus_id", {plus_id : plusId})
      .execute();
 
      if(updatePlus.affected == 1){
        return res.status(StatusCodes.OK).json(updatePlus)
      }
    }catch(err){
      console.error('Error fetching data: ', err);
      res.status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({message: "데이터를 입력하는 데에 오류가 발생했습니다."})
    }
}
