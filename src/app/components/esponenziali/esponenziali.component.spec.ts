import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EsponenzialiComponent } from './esponenziali.component';

describe('EsponenzialiComponent', () => {
  let component: EsponenzialiComponent;
  let fixture: ComponentFixture<EsponenzialiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EsponenzialiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EsponenzialiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
