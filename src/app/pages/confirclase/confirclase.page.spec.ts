import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConfirclasePage } from './confirclase.page';

describe('ConfirclasePage', () => {
  let component: ConfirclasePage;
  let fixture: ComponentFixture<ConfirclasePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirclasePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
