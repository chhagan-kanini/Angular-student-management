import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubdComponent } from './subd.component';

describe('SubdComponent', () => {
  let component: SubdComponent;
  let fixture: ComponentFixture<SubdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
