import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelsComponent } from './dels.component';

describe('DelsComponent', () => {
  let component: DelsComponent;
  let fixture: ComponentFixture<DelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DelsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
