import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectionsSourceValidatorComponent } from './connections-source-validator.component';

describe('ConnectionsSourceValidatorComponent', () => {
  let component: ConnectionsSourceValidatorComponent;
  let fixture: ComponentFixture<ConnectionsSourceValidatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConnectionsSourceValidatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnectionsSourceValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
