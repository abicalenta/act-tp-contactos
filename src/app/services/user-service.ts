import { importProvidersFrom, Injectable } from "@angular/core";
import { newUser } from "../interfaces/user";

@Injectable({
    providedIn: 'root'
})
export class userService {
    register(registerData:newUser){
        const res = await fetch("http://agenda-api.somee.com/api/Users",
        {
            method:'POST',
            Headers: {
                "contact-type": "application/json"
            },
            body: JSON.stringify(registerData)
        });
        
    }
    
}