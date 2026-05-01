
import { tbProfilePictures } from "../models/index.js";

export async function getAllService() {
return tbProfilePictures.findAll();
}
export async function getByPkService(id:number){
    return tbProfilePictures.findByPk(id)
}
export async function postService(data:any) {
  return tbProfilePictures.create(data);
}
export async function delService(id: number) {
  const element = await tbProfilePictures.findByPk(id);
  if (!element) return null;

  await element.destroy();
  return element;
}