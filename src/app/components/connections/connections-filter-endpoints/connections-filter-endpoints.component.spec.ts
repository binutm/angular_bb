import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectionsFilterEndpointsComponent } from './connections-filter-endpoints.component';

describe('ConnectionsFilterEndpointsComponent', () => {
  let component: ConnectionsFilterEndpointsComponent;
  let fixture: ComponentFixture<ConnectionsFilterEndpointsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConnectionsFilterEndpointsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnectionsFilterEndpointsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
