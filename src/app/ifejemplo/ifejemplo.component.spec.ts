import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IfejemploComponent } from './ifejemplo.component';

describe('IfejemploComponent', () => {
  let component: IfejemploComponent;
  let fixture: ComponentFixture<IfejemploComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IfejemploComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IfejemploComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
