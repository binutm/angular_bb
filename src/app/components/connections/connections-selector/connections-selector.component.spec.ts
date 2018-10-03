import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectionsSelectorComponent } from './connections-selector.component';

describe('ConnectionsSelectorComponent', () => {
  let component: ConnectionsSelectorComponent;
  let fixture: ComponentFixture<ConnectionsSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConnectionsSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnectionsSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
