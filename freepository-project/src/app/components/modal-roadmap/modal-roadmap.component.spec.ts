import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalRoadmapComponent } from './modal-roadmap.component';

describe('ModalRoadmapComponent', () => {
  let component: ModalRoadmapComponent;
  let fixture: ComponentFixture<ModalRoadmapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalRoadmapComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalRoadmapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
