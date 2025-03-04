import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Producto } from './producto.entity';

@Injectable()
export class ProductoService {
  constructor(
    @InjectRepository(Producto)
    private readonly productoRepository: Repository<Producto>,
  ) {}

  findAll(): Promise<Producto[]> {
    return this.productoRepository.find();
  }

  async findOne(id: number): Promise<Producto> {
    const producto = await this.productoRepository.findOne({ where: { id: id } }); // Cambiado de id_producto a id
    if (!producto) {
      throw new NotFoundException(`Producto con id ${id} no encontrado`);
    }
    return producto;
  }

  create(producto: Partial<Producto>): Promise<Producto> {
    const nuevoProducto = this.productoRepository.create(producto);
    return this.productoRepository.save(nuevoProducto);
  }

  async update(id: number, producto: Partial<Producto>): Promise<Producto> {
    const productoActualizado = await this.productoRepository.preload({
      id, // Utilizamos id para la búsqueda
      ...producto,
    });

    if (!productoActualizado) {
      throw new NotFoundException(`Producto con id ${id} no encontrado para actualizar`);
    }

    return this.productoRepository.save(productoActualizado);
  }

  async remove(id: number): Promise<void> {
    const producto = await this.findOne(id);
    await this.productoRepository.remove(producto);
  }
}

// import { Injectable, NotFoundException } from '@nestjs/common';
// import { InjectRepository } from '@nestjs/typeorm';
// import { Repository } from 'typeorm';
// import { Producto } from './producto.entity';

// @Injectable()
// export class ProductoService {
//   constructor(
//     @InjectRepository(Producto)
//     private readonly productoRepository: Repository<Producto>,
//   ) {}

//   findAll(): Promise<Producto[]> {
//     return this.productoRepository.find();
//   }

//   async findOne(id: number): Promise<Producto> {
//     const producto = await this.productoRepository.findOne({ where: { id: id } }); // Cambiado de id_producto a id
//     if (!producto) {
//       throw new NotFoundException(Producto con id ${id} no encontrado);
//     }
//     return producto;
//   }

//   create(producto: Partial<Producto>): Promise<Producto> {
//     const nuevoProducto = this.productoRepository.create(producto);
//     return this.productoRepository.save(nuevoProducto);
//   }

//   async update(id: number, producto: Partial<Producto>): Promise<Producto> {
//     const productoActualizado = await this.productoRepository.preload({
//       id, // Utilizamos id para la búsqueda
//       ...producto,
//     });

//     if (!productoActualizado) {
//       throw new NotFoundException(Producto con id ${id} no encontrado para actualizar);
//     }

//     return this.productoRepository.save(productoActualizado);
//   }
//   async remove(id: number): Promise<void> {
//     const producto = await this.findOne(id);
//     await this.productoRepository.remove(producto);
//   }
// }