import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonModuleComponent } from './button-module.component';

describe('ButtonModuloComponent', () => {
  let component: ButtonModuleComponent;
  let fixture: ComponentFixture<ButtonModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonModuleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ButtonModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
