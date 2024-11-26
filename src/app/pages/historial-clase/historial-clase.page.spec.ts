import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HistorialClasePage } from './historial-clase.page';

describe('HistorialClasePage', () => {
  let component: HistorialClasePage;
  let fixture: ComponentFixture<HistorialClasePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(HistorialClasePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
