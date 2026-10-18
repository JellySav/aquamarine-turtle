export const JOURNALS = [
  {
    id: 'aquamarine-turtle',
    codeName: 'AQUAMARINE-TURTLE',
    title: 'Diario 01: Expedición Océano & Costas',
    status: 'ACTIVE',
    description: 'Análisis de la hidrosfera terrestre, la megafauna marina y el impacto del plástico en arrecifes y zonas costeras.',
    accentColor: 'cyan',
    sectors: [
      {
        id: 'turtle-coastal',
        code: 'AQUAMARINE-TURTLE',
        name: 'Sector 01: Orillas e Intermareal',
        targetSpecies: 'Tortuga Laúd / Verde',
        threat: 'Contaminación lumínica y plásticos en playas de desove',
        profession: 'Buzo Científico / Voluntario Costero',
        objective: 'Despejar el camino a las crías y desorientar luces artificiales.',
        fact: 'Solo 1 de cada 1,000 crías de tortuga llega a la edad adulta debido a riesgos naturales y humanos.'
      },
      {
        id: 'azure-jellyfish',
        code: 'AZURE-JELLYFISH',
        name: 'Sector 02: Corrientes Pelágicas',
        targetSpecies: 'Medusa Bioluminiscente / Plankton',
        threat: 'Sopa de microplásticos y redes fantasma',
        profession: 'Oceanógrafo / Analista de Corrientes',
        objective: 'Calibrar los filtros de la nave para separar microplásticos de la biomasa.',
        fact: 'Los microplásticos absorben toxinas y son ingeridos por el zooplancton, entrando a la cadena alimenticia.'
      },
      {
        id: 'sapphire-whale',
        code: 'SAPPHIRE-WHALE',
        name: 'Sector 03: Altamar y Abismos',
        targetSpecies: 'Ballena Azul / Cetáceos',
        threat: 'Contaminación acústica industrial y colisiones con buques',
        profession: 'Especialista en Bioacústica Marina',
        objective: 'Ajustar el sonar para filtrar ruido de motores y registrar cantos de ballenas.',
        fact: 'El tráfico marítimo reduce el alcance de comunicación de las ballenas hasta en un 90%.'
      },
      {
        id: 'pearl-nautilus',
        code: 'PEARL-NAUTILUS',
        name: 'Sector 04: Arrecifes Profundos',
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