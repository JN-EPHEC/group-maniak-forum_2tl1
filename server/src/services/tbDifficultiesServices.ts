
import { tbDifficulties } from  "../models/index.js";

export async function getAllService() {
return tbDifficulties.findAll();
}
export async function getByPkService(id:number){
    return tbDifficulties.findByPk(id)
}
export async function postDifficultyService(data:any) {
  return tbDifficulties.create(data);
}
export async function delDifficultyService(id: number) {
  const element = await tbDifficulties.findByPk(id);
  if (!element) return null;

  await element.destroy();
  return element;
}