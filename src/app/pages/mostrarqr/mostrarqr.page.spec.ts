import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MostrarqrPage } from './mostrarqr.page';

describe('MostrarqrPage', () => {
  let component: MostrarqrPage;
  let fixture: ComponentFixture<MostrarqrPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrarqrPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
