import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransferStatusPipe } from './transfer-status.pipe';

@Component({
  selector: 'app-component-two',
  standalone: true,
  imports: [CommonModule, TransferStatusPipe],
  templateUrl: './component-two.component.html',
  styleUrl: './component-two.component.scss'
})
export class ComponentTwoComponent {
  players = [
    { 
      name: 'Lionel Messi',
      price: 55000000,
      goalPercentage: 0.32,
      birthDate: new Date(1987, 5, 24),
      height: 1.7,
      club: 'Inter Miami CF',
      country: 'Argentina',
      transferStatus: 'Active'
    },
    {
      name: 'Cristiano Ronaldo',
      price: 45000000,
      goalPercentage: 0.28,
      birthDate: new Date(1985, 1, 5),
      height: 1.87,
      club: 'Al-Nassr Football Club',
      country: 'Portugal',
      transferStatus: 'Active'
    },
    {
      name: 'Kylian Mbappé',
      price: 180000000,
      goalPercentage: 0.25,
      birthDate: new Date(1998, 11, 20),
      height: 1.78,
      club: 'Paris Saint-Germain Football Club',
      country: 'France',
      transferStatus: 'Rumored'
    }
  ];
}