import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit{
    async onModuleInit() {
        await this.$connect();
    }

    // Aqui estamos forçando a quebra de conexão quando não estivermos conectados ao DB // Evitando memory leak
    async enableShutDownHooks(app: any) {
        this.$on('beforeExit', async () => {
            await app.close();
        });
    }
}
