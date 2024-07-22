import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoadmapsListComponent } from './roadmaps-list.component';

describe('RoadmapsListComponent', () => {
  let component: RoadmapsListComponent;
  let fixture: ComponentFixture<RoadmapsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoadmapsListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RoadmapsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
