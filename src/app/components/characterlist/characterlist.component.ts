import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { HarrypotterService } from '../../services/harrypotter.service';


@Component({
  selector: 'app-characterlist',
  standalone: true,
  imports: [CommonModule, HttpClientModule, MatCardModule, MatButtonModule],
  templateUrl: './characterlist.component.html',
  styleUrls: ['./characterlist.component.css']
})
export class CharacterlistComponent implements OnInit {
  characters: any[] = [];

  constructor(private hpService: HarrypotterService, private router: Router) {}

  ngOnInit(): void {
    this.hpService.getCharacters().subscribe(data => {
      this.characters = data;
    });
  }

  goToDetails(character: any): void {
    this.router.navigate(['/character', character.id], {
      state: { character }
    });
  }
  
}
