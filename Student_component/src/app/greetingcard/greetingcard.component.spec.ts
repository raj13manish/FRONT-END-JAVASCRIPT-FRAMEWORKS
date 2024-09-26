import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreetingcardComponent } from './greetingcard.component';

describe('GreetingcardComponent', () => {
  let component: GreetingcardComponent;
  let fixture: ComponentFixture<GreetingcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GreetingcardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GreetingcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
