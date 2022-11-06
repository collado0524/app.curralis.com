import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdsWallComponent } from './ads-wall.component';

describe('AdsWallComponent', () => {
  let component: AdsWallComponent;
  let fixture: ComponentFixture<AdsWallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdsWallComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdsWallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
