import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transferStatus',
  standalone: true
})
export class TransferStatusPipe implements PipeTransform {
  transform(status: string): string {
    switch(status.toLowerCase()) {
      case 'active':
        return '🟢 Активный трансфер';
      case 'rumored':
        return '🟡 Слухи о трансфере';
      case 'completed':
        return '🔵 Завершен';
      case 'failed':
        return '🔴 Не состоялся';
      default:
        return status;
    }
  }
}