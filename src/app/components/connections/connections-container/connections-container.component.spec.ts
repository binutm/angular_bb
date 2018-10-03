import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectionsContainerComponent } from './connections-container.component';

describe('ConnectionsContainerComponent', () => {
  let component: ConnectionsContainerComponent;
  let fixture: ComponentFixture<ConnectionsContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConnectionsContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnectionsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
