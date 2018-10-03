import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectionsDestinationValidatorComponent } from './connections-destination-validator.component';

describe('ConnectionsDestinationValidatorComponent', () => {
  let component: ConnectionsDestinationValidatorComponent;
  let fixture: ComponentFixture<ConnectionsDestinationValidatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConnectionsDestinationValidatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnectionsDestinationValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
