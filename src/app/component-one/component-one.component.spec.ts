import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComponentOneComponent } from './component-one.component';
import { FootballDataService } from './services/football-data.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('ComponentOneComponent', () => {
  let component: ComponentOneComponent;
  let fixture: ComponentFixture<ComponentOneComponent>;
  let mockFootballService: jasmine.SpyObj<FootballDataService>;

  beforeEach(async () => {
    mockFootballService = jasmine.createSpyObj('FootballDataService', ['getFootballData']);
    mockFootballService.getFootballData.and.returnValue({
      title: 'Тестовый заголовок',
      history: 'Тестовая история',
      rules: [{ description: 'Тестовое правило' }],
      tournaments: [{ name: 'Тестовый турнир', frequency: 'раз в год' }]
    });

    await TestBed.configureTestingModule({
      imports: [ComponentOneComponent, RouterTestingModule],
      providers: [
        { provide: FootballDataService, useValue: mockFootballService }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ComponentOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display football title from service', () => {
    const h1 = fixture.nativeElement.querySelector('h1');
    expect(h1.textContent).toContain('Тестовый заголовок');
  });

  it('should display rules from service', () => {
    const li = fixture.nativeElement.querySelector('li');
    expect(li.textContent).toContain('Тестовое правило');
  });
});