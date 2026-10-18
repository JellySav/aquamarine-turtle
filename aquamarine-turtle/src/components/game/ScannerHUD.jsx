import React, { useState } from 'react';
import SciFiButton from '@/components/ui/SciFiButton';
import { Search, CheckCircle, AlertTriangle, User, Award } from 'lucide-react';

export default function ScannerHUD({ sector, onScan, isScanned }) {
  const [scanning, setScanning] = useState(false);

  const handleScanAction = () => {
    setScanning(true);
    setTimeout(() => {
      setScanning(false);
      onScan(sector.targetSpecies);
    }, 1200);
  };

  if (!sector) return null;

  return (
    <div className="hud-card hud-card-active rounded-xl p-6 relative overflow-hidden">
      {/* Código y Nombre del Sector */}
      <div className="flex justify-between items-start mb-4 border-b border-cyan-500/20 pb-3">
        <div>
          <span className="text-[10px] font-bold bg-cyan-950 text-cyan-300 border border-cyan-500/40 px-2.5 py-0.5 rounded uppercase">
            {sector.code}
          </span>
          <h2 className="text-xl font-bold text-white mt-2">{sector.name}</h2>
        </div>
        <span className="text-xs text-slate-400 font-mono">SECTOR ID: {sector.id}</span>
      </div>

      {/* Caja Visor de Escaneo */}
      <div className="relative bg-slate-950 border border-cyan-500/40 rounded-lg p-8 my-6 text-center overflow-hidden">
        {/* Efecto visual de radar/escaneo */}
        {scanning && (
          <div className="absolute inset-0 bg-cyan-500/10 animate-pulse flex items-center justify-center">
            <div className="w-full h-1 bg-cyan-400 shadow-[0_0_15px_#22d3ee] animate-bounce" />
          </div>
        )}

        <div className="relative z-10">
          <Search className={`w-12 h-12 mx-auto mb-3 ${scanning ? 'text-cyan-300 animate-spin' : 'text-cyan-500'}`} />
          <p className="text-xs text-slate-400 mb-1">OBJETIVO DETECTADO EN BIOMA:</p>
          <h3 className="text-lg font-bold text-white mb-4">{sector.targetSpecies}</h3>

          {isScanned ? (
            <div className="inline-flex items-center gap-2 bg-emerald-950/80 border border-emerald-500/50 text-emerald-300 px-4 py-2 rounded-lg text-xs font-bold">
              <CheckCircle className="w-4 h-4" />
              REGISTRADO EN BITÁCORA
            </div>
          ) : (
            <SciFiButton onClick={handleScanAction} disabled={scanning}>
              {scanning ? 'ESCANEAR NAVE...' : 'ACTIVAR RAYO ESCÁNER'}
            </SciFiButton>
          )}
        </div>
      </div>

      {/* Datos Pedagógicos: Amenaza & Profesión */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        <div className="bg-slate-950/60 border border-amber-500/30 p-4 rounded-lg">
          <div className="flex items-center gap-2 text-amber-400 mb-2">
            <AlertTriangle className="w-4 h-4" />
            <h4 className="text-xs font-bold uppercase">Amenaza Detectada</h4>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed">{sector.threat}</p>
        </div>

        <div className="bg-slate-950/60 border border-cyan-500/30 p-4 rounded-lg">
          <div className="flex items-center gap-2 text-cyan-400 mb-2">
            <User className="w-4 h-4" />
            <h4 className="text-xs font-bold uppercase">Aliado Humano / Profesión</h4>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed">{sector.profession}</p>
        </div>
      </div>

      {/* Dato Curioso (Fact) */}
      <div className="mt-4 bg-cyan-950/30 border border-cyan-500/20 p-3 rounded text-center">
        <p className="text-[11px] text-cyan-200">
          💡 <strong className="text-cyan-400">Dato Ecológico:</strong> {sector.fact}
        </p>
      </div>
    </div>
  );
}