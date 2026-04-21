import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewmybookingsComponent } from './viewmybookings.component';

describe('ViewmybookingsComponent', () => {
  let component: ViewmybookingsComponent;
  let fixture: ComponentFixture<ViewmybookingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewmybookingsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewmybookingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
