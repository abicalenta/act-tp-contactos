import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, NgForm } from "@angular/forms";

@Component({
  selector: 'app-login-page',
  imports: [RouterModule, FormsModule],
  templateUrl: './login-page.html',
  styleUrl: './login-page.scss'
})
export class LoginPage {
login(_t7: NgForm) {
throw new Error('Method not implemented.');
}
isLoading: any;
  
}
