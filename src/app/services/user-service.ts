
import { Injectable } from "@angular/core";



@Injectable({
  providedIn: 'root'
})
  export class userService {

    //*Registar el usuario en el back */
    async register(registerData: any) {
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
