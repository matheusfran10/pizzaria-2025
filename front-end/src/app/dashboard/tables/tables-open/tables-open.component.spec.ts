import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablesOpenComponent } from './tables-open.component';

describe('TablesOpenComponent', () => {
  let component: TablesOpenComponent;
  let fixture: ComponentFixture<TablesOpenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TablesOpenComponent]
    });
    fixture = TestBed.createComponent(TablesOpenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
