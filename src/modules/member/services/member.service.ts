import { Injectable, NotFoundException } from "@nestjs/common";
import { Member as MemberSchema } from "../schemas/member.schema";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { ResponseDto } from "src/common/model/response.dto";
import { Message } from "src/common/utils/message";

@Injectable()
export class MemberService {

    constructor(
        @InjectModel(MemberSchema.name) private resource: Model<MemberSchema>
    ) { }

    async findByTypeAndDocument(
        documentType: string,
        document: string
    ): Promise<ResponseDto<MemberSchema>> {
        const data = await this.resource
            .find(
                {
                    documentType: documentType,
                    document: document,
                    status: true
                }
            ).exec()

        if (data.length == 0) {
            return {
                success: false,
                message: Message.MSG_MEMBER_NOT_EXIST
            }
        }
        return {
            success: true,
            message: Message.MSG_SUCCESS_TRUE,
            data: data[0]
        }
    }

    async findById(
        id: string
    ): Promise<ResponseDto<MemberSchema>> {

        const data = await this.resource.findById(id);
        if (!data || data.status === false) {
            throw new NotFoundException(`Miembro con ID ${id} no encontrado o inactivo`);
        }
        return {
            success: true,
            message: Message.MSG_SUCCESS_TRUE,
            data: data
        };
    }
}