import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanDeactivate } from '@angular/router';

import { DonorComponent } from './donor/donor.component';

@Injectable({
  providedIn: 'root'
})
export class DeactiveGuard implements CanDeactivate<DonorComponent>{
   canDeactivate():boolean{
     sessionStorage.clear();
     return window.confirm('Are you sure to leave without donation')
    
   }
  
}
