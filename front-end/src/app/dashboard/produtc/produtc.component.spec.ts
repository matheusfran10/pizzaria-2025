import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutcComponent } from './produtc.component';

describe('ProdutcComponent', () => {
  let component: ProdutcComponent;
  let fixture: ComponentFixture<ProdutcComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProdutcComponent]
    });
    fixture = TestBed.createComponent(ProdutcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
