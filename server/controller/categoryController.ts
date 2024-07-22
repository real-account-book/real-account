import {AppDataSource} from '../data-source'
import { Request, Response } from 'express';
import { Categories } from '../entity/categories';
import { Asset_minus } from '../entity/asset_minus';
import { StatusCodes } from 'http-status-codes';

export const addCategory = async (req : Request,res : Response) => {
    const {category_name} = req.body;
    const categoryRepository = AppDataSource.getRepository(Categories)

    try{
        const categoryInUse =  await categoryRepository.createQueryBuilder('categories')
        .select(`categories`)
        .where(`categories.category_name = :category_name`, {category_name : category_name})
        .getOne()
        if(categoryInUse){
           return res.status(StatusCodes.BAD_REQUEST).json({error: "카테고리 중복!"})
        }

        const addCategory = await categoryRepository.createQueryBuilder('categories')
        .insert()
        .values({
            category_name : category_name
        })
        .execute()
        if(addCategory.raw >= 1){
            return res.status(StatusCodes.OK).json(addCategory)
        }
        
    }catch(err){
        console.error('Error fetching data: ', err);
      res.status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({message: "데이터를 입력하는 데에 오류가 발생했습니다."})
    }
}


export const deleteCategory = async (req : Request,res : Response) => {
    const {categoryId} = req.params;
    const categoryRepository = AppDataSource.getRepository(Categories)
    const minusRepository = AppDataSource.getRepository(Asset_minus)

    try{
        const categoryInUse =  await minusRepository.createQueryBuilder('asset_minus')
        .select(`asset_minus`)
        .where(`asset_minus.category = :category_id`, {category_id : categoryId})
        .getOne()
        if(categoryInUse){
            res.status(StatusCodes.BAD_REQUEST).json({error: "카테고리가 포함된 출금내역 먼저 삭제하세요"})
        }
        
        const deleteCategory = await categoryRepository.createQueryBuilder('categories')
        .delete()
        .from('categories')
        .where("categories.category_id = :category_id", {category_id : categoryId})
        .execute();

        if(deleteCategory.affected == 1){
            res.status(StatusCodes.OK).json(deleteCategory)
        }else{
            res.status(StatusCodes.NOT_FOUND).json({error: "카테고리가 존재하지 않습니다!"})
        }
        
    }catch(err){
        console.error('Error fetching data: ', err);
      res.status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({message: "데이터를 입력하는 데에 오류가 발생했습니다."})
    }
}

export const getCategory = async (req : Request,res : Response) => {
    const {categoryId} = req.params;
    const categoryRepository = AppDataSource.getRepository(Categories)
    try{
        const query = categoryRepository.createQueryBuilder('categories')
        .select(['categories.category_id','categories.category_name'])
        if(categoryId){
            query.where("categories.category_id = :category_id", {category_id : categoryId})
        }
        const getCategory = await query.getMany();

        if(getCategory.length == 0){
            res.status(StatusCodes.NOT_FOUND).json({error: "카테고리가 존재하지 않습니다!"})
        }else{
            res.status(StatusCodes.OK).json(getCategory)
        }

    }catch(err){
        console.error('Error fetching data: ', err);
      res.status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({message: "데이터를 입력하는 데에 오류가 발생했습니다."})
    }
}


