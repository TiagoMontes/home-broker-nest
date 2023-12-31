import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma/prisma.service';

@Injectable()
export class AssetsService {
    constructor(private prismaService: PrismaService) {
        // Precisamos instanciar o PrismaService para podermos ter acesso às utilidades do ORM
    }

    getAll() {
        return this.prismaService.asset.findMany()
    }

    create(data: { id: string; symbol: string; price: number }) {
        return this.prismaService.asset.create({
            data, // Ele já aceita os valores definidos acima, não é preciso passar novamente
        })
    }
}
