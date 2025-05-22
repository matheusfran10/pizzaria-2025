import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablesCloseComponent } from './tables-close.component';

describe('TablesCloseComponent', () => {
  let component: TablesCloseComponent;
  let fixture: ComponentFixture<TablesCloseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TablesCloseComponent]
    });
    fixture = TestBed.createComponent(TablesCloseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
