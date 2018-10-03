import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectionsSearchComponent } from './connections-search.component';

describe('ConnectionsSearchComponent', () => {
  let component: ConnectionsSearchComponent;
  let fixture: ComponentFixture<ConnectionsSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConnectionsSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnectionsSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
