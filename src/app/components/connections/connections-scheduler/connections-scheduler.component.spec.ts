import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectionsSchedulerComponent } from './connections-scheduler.component';

describe('ConnectionsSchedulerComponent', () => {
  let component: ConnectionsSchedulerComponent;
  let fixture: ComponentFixture<ConnectionsSchedulerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConnectionsSchedulerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnectionsSchedulerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
