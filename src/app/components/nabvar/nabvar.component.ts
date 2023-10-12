import { Component } from '@angular/core';

// Import the module from the SDK
import { AuthModule, AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-nabvar',
  templateUrl: './nabvar.component.html'
})
export class NabvarComponent {
  constructor(public auth: AuthService) {}
  login(){
    this.auth.loginWithRedirect();
  }

}
