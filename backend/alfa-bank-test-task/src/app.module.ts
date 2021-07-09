import { Module } from '@nestjs/common';
import { SomeModule } from './users/users.module';

@Module({
  imports: [SomeModule],
})
export class AppModule {}
