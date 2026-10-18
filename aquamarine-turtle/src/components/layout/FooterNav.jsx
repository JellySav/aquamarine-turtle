import React from 'react';
import SciFiButton from '@/components/ui/SciFiButton';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export default function FooterNav({ currentIndex, totalSectors, onPrev, onNext }) {
  return (
    <div className="flex justify-between items-center mt-6 bg-slate-950/80 border border-cyan-500/30 p-4 rounded-xl">
      <SciFiButton
        variant="secondary"
        onClick={onPrev}
        disabled={currentIndex === 0}
      >
        <ArrowLeft className="w-4 h-4" /> Nivel Anterior
      </SciFiButton>

      <span className="text-xs font-mono text-cyan-400">
        NIVEL <strong className="text-white">{currentIndex + 1}</strong> DE <strong className="text-white">{totalSectors}</strong>
      </span>

      <SciFiButton
        variant="secondary"
        onClick={onNext}
        disabled={currentIndex === totalSectors - 1}
      >
        Siguiente Nivel <ArrowRight className="w-4 h-4" />
      </SciFiButton>
    </div>
  );
}