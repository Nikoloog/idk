import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AccesoCameraPage } from './acceso-camera.page';

describe('AccesoCameraPage', () => {
  let component: AccesoCameraPage;
  let fixture: ComponentFixture<AccesoCameraPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AccesoCameraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
