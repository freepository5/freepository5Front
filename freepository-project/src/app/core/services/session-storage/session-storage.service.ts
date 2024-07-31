import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionStorageService {

  getItem(key:string){
    const value = sessionStorage.getItem(key);
    if(typeof value === 'object'&& value !==null)
    return JSON.parse(value);
    return value;
  }
  setItem(key:string,value:string){
    if(value)
      sessionStorage.setItem(key,value);
  }
  removeItem(key:string){
    sessionStorage.removeItem(key);
  }
  clearStorage(){
    sessionStorage.clear();
  }
}
