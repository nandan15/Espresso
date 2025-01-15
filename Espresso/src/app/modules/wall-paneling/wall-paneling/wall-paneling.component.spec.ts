import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WallPanelingComponent } from './wall-paneling.component';

describe('WallPanelingComponent', () => {
  let component: WallPanelingComponent;
  let fixture: ComponentFixture<WallPanelingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WallPanelingComponent]
    });
    fixture = TestBed.createComponent(WallPanelingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
