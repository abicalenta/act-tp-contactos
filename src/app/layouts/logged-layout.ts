import { Component, inject } from '@angular/core';
import { RouterLink} from '@angular/router';

@Component({
    selector: 'app-logged-layout',
    imports: [RouterLink],
    templateUrl: './logged-Layout.html',
    styleUrl: './logged-layout.scss'

})
export class LoggedLayout{

    authService = inject(this.authService);
}