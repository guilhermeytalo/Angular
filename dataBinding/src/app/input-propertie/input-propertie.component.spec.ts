import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputPropertieComponent } from './input-propertie.component';

describe('InputPropertieComponent', () => {
  let component: InputPropertieComponent;
  let fixture: ComponentFixture<InputPropertieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputPropertieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputPropertieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
