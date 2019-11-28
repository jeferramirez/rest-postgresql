import { Controller, Post, Body, Res, HttpStatus, Get, Param, Delete, Put } from '@nestjs/common';
import { DocenteGrupoService } from './docente_grupo.service';
import { DocenteGrupo } from './docente_grupo.entity';

@Controller('docente-grupo')
export class DocenteGrupoController {

 constructor( private docenteGrService: DocenteGrupoService ) {}

 @Post()
  async create(@Body() docenteGrp: any, @Res()resp ) {

    try {

    const grp =  await this.docenteGrService.create(docenteGrp);

    resp.status(HttpStatus.CREATED).json(

      {status: HttpStatus.CREATED, data: grp});

    } catch (error) {

     resp.status(HttpStatus.BAD_REQUEST).json({error, estado: HttpStatus.BAD_REQUEST });
    }


  }

  @Get()
  async getAll( @Res()res ) {

    try {
        const usuarios =  await this.docenteGrService.findAll();
        res.status(HttpStatus.OK).json(usuarios);
    } catch (error) {
        res.status(HttpStatus.BAD_REQUEST).json({error, estado: HttpStatus.BAD_REQUEST });

    }
  }


  @Get(':id')
  async getOne( @Res() res, @Param('id')id ) {

    try {
        const usuarios =  await this.docenteGrService.findOne(id);
        res.status(HttpStatus.OK).json(usuarios);
    } catch (error) {
        res.status(HttpStatus.BAD_REQUEST).json({error, estado: HttpStatus.BAD_REQUEST });

    }
  }

  @Delete(':id')
  async deletdOne( @Res() res, @Param('id')idUser ) {

    try {
        const docenteGrp =  await this.docenteGrService.deleteOne(idUser);
        return res.status(HttpStatus.OK).json(docenteGrp);
    } catch (error) {
        return  res.status(HttpStatus.BAD_REQUEST).json({error, estado: HttpStatus.BAD_REQUEST });
 
    }
  }

  @Put()
  async updatedOne(@Res() res, @Body()docenteGrp ) {

    try {
        const grp =  await this.docenteGrService.update(docenteGrp);
        return res.status(HttpStatus.OK).json(grp);
    } catch (error) {
        return  res.status(HttpStatus.BAD_REQUEST).json({error, estado: HttpStatus.BAD_REQUEST });
 
    }
  }

 }
