import { AppDataSource } from "../data-source"
import { Asset_minus } from "../entity/asset_minus"
import { Asset_plus } from "../entity/asset_plus"

export const useSearchMinus = async(param : number) => {
    const minusRepository = AppDataSource.getRepository(Asset_minus)
    const minusInUse =  await minusRepository.createQueryBuilder('asset_minus')
    .select(`asset_minus`)
    .where(`asset_minus.minus_id = :minus_id`, {minus_id : param})
    .getOne()
   
    return minusInUse
  }

export const useSearchPlus = async(param : number) => {
  const plusRepository = AppDataSource.getRepository(Asset_plus)
  const plusInUse =  await plusRepository.createQueryBuilder('asset_plus')
  .select(`asset_plus`)
  .where(`asset_plus.plus_id = :plus_id`, {plus_id : param})
  .getOne()
 
  return plusInUse
}