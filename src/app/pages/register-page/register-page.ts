import { Component, Inject, inject } from "../../../../node_modules/@angular/core/index";
import { FormsModule } from "../../../../node_modules/@angular/forms/index";
import { Router, RouterModule } from "../../../../node_modules/@angular/router/index";


@Component({
  selector: 'app-register-page',
  imports: [RouterModule, FormsModule],
  templateUrl: './register-page.html',
  styleUrl: './register-page.scss'
})
export class RegisterPage {
  errorRegister=false;
  userService = Inject(this.userService);
  isLoading = false;
  router = inject(Router);

  async register(form:any){
    console.log(form.value);
    this.errorRegister = false; //Elimino el mensaje de error
    // Hago validación extra sobre el formulario
    if(!form.value.email || 
      !form.value.password || 
      !form.value.password2 || 
      !form.value.firstName ||
      !form.value.lastName ||
      form.value.password !== form.value.password2){
      this.errorRegister = true;
      return
    }
    this.isLoading = true;
    const res = await this.userService.register(form.value);
    if(res.ok){
      this.router.navigate(["/login"])
    }
    this.isLoading = false;
    this.errorRegister = true;
  }
}