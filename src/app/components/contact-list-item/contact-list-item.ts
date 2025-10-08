import { Component, input, inject } from "@angular/core"
import { RouterModule } from "@angular/router"
import { Contact } from "../../interfaces/contact"
import { ContactsService } from "../../services/contacts-service"


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
