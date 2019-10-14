import { Controller, Post, Body, Res, HttpStatus, Get, Param, Delete, Put } from '@nestjs/common';
import { GrupoService } from './grupo.service';

@Controller('grupo')
export class GrupoController {

 constructor( private grupoService: GrupoService ) {}

 @Post()
  async create(@Body() grupo: any, @Res()resp ) {

    try {
    const user =  await this.grupoService.createGrupo(grupo);

    resp.status(HttpStatus.CREATED).json(

      {status: HttpStatus.CREATED, data: user});

    } catch (error) {

     resp.status(HttpStatus.BAD_REQUEST).json({error, estado: HttpStatus.BAD_REQUEST});
    }


  }

  @Get()
  async getAllUsers( @Res()res ) {

    try {
        const usuarios =  await this.grupoService.findAll();
        res.status(HttpStatus.OK).json(usuarios);
    } catch (error) {
        res.status(HttpStatus.FORBIDDEN).json({error, estado: HttpStatus.BAD_REQUEST});

    }
  }


  @Get(':id')
  async getOneUser( @Res() res, @Param('id')idUser ) {

    try {
        const usuarios =  await this.grupoService.findOne(idUser);
        res.status(HttpStatus.OK).json(usuarios);
    } catch (error) {
        res.status(HttpStatus.BAD_REQUEST).json({error, estado: HttpStatus.BAD_REQUEST});

    }
  }

  @Delete(':id')
  async deletdOneUser( @Res() res, @Param('id')idUser ) {

    try {
        const grupo =  await this.grupoService.deleteOne(idUser);
        return res.status(HttpStatus.OK).json(grupo);
    } catch (error) {
        return  res.status(HttpStatus.FORBIDDEN).json({error, estado: HttpStatus.BAD_REQUEST});
 
    }
  }

  @Put()
  async updatedUser(@Res() res, @Body()grupo ) {

    try {
        const user =  await this.grupoService.updateGrupo(grupo);
        return res.status(HttpStatus.OK).json(user);
    } catch (error) {
        return  res.status(HttpStatus.BAD_REQUEST).json({error, estado: HttpStatus.BAD_REQUEST});
 
    }
  }

 }
