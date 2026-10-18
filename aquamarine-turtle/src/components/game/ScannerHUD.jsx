// En src/components/game/ScannerHUD.jsx
import React, { useEffect, useRef, useState } from 'react';
import SciFiButton from '@/components/ui/SciFiButton';
import InteractiveMinigame from '@/components/game/InteractiveMinigame';
import { soundFx } from '@/utils/audioManager';
import { Search, CheckCircle, AlertTriangle, User, Sparkles } from 'lucide-react';

export default function ScannerHUD({ sector, onScan, isScanned }) {
  const [scanning, setScanning] = useState(false);
  const [minigameDone, setMinigameDone] = useState(false);
  const scanTimer = useRef(null);

  useEffect(() => () => clearTimeout(scanTimer.current), []);

  const handleScanAction = () => {
    if (scanning || isScanned || !minigameDone) return;

    soundFx.playScan();
    setScanning(true);
    scanTimer.current = setTimeout(() => {
      setScanning(false);
      soundFx.playSuccess();
      onScan(sector.targetSpecies);
    }, 1200);
  };

  if (!sector) return null;

  return (
    <div className="hud-card hud-card-active rounded-xl p-6 relative overflow-hidden">
      {/* Header del Sector */}
      <div className="flex justify-between items-start mb-4 border-b border-cyan-500/20 pb-3">
        <div>
          <span className="text-[10px] font-bold bg-cyan-950 text-cyan-300 border border-cyan-500/40 px-2.5 py-0.5 rounded uppercase">
            {sector.code}
          </span>
          <h2 className="text-xl font-bold text-white mt-2">{sector.name}</h2>
        </div>
      </div>

      {/* Visor de Escaneo */}
      <div className="relative bg-slate-950 border border-cyan-500/40 rounded-lg p-6 my-4 text-center overflow-hidden">
        <Search className={`w-10 h-10 mx-auto mb-2 ${scanning ? 'text-cyan-300 animate-spin' : 'text-cyan-500'}`} />
        <p className="text-xs text-slate-400 mb-1">OBJETIVO DETECTADO:</p>
        <h3 className="text-lg font-bold text-white mb-4">{sector.targetSpecies}</h3>

        {isScanned ? (
          <div className="inline-flex items-center gap-2 bg-emerald-950/80 border border-emerald-500/50 text-emerald-300 px-4 py-2 rounded-lg text-xs font-bold mt-2">
            <CheckCircle className="w-4 h-4" />
            REGISTRADO EN BITÁCORA
          </div>
        ) : (
          <>
            <InteractiveMinigame
              sectorId={sector.id}
              onComplete={() => setMinigameDone(true)}
              isCompleted={minigameDone}
            />
            <SciFiButton onClick={handleScanAction} disabled={scanning || !minigameDone}>
              {scanning ? 'ESCANEANDO...' : minigameDone ? 'REGISTRAR ESPECIE' : 'COMPLETA LA MISIÓN PARA ESCANEAR'}
            </SciFiButton>
          </>
        )}
      </div>

      {sector.identity && (
        <div className="flex items-start gap-2 text-xs text-cyan-100/80 mb-4">
          <Sparkles className="w-4 h-4 shrink-0 text-cyan-300" />
          <p>{sector.identity}</p>
        </div>
      )}

      {/* Amenazas y Profesión */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div className="bg-slate-950/60 border border-amber-500/30 p-3 rounded-lg">
          <div className="flex items-center gap-2 text-amber-400 mb-1">
            <AlertTriangle className="w-4 h-4" />
            <h4 className="text-xs font-bold uppercase">Amenaza</h4>
          </div>
          <p className="text-xs text-slate-300">{sector.threat}</p>
        </div>

        <div className="bg-slate-950/60 border border-cyan-500/30 p-3 rounded-lg">
          <div className="flex items-center gap-2 text-cyan-400 mb-1">
            <User className="w-4 h-4" />
            <h4 className="text-xs font-bold uppercase">Profesión Aliada</h4>
          </div>
          <p className="text-xs text-slate-300">{sector.profession}</p>
        </div>
      </div>
    </div>
  );
}