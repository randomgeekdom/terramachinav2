import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleCustomMovesComponent } from './sample-custom-moves.component';

describe('SampleCustomMovesComponent', () => {
  let component: SampleCustomMovesComponent;
  let fixture: ComponentFixture<SampleCustomMovesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SampleCustomMovesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleCustomMovesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
