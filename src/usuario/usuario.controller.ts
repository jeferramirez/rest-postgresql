import { Controller, Post, Body, Res, HttpStatus, Get, Param, Delete, Put } from '@nestjs/common';
import { UsuarioService } from './usuario.service';

@Controller('usuario')
export class UsuarioController {

  constructor(private matriculaService: UsuarioService) { }

  @Post()
  async create(@Body() matricula: any, @Res() resp) {

    try {
      const nuevaMatricula = await this.matriculaService.createOne(matricula);

      resp.status(HttpStatus.CREATED).json(

        { status: HttpStatus.CREATED, data: nuevaMatricula });

    } catch (error) {

      resp.status(HttpStatus.BAD_REQUEST).json({ error, estado: HttpStatus.BAD_REQUEST });
    }


  }

  @Get('estudiante/:id')
  async getByCod(@Res() res, @Param('id') idUser) {

    try {

      const usuarios = await this.matriculaService.findByCod(idUser);
      res.status(HttpStatus.OK).json(usuarios);
    } catch (error) {
      res.status(HttpStatus.BAD_REQUEST).json({ error, estado: HttpStatus.BAD_REQUEST });

    }
  }



  @Get()
  async getAll(@Res() res) {

    try {

      const usuarios = await this.matriculaService.findAll();
      res.status(HttpStatus.OK).json(usuarios);
    } catch (error) {
      res.status(HttpStatus.BAD_REQUEST).json({ error, estado: HttpStatus.BAD_REQUEST });

    }
  }


  @Get(':id')
  async getOne(@Res() res, @Param('id') idUser) {

    try {
      const usuarios = await this.matriculaService.findOne(idUser);
      res.status(HttpStatus.OK).json(usuarios);
    } catch (error) {
      res.status(HttpStatus.BAD_REQUEST).json({ error, estado: HttpStatus.BAD_REQUEST });

    }
  }

  @Delete(':id')
  async deletdOneUser(@Res() res, @Param('id') idUser) {

    try {
      const matricula = await this.matriculaService.deleteOne(idUser);
      return res.status(HttpStatus.OK).json(matricula);
    } catch (error) {
      return res.status(HttpStatus.BAD_REQUEST).json({ error, estado: HttpStatus.BAD_REQUEST });

    }
  }

  @Put()
  async updated(@Res() res, @Body() matricula) {

    try {
      const nuevaMatricula = await this.matriculaService.updatedOne(matricula);
      return res.status(HttpStatus.OK).json(nuevaMatricula);
    } catch (error) {
      return res.status(HttpStatus.BAD_REQUEST).json({ error, estado: HttpStatus.BAD_REQUEST });

    }
  }

}
