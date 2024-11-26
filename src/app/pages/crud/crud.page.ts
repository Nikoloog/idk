import { Component, OnInit } from '@angular/core';
import { CrudfirebaseService, Item } from 'src/app/servicio/crudfirebase.service';
import * as XLSX from 'xlsx';

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

  descargarExcel() {
    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.listado_item.length ? this.listado_item : [{ mensaje: 'Ningún estudiante con problemas de asistencia' }]);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Reprobados');
    XLSX.writeFile(wb, 'reprobados.xlsx');
  }
}