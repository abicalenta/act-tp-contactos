import { Component, inject, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ContactListItem } from '../../components/contact-list-item/contact-list-item';
import { Contact, NewContact } from '../../interfaces/contact';
import { AuthService } from '../../services/auth-service';
import { FormsModule } from '@angular/forms';
import { ContactsService } from '../../services/contacts-service';


@Component({
  selector: 'app-contact-page',
  imports: [RouterModule, FormsModule, ContactListItem],
  templateUrl: './contact-page.html',
  styleUrl: './contact-page.scss'
})
export class ContactPage implements OnInit {
  ngOnInit(): void {
    this.contactsService.getContacts();
  }

  authService = inject(AuthService);
  contactsService = inject(ContactsService);

  createContact(form: any) {
    const nuevoContacto: NewContact = {
      firstName: form.firstName,
      lastName: form.lastName,
      address: form.address,
      email: form.email,
      Image: form.image,
      number: form.number,
      company: form.company,
      isFavourite: form.isfavorite

    }


    this.contactsService.createContact(nuevoContacto)

  }

}