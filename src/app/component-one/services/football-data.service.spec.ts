import { TestBed } from '@angular/core/testing';
import { FootballDataService } from './football-data.service';

describe('FootballDataService', () => {
  let service: FootballDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FootballDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return football data', () => {
    const data = service.getFootballData();
    expect(data.title).toBe('Футбол');
    expect(data.rules.length).toBe(4);
    expect(data.tournaments.length).toBe(3);
  });
});