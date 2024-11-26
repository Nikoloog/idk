import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConfirmarNuevaContraPage } from './confirmar-nueva-contra.page';

describe('ConfirmarNuevaContraPage', () => {
  let component: ConfirmarNuevaContraPage;
  let fixture: ComponentFixture<ConfirmarNuevaContraPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmarNuevaContraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
