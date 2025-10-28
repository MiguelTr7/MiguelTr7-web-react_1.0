// src/components/CardProducto.spec.js
import React from "react";
import { render, screen, fireEvent } from '@testing-library/react';
import CardProducto from "./CardProducto";

describe('Testing del componente CardProducto', () => {

    // 1. Preparamos datos falsos (mock) para las props
    const mockProps = {
        nombre: 'Producto de Prueba',
        precio: 9999,
        imagen: 'test.jpg'
    };

    // 2. Creamos una "función espía" (spy) de Jasmine para el evento onClick
    // Esto nos permite rastrear si la función fue llamada.
    const mockOnAgregar = jasmine.createSpy('onAgregarSpy');

    // 3. Renderizamos el componente con los mocks antes de cada test
    beforeEach(() => {
        render(<CardProducto 
            {...mockProps}
            onAgregar={mockOnAgregar} 
        />);
    });

    // Test 7 (Req 3: Props)
    it('Req 3: debe renderizar las props de nombre y precio', () => {
        expect(screen.getByText('Producto de Prueba')).toBeTruthy();
        expect(screen.getByText('$9999')).toBeTruthy();
    });

    // Test 8 (Req 3: Props - Label del botón)
    it('Req 3: debe renderizar la etiqueta (label) del botón "Agregar al carrito"', () => {
        const boton = screen.getByText('Agregar al carrito');
        expect(boton).toBeTruthy();
    });

    // Test 9 (Req 5: Eventos)
    it('Req 5: debe llamar a la función onAgregar (prop) al hacer clic en el botón', () => {
        const boton = screen.getByText('Agregar al carrito');
        // Simulamos el clic
        fireEvent.click(boton);
        // Verificamos que el "espía" de Jasmine haya sido llamado
        expect(mockOnAgregar).toHaveBeenCalled();
    });

    // Test 10 (Req 5: Eventos)
    it('Req 5: debe llamar a onAgregar con los argumentos correctos', () => {
        const boton = screen.getByText('Agregar al carrito');
        fireEvent.click(boton);
        
        // Verificamos que fue llamado con el objeto que define el componente
        const expectedPayload = { 
            nombre: mockProps.nombre, 
            precio: mockProps.precio 
        };
        expect(mockOnAgregar).toHaveBeenCalledWith(expectedPayload);
    });
});