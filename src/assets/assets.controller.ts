import { Body, Controller, Delete, Get, Post } from '@nestjs/common';
import { AssetsService } from './assets.service';

@Controller('assets')
export class AssetsController {
  constructor(private readonly assetsService: AssetsService) { }
  
  @Get()
  getAll() {
    return this.assetsService.getAll()
  }
  
  @Post()
  create(@Body() body: { id: string; symbol: string; price: number }) { // @Body pega os dados da requisição e atribui aos valores de body
    return this.assetsService.create(body);
  }
}
