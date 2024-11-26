import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private afAuth: AngularFireAuth, private firestore: AngularFirestore) {}

  loginDocente(username: string, password: string,): boolean {
    const users: Record<string, string> = {
      "freddycampos@profesor.duoc.cl": "docente1",
      "jaimelopez@profesor.duoc.cl": "docente2"
    };
  
    return users[username] === password;
  }

  async register(email: string, password: string, nombre: string, apellido: string, telefono: string) {
    const userCredential = await this.afAuth.createUserWithEmailAndPassword(email, password);
    const userId = userCredential.user?.uid;
    if (userId) {
      await this.firestore.collection('Alumnos').doc(userId).set({
        nombre: nombre,
        apellido: apellido,
        correo: email,
        userName: userId, // Asumimos que el nombre de usuario es único basado en el ID de Firebase
        telefono: telefono,
        asistencia: false
      });
    }
  }

  async marcarAsistencia(userId: string) {
    await this.firestore.collection('Alumnos').doc(userId).update({
      asistencia: true
    });
  }

  async reiniciarAsistencia() {
    const alumnosRef = this.firestore.collection('Alumnos');
    const snapshot = await alumnosRef.get().toPromise();
  
    if (snapshot && !snapshot.empty) {
      snapshot.forEach(doc => {
        doc.ref.update({ asistencia: false });
      });
    } else {
      console.warn("No se encontraron documentos en la colección 'Alumnos' o el snapshot es nulo.");
    }
  }

  async getUserName(): Promise<string | null> {
    const currentUser = await this.afAuth.currentUser;
    return currentUser ? currentUser.email : null;
  }

  async getUserEmail(): Promise<string | null> {
    const currentUser = await this.afAuth.currentUser;
    return currentUser ? currentUser.email : null;
  }

  async login(email: string, password: string,): Promise<void> {
    await this.afAuth.signInWithEmailAndPassword(email, password);
  }

  private async getNextId(): Promise<number> {
    const alumnosRef = this.firestore.collection('Alumnos');
    const snapshot = await alumnosRef.ref.orderBy('id', 'desc').limit(1).get();
    const lastId = (snapshot.docs[0]?.data() as { id: number })?.id || 0;
    return lastId + 1;
  }
}