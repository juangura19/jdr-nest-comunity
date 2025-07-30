import { Controller, DefaultValuePipe, Get, ParseIntPipe, Query } from "@nestjs/common";
import { MemberService } from "../services/member.service";
import { ParseDocumentTypePipe } from "src/common/pipe/documentType.pipe";

@Controller('member')
export class MemberController {

    constructor(
        private readonly memberService: MemberService
    ) { }

    @Get('search')
    async findByPageAndCount(
        @Query('documentType', ParseDocumentTypePipe) documentType: string,
        @Query('document') document: string
    ) {
        return await this.memberService.findByTypeAndDocument(documentType, document);
    }
}