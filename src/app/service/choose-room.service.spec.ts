import { TestBed } from '@angular/core/testing';
import { ChooseRoomService } from './choose-room.service';


describe('ChooseRoomService', () => {
  let service: ChooseRoomService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChooseRoomService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
