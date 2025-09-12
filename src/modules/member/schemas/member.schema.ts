import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema({ collection: "member", timestamps: true })
export class Member extends Document {

    @Prop({ required: false})
    schoolId: string;
    
    @Prop({ required: true})
    documentType: string;

    @Prop({ required: true})
    document: string;

    @Prop({ required: true})
    name: string;

    @Prop({ required: true })
    lastname: string;

    @Prop({ required: true })
    sexo: string;

    @Prop({ required: true})
    birthdate: string;

    @Prop({ required: true})
    email: string;

    @Prop({ required: true})
    cellphone: string;

    @Prop({ required: true, default: true })
    status: boolean;

    @Prop()
    userAud?: string;
}

export const MemberSchema = SchemaFactory.createForClass(Member)