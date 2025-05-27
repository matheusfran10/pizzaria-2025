import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablesAvailableComponent } from './tables-available.component';

describe('TablesAvailableComponent', () => {
  let component: TablesAvailableComponent;
  let fixture: ComponentFixture<TablesAvailableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TablesAvailableComponent]
    });
    fixture = TestBed.createComponent(TablesAvailableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
