import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RolModule } from './rol/rol.module';
import { AlertaStock } from './alerta-stock/alerta-stock.entity';
import { Categoria } from './categoria/categoria.entity';
import { CategoriaModule } from './categoria/categoria.module';
import { AlertaStockModule } from './alerta-stock/alerta-stock.module';
import { EmpresaModule } from './empresa/empresa.module';
import { Inventario } from './inventario/inventario.entity';
import { InventarioModule } from './inventario/inventario.module';
import { MovimientoInventarioModule } from './movimiento_inventario/movimiento_inventario.module';
import { PedidoModule } from './pedido/pedido.module';
import { ProductoModule } from './producto/producto.module';
import { Proveedor } from './proveedor/proveedor.entity';
import { ProveedorModule } from './proveedor/proveedor.module';
import { ReporteModule } from './reporte/reporte.module';
import { UsuarioModule } from './usuario/usuario.module';
import { UsuarioRolModule } from './Usuario_Rol/Usuario_Rol.module';
import { Detalle_PedidoModule } from './Detalle_Pedido/detalle_pedido.module';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5434,
      username: 'postgres',
      password: 'admin**123',
      database: 'projecto-3',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      autoLoadEntities: true,
      synchronize: true,
    }),
    RolModule,
    AlertaStockModule,
    CategoriaModule,
    EmpresaModule,
    InventarioModule,
    MovimientoInventarioModule,
    PedidoModule,
    ProductoModule,
    ProveedorModule,
    ReporteModule,
    UsuarioModule,
    UsuarioRolModule,
    Detalle_PedidoModule

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
