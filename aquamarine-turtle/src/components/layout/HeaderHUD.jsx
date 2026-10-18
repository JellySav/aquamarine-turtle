import React from 'react';
import { Shield, Zap, Compass, Radio } from 'lucide-react';

export default function HeaderHUD({ scannedCount, totalSpecies = 4, onReset }) {
  return (
    <header className="w-full bg-slate-950/90 border-b border-cyan-500/30 p-4 sticky top-0 z-50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        {/* Identificador de Nave */}
        <div className="flex items-center gap-3">
          <Shield className="w-7 h-7 text-cyan-400 animate-pulse" />
          <div>
            <h1 className="text-base font-bold tracking-widest text-white glow-text">
              NAVE EXPLORADORA EX-01
            </h1>
            <p className="text-[10px] text-cyan-500/80 uppercase">
              SISTEMA AQUAMARINE-TURTLE // MISIÓN TERRESTRE
            </p>
          </div>
        </div>

        {/* Indicadores de Estado y Bitácora */}
        <div className="flex items-center gap-6 text-xs">
          <div className="flex items-center gap-2 bg-slate-900 border border-cyan-500/30 px-3 py-1.5 rounded-md">
            <Radio className="w-4 h-4 text-emerald-400 animate-ping" />
            <span className="text-slate-300">SENSOR: <strong className="text-emerald-400">EN LÍNEA</strong></span>
          </div>

          <div className="flex items-center gap-2 bg-slate-900 border border-cyan-500/30 px-3 py-1.5 rounded-md">
            <Compass className="w-4 h-4 text-cyan-400" />
            <span className="text-slate-300">REGISTROS: <strong className="text-cyan-300">{scannedCount}/{totalSpecies}</strong></span>
          </div>

          {onReset && (
            <button
              onClick={onReset}
              className="text-[11px] text-slate-400 hover:text-cyan-300 underline underline-offset-4 transition-colors"
            >
              Cambiar Diario
            </button>
          )}
        </div>
      </div>
    </header>
  );
}