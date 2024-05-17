/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PinguinosListComponent } from './pinguinos-list.component';

describe('PinguinosListComponent', () => {
  let component: PinguinosListComponent;
  let fixture: ComponentFixture<PinguinosListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PinguinosListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PinguinosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
