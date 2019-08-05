import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TickettrendComponent } from './tickettrend.component';

describe('TickettrendComponent', () => {
  let component: TickettrendComponent;
  let fixture: ComponentFixture<TickettrendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TickettrendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TickettrendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
