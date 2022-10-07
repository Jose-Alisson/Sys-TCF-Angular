import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeExhiComponent } from './he-exhi.component';

describe('HeExhiComponent', () => {
  let component: HeExhiComponent;
  let fixture: ComponentFixture<HeExhiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeExhiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeExhiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
