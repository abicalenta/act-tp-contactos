
import { Injectable } from '../../../node_modules/@angular/core/index';
import { Contact, NewContact } from '../interfaces/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  [x: string]: any;
  aleatorio = Math.random()

  contacts: Contact[] = [
    {
      id: "1",
      firstName: 'Gonzalo',
      lastName: "Bechara",
      number: "3476123123",
      Image: "",
      company: "",
      address: "",
      email: 'gbechara@austral.edu.ar',
      isFavourite: true,
    },
    {
      id: "2",
      firstName: 'Lucho',
      lastName: "Barletta",
      number: "3471234234",
      Image: "",
      company: "",
      address: "",
      email: 'lbarletta@austral.edu.ar',
      isFavourite: false
    },
  ]
  /** Obtiene los contactos del backend */
  async getContacts() {
    const res = await fetch("https://agenda-api.somee.com/api/contacts",
      {
        headers:{
          Authorization: "Bearer "+this['authService'].token,
        }
      }
    )
    const resJson: Contact[] = await res.json()
    this.contacts = resJson;
  }

  /** Devuelve un contato en particular segun su ID */
  getContactById() {

  }

  /** Crea un contacto */
  createContact(nuevoContacto:NewContact) {
    const contacto:Contact = {
      ...nuevoContacto,
      id: Math.random().toString()
    }
    this.contacts.push(contacto);
  }

  editContact() { }

  /** Borra un contacto */
  deleteContact(id:string) {
    this.contacts = this.contacts.filter(contact => contact.id !== id)
  }

  setFavourite() { }
}