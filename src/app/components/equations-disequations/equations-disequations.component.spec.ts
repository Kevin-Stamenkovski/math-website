import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquationsDisequationsComponent } from './equations-disequations.component';

describe('EquationsDisequationsComponent', () => {
  let component: EquationsDisequationsComponent;
  let fixture: ComponentFixture<EquationsDisequationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EquationsDisequationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EquationsDisequationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
