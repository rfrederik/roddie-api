import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { ScoresService } from './scores.service';
import { CreateScoreDto } from './dto/create-score.dto';
import { UpdateScoreDto } from './dto/update-score.dto';
import { Score } from './entities/score.entity';

@Controller('scores')
export class ScoresController {
  constructor(private readonly scoresService: ScoresService) {}

  @Get('/get-high-score')
  getHighScore(): Promise<Score> {
    return this.scoresService.getHighScore();
  }

  @Post()
  create(@Body() createScoreDto: CreateScoreDto): Promise<Score> {
    return this.scoresService.create(createScoreDto);
  }

  @Get()
  findAll(): Promise<Score[]> {
    return this.scoresService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Score> {
    return this.scoresService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateScoreDto: UpdateScoreDto): Promise<Score> {
    return this.scoresService.update(+id, updateScoreDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.scoresService.remove(+id);
  }
}
