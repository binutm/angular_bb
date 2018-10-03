import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatedDatasourcesComponent } from './created-datasources.component';

describe('CreatedDatasourcesComponent', () => {
  let component: CreatedDatasourcesComponent;
  let fixture: ComponentFixture<CreatedDatasourcesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatedDatasourcesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatedDatasourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
