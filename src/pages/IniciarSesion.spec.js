// src/pages/IniciarSesion.spec.js (CORREGIDO DE NUEVO)
import React from 'react';
// Importamos 'findByText' implícitamente a través de 'screen'
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import IniciarSesion from './IniciarSesion';

describe('Testing del componente IniciarSesion', () => {

    beforeEach(() => {
        localStorage.clear();
        render(
            <MemoryRouter>
                <IniciarSesion />
            </MemoryRouter>
        );
    });

    // Test 1 (Req 2: Renderizado Condicional)
    it('Req 2: no debe mostrar el mensaje de error al renderizar inicialmente', () => {
        const errorMessage = screen.queryByText(/Correo o contraseña incorrectos/i);
        expect(errorMessage).toBeFalsy();
    });

    // Test 2 (Req 4: Estado)
    it('Req 4: debe actualizar el estado (email) cuando el usuario escribe', () => {
        const inputEmail = screen.getByLabelText(/Correo electrónico/i);
        fireEvent.change(inputEmail, { target: { value: 'usuario@test.cl' } });
        expect(inputEmail.value).toBe('usuario@test.cl');
    });

    // Test 3 (Req 4: Estado)
    it('Req 4: debe actualizar el estado (password) cuando el usuario escribe', () => {
        const inputPass = screen.getByLabelText(/Contraseña/i);
        fireEvent.change(inputPass, { target: { value: 'pass123' } });
        expect(inputPass.value).toBe('pass123');
    });

    // Test 4 (Req 2 y 5: Evento y Renderizado Condicional) - ¡¡CORREGIDO!!
    // La 'async' aquí es fundamental
    it('Req 2/5: debe mostrar error (cambio de estado) al fallar el login (evento submit)', async () => { 
        // 1. Obtenemos los elementos
        const inputEmail = screen.getByLabelText(/Correo electrónico/i);
        const inputPass = screen.getByLabelText(/Contraseña/i);
        const boton = screen.getByText('Ingresar');

        // 2. Llenamos el formulario
        fireEvent.change(inputEmail, { target: { value: 'mal@usuario.cl' } });
        fireEvent.change(inputPass, { target: { value: 'mala_pass' } });

        // 3. ¡¡CAMBIO 1!! Usamos 'click' en el botón (más real que 'submit')
        fireEvent.click(boton);

        // 4. ¡¡CAMBIO 2!! Usamos 'findByText'. 
        // 'findBy...' es asíncrono y ya incluye la espera (waitFor).
        // Esperará hasta que el texto aparezca o dará error si pasa el tiempo.
        const errorMessage = await screen.findByText(/Correo o contraseña incorrectos/i);
        
        // 5. Verificamos que existe
        expect(errorMessage).toBeTruthy();
    });

});