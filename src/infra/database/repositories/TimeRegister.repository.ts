import { prisma } from './../orm/prisma';
import { CreateRegisterRepository } from '@application/interfaces/repositories/time-register/CreateRegisterRepostirory';
import { GetRegisterRepository } from '@application/interfaces/repositories/time-register/GetRegisterRepository';

export class TimeRegisterRepository
  implements CreateRegisterRepository, GetRegisterRepository
{
  async execute(data: any): Promise<any> {
    const { user_id, date } = data;
    const creating = await prisma.work_hours.create({
      data: {
        user_id,
        date,
      },
    });
    return creating;
  }

  async getRegistration(data: GetRegisterRepository.Request): Promise<any> {
    const initial = data.final_date ? data.initial_date : new Date();
    const final = data.final_date ? data.final_date : initial;
    return prisma.work_hours.findMany({
      where: {
        date: {
          gte: initial,
          lte: final,
        },
      },
    });
  }
}
