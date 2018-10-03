import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectionsStepperComponent } from './connections-stepper.component';

describe('ConnectionsStepperComponent', () => {
  let component: ConnectionsStepperComponent;
  let fixture: ComponentFixture<ConnectionsStepperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConnectionsStepperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnectionsStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
