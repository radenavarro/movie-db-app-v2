import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmsViewComponent } from './films-view.component';

describe('FilmsViewComponent', () => {
  let component: FilmsViewComponent;
  let fixture: ComponentFixture<FilmsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilmsViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilmsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
