import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {
getDetails(){
  return[{"id":1,"name":"Srikanth","weight":45},
    {"id":2,"name":"lava","weight":50},
    {"id":3,"name":"vamsi","weight":56}
  ];
}
  constructor() { }
}
