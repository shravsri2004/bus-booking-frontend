import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-bookpage',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './bookpage.component.html',
  styleUrl: './bookpage.component.css'
})
export class BookpageComponent {

}
