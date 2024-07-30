import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonResourceComponent } from './button-resource.component';

describe('ButtonResourceComponent', () => {
  let component: ButtonResourceComponent;
  let fixture: ComponentFixture<ButtonResourceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonResourceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ButtonResourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
