import React from 'react'

export const PrincipalContainer = ({ children }: { children: React.ReactNode }) => {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
            width: '100%'
        }}>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '95%',
                width: '97%',
                color: 'white',
                border: 'solid white 3px'
            }}>
                {children}
            </div>
        </div>
    )
}
