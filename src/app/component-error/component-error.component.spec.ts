import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentErrorComponent } from './component-error.component';

describe('ComponentErrorComponent', () => {
  let component: ComponentErrorComponent;
  let fixture: ComponentFixture<ComponentErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentErrorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
