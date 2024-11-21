import { Component, OnInit } from '@angular/core';
import { data, error } from 'jquery';
//librerias
import { CrudfirebaseService,Item } from 'src/app/servicio/crudfirebase.service';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.page.html',
  styleUrls: ['./crud.page.scss'],
})
export class CrudPage implements OnInit {

  constructor(private Crudserv: CrudfirebaseService) { }

  nuevo_item: Item = {id:'',nombre:'',apellido:''}
  listado_item: Item[]=[]

  ngOnInit() {
    this.listar()
  }

  grabar(){
    this.Crudserv.crearItem(this.nuevo_item).then(()=>{
      alert("se Grabo correctamente")
    }).catch((err)=>{
      console.log("Error")
    })
  }

  listar(){
    this.Crudserv.listarItems().subscribe(data=>{
      this.listado_item=data
    })
  }
}
