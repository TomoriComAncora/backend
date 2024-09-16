import prismaClient from "../../prisma";
import { hash } from "bcryptjs"

interface UserRequest {
  name: string;
  email: string;
  password: string;
}

class CreateUserService {
  async execute({ name, email, password }: UserRequest) {
    //Verificando se o email foi enviado
    if (!email) {
      throw new Error("Email incorreto");
    }

    //Verificar se o email já está cadastrado
    const userAreadyExists = await prismaClient.user.findFirst({
      where: {
        email: email,
      },
    });

    if (userAreadyExists) {
      throw new Error("Email já cadastrado");
    }

    //criptografando senha do db
    const passwordHash = await hash(password, 8);

    //Criando usuario no db
    const user = await prismaClient.user.create({
      data: {
        name: name,
        email: email,
        password: passwordHash,
      },
      select: {
        id: true,
        name: true,
        email: true
      }
    });

    return user;
  }
}

export { CreateUserService };
