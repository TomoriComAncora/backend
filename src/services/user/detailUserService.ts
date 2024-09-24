import prismaClient from "../../prisma";

class DetailUserService {
  async execute(user_id) {

    const user = await prismaClient.user.findFirst({
      where:{
        id: user_id
      },
      select:{
        id: true,
        email: true,
        name: true
      }
    })

    return user;
  }
}

export { DetailUserService };
