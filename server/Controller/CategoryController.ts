import {AppDataSource} from '../data-source'
import { Request, Response } from 'express';
import { Categories } from '../entity/categories';

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
        res.status(500).json({error: "Internal Server Error"})
    }
}

// asset_minus에 카테고리가 있으면
// error 출력
// asset_minus 검색코드 추가

// export const deleteCategory = async (req : Request,res : Response) => {
//     const {category_id} = req.params;
//     const categoryRepository = AppDataSource.getRepository(Categories)

//     try{
//         const deleteCategory = await categoryRepository.createQueryBuilder('categories')
//         .delete()
//         .from('categories')
//         .where("categories.category_id = :category_id", {category_id : category_id})
//         .execute();

//         res.json(deleteCategory)
//     }catch(err){
//         console.error('Error fetching data: ', err);
//         res.status(500).json({error: "Internal Server Error"})
//     }
// }

export const getCategory = async (req : Request,res : Response) => {
    const {categoryId} = req.params;
    const categoryRepository = AppDataSource.getRepository(Categories)
    console.log(categoryId);
    
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


