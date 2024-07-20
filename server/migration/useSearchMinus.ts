import { AppDataSource } from "../data-source"
import { Asset_minus } from "../entity/asset_minus"

export const useSearchMinus = async(param : number) => {
    const minusRepository = AppDataSource.getRepository(Asset_minus)
    const minusInUse =  await minusRepository.createQueryBuilder('asset_minus')
    .select(`asset_minus`)
    .where(`asset_minus.minus_id = :minus_id`, {minus_id : param})
    .getOne()
   
    return minusInUse
  }

