import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogaritmiComponent } from './logaritmi.component';

describe('LogaritmiComponent', () => {
  let component: LogaritmiComponent;
  let fixture: ComponentFixture<LogaritmiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogaritmiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogaritmiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
