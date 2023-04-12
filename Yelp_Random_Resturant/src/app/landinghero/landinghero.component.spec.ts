import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingheroComponent } from './landinghero.component';

describe('LandingheroComponent', () => {
  let component: LandingheroComponent;
  let fixture: ComponentFixture<LandingheroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingheroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandingheroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
