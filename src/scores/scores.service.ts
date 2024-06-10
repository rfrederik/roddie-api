import { Injectable } from '@nestjs/common';
import { CreateScoreDto } from './dto/create-score.dto';
import { UpdateScoreDto } from './dto/update-score.dto';
import { EntityManager, Repository, Not, MoreThan } from 'typeorm';
import { Score } from './entities/score.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ScoresService {
constructor(
  @InjectRepository(Score)
  private readonly scoresRepository: Repository<Score>,
  private readonly entityManager: EntityManager,
) {

}
  async create(createScoreDto: CreateScoreDto): Promise<Score> {
    const score = new Score(createScoreDto)
    return await this.entityManager.save(score)
  }

  async findAll(): Promise<Score[]> {
    return await this.scoresRepository.find()
  }

  async findOne(id: number): Promise<Score> {
    return await this.scoresRepository.findOneBy({ id })
  }

  async update(id: number, updateScoreDto: UpdateScoreDto): Promise<Score> {
   const score = await this.scoresRepository.findOneBy({ id })
   Object.assign(score, updateScoreDto);
  
   return await this.entityManager.save(score)
  }

  async remove(id: number) {
    await this.scoresRepository.delete(id)
  }

  async getHighScore(): Promise<Score> {
    return await this.scoresRepository.findOne({
      where: {
        score: MoreThan(0)
      },
      order: {
        score: 'DESC'
      }
    });
  }
}
