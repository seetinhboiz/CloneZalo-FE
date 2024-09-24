import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageAreaInputBarComponent } from './message-area-input-bar.component';

describe('MessageAreaInputBarComponent', () => {
  let component: MessageAreaInputBarComponent;
  let fixture: ComponentFixture<MessageAreaInputBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MessageAreaInputBarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MessageAreaInputBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
