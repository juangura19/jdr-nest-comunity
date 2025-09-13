import { Module } from '@nestjs/common';
import { MemberModule } from './modules/member/member.module';
import { VisitModule } from './modules/visit/visit.module';
import { DatabaseModule } from './config/database.config';
import { TerminusModule } from '@nestjs/terminus';
import { HealthController } from './modules/health/health.controller';

@Module({
  imports: [
    MemberModule, 
    VisitModule,
    DatabaseModule,
    TerminusModule
  ],
  controllers: [
    HealthController
  ],
  providers: [],
})
export class AppModule {}
