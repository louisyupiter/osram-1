import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormpembeliComponent } from './formpembeli.component';

describe('FormpembeliComponent', () => {
  let component: FormpembeliComponent;
  let fixture: ComponentFixture<FormpembeliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormpembeliComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormpembeliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
