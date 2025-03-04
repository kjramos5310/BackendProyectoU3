import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { AlertaStockService } from './alerta-stock.service';
import { AlertaStock } from './alerta-stock.entity';

@Controller('alerta-stock')
export class AlertaStockController {
  constructor(private readonly alertaStockService: AlertaStockService) {}

  @Get()
  findAll(): Promise<AlertaStock[]> {
    return this.alertaStockService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<AlertaStock> {
    return this.alertaStockService.findOne(id);
  }

  @Post()
  create(@Body() alertaStock: AlertaStock): Promise<AlertaStock> {
    return this.alertaStockService.create(alertaStock);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() alertaStock: AlertaStock): Promise<void> {
    return this.alertaStockService.update(id, alertaStock);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.alertaStockService.remove(id);
  }
}