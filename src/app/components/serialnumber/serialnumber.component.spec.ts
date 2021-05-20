import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SerialnumberComponent } from './serialnumber.component';

describe('HomeComponent', () => {
  let component: SerialnumberComponent;
  let fixture: ComponentFixture<SerialnumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SerialnumberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SerialnumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
