import { useState } from 'react';
import { JOURNALS } from '@/data/journalsData';

export function useGameState() {
  const [selectedJournal, setSelectedJournal] = useState(null);
  const [currentSectorIndex, setCurrentSectorIndex] = useState(0);
  const [scannedSpecies, setScannedSpecies] = useState([]);

  const selectJournal = (journal) => {
    setSelectedJournal(journal);
    setCurrentSectorIndex(0);
  };

  const currentSector = selectedJournal?.sectors[currentSectorIndex] || null;

  const registerSpecies = (speciesName) => {
    if (!scannedSpecies.includes(speciesName)) {
      setScannedSpecies((prev) => [...prev, speciesName]);
    }
  };

  const nextSector = () => {
    if (selectedJournal && currentSectorIndex < selectedJournal.sectors.length - 1) {
      setCurrentSectorIndex((prev) => prev + 1);
    }
  };

  const prevSector = () => {
    if (currentSectorIndex > 0) {
      setCurrentSectorIndex((prev) => prev - 1);
    }
  };

  const resetGame = () => {
    setSelectedJournal(null);
    setCurrentSectorIndex(0);
    setScannedSpecies([]);
  };

  return {
    selectedJournal,
    currentSector,
    currentSectorIndex,
    scannedSpecies,
    selectJournal,
    registerSpecies,
    nextSector,
    prevSector,
    resetGame,
    totalSectors: selectedJournal?.sectors.length || 0,
  };
}