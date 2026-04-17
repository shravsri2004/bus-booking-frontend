import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeatbookingComponent } from './seatbooking.component';

describe('SeatbookingComponent', () => {
  let component: SeatbookingComponent;
  let fixture: ComponentFixture<SeatbookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeatbookingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SeatbookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
