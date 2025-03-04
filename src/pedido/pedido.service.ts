import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pedido } from './pedido.entity';

@Injectable()
export class PedidoService {
  constructor(
    @InjectRepository(Pedido)
    private readonly pedidoRepository: Repository<Pedido>,
  ) {}

  findAll(): Promise<Pedido[]> {
    return this.pedidoRepository.find();
  }

  async findOne(id: number): Promise<Pedido> {
    const pedido = await this.pedidoRepository.findOneBy({ id_pedido: id });
    if (!pedido) {
      throw new NotFoundException(`Pedido con id ${id} no encontrado`);
    }
    return pedido;
  }

  create(pedido: Partial<Pedido>): Promise<Pedido> {
    const nuevoPedido = this.pedidoRepository.create(pedido);
    return this.pedidoRepository.save(nuevoPedido);
  }

  async update(id: number, pedido: Partial<Pedido>): Promise<Pedido> {
    await this.pedidoRepository.update(id, pedido);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    const pedido = await this.findOne(id);
    await this.pedidoRepository.remove(pedido);
  }
}
