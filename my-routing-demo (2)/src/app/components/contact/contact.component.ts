import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  firstName:string;
  lastName:string;
  country:string;
  subject:string;

  canExit(){
    if(this.firstName || this.lastName || this.country||this.subject){
      return confirm("You have unsaved changes .Do you really want to exit")
    }
    else{
      return false;
    }
  }

}
