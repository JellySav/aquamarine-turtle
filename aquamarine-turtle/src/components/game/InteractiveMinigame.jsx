// src/components/game/InteractiveMinigame.jsx
import React, { useState, useEffect } from 'react';
import SciFiButton from '@/components/ui/SciFiButton';
import { soundFx } from '@/utils/audioManager';
import { Trash2, Radio, Sliders, RefreshCw, Sparkles } from 'lucide-react';

export default function InteractiveMinigame({ sectorId, onComplete, isCompleted }) {
  // Estado para Misión 1 (Limpieza de Costas)
  const [trashItems, setTrashItems] = useState([
    { id: 1, x: 20, y: 30 },
    { id: 2, x: 70, y: 25 },
    { id: 3, x: 45, y: 65 },
    { id: 4, x: 80, y: 70 },
  ]);

  // Estado para Misión 2 y 3 (Frecuencia / Filtro)
  const [sliderVal, setSliderVal] = useState(20);
  const targetVal = sectorId === 'sapphire-whale' ? 85 : 60;

  // Limpiar basura en Misión Costera
  const removeTrash = (id) => {
    soundFx.playScan();
    const updated = trashItems.filter((item) => item.id !== id);
    setTrashItems(updated);
    if (updated.length === 0) {
      soundFx.playSuccess();
      onComplete();
    }
  };

  // Validar calibración de sliders
  const checkCalibration = () => {
    if (Math.abs(sliderVal - targetVal) <= 5) {
      soundFx.playSuccess();
      onComplete();
    } else {
      soundFx.playSonar();
    }
  };

  if (isCompleted) {
    return (
      <div className="bg-emerald-950/40 border border-emerald-500/50 p-4 rounded-lg text-center my-4">
        <Sparkles className="w-6 h-6 text-emerald-400 mx-auto mb-2 animate-bounce" />
        <p className="text-xs text-emerald-300 font-bold uppercase tracking-wider">
          ¡MISIÓN DEL SECTOR COMPLETADA CON ÉXITO!
        </p>
      </div>
    );
  }

  return (
    <div className="bg-slate-950 border border-cyan-500/30 rounded-lg p-5 my-4">
      <h4 className="text-xs font-bold text-cyan-300 uppercase tracking-widest mb-3 flex items-center gap-2">
        <Sliders className="w-4 h-4 text-cyan-400" />
        Mecánica de Exploración Manual
      </h4>

      {/* Minijuego Sector 1: Costas (Limpieza de Basura) */}
      {sectorId === 'turtle-coastal' && (
        <div>
          <p className="text-xs text-slate-400 mb-3">
            Hazard detectado: Haz clic sobre los residuos de plástico para despejar el camino a las crías de tortuga.
          </p>
          <div className="relative w-full h-40 bg-slate-900 border border-cyan-500/20 rounded-lg overflow-hidden">
            {trashItems.map((item) => (
              <button
                key={item.id}
                onClick={() => removeTrash(item.id)}
                style={{ top: `${item.y}%`, left: `${item.x}%` }}
                className="absolute p-2 bg-red-500/20 hover:bg-red-500/40 border border-red-500 rounded-full transition-transform hover:scale-125"
                title="Remover residuo"
              >
                <Trash2 className="w-4 h-4 text-red-400" />
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Minijuego Sector 2 y 3: Frecuencia Sonar / Filtro Microplásticos */}
      {(sectorId === 'sapphire-whale' || sectorId === 'azure-jellyfish') && (
        <div className="space-y-4">
          <p className="text-xs text-slate-400">
            Ajusta la frecuencia del sensor de la nave hasta sintonizar la señal del objetivo ({targetVal} Hz).
          </p>
          <div className="flex items-center gap-4">
            <Radio className="w-5 h-5 text-cyan-400 animate-pulse" />
            <input
              type="range"
              min="0"
              max="100"
              value={sliderVal}
              onChange={(e) => {
                setSliderVal(Number(e.target.value));
                soundFx.playSonar();
              }}
              className="w-full accent-cyan-400 bg-slate-900 rounded-lg h-2"
            />
            <span className="text-xs font-bold text-cyan-300 w-12">{sliderVal} Hz</span>
          </div>
          <SciFiButton variant="secondary" onClick={checkCalibration}>
            Sincronizar Frecuencia
          </SciFiButton>
        </div>
      )}

      {/* Minijuego Sector 4: Calibrador de pH de Coral */}
      {sectorId === 'pearl-nautilus' && (
        <div className="space-y-4">
          <p className="text-xs text-slate-400">
            Regula el estabilizador de pH de la nave para contrarrestar la acidificación del arrecife (Objetivo: 60%).
          </p>
          <div className="flex items-center gap-4">
            <RefreshCw className="w-5 h-5 text-cyan-400" />
            <input
              type="range"
              min="0"
              max="100"
              value={sliderVal}
              onChange={(e) => setSliderVal(Number(e.target.value))}
              className="w-full accent-cyan-400 bg-slate-900 rounded-lg h-2"
            />
            <span className="text-xs font-bold text-cyan-300 w-12">{sliderVal}%</span>
          </div>
          <SciFiButton variant="secondary" onClick={checkCalibration}>
            Estabilizar Arrecife
          </SciFiButton>
        </div>
      )}
    </div>
  );
}