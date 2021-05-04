import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterfirstComponent } from './registerfirst.component';

describe('RegisterfirstComponent', () => {
  let component: RegisterfirstComponent;
  let fixture: ComponentFixture<RegisterfirstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterfirstComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterfirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
