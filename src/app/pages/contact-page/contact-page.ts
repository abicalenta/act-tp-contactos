import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ContactListItem } from '../../components/contact-list-item/contact-list-item';
import { AuthService } from '../../services/auth-service';
import { FormsModule } from '@angular/forms';
import { ContactsService } from '../../services/contacts-service';
import { NewContact } from '../../interfaces/contact';

@Component({
  selector: 'app-contact-page',
  imports: [RouterModule, FormsModule, ContactListItem],
  templateUrl: './contact-page.html',
  styleUrl: './contact-page.scss'
})
export class ContactPage {

  authService = inject(AuthService);
  contactsService = inject(ContactsService);

  createContact(form: any) {
    const nuevoContacto: NewContact = {
      firstName: form.firstName,
      lastName: form.lastName,
      address: form.address,
      email: form.email,
      image: form.image,
      number: form.number,
      company: form.company,
      isfavorite: form.isfavorite

    }


    this.contactsService.createContact(nuevoContacto)

  }

}