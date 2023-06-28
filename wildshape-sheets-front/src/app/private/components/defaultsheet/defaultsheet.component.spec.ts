import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultsheetComponent } from './defaultsheet.component';

describe('DefaultsheetComponent', () => {
  let component: DefaultsheetComponent;
  let fixture: ComponentFixture<DefaultsheetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DefaultsheetComponent]
    });
    fixture = TestBed.createComponent(DefaultsheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
