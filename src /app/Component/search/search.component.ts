import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
export class SearchComponent {

  val:string = "";

  changeSearchValue(eventData: Event) {
    console.log((<HTMLInputElement>eventData.target).value);
    this.val = (<HTMLInputElement>eventData.target).value
  }
}
