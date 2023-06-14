import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubdelComponent } from './subdel.component';

describe('SubdelComponent', () => {
  let component: SubdelComponent;
  let fixture: ComponentFixture<SubdelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubdelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubdelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
