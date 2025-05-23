import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuCardapioComponent } from './menu-cardapio.component';

describe('MenuCardapioComponent', () => {
  let component: MenuCardapioComponent;
  let fixture: ComponentFixture<MenuCardapioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuCardapioComponent]
    });
    fixture = TestBed.createComponent(MenuCardapioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
