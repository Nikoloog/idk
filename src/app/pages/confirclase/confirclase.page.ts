import { Component } from '@angular/core';
import { jsPDF } from 'jspdf';

@Component({
  selector: 'app-confirclase',
  templateUrl: './confirclase.page.html',
  styleUrls: ['./confirclase.page.scss'],
})
export class ConfirclasePage {

  constructor() {}

  
  downloadPDF() {
    const doc = new jsPDF();


    doc.setFontSize(20);
    doc.text('Confirmación de Clase', 20, 20);


    doc.setFontSize(12);
    doc.text('Estimado(a) [Nombre],', 20, 30);


    doc.setFontSize(16);
    doc.text('Le confirmamos que su Clase del día [fecha]', 20, 40);
    doc.text('ha sido registrada correctamente.', 20, 50);
    doc.text('Para cualquier duda, por favor, contacte al área correspondiente.', 20, 60);


    doc.save('confirmacion_clase.pdf');
  }
}

