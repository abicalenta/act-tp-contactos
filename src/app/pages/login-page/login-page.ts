
import { Component } from '../../../../node_modules/@angular/core/index';
import { FormsModule, NgForm } from '../../../../node_modules/@angular/forms/index';
import { RouterModule } from '../../../../node_modules/@angular/router/index';

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
