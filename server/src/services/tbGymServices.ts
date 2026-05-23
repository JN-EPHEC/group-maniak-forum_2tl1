
import { tbGyms } from  "../models/index.js";

export async function getAllService() {
return tbGyms.findAll();
}
export async function getByPkService(id:number){
    return tbGyms.findByPk(id)
}
export async function postGymService(data:any) {
  return tbGyms.create(data);
}
export async function delGymService(id: number) {
  const element = await tbGyms.findByPk(id);
  if (!element) return null;

  await element.destroy();
  return element;
}