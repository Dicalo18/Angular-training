export class AppareilService{
    appareils = [
        {
          name: 'Machine à laver',
          status: 'éteint'
        },
        {
          name: 'Frigo',
          status: 'éteint'
        },
        {
          name: 'Ordinateur',
          status: 'allumé'
        }
      ];
      SwitchOnAll()
      {
          for(let appareil of this.appareils)
          {
              appareil.status= 'allumé';
          }

     
      }

      SwitchOffAll(){    
        for(let appareil of this.appareils){
          appareil.status='éteint';
        }
      }
      SwitchOnOne(index:number){
          this.appareils[index].status='allumé';
      }
      SwitchOffOne(index:number){
        this.appareils[index].status='éteint';
      }


      

}