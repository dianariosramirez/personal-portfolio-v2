'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function VantaFogBackground() {
    const vantaRef = useRef<HTMLDivElement | null>(null);
    const vantaEffect = useRef<any>(null);

    useEffect(() => {
        const loadScript = (src: string) =>
            new Promise<void>((resolve) => {
                const script = document.createElement('script');
                script.src = src;
                script.async = true;
                script.onload = () => resolve();
                document.body.appendChild(script);
            });

        let effect: any;

        const initVanta = async () => {
            await loadScript('https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js');
            await loadScript('https://cdn.jsdelivr.net/npm/vanta/dist/vanta.fog.min.js');

            // @ts-ignore
            effect = VANTA.FOG({
                el: vantaRef.current,
                THREE,
                mouseControls: true,
                touchControls: true,
                gyroControls: false,
                minHeight: 200.0,
                minWidth: 200.0,
                highlightColor: 0x7eb3c8,
                midtoneColor: 0x6db3de,
                lowlightColor: 0xffffff,
                baseColor: 0x40668e,
                blurFactor: 0.67,
                speed: 2.2,
                zoom: 1.2,
            });

            vantaEffect.current = effect;
        };

        initVanta();

        const handleResize = () => {
            if (effect) effect.resize();
        };

        window.addEventListener('resize', handleResize);
        document.documentElement.style.height = '100%';
        document.documentElement.style.overflow = 'hidden';
        document.body.style.height = '100%';
        document.body.style.overflow = 'hidden';
        document.body.style.margin = '0';

        return () => {
            window.removeEventListener('resize', handleResize);
            if (effect) effect.destroy();

            document.documentElement.style.height = '';
            document.documentElement.style.overflow = '';
            document.body.style.height = '';
            document.body.style.overflow = '';
            document.body.style.margin = '';
        };
    }, []);

    return (
        <div
            ref={vantaRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: 0,
            }}
        />
    );
}
