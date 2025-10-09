import { Injectable } from "@angular/core";
import { NewUser } from "../interfaces/user";


@Injectable({
  providedIn: 'root'
})
  export class userService {

    //*Registar el usuario en el back */
    async register(registerData: NewUser) {
      return await fetch("http://agenda-api.somee.com/api/Users",
        {
          method: 'POST',
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(registerData)
        });
    }
  }
 