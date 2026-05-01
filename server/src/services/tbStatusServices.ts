
import { tbStatus } from  "../models/index.js";

export async function getAllService() {
return tbStatus.findAll();
}
export async function getByPkService(id:number){
    return tbStatus.findByPk(id)
}
export async function postService(data:any) {
  return tbStatus.create(data);
}
export async function delService(id: number) {
  const element = await tbStatus.findByPk(id);
  if (!element) return null;

  await element.destroy();
  return element;
}