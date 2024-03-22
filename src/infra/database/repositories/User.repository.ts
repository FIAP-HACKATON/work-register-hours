import { GetUserRepository } from '../../../application/interfaces/repositories/user/GetUserRepository';
import { CreateUserRepository } from '@application/interfaces/repositories/user/CreateUserRepository';
import { GetUserByIdRepository } from '@application/interfaces/repositories/user/GetUserByIdRepository';
import { GetUserByFiltersRepository } from '@application/interfaces/repositories/user/GetUserByFiltersRepository';
import { UpdateUserRepository } from '../../../application/interfaces/repositories/user/UpdateUserRepository';
import { DeleteUserRepository } from '../../../application/interfaces/repositories/user/DeleteUserRepository';
import { prisma } from '../orm/prisma';
import { GetUserAccessRepository } from '@application/interfaces/repositories/user/GetUserAccess';
import bcrypt from 'bcrypt';

export class UserRepository
  implements
    CreateUserRepository,
    GetUserRepository,
    GetUserByIdRepository,
    GetUserByFiltersRepository,
    UpdateUserRepository,
    DeleteUserRepository,
    GetUserAccessRepository
{
  async getUserAccess(queryString: GetUserAccessRepository.Request) {
    const { name, registration, password } = queryString;
    const user = await prisma.user.findFirst({
      where: {
        OR: [{ name: name }, { registration: registration }]
      },
    });
    return user;
  }

  async createUser(userData: any): Promise<void> {
    const hash = await bcrypt.hash(userData.password, 10);
    userData.password = hash
    try {
      await prisma.user.create({
        data: userData,
      });
    } catch (error) {
      console.log(error);
      throw new Error((error as Error).message);
    }
  }

  async updateUser(params: UpdateUserRepository.Request): Promise<string> {
    try {
      const preload = params.userData;
      await prisma.user.update({
        where: {
          id: Number(params.userId),
        },
        data: {
          name: preload.name,
          email: preload.email,
        },
      });
      return 'User updated successfully';
    } catch (error) {
      throw new Error((error as Error).message);
    }
  }

  async deleteUser(userId: number): Promise<void> {
    await prisma.user.delete({
      where: {
        id: userId,
      },
    });
  }
  async getUserByFilters(
    queryString: GetUserByFiltersRepository.Request,
  ): Promise<any> {
    const { email } = queryString;
    const data = await prisma.user.findUnique({
      where: {
        email: email || undefined,
      },
    });
    return data;
  }
  async getUserById(UserId: number): Promise<any> {
    const user = await prisma.user.findUnique({
      where: {
        id: +UserId,
      },
    });
    return user;
  }

  async getUsers(
    params: GetUserRepository.Request,
  ): Promise<GetUserRepository.Response> {
    const { page, paginationLimit } = params;
    const users = await prisma.user.findMany({
      orderBy: {
        id: 'asc',
      },
    });
    const total = await prisma.user.count();
    const totalPages = Math.ceil(total / paginationLimit);
    return {
      data: users,
      page,
      total,
      totalPages,
    };
  }
}
