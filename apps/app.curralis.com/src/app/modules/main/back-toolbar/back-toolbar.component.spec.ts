import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackToolbarComponent } from './back-toolbar.component';

describe('BackToolbarComponent', () => {
  let component: BackToolbarComponent;
  let fixture: ComponentFixture<BackToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackToolbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BackToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
