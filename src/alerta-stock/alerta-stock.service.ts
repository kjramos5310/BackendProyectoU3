import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AlertaStock } from './alerta-stock.entity';

@Injectable()
export class AlertaStockService {
  constructor(
    @InjectRepository(AlertaStock)
    private readonly alertaStockRepository: Repository<AlertaStock>,
  ) {}

  findAll(): Promise<AlertaStock[]> {
    return this.alertaStockRepository.find();
  }

  async findOne(id: number): Promise<AlertaStock> {
    const alertaStock = await this.alertaStockRepository.findOneBy({ id_alerta: id });
    if (!alertaStock) {
      throw new Error(`AlertaStock with id ${id} not found`);
    }
    return alertaStock;
  }

  create(alertaStock: AlertaStock): Promise<AlertaStock> {
    return this.alertaStockRepository.save(alertaStock);
  }

  async update(id: number, alertaStock: AlertaStock): Promise<void> {
    await this.alertaStockRepository.update(id, alertaStock);
  }

  async remove(id: number): Promise<void> {
    await this.alertaStockRepository.delete(id);
  }
}