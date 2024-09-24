import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageCardContentComponent } from './message-card-content.component';

describe('MessageCardContentComponent', () => {
  let component: MessageCardContentComponent;
  let fixture: ComponentFixture<MessageCardContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MessageCardContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MessageCardContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
