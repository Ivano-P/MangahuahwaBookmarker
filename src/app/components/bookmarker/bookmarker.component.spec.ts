import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookmarkerComponent } from './bookmarker.component';

describe('BookmarkerComponent', () => {
  let component: BookmarkerComponent;
  let fixture: ComponentFixture<BookmarkerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookmarkerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BookmarkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
