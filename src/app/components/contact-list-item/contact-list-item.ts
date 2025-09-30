import { Component, inject, input } from '@angular/core';
import { Contact } from '../../interfaces/contact';
import { ContactsService } from '../../services/contacts-service';

@Component({
  selector: 'app-contact-detail-page',
  imports: [],
  templateUrl: './contact-list-item.html',
  styleUrl: './contact-list-item.scss'
})
export class ContactListItem {
  Contact = input.required<Contact>()
  aleatorio = Math.random()
  contactsService = inject(ContactsService)

}
