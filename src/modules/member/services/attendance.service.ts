import { Injectable, NotFoundException } from "@nestjs/common";
import { Attendance as AttendanceSchema } from "../schemas/attendance.schema";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { ResponseDto } from "src/common/model/response.dto";
import { Message } from "src/common/utils/message";
import { AttendanceDto } from "../dto/attendance";
import { MemberService } from "./member.service";

@Injectable()
export class AttendanceService {

    constructor(
        @InjectModel(AttendanceSchema.name) private resource: Model<AttendanceSchema>,
        private readonly memberService: MemberService
    ) { }

    async create(
        classId: string,
        schoolId: string,
        request: AttendanceDto,
        username: string
    ): Promise<ResponseDto<AttendanceSchema>> {

        const exists = await this.resource.exists(
            {
                classId: classId,
                memberId: request.memberId,
                status: true
            }
        );
        if (exists) {
            return {
                success: false,
                message: Message.MSG_ATTENDANCE_EXIST
            };
        }

        const member = await this.memberService.findById(request.memberId)

        if (member.data?.schoolId == null || member.data?.schoolId !== schoolId) {
            return {
                success: false,
                message: Message.MSG_MEMBER_NOT_SCHOOL
            };
        }

        const model = new this.resource({
            ...request,
            classId: classId,
            schoolId: schoolId,
            memberName: `${member.data?.name} ${member.data?.lastname}`,
            userAud: username
        });

        const data = await model.save();

        return {
            success: true,
            message: Message.MSG_SUCCESS_TRUE,
            data: data
        };
    }

}