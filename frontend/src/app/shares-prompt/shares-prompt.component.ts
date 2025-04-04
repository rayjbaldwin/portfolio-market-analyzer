import {Component, Inject} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {MatDialogRef, MAT_DIALOG_DATA, MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-shares-prompt',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './shares-prompt.component.html',
  styleUrls: ['./shares-prompt.component.css']
})
export class SharesPromptComponent {
  shares: number | null = null;

  constructor(
    public dialogRef: MatDialogRef<SharesPromptComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { ticker: string }
  ) {
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  onConfirm(): void {
    if (this.shares && this.shares > 0) {
      this.dialogRef.close(this.shares);
    } else {
      alert('Please enter a valid number of shares.');
    }
  }
}
