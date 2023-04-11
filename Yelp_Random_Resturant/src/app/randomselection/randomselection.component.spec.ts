import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomselectionComponent } from './randomselection.component';

describe('RandomselectionComponent', () => {
  let component: RandomselectionComponent;
  let fixture: ComponentFixture<RandomselectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RandomselectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RandomselectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
