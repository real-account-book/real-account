import {AppDataSource} from '../data-source'
import { Request, Response } from 'express';
import { Categories } from '../entity/categories';
import { Asset_minus } from '../entity/asset_minus';
import { StatusCodes } from 'http-status-codes';

export const addCategory = async (req : Request,res : Response) => {
    const {category_name} = req.body;
    const categoryRepository = AppDataSource.getRepository(Categories)

    try{
        const addCategory = await categoryRepository.createQueryBuilder('categories')
        .insert()
        .values({
            category_name : category_name
        })
        .execute()
        res.json(addCategory)

    }catch(err){
        console.error('Error fetching data: ', err);
        res.status(StatusCodes.BAD_REQUEST).json({error: "Internal Server Error"})
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
            return res.status(StatusCodes.BAD_REQUEST).json({error: "카테고리가 포함된 출금내역 먼저 삭제하세요"})
        }
        
     
        const deleteCategory = await categoryRepository.createQueryBuilder('categories')
        .delete()
        .from('categories')
        .where("categories.category_id = :category_id", {category_id : categoryId})
        .execute();

        res.json(deleteCategory)
        
     
    }catch(err){
        console.error('Error fetching data: ', err);
        res.status(500).json({error: "Internal Server Error"})
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
  
        res.json(getCategory)

    }catch(err){
        console.error('Error fetching data: ', err);
        res.status(500).json({error: "Internal Server Error"})
    }
}


