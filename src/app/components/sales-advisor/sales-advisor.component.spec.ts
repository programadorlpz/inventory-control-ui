import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesAdvisorComponent } from './sales-advisor.component';

describe('SalesAdvisorComponent', () => {
  let component: SalesAdvisorComponent;
  let fixture: ComponentFixture<SalesAdvisorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SalesAdvisorComponent]
    });
    fixture = TestBed.createComponent(SalesAdvisorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
