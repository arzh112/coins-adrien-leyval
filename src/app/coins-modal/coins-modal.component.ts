import { Component, Input } from '@angular/core';
import { ICoin } from '../ICoin';

@Component({
  selector: 'app-coins-modal',
  templateUrl: './coins-modal.component.html',
  styleUrls: ['./coins-modal.component.css']
})
export class CoinsModalComponent {
  @Input() coinModal?: ICoin;
}
