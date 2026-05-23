
import { tbAreaGyms,tbGyms } from "../models/index.js";

export async function getAllService() {
  return tbAreaGyms.findAll({
                include: {
            model: tbGyms,
            as: "gym",
            attributes: ["gymId","gymName"]
        }
        });
}
export async function getByPkService(id:number){
    return tbAreaGyms.findAll({
            where:{areaId:id},
                include: {
            model: tbGyms,
            as: "gym",
            attributes: ["gymId","gymName"]
        }
        });
}
export async function postAreaGymService(data:any) {
  return tbAreaGyms.create(data);
}
export async function delAreaGymService(id: number) {
  const element = await tbAreaGyms.findByPk(id);
  if (!element) return null;

  await element.destroy();
  return element;
}