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
    try {
      const initial = new Date(data.filter_date);
      const final = new Date(data.filter_date);
      final.setUTCHours(23, 59, 59, 999);
      const result = await prisma.work_hours.findMany({
        where: {
          date: {
            gte: initial.toISOString(),
            lte: final.toISOString(),
          },
        },
      });
      return result;
    } catch (error) {}
  }
}
