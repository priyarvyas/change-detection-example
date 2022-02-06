import { Pipe, PipeTransform } from '@angular/core';

function calculateCode(id: number): number {
  if (id === 1 || id === 2) {
    return 1;
  }
  return calculateCode(id - 1) + calculateCode(id - 2);
}

@Pipe({
  name: 'calculateCode'
})
export class CalculateCodePipe implements PipeTransform {

  transform(id: number): string {
    //console.log(id);
    const code = calculateCode(id) + '-code';
    return code;
  }

}
