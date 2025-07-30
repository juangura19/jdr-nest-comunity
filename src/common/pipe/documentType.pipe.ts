// pipes/document-type.pipe.ts
import { PipeTransform, Injectable, BadRequestException } from '@nestjs/common';

const ALLOWED_TYPES = ['dni', 'ce', 'pass'];

@Injectable()
export class ParseDocumentTypePipe implements PipeTransform {
  transform(value: string): string {
    if (!ALLOWED_TYPES.includes(value.toLowerCase())) {
      throw new BadRequestException(
        `El tipo de documento debe ser uno de: ${ALLOWED_TYPES.join(', ')}`,
      );
    }
    return value.toLowerCase(); // Normaliza a minúsculas
  }
}
