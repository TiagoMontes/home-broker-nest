import { Body, Controller, Delete, Post } from '@nestjs/common';
import { AssetsService } from './assets.service';

@Controller('assets')
export class AssetsController {
  constructor(private readonly assetsService: AssetsService) {}
  
  @Post()
  create(@Body() body: { id: string; symbol: string; price: number }) { // @Body pega os dados da requisição e atribui aos valores de body
    return this.assetsService.create(body);
  }

  @Delete()
  delete(@Body() body: { id: string } ) {
    return this.assetsService.delete(body.id);
  }
}
