import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Signature2Component } from './signature2.component';

describe('Signature2Component', () => {
  let component: Signature2Component;
  let fixture: ComponentFixture<Signature2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Signature2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Signature2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
