import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormBasadosPlantillasComponent } from './form-basados-plantillas.component';

describe('FormBasadosPlantillasComponent', () => {
  let component: FormBasadosPlantillasComponent;
  let fixture: ComponentFixture<FormBasadosPlantillasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormBasadosPlantillasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormBasadosPlantillasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
