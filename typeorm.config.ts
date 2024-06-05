import { ConfigService } from '@nestjs/config';
import { config } from 'dotenv'
import { Score } from 'src/scores/entities/score.entity';
import { DataSource } from "typeorm";

config()
const configService = new ConfigService

export default new DataSource({
    type: 'postgres',
    host: configService.getOrThrow('POSTGRES_HOST'),
    port: configService.getOrThrow('POSTGRES_PORT'),
    database: configService.getOrThrow('POSTGRES_DB'),
    username: configService.getOrThrow('POSTGRES_USERNAME'),
    password: configService.getOrThrow('POSTGRES_PASSWORD'),
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    migrations: [__dirname + '/*/migrations/**/*{.ts,.js}'],
})