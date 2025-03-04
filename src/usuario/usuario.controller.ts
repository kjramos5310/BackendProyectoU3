import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { Usuario } from './usuario.entity';

@Controller('usuario')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @Get()
  findAll(): Promise<Usuario[]> {
    return this.usuarioService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Usuario> {
    return this.usuarioService.findOne(id);
  }

  @Post()
  create(@Body() usuario: Partial<Usuario>): Promise<Usuario> {
    return this.usuarioService.create(usuario);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() usuario: Partial<Usuario>): Promise<Usuario> {
    await this.usuarioService.update(id, usuario);
    return this.usuarioService.findOne(id);  // Devuelves el usuario actualizado
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.usuarioService.remove(id);
  }
}
