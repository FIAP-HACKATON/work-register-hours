import { CreateRegisterRepository } from "@application/interfaces/repositories/time-register/CreateRegisterRepostirory";
import { prisma } from "../orm/prisma";


export class TimeRegisterRepository implements CreateRegisterRepository {

  async execute(data: any): Promise<any> {
    const { user_id, date } = data;
    const creating = await prisma.work_hours.create({
        data: {
            user_id,
            date
        }
    });
    return creating;
  }
}