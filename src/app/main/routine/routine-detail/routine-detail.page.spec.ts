import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutineDetailPage } from './routine-detail.page';

describe('RoutineDetailPage', () => {
  let component: RoutineDetailPage;
  let fixture: ComponentFixture<RoutineDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoutineDetailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutineDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
