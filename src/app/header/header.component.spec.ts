import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderSingleComponent } from './header-center.component';

describe('HeaderSingleComponent', () => {
  let component: HeaderSingleComponent;
  let fixture: ComponentFixture<HeaderSingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderSingleComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
