import { Injectable } from '@angular/core';
//libreria
import { Observable } from 'rxjs';
import {AngularFirestore} from '@angular/fire/compat/firestore'

@Injectable({
  providedIn: 'root'
})
export class CrudfirebaseService {

  constructor(private firestore:AngularFirestore) { }

  crearItem(item : Item){
    return this.firestore.collection('item').add(item)
  }
  listarItems(): Observable<Item[]>{
    return this.firestore.collection<Item>('item').valueChanges({idField:'id'})
    
  }

}

//crear un modelo de la coleccion
export interface Item{
  id?:string;
  nombre:string;
  apellido:string;
}
