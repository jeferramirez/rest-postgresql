import { Controller, Post, Body, Res, HttpStatus, Get, Param, Delete, Put } from '@nestjs/common';
import { AsignaturaService } from './asignatura.service';

@Controller('asignatura')
export class AsignaturaController {


    constructor( private tareaService: AsignaturaService ) {}

    @Post()
     async create(@Body() asignatura: any, @Res()resp ) {
   
       try {
       const newtarea =  await this.tareaService.createAsignatura(asignatura);
       resp.status(HttpStatus.CREATED).json( { data: newtarea, estado: HttpStatus.CREATED});
   
       } catch (error) {
   
        resp.status(HttpStatus.FORBIDDEN).json({
          error,
          estado: HttpStatus.BAD_REQUEST,
          mensaje: 'error en la creación de la asignaturas'});
       }
   
   
     }
   
     @Get()
     async getAll( @Res()res ) {
   
       try {
           const usuarios =  await this.tareaService.findAll();
           res.status(HttpStatus.OK).json(usuarios);
       } catch (error) {
           res.status(HttpStatus.FORBIDDEN).json({mensaje: 'error obteniendo las asignaturas'});
   
       }
     }
   
   
     @Get(':id')
     async getOne( @Res() res, @Param('id')idTarea ) {
   
       try {
           const newtarea =  await this.tareaService.findOne(idTarea);
           res.status(HttpStatus.OK).json(newtarea);
       } catch (error) {
           res.status(HttpStatus.FORBIDDEN).json({mensaje: 'error obteniendo asignaturas'});
   
       }
     }

     @Delete(':id')
     async deletdOne( @Res() res, @Param('id')idTarea ) {
   
       try {
           const tarea =  await this.tareaService.deleteOne(idTarea);
           return res.status(HttpStatus.OK).json(tarea);
       } catch (error) {
           return  res.status(HttpStatus.FORBIDDEN).json({mensaje: 'error BORRANDO asignatura '});
    
       }
     }
   
     @Put()
     async updated(@Res() res, @Body()tarea ) {
   
       try {
           const newtarea =  await this.tareaService.updatedAsign(tarea);
           return res.status(HttpStatus.OK).json(newtarea);
       } catch (error) {
           return  res.status(HttpStatus.FORBIDDEN).json({mensaje: 'error editando asignatura '});
    
       }
     }

}
