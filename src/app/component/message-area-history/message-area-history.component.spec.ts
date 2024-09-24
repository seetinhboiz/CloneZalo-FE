import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageAreaHistoryComponent } from './message-area-history.component';

describe('MessageAreaHistoryComponent', () => {
  let component: MessageAreaHistoryComponent;
  let fixture: ComponentFixture<MessageAreaHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MessageAreaHistoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MessageAreaHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
