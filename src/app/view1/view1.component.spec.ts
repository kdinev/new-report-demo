import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { IgxComboModule, IgxInputGroupModule, IgxInputGroupModule, IgxInputGroupModule, IgxInputGroupModule, IgxButtonModule, IgxRippleModule, IgxButtonModule, IgxRippleModule, IgxButtonModule, IgxRippleModule, IgxGridModule, IgxCategoryChartModule } from '@infragistics/igniteui-angular';
import { View1Component } from './view1.component';

describe('View1Component', () => {
  let component: View1Component;
  let fixture: ComponentFixture<View1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ View1Component ],
      imports: [ NoopAnimationsModule, FormsModule, IgxComboModule, IgxInputGroupModule, IgxInputGroupModule, IgxInputGroupModule, IgxInputGroupModule, IgxButtonModule, IgxRippleModule, IgxButtonModule, IgxRippleModule, IgxButtonModule, IgxRippleModule, IgxGridModule, IgxCategoryChartModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(View1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
