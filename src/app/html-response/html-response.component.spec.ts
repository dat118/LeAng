import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlResponseComponent } from './html-response.component';

describe('HtmlResponseComponent', () => {
  let component: HtmlResponseComponent;
  let fixture: ComponentFixture<HtmlResponseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HtmlResponseComponent]
    });
    fixture = TestBed.createComponent(HtmlResponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
