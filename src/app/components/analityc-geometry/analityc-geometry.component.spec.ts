import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalitycGeometryComponent } from './analityc-geometry.component';

describe('AnalitycGeometryComponent', () => {
  let component: AnalitycGeometryComponent;
  let fixture: ComponentFixture<AnalitycGeometryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnalitycGeometryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnalitycGeometryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
