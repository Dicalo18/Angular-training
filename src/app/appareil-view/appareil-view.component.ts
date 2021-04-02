import { Component, OnInit } from '@angular/core';
import { AppareilService } from '../services/appareil.service';

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.scss']
})
export class AppareilViewComponent implements OnInit {

  connstructor(){}
  ngOnInit(): void {
   this.appareils = this.appareilService.appareils;
 }
 
 isAuth = false;
 
 appareils: any[] = [];
 constructor(private appareilService: AppareilService) {
   setTimeout(
     () => {
       this.isAuth = true;
     }, 4000
   );
   
   }
   
  
   onAllumer()
   {
     this.appareilService.SwitchOnAll();
   }
   onEteindre()
   {
     this.appareilService.SwitchOffAll();
   }

  
}
