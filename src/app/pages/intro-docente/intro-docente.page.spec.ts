import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IntroDocentePage } from './intro-docente.page';

describe('IntroDocentePage', () => {
  let component: IntroDocentePage;
  let fixture: ComponentFixture<IntroDocentePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroDocentePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
