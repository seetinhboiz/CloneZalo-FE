import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageThreadMainMessageComponent } from './message-thread-main-message.component';

describe('MessageThreadMainMessageComponent', () => {
  let component: MessageThreadMainMessageComponent;
  let fixture: ComponentFixture<MessageThreadMainMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MessageThreadMainMessageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MessageThreadMainMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
