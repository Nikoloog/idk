import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-cursos-disponibles',
  templateUrl: './cursos-disponibles.page.html',
  styleUrls: ['./cursos-disponibles.page.scss'],
})
export class CursosDisponiblesPage implements OnInit {
  cursos: any[] = [];

  constructor(private firestore: AngularFirestore) { }

  ngOnInit() {
    this.firestore.collection('cursos').valueChanges({ idField: 'id' }).subscribe(cursos => {
      this.cursos = cursos;
    });
  }

  actualizarProgreso(nombreAsignatura: string, incremento: number) {
    const cursoRef = this.firestore.collection('cursos').doc(nombreAsignatura);
    cursoRef.get().subscribe(doc => {
      if (doc.exists) {
        const curso = doc.data() as any;
        const nuevoProgreso = Math.min((curso.progreso || 0) + incremento, 100);
        cursoRef.update({ progreso: nuevoProgreso });
      }
    });
  }
}