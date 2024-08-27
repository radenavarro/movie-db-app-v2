import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvshowViewComponent } from './tvshow-view.component';

describe('TvshowViewComponent', () => {
  let component: TvshowViewComponent;
  let fixture: ComponentFixture<TvshowViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TvshowViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TvshowViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
