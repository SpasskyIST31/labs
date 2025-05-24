import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FootballDataService } from './services/football-data.service';

@Component({
  selector: 'app-component-one',
  standalone: true,
  imports: [CommonModule, RouterLink],
  providers: [FootballDataService],
  templateUrl: './component-one.component.html',
  styleUrls: ['./component-one.component.scss']
})
export class ComponentOneComponent implements OnInit {
  title = 'Футбол';
  history = '';
  rules: any[] = [];
  tournaments: any[] = [];

  constructor(private footballService: FootballDataService) {}

  ngOnInit(): void {
    const data = this.footballService.getFootballData();
    this.history = data.history;
    this.rules = data.rules;
    this.tournaments = data.tournaments;
  }
}