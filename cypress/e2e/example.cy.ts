describe('App Tests', () => {
  
    // Prueba para el splash screen
    it('Should display the splash screen', () => {
      cy.visit('/');
      cy.contains('RegistrAPP'); // Verifica que el texto del splash screen esté presente
      cy.wait(4000); // Espera 4 segundos para que el splash screen desaparezca
      cy.url().should('include', '/home'); // Verifica que la URL cambie a /home
    });
  
    it('Should allow a user to register', () => {
        cy.visit('/registro'); // Reemplaza con la ruta de tu página de registro
        cy.get('input[name="nombre"]').type('nicolas');
        cy.get('input[name="apellido"]').type('fernandez');
        cy.get('input[name="userName"]').type('johndoe@duocuc.cl');
        cy.get('input[name="password"]').type('password123');
        cy.get('input[name="telefono"]').type('1234567890');
        cy.get('ion-button[type="submit"]').click(); // Ajusta el selector del botón de submit
        // cy.contains('Inicio de sesión exitoso', { timeout: 10000 }); // Verifica el mensaje de registro exitoso con un tiempo de espera
        cy.url().should('include', '/login'); // Verifica que la URL cambie a /login
      });
    
    
      // Prueba para el login
      it('Should allow a user to login', () => {
        cy.visit('/login'); // Reemplaza con la ruta de tu página de login
        cy.get('input[name="userName"]').type('cristina@duocuc.cl');
        cy.get('input[name="password"]').type('cristina');
        cy.get('ion-button[type="submit"]').click(); // Ajusta el selector del botón de submit
        // cy.contains('Inicio de sesión exitoso', { timeout: 10000 }); // Verifica el mensaje de inicio de sesión exitoso con un tiempo de espera
        cy.url().should('include', '/intro'); // Verifica que la URL cambie a /intro
      });
    
      // Prueba para mostrar el QR
      it('Should display the QR code', () => {
        cy.visit('/mostrarqr'); // Reemplaza con la ruta de tu página de mostrar QR
        cy.get('#qr-code').should('be.visible'); // Verifica que el elemento QR esté visible
      });
    
      // Prueba para la asistencia
      it('Should display the attendance list', () => {
        cy.visit('/asistencia'); // Reemplaza con la ruta de tu página de asistencia
        cy.contains('Programacion Movil'); // Verifica que el título de la clase esté presente
        cy.get('ion-item.alumno-item').should('have.length.greaterThan', 0); // Verifica que haya al menos un alumno en la lista
      });
    
    });