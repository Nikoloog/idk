import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CursosDisponiblesPage } from './cursos-disponibles.page';

describe('CursosDisponiblesPage', () => {
  let component: CursosDisponiblesPage;
  let fixture: ComponentFixture<CursosDisponiblesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CursosDisponiblesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
