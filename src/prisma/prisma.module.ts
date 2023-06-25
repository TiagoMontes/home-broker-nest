import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';

@Global() // Ao invés de usarmos export, usaremos o Global que deixará o provider como GLOBAL
@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaModule {}
