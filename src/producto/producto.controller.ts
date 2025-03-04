

import { Controller, Get, Post, Put, Delete, Body, Param, ParseIntPipe } from '@nestjs/common';
import { ProductoService } from './producto.service';
import { Producto } from './producto.entity';

@Controller('producto') // Cambié la ruta a plural
export class ProductoController {
  constructor(private readonly productoService: ProductoService) {}

  @Get()
  async findAll(): Promise<Producto[]> {
    return await this.productoService.findAll(); // Cambié el nombre del método a obtenerTodos
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number): Promise<Producto> {
    return await this.productoService.findOne(id); // Cambié el nombre del método a obtenerUno
  }

  @Post()
  async create(@Body() datosProducto: Producto): Promise<Producto> {
    return await this.productoService.create(datosProducto); // Cambié el nombre del método a crear
  }

  @Put(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() datosProducto: Producto,
  ): Promise<Producto> { // Cambié el retorno para que devuelva el producto actualizado
    return await this.productoService.update(id, datosProducto); // Cambié el nombre del método a actualizar
  }

  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return await this.productoService.remove(id); // Cambié el nombre del método a eliminar
  }
}

// import { Controller, Get, Post, Put, Delete, Body, Param, ParseIntPipe } from '@nestjs/common';
// import { ProductoService } from './producto.service';
// import { Producto } from './producto.entity';

// @Controller('producto') // Cambié la ruta a plural
// export class ProductoController {
//   constructor(private readonly productoService: ProductoService) {}

//   @Get()
//   async findAll(): Promise<Producto[]> {
//     return await this.productoService.findAll(); // Cambié el nombre del método a obtenerTodos
//   }

//   @Get(':id')
//   async findOne(@Param('id', ParseIntPipe) id: number): Promise<Producto> {
//     return await this.productoService.findOne(id); // Cambié el nombre del método a obtenerUno
//   }

//   @Post()
//   async create(@Body() datosProducto: Producto): Promise<Producto> {
//     return await this.productoService.create(datosProducto); // Cambié el nombre del método a crear
//   }

//   @Put(':id')
//   async update(
//     @Param('id', ParseIntPipe) id: number,
//     @Body() datosProducto: Producto,
//   ): Promise<Producto> { // Cambié el retorno para que devuelva el producto actualizado
//     return await this.productoService.update(id, datosProducto); // Cambié el nombre del método a actualizar
//   }

//   @Delete(':id')
//   async remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
//     return await this.productoService.remove(id); // Cambié el nombre del método a eliminar
//   }
// }