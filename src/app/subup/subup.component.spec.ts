import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubupComponent } from './subup.component';

describe('SubupComponent', () => {
  let component: SubupComponent;
  let fixture: ComponentFixture<SubupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
