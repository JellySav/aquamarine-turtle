import React from 'react';
import { BookOpen, Check, Lock } from 'lucide-react';

export default function PokedexLog({ sectors, scannedSpecies }) {
  return (
    <div className="hud-card rounded-xl p-5 h-full flex flex-col">
      <div className="flex items-center gap-2 border-b border-cyan-500/30 pb-3 mb-4">
        <BookOpen className="w-5 h-5 text-cyan-400" />
        <h3 className="font-bold text-white text-sm tracking-wider">BITÁCORA ECOLÓGICA</h3>
      </div>

      <div className="space-y-3 overflow-y-auto flex-1 pr-1">
        {sectors.map((sec) => {
          const isScanned = scannedSpecies.includes(sec.targetSpecies);

          return (
            <div
              key={sec.id}
              className={`p-3 rounded-lg border transition-all ${
                isScanned
                  ? 'bg-slate-900 border-cyan-500/50 text-white'
                  : 'bg-slate-950/40 border-slate-800 text-slate-500'
              }`}
            >
              <div className="flex justify-between items-center mb-1">
                <span className="text-[9px] font-bold tracking-widest text-cyan-400 uppercase">
                  {sec.code}
                </span>
                {isScanned ? (
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                ) : (
                  <Lock className="w-3.5 h-3.5 text-slate-600" />
                )}
              </div>

              <h4 className="text-xs font-bold">{sec.targetSpecies}</h4>
              <p className="text-[10px] text-slate-400 mt-1 line-clamp-2">
                {isScanned ? sec.objective : 'Especie no escaneada en este sector.'}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}