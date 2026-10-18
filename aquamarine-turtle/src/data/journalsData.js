export const JOURNALS = [
  {
    id: 'aquamarine-turtle',
    codeName: 'AQUAMARINE-TURTLE',
    title: 'Diario 01: Aquamarine Turtle',
    subtitle: 'Expedición Océano y Costas',
    status: 'ACTIVE',
    description: 'Una ruta de cuatro niveles: desde las costas de anidación hasta los arrecifes y las profundidades oceánicas.',
    accentColor: 'cyan',
    sectors: [
      {
        id: 'turtle-coastal',
        code: 'AQUAMARINE-TURTLE',
        name: 'Nivel 01: Orillas e Intermareal',
        identity: 'El punto de partida de la expedición: protege las playas donde comienza la vida.',
        targetSpecies: 'Tortuga Laúd / Verde',
        threat: 'Contaminación lumínica y plásticos en playas de desove',
        profession: 'Buzo Científico / Voluntario Costero',
        objective: 'Despejar el camino a las crías y desorientar luces artificiales.',
        fact: 'Solo 1 de cada 1,000 crías de tortuga llega a la edad adulta debido a riesgos naturales y humanos.'
      },
      {
        id: 'azure-jellyfish',
        code: 'AZURE-JELLYFISH',
        name: 'Nivel extra 02: Corrientes Pelágicas',
        identity: 'Sigue la bioluminiscencia y las corrientes para explorar un océano ligero, vivo y misterioso.',
        targetSpecies: 'Medusa Bioluminiscente / Plankton',
        threat: 'Sopa de microplásticos y redes fantasma',
        profession: 'Oceanógrafo / Analista de Corrientes',
        objective: 'Calibrar los filtros de la nave para separar microplásticos de la biomasa.',
        fact: 'Los microplásticos absorben toxinas y son ingeridos por el zooplancton, entrando a la cadena alimenticia.'
      },
      {
        id: 'sapphire-whale',
        code: 'SAPPHIRE-WHALE',
        name: 'Nivel extra 03: Altamar y Abismos',
        identity: 'Adéntrate en la inmensidad azul y escucha los cantos que atraviesan el océano profundo.',
        targetSpecies: 'Ballena Azul / Cetáceos',
        threat: 'Contaminación acústica industrial y colisiones con buques',
        profession: 'Especialista en Bioacústica Marina',
        objective: 'Ajustar el sonar para filtrar ruido de motores y registrar cantos de ballenas.',
        fact: 'El tráfico marítimo reduce el alcance de comunicación de las ballenas hasta en un 90%.'
      },
      {
        id: 'pearl-nautilus',
        code: 'PEARL-NAUTILUS',
        name: 'Nivel extra 04: Arrecifes Profundos',
        identity: 'Desciende con el nautilo: un símbolo de exploración entre arrecifes antiguos y profundos.',
        targetSpecies: 'Nautilus / Corales Hermatípicos',
        threat: 'Acidificación del océano y blanqueamiento coralino',
        profession: 'Ingeniero/a Ambiental / Ecólogo/a Marino',
        objective: 'Monitorear los niveles de pH y desplegar nutrientes para restaurar el arrecife.',
        fact: 'Los arrecifes albergan el 25% de la biodiversidad marina mundial en menos del 1% del suelo oceánico.'
      }
    ]
  },
  {
    id: 'chameleon-canopy',
    codeName: 'EMERALD-CHAMELEON',
    title: 'Diario 02: Expedición Selva & Dosel',
    status: 'LOCKED',
    description: 'Exploración de biomas forestales, camuflaje, pérdida de hábitat y conservación del suelo.',
    accentColor: 'emerald',
    sectors: []
  },
  {
    id: 'amber-currents',
    codeName: 'AMBER-ANT',
    title: 'Diario 03: Expedición Micro-Ecosistemas',
    status: 'LOCKED',
    description: 'Análisis de la biomasa subterránea, ciclos de descomposición y comunicación entre colonias.',
    accentColor: 'amber',
    sectors: []
  }
];