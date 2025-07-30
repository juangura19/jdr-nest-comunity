import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Member, MemberSchema } from './schemas/member.schema';
import { Attendance, AttendanceSchema } from './schemas/attendance.schema';
import { AttendanceController } from './controllers/attendance.controller';
import { MemberController } from './controllers/member.controller';
import { AttendanceService } from './services/attendance.service';
import { MemberService } from './services/member.service';
import { JwtConfig } from 'src/config/jwt.config';

@Module({
    imports:[
        JwtConfig,
        MongooseModule.forFeature([
            { name: Member.name, schema: MemberSchema },
            { name: Attendance.name, schema: AttendanceSchema }
        ])
    ],
    controllers:[
        AttendanceController,
        MemberController
    ],
    providers:[
        AttendanceService,
        MemberService
    ]
})
export class MemberModule {}
