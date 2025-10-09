import { Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AuthService } from '../services/auth-service';
import Swal from 'sweetalert2'


@Component({
    selector: 'app-logged-layout',
    imports: [RouterOutlet, RouterLink],
    templateUrl: './logged-Layout.html',
    styleUrl: './logged-layout.scss',

})
export class LoggedLayout {

    authService = inject(AuthService);

    openLogotModal() {
        Swal.fire({
            title: "Do you want to save the changes?",
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: "Save",
            denyButtonText: `Don't save`
        }).then((result: { isDenied: any; }) => {
            if (result.isDenied) {
                this.authService.logout()
            }
        })
    }
}
