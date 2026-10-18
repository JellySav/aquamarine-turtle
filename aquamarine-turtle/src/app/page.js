'use client';

import React from 'react';
import HeaderHUD from '@/components/layout/HeaderHUD';
import JournalSelector from '@/components/game/JournalSelector';
import ScannerHUD from '@/components/game/ScannerHUD';
import PokedexLog from '@/components/game/PokedexLog';
import FooterNav from '@/components/layout/FooterNav';
import { useGameState } from '@/hooks/useGameState';

export default function HomePage() {
  const {
    selectedJournal,
    currentSector,
    currentSectorIndex,
    scannedSpecies,
    selectJournal,
    registerSpecies,
    nextSector,
    prevSector,
    resetGame,
    totalSectors,
  } = useGameState();

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-cyan-400 font-mono">
      {/* HUD Header Global */}
      <HeaderHUD
        scannedCount={scannedSpecies.length}
        totalSpecies={totalSectors}
        onReset={selectedJournal ? resetGame : null}
      />

      <main className="flex-1 p-6 max-w-7xl mx-auto w-full">
        {!selectedJournal ? (
          /* Pantalla 1: Selección de Diarios de Exploración */
          <JournalSelector onSelectJournal={selectJournal} />
        ) : (
          /* Pantalla 2: Simulador Activo por Sectores */
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 flex flex-col justify-between">
              <ScannerHUD
                key={currentSector?.id}
                sector={currentSector}
                onScan={registerSpecies}
                isScanned={scannedSpecies.includes(currentSector?.targetSpecies)}
              />
              <FooterNav
                currentIndex={currentSectorIndex}
                totalSectors={totalSectors}
                onPrev={prevSector}
                onNext={nextSector}
              />
            </div>

            <div className="lg:col-span-1">
              <PokedexLog
                sectors={selectedJournal.sectors}
                scannedSpecies={scannedSpecies}
              />
            </div>
          </div>
        )}
      </main>
    </div>
  );
}