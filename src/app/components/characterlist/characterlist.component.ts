import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CharacterfilterComponent } from '../characterfilter/characterfilter.component';

import { HarrypotterService } from '../../services/harrypotter.service';

@Component({
  selector: 'app-characterlist',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    CharacterfilterComponent
  ],
  templateUrl: './characterlist.component.html',
  styleUrls: ['./characterlist.component.css']
})
export class CharacterlistComponent implements OnInit {
  characters: any[] = [];
  searchText: string = '';
  selectedHouse: string = 'All';

  constructor(private hpService: HarrypotterService, private router: Router) {}

  ngOnInit(): void {
    this.hpService.getCharacters().subscribe(data => {
      this.characters = data;
    });
  }

  get filteredCharacters() {
    return this.characters.filter(char =>
      (this.selectedHouse === 'All' || char.house === this.selectedHouse) &&
      char.name.toLowerCase().startsWith(this.searchText.toLowerCase())
    );
  }

  onHouseSelected(house: string) {
    this.selectedHouse = house;
  }

  goToDetails(character: any): void {
    this.router.navigate(['/character', character.id], {
      state: { character }
    });
  }
}
