import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleadoNGComponent } from './empleado-ng.component';

describe('EmpleadoNGComponent', () => {
  let component: EmpleadoNGComponent;
  let fixture: ComponentFixture<EmpleadoNGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpleadoNGComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpleadoNGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
