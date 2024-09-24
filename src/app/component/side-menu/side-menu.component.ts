import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-side-menu',
  standalone: true,
  imports: [MatIconModule, MatButtonModule],
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.css',
})
export class SideMenuComponent {
  readonly dialog = inject(MatDialog);

  openPersonDialog(): void {
    const dialogRef = this.dialog.open(PersonDialog);

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }

  openGroupDialog(): void {
    const dialogRef = this.dialog.open(GroupDialog);

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
}

@Component({
  selector: 'person-dialog',
  templateUrl: 'person-dialog.html',
  standalone: true,
  imports: [
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
  ],
})
export class PersonDialog {
  readonly dialogRef = inject(MatDialogRef<PersonDialog>);

  onNoClick(): void {
    this.dialogRef.close();
  }
}

@Component({
  selector: 'group-dialog',
  templateUrl: 'group-dialog.html',
  standalone: true,
  imports: [
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
  ],
})
export class GroupDialog {
  readonly dialogRef = inject(MatDialogRef<GroupDialog>);

  onNoClick(): void {
    this.dialogRef.close();
  }
}
