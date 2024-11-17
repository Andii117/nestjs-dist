import { Module } from '@nestjs/common';
import { ProjectsModule } from './projects/projects.module';
import { AuthModule } from './auth/auth.module';
import { TasksModule } from './tasks/tasks.module';
import { UsersModule } from './users/users.module';


@Module({
  imports: [ProjectsModule, AuthModule, TasksModule, UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
