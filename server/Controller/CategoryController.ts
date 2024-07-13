import {AppDataSource} from '../data-source'
import { Request, Response } from 'express';
import { Categories } from '../entity/Categories';

export const addCategory = async (req : Request,res : Response) => {
    const {category_name} = req.body;
    const categoryRepository = AppDataSource.getRepository(Categories)
   
    try{
      const addCategory = await categoryRepository.createQueryBuilder('categories')
      .insert()
      .into('categories')
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
