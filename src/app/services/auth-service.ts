import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggeado:boolean = false;

  login(){
    this.loggeado = true;
  }

  logout(){
    this.loggeado = false;
  }
}

import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class authService {
  router = inject(Router);
  token : null|string = localStorage.getItem("token");

  async login(loginData: Logindata{
    const res = await fetch("https://agenda-api.somee.com/api/authentication/authenticate",
      {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(loginData)
      }
    )
    if(res.ok){
      this.token = await res.text()
      localStorage.setItem("token",this.token);
      this.router.navigate(["/"])
    }
    console.log("Respuesta del back",res);
  }

  logout(){
    this.token = null;
    this.router

  }
}

// 
