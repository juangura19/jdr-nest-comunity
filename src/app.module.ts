import { Module } from '@nestjs/common';
import { MemberModule } from './modules/member/member.module';
import { VisitModule } from './modules/visit/visit.module';
import { DatabaseModule } from './config/database.config';

@Module({
  imports: [
    MemberModule, 
    VisitModule,
    DatabaseModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
