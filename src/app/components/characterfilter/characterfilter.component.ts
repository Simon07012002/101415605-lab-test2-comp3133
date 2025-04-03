import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-characterfilter',
  standalone: true,
  imports: [CommonModule, MatFormFieldModule, MatSelectModule],
  templateUrl: './characterfilter.component.html',
  styleUrls: ['./characterfilter.component.css']
})
export class CharacterfilterComponent {
  @Output() houseSelected = new EventEmitter<string>();

  houses: string[] = ['All', 'Gryffindor', 'Slytherin', 'Hufflepuff', 'Ravenclaw'];

  onHouseChange(selected: string): void {
    this.houseSelected.emit(selected);
  }
}
