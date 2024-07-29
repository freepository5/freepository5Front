import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonRoadmapComponent } from './button-roadmap.component';

describe('ButtonRoadmapComponent', () => {
  let component: ButtonRoadmapComponent;
  let fixture: ComponentFixture<ButtonRoadmapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonRoadmapComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ButtonRoadmapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
