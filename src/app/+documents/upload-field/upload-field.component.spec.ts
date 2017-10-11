import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadFieldComponent } from './upload-field.component';

describe('UploadFieldComponent', () => {
  let component: UploadFieldComponent;
  let fixture: ComponentFixture<UploadFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
