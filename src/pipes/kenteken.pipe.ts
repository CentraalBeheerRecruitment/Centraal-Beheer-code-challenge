import { Pipe, PipeTransform } from '@angular/core';
import { KentekenCheck } from 'rdw-kenteken-check';

@Pipe({ name: 'kenteken' })
export class KentekenPipe implements PipeTransform {
  transform(value: string): string {
    const kentekencheck = new KentekenCheck(value);
    return kentekencheck.formatLicense();
  }
}
