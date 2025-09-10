import { Component, input } from '@angular/core';
import { Contact } from '../../interfaces/contact';

@Component({
  selector: 'app-contact-detail-page',
  imports: [],
  templateUrl: './contact-list-item.html',
  styleUrl: './contact-list-item.scss'
})
export class ContactListItem {
  Contact = input.required<Contact>()

}
