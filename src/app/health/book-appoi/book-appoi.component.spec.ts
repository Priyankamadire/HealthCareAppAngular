import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookAppoiComponent } from './book-appoi.component';

describe('BookAppoiComponent', () => {
  let component: BookAppoiComponent;
  let fixture: ComponentFixture<BookAppoiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookAppoiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BookAppoiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
