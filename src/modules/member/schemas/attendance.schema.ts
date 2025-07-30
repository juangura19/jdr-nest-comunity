import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema({ collection: "attendance", timestamps: true })
export class Attendance extends Document {

    @Prop({ required: true})
    memberId: string;

    @Prop({ required: true})
    memberName: string;

    @Prop({ required: true})
    classId: string;

    @Prop({ required: true})
    studyLesson: number;

    @Prop({ required: true })
    studyBible: boolean;

    @Prop({ required: true })
    shareHope: boolean;

    @Prop({ required: true, default: true })
    status: boolean;

    @Prop()
    userAud?: string;
}

export const AttendanceSchema = SchemaFactory.createForClass(Attendance)