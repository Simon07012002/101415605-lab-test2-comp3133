import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { HarrypotterService } from '../../services/harrypotter.service';

@Component({
  selector: 'app-characterdetails',
  standalone: true,
  imports: [CommonModule, HttpClientModule, MatCardModule],
  templateUrl: './characterdetails.component.html',
  styleUrls: ['./characterdetails.component.css']
})
export class CharacterdetailsComponent implements OnInit {
  character: any;

  constructor(private route: ActivatedRoute, private hpService: HarrypotterService) {}

  ngOnInit(): void {
    const characterFromState = history.state.character;
    if (characterFromState) {
      this.character = characterFromState;
    } else {
      // fallback: maybe fetch from API or show error
      console.error('Character data not found in state.');
    }
  }
  
}
