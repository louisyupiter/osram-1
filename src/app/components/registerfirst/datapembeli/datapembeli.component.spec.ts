import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatapembeliComponent } from './datapembeli.component';

describe('DatapembeliComponent', () => {
  let component: DatapembeliComponent;
  let fixture: ComponentFixture<DatapembeliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatapembeliComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatapembeliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
