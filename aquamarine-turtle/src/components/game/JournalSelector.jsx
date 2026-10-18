'use client';

import React from 'react';
import { ArrowRight, BookOpen, Lock, Waves } from 'lucide-react';
import { JOURNALS } from '@/data/journalsData';
import SciFiButton from '@/components/ui/SciFiButton';

export default function JournalSelector({ onSelectJournal }) {
  return (
    <section className="max-w-5xl mx-auto py-8">
      <div className="mb-8">
        <span className="text-[10px] font-bold tracking-[0.25em] text-cyan-300 uppercase">
          Archivo de exploración // EX-01
        </span>
        <h2 className="text-2xl sm:text-3xl font-bold text-white mt-3">
          Selecciona tu diario
        </h2>
        <p className="text-sm text-slate-400 mt-2 max-w-2xl">
          Comienza en la costa y avanza por niveles adicionales de corrientes,
          altamar y arrecifes profundos.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {JOURNALS.map((journal) => {
          const isAvailable = journal.status === 'ACTIVE';

          return (
            <article
              key={journal.id}
              className={`hud-card rounded-xl p-5 flex flex-col ${
                isAvailable ? 'hud-card-active' : 'opacity-60'
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  {isAvailable ? (
                    <Waves className="w-6 h-6 text-cyan-300" />
                  ) : (
                    <Lock className="w-6 h-6 text-slate-500" />
                  )}
                  <div>
                    <span className="text-[10px] text-cyan-400 font-bold tracking-widest">
                      {journal.codeName}
                    </span>
                    <h3 className="text-lg text-white font-bold mt-1">{journal.title}</h3>
                  </div>
                </div>
                <span className="text-[9px] font-bold tracking-wider text-slate-300 border border-slate-700 rounded px-2 py-1">
                  {isAvailable ? 'DISPONIBLE' : 'PRÓXIMAMENTE'}
                </span>
              </div>

              {journal.subtitle && (
                <p className="text-xs uppercase tracking-wider text-cyan-200/80 mt-4">
                  {journal.subtitle}
                </p>
              )}
              <p className="text-xs text-slate-400 leading-relaxed mt-3">
                {journal.description}
              </p>

              {isAvailable && (
                <>
                  <div className="grid grid-cols-2 gap-2 my-5">
                    {journal.sectors.map((sector, index) => (
                      <div
                        key={sector.id}
                        className="flex items-center gap-2 bg-slate-950/70 border border-cyan-500/20 rounded-md p-2"
                      >
                        <span className="text-[10px] font-bold text-cyan-400">
                          0{index + 1}
                        </span>
                        <span className="text-[10px] text-slate-300 truncate">
                          {sector.code}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-auto">
                    <SciFiButton onClick={() => onSelectJournal(journal)}>
                      <BookOpen className="w-4 h-4" />
                      Abrir expedición
                      <ArrowRight className="w-4 h-4" />
                    </SciFiButton>
                  </div>
                </>
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
}