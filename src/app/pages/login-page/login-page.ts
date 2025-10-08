import { Component } from "@angular/core";
import { FormsModule, NgForm } from "@angular/forms";
import { RouterModule } from "@angular/router";


@Component({
  selector: 'app-login-page',
  imports: [RouterModule, FormsModule],
  templateUrl: './login-page.html',
  styleUrl: './login-page.scss'
})
export class LoginPage {
errorLogin: any;
login(_t7: NgForm) {
throw new Error('Method not implemented.');
}
isLoading: any;
  
}
