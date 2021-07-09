import { Injectable } from '@angular/core';
import{AuthConfig, NullValidationHandler, OAuthService} from 'angular-oauth2-oidc'
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private oathService:OAuthService) { }

  public login(): void{
    this.oathService.initImplicitFlowInternal();
  }
  public logout():void{
    this.oathService.logOut();
  }
 
}
