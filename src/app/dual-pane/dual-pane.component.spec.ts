import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DualPaneComponent } from './dual-pane.component';

describe('DualPaneComponent', () => {
  let component: DualPaneComponent;
  let fixture: ComponentFixture<DualPaneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DualPaneComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DualPaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
