import { Injectable } from '@nestjs/common';
import {PrismaService} from "./prisma/prisma.service";

@Injectable()
export class AppService {

  constructor(private prismaService: PrismaService) {
  }

  getHello(): string {

    let users = this.prismaService.user.findMany() ?? ['KEKOVSTVO'];
    console.log(users);

    return 'Hello World! sdsf';
  }
}
