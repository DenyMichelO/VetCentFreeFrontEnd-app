import { Component } from '@angular/core';
import{AuthConfig, NullValidationHandler, OAuthService} from 'angular-oauth2-oidc'
import { MessageService } from './service/message.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'free';
  username : string="";
  isLogged : boolean=false;
  isAdmin: boolean=false;
  codigo : string="";
  constructor(private oathService:OAuthService,private meessageService:MessageService){
    this.configure();
  }
  authConfig: AuthConfig = {
    issuer: 'http://localhost:8180/auth/realms/free',
    redirectUri: window.location.origin,
    clientId: 'free-frontend',
    responseType: 'code',
    scope: 'openid profile email offline_access',
    showDebugInformation: true,
  };
  configure():void{
    this.oathService.configure(this.authConfig);
    this.oathService.tokenValidationHandler=new NullValidationHandler();
    this.oathService.setupAutomaticSilentRefresh();
    this.oathService.loadDiscoveryDocument().then(()=>this.oathService.tryLogin())
    .then(()=>{
      if(this.oathService.getIdentityClaims()){
        this.isLogged=this.getisLogged();
        this.isAdmin=this.getisAdmin();
        this.username=this.getName();
        this.codigo=this.getCodigo();
        this.meessageService.sendMessage(this.username);
       // this.username=this.oathService.getIdentityClaims()['preferred_username'];
        console.log(this.codigo);
      }
    })
    }
    public getisAdmin():boolean{
  
     const token=this.oathService.getAccessToken();
     const payload=token.split('.')[1];
     const payloadDecodeJason= atob(payload);
     const payloadDecoded=JSON.parse(payloadDecodeJason);
     //console.log(payloadDecoded.given_name);
    //console.log(payloadDecoded.realm_access.roles.indexOf('Realm-Amin'));
     return payloadDecoded.realm_access.roles.indexOf('realm-admin')!=-1;
    
    }
    public getName():string{
      const token=this.oathService.getAccessToken(); 
     const payload=token.split('.')[1];
     const payloadDecodeJason= atob(payload);
     const payloadDecoded=JSON.parse(payloadDecodeJason);
      return payloadDecoded.given_name +" "+  payloadDecoded.family_name
    }
    public getCodigo():string{
      const token=this.oathService.getAccessToken(); 
     const payload=token.split('.')[1];
     const payloadDecodeJason= atob(payload);
     const payloadDecoded=JSON.parse(payloadDecodeJason);
      return payloadDecoded.sub
    }

    public getisLogged():boolean{
      return(this.oathService.hasValidIdToken() && this.oathService.hasValidAccessToken());
    }
    login(): void{
      this.oathService.initImplicitFlowInternal();
    }
    logout():void{
      this.oathService.logOut();
    }
}
