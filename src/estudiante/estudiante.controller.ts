import { Controller, Post, Body, Res, HttpStatus, Get, Param, Delete, Put } from '@nestjs/common';
import { EstudianteService } from './estudiante.service';

@Controller('estudiante')
export class EstudianteController {

 constructor( private usuarioService: EstudianteService ) {}

 @Post()
  async create(@Body() usuario: any, @Res()resp ) {

    try {
    const user =  await this.usuarioService.createEstudiante(usuario);

    resp.status(HttpStatus.CREATED).json(

      {status: HttpStatus.CREATED, data: user});

    } catch (error) {

     resp.status(HttpStatus.BAD_REQUEST).json({error, estado : HttpStatus.BAD_REQUEST });

    }

  }

  @Get()
  async getAllStudents( @Res()res ) {

    try {
        const usuarios =  await this.usuarioService.findAll();
        res.status(HttpStatus.OK).json(usuarios);
    } catch (error) {
        res.status(HttpStatus.BAD_REQUEST).json({error, estado: HttpStatus.BAD_REQUEST});

    }
  }


  @Get(':id')
  async getOneStudent( @Res() res, @Param('id')idUser ) {

    try {
        const usuarios =  await this.usuarioService.findOne(idUser);
        res.status(HttpStatus.OK).json(usuarios);
    } catch (error) {
        res.status(HttpStatus.BAD_REQUEST).json({error, estado: HttpStatus.BAD_REQUEST });

    }
  }

  @Delete(':id')
  async deletdOneStudent( @Res() res, @Param('id')idUser ) {

    try {
        const usuario =  await this.usuarioService.deleteOne(idUser);
        return res.status(HttpStatus.OK).json(usuario);
    } catch (error) {
        return  res.status(HttpStatus.BAD_REQUEST).json({error, estado: HttpStatus.BAD_REQUEST });
 
    }
  }

  @Put()
  async updatedUser(@Res() res, @Body()usuario ) {

    try {
        const user =  await this.usuarioService.updatedEstudiante(usuario);
        return res.status(HttpStatus.OK).json(user);
    } catch (error) {
        return  res.status(HttpStatus.BAD_REQUEST).json({error, estado: HttpStatus.BAD_REQUEST });
 
    }
  }

 }
