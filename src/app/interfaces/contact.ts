export interface Contact {
    isFavorite: any;
    id: number,
    firstName: string,
    lastName: string,
    address: string,
    email: string,
    Image: string,
    number: string,
    company: string,
    isFavourite: boolean,
    
}

export type NewContact = Omit<Contact,"id">;