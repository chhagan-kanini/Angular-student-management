import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubaddComponent } from './subadd.component';

describe('SubaddComponent', () => {
  let component: SubaddComponent;
  let fixture: ComponentFixture<SubaddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubaddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
