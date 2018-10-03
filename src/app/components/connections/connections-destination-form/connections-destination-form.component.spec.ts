import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectionsDestinationFormComponent } from './connections-destination-form.component';

describe('ConnectionsDestinationFormComponent', () => {
  let component: ConnectionsDestinationFormComponent;
  let fixture: ComponentFixture<ConnectionsDestinationFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConnectionsDestinationFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnectionsDestinationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
