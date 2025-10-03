import React from 'react'

export const PrincipalSection = () => {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'flex-end',
            paddingTop: '50vh',
            boxSizing: 'border-box'
        }}>
            <h1 style={{
                fontSize: '1.6rem',
                fontWeight: '300',
                textAlign: 'right',
                margin: 0
            }}>
                ¡Hola! <br />
                Soy <span style={{ fontWeight: '700' }}>desarrolladora web frontend</span>. <br /> Me apasiona transformar ideas en experiencias digitales funcionales y atractivas, dándoles vida a través del código.
                <br />Mi curiosidad poco a poco me lleva a explorar el mundo <span style={{ fontWeight: '700' }}>fullstack</span>, donde descubro el ciclo completo de la creación web.<br />
                Fuera de la programación, encuentro equilibrio en la música y la fotografía, hobbies que me enseñan a ver los detalles y la armonía, principios que aplico en cada proyecto.
            </h1>
        </div>
    )
}