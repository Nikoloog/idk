import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GuardarclasePage } from './guardarclase.page';

describe('GuardarclasePage', () => {
  let component: GuardarclasePage;
  let fixture: ComponentFixture<GuardarclasePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(GuardarclasePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
