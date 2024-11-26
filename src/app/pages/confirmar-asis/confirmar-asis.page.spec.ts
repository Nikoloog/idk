import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConfirmarAsisPage } from './confirmar-asis.page';

describe('ConfirmarAsisPage', () => {
  let component: ConfirmarAsisPage;
  let fixture: ComponentFixture<ConfirmarAsisPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmarAsisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
