import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Contact } from '../../interfaces/TS contact';
import { ContactListItem } from '../../components/contact-list-item/contact-list-item';

@Component({
  selector: 'app-contact-page',
  imports: [RouterModule, ContactListItem],
  templateUrl: './contact-page.html',
  styleUrl: './contact-page.scss'
})
export class ContactPage {
  contacto: Contact[] = [
    {
      id: 'Contact Hazel',
      firstName: 'Hazel',
      lastName: 'Lavi',
      number: "3472465034",
      email: 'hlavi@mail.austral.edu.ar',
      Image: "",
      company: "",
      address: "",
      isFavourite: true,
      phone: '341-6981300',
    }, 

    { 
      id: 'Contact abi',
      firstName: 'abi',
      lastName: 'Calenta',
      number: "3413966248",
      email: 'ascalenta@mail.austral.edu.ar',
      Image: "",
      company: "",
      address: "",
      isFavourite: true,
      phone: '341-3966248',
    }
  ]
}