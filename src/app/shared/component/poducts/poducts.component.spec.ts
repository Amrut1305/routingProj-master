import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoductsComponent } from './poducts.component';

describe('PoductsComponent', () => {
  let component: PoductsComponent;
  let fixture: ComponentFixture<PoductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PoductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
