
import { AuthService } from '../services/auth-service';
import { Component, inject } from '../../../node_modules/@angular/core/index';
import { RouterLink, RouterOutlet } from '../../../node_modules/@angular/router/index';


@Component({
    selector: 'app-logged-layout',
    imports: [RouterOutlet, RouterLink],
    templateUrl: './logged-Layout.html',
    styleUrl: './logged-layout.scss',

})
export class LoggedLayout{

    authService = inject(AuthService);
}