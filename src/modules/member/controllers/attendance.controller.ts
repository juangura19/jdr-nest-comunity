import { Body, Controller, Post, ValidationPipe } from "@nestjs/common";
import { AttendanceDto } from "../dto/attendance";
import { AttendanceService } from "../services/attendance.service";
import { TokenService } from "src/common/security/token.service";
import { Message } from "src/common/utils/message";

@Controller('member')
export class AttendanceController {

    constructor(
        private readonly attendanceService: AttendanceService,
        private readonly tokenService: TokenService
    ) { }

    @Post('attendance')
    async create(
        @Body(new ValidationPipe()) request: AttendanceDto
    ) {
        try {
            const payload = await this.tokenService.verifyToken(request.token);
            return await this.attendanceService.create(payload.sub, request, "admin");
        } catch (error) {
            console.log(error)
            return {
                success:false,
                message:Message.MSG_ATTENDANCE_INVALID
            }
        }

    }
}