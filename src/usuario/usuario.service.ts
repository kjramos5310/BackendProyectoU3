import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from './usuario.entity';

@Injectable()
export class UsuarioService {
  constructor(
    @InjectRepository(Usuario)
    private readonly usuarioRepository: Repository<Usuario>,
  ) {}

  findAll(): Promise<Usuario[]> {
    return this.usuarioRepository.find();
  }

  async findOne(id: number): Promise<Usuario> {
    const usuario = await this.usuarioRepository.findOneBy({ id_usuario: id });
    if (!usuario) {
      throw new Error(`Usuario with id ${id} not found`);
    }
    return usuario;
  }

  // Aplicamos Partial<Usuario> para que los campos sean opcionales
  create(usuario: Partial<Usuario>): Promise<Usuario> {
    return this.usuarioRepository.save(usuario);
  }

  // En el update también usamos Partial<Usuario> ya que los campos no necesariamente deben ser completos
  async update(id: number, usuario: Partial<Usuario>): Promise<void> {
    await this.usuarioRepository.update(id, usuario);
  }

  async remove(id: number): Promise<void> {
    await this.usuarioRepository.delete(id);
  }
}
