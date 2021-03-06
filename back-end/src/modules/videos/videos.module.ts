import { Module } from '@nestjs/common';
import { VideosController } from './videos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VideosService } from './videos.service';
import { VideoRepository } from './videos.repository';
import { CourseRepository } from '../courses/courses.repository';

@Module({
  controllers: [VideosController],
  imports: [TypeOrmModule.forFeature([VideoRepository, CourseRepository])],
  providers: [VideosService]
})
export class VideosModule {}
