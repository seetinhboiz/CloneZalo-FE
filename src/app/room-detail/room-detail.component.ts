import { Component, computed, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { InfoItemComponent } from '../info-item/info-item.component';
import { ChooseRoomService } from '../service/choose-room.service';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';

export interface RoomData {
  id: number;
  itemName: string;
  itemType: string;
  itemQuantity: number;
  itemBroken: number;
  itemUsing: number;
}

@Component({
  selector: 'app-room-detail',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    InfoItemComponent,
  ],
  templateUrl: './room-detail.component.html',
  styleUrl: './room-detail.component.css',
})
export class RoomDetailComponent {
  constructor(private chooseRoomService: ChooseRoomService) {
    this.dataSource = this.tableItem;
  }

  roomName = computed(() => this.chooseRoomService.roomName());

  displayedColumns: string[] = [
    'id',
    'name',
    'type',
    'quantity',
    'broken',
    'using',
  ];

  dataSource: RoomData[] = [];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  // Static data
  roomInfo = [
    {
      infoTitle: 'Tên Phòng',
      info: 'Phòng điều hành thi',
    },
    {
      infoTitle: 'Loại Phòng',
      info: 'Văn phòng',
    },
    {
      infoTitle: 'Số phòng',
      info: 'A001',
    },
    {
      infoTitle: 'Tầng',
      info: '1',
    },
  ];

  deviceInfo = [
    {
      infoTitle: 'Diện tích phòng (m2)',
      info: '120',
    },
    {
      infoTitle: 'Tổng số lượng',
      info: '82',
    },
    {
      infoTitle: 'Bị hư',
      info: '15',
    },
    {
      infoTitle: 'Đang dùng',
      info: '67',
    },
  ];

  tableItem: RoomData[] = [
    {
      id: 1,
      itemName: 'Máy chiếu ',
      itemType: 'Thiết bị',
      itemQuantity: 12,
      itemBroken: 2,
      itemUsing: 10,
    },
    {
      id: 2,
      itemName: 'Máy in',
      itemType: 'Thiết bị',
      itemQuantity: 5,
      itemBroken: 1,
      itemUsing: 4,
    },
    {
      id: 3,
      itemName: 'Laptop',
      itemType: 'Thiết bị',
      itemQuantity: 20,
      itemBroken: 3,
      itemUsing: 17,
    },
    {
      id: 4,
      itemName: 'Bàn phím',
      itemType: 'Phụ kiện',
      itemQuantity: 30,
      itemBroken: 5,
      itemUsing: 25,
    },
    {
      id: 5,
      itemName: 'Chuột máy tính',
      itemType: 'Phụ kiện',
      itemQuantity: 40,
      itemBroken: 6,
      itemUsing: 34,
    },
    {
      id: 6,
      itemName: 'Màn hình',
      itemType: 'Thiết bị',
      itemQuantity: 15,
      itemBroken: 2,
      itemUsing: 13,
    },
    {
      id: 7,
      itemName: 'Máy quét',
      itemType: 'Thiết bị',
      itemQuantity: 8,
      itemBroken: 1,
      itemUsing: 7,
    },
    {
      id: 8,
      itemName: 'Loa',
      itemType: 'Thiết bị',
      itemQuantity: 10,
      itemBroken: 0,
      itemUsing: 10,
    },
    {
      id: 9,
      itemName: 'Máy chiếu mini',
      itemType: 'Thiết bị',
      itemQuantity: 3,
      itemBroken: 0,
      itemUsing: 3,
    },
    {
      id: 10,
      itemName: 'Ổ cứng',
      itemType: 'Phụ kiện',
      itemQuantity: 50,
      itemBroken: 4,
      itemUsing: 46,
    },
  ];
}
