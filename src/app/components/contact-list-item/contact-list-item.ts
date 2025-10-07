import { Component } from '../../../../node_modules/@angular/compiler/index';
import { inject, input } from '../../../../node_modules/@angular/core/index';
import { Contact } from '../../interfaces/contact';
import { ContactsService } from '../../services/contacts-service';
import { RouterModule } from '../../../../node_modules/@angular/router/index';

@Component({
  selector: 'app-contact-detail-page',
  imports: [RouterModule],
  templateUrl: './contact-list-item.html',
  styleUrl: './contact-list-item.scss'
})
export class ContactListItem {
  Contact = input.required<Contact>()
  aleatorio = Math.random()
  contactsService = inject(ContactsService)

}
