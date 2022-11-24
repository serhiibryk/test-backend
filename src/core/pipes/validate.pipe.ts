import {
  Injectable,
  ArgumentMetadata,
  BadRequestException,
  ValidationPipe,
  UnprocessableEntityException,
} from '@nestjs/common';

@Injectable()
export class ValidateInputPipe extends ValidationPipe {
  public async transform(value, metadata: ArgumentMetadata) {
    console.log('value', value);
    console.log('metadata', metadata);

    try {
      return await super.transform(value, metadata);
    } catch (e) {
      if (e instanceof BadRequestException) {
        console.log('e', e.message);

        throw new UnprocessableEntityException(this.handleError(e.message));
      }
    }
  }

  private handleError(errors) {
    console.log('errors', errors);

    return JSON.stringify(errors);
  }
}
