import type { Task } from '../types'

// Slova (type: 'word') — vyjmenovaná/příbuzná slova (y) i běžná slova (i) pro
// stejnou souhlásku, aby úloha nešla „uhodnout" bez znalosti pravidla.
const wordTasks: Task[] = [
  // Skupina B
  { id: 'b-y-1', group: 'B', type: 'word', before: '', answer: 'y', after: 'byt', explanation: 'byt (obydlí) — vyjmenované slovo, píšeme y.' },
  { id: 'b-y-2', group: 'B', type: 'word', before: '', answer: 'y', after: 'bydlit', explanation: 'bydlit — vyjmenované slovo, píšeme y.' },
  { id: 'b-y-3', group: 'B', type: 'word', before: 'o', answer: 'y', after: 'vatel', explanation: 'obyvatel — slovo příbuzné k bydlit, píšeme y.' },
  { id: 'b-y-4', group: 'B', type: 'word', before: 'dob', answer: 'y', after: 'tek', explanation: 'dobytek — vyjmenované slovo, píšeme y.' },
  { id: 'b-y-5', group: 'B', type: 'word', before: 'ob', answer: 'y', after: 'čej', explanation: 'obyčej — vyjmenované slovo, píšeme y.' },
  { id: 'b-y-6', group: 'B', type: 'word', before: '', answer: 'y', after: 'bystrý', explanation: 'bystrý — vyjmenované slovo, píšeme y.' },
  { id: 'b-y-7', group: 'B', type: 'word', before: '', answer: 'y', after: 'bylina', explanation: 'bylina — vyjmenované slovo, píšeme y.' },
  { id: 'b-y-8', group: 'B', type: 'word', before: 'ko', answer: 'y', after: 'la', explanation: 'kobyla — vyjmenované slovo, píšeme y.' },
  { id: 'b-y-9', group: 'B', type: 'word', before: 'ná', answer: 'y', after: 'tek', explanation: 'nábytek — slovo příbuzné k byt, píšeme y.' },
  { id: 'b-y-10', group: 'B', type: 'word', before: 'z', answer: 'y', after: 'tek', explanation: 'zbytek — slovo příbuzné k byt, píšeme y.' },
  { id: 'b-i-1', group: 'B', type: 'word', before: '', answer: 'i', after: 'bidlo', explanation: 'bidlo (tyč) — nesouvisí s vyjmenovanými slovy, píšeme i.' },
  { id: 'b-i-2', group: 'B', type: 'word', before: 'o', answer: 'i', after: 'lí', explanation: 'obilí — nesouvisí s vyjmenovanými slovy, píšeme i.' },
  { id: 'b-i-3', group: 'B', type: 'word', before: 'na', answer: 'i', after: 'tý', explanation: 'nabitý (od nabít) — píšeme i.' },
  { id: 'b-i-4', group: 'B', type: 'word', before: '', answer: 'i', after: 'bitva', explanation: 'bitva — píšeme i.' },

  // Skupina L
  { id: 'l-y-1', group: 'L', type: 'word', before: 'po', answer: 'y', after: 'kat', explanation: 'polykat — vyjmenované slovo, píšeme y.' },
  { id: 'l-y-2', group: 'L', type: 'word', before: 'p', answer: 'y', after: 'nout', explanation: 'plynout — vyjmenované slovo, píšeme y.' },
  { id: 'l-y-3', group: 'L', type: 'word', before: '', answer: 'y', after: 'lysý', explanation: 'lysý — vyjmenované slovo, píšeme y.' },
  { id: 'l-y-4', group: 'L', type: 'word', before: '', answer: 'y', after: 'lyže', explanation: 'lyže — vyjmenované slovo, píšeme y.' },
  { id: 'l-y-5', group: 'L', type: 'word', before: 'p', answer: 'y', after: 'š', explanation: 'plyš — vyjmenované slovo, píšeme y.' },
  { id: 'l-i-1', group: 'L', type: 'word', before: '', answer: 'i', after: 'liška', explanation: 'liška — nesouvisí s vyjmenovanými slovy, píšeme i.' },
  { id: 'l-i-2', group: 'L', type: 'word', before: 'k', answer: 'i', after: 'ka', explanation: 'klika — píšeme i.' },
  { id: 'l-i-3', group: 'L', type: 'word', before: '', answer: 'i', after: 'linka', explanation: 'linka — píšeme i.' },
  { id: 'l-i-4', group: 'L', type: 'word', before: '', answer: 'i', after: 'lidé', explanation: 'lidé — píšeme i.' },

  // Skupina M
  { id: 'm-y-1', group: 'M', type: 'word', before: '', answer: 'y', after: 'my', explanation: 'my (zájmeno) — vyjmenované slovo, píšeme y.' },
  { id: 'm-y-2', group: 'M', type: 'word', before: '', answer: 'y', after: 'myslet', explanation: 'myslet — vyjmenované slovo, píšeme y.' },
  { id: 'm-y-3', group: 'M', type: 'word', before: 'h', answer: 'y', after: 'z', explanation: 'hmyz — vyjmenované slovo, píšeme y.' },
  { id: 'm-y-4', group: 'M', type: 'word', before: 'za', answer: 'y', after: 'kat', explanation: 'zamykat — vyjmenované slovo, píšeme y.' },
  { id: 'm-y-5', group: 'M', type: 'word', before: '', answer: 'y', after: 'mysl', explanation: 'mysl — slovo příbuzné k myslet, píšeme y.' },
  { id: 'm-i-1', group: 'M', type: 'word', before: '', answer: 'i', after: 'milý', explanation: 'milý — píšeme i.' },
  { id: 'm-i-2', group: 'M', type: 'word', before: '', answer: 'i', after: 'minuta', explanation: 'minuta — píšeme i.' },
  { id: 'm-i-3', group: 'M', type: 'word', before: '', answer: 'i', after: 'mince', explanation: 'mince — píšeme i.' },
  { id: 'm-i-4', group: 'M', type: 'word', before: '', answer: 'i', after: 'mikina', explanation: 'mikina — píšeme i.' },

  // Skupina P
  { id: 'p-y-1', group: 'P', type: 'word', before: '', answer: 'y', after: 'pytel', explanation: 'pytel — vyjmenované slovo, píšeme y.' },
  { id: 'p-y-2', group: 'P', type: 'word', before: '', answer: 'y', after: 'pysk', explanation: 'pysk — vyjmenované slovo, píšeme y.' },
  { id: 'p-y-3', group: 'P', type: 'word', before: '', answer: 'y', after: 'pyšný', explanation: 'pyšný — slovo příbuzné k pýcha, píšeme y.' },
  { id: 'p-i-1', group: 'P', type: 'word', before: '', answer: 'i', after: 'pila', explanation: 'pila — píšeme i.' },
  { id: 'p-i-2', group: 'P', type: 'word', before: 'sle', answer: 'i', after: 'ce', explanation: 'slepice — píšeme i.' },
  { id: 'p-i-3', group: 'P', type: 'word', before: 'o', answer: 'i', after: 'ce', explanation: 'opice — píšeme i.' },

  // Skupina S
  { id: 's-y-1', group: 'S', type: 'word', before: '', answer: 'y', after: 'syn', explanation: 'syn — vyjmenované slovo, píšeme y.' },
  { id: 's-y-2', group: 'S', type: 'word', before: '', answer: 'y', after: 'sytý', explanation: 'sytý — vyjmenované slovo, píšeme y.' },
  { id: 's-y-3', group: 'S', type: 'word', before: '', answer: 'y', after: 'syrový', explanation: 'syrový — vyjmenované slovo, píšeme y.' },
  { id: 's-y-4', group: 'S', type: 'word', before: '', answer: 'y', after: 'sypat', explanation: 'sypat — vyjmenované slovo, píšeme y.' },
  { id: 's-y-5', group: 'S', type: 'word', before: '', answer: 'y', after: 'sysel', explanation: 'sysel — vyjmenované slovo, píšeme y.' },
  { id: 's-y-6', group: 'S', type: 'word', before: 'u', answer: 'y', after: 'chat', explanation: 'usychat — vyjmenované slovo, píšeme y.' },
  { id: 's-y-7', group: 'S', type: 'word', before: '', answer: 'y', after: 'syčet', explanation: 'syčet — vyjmenované slovo, píšeme y.' },
  { id: 's-i-1', group: 'S', type: 'word', before: '', answer: 'i', after: 'sirup', explanation: 'sirup — píšeme i.' },
  { id: 's-i-2', group: 'S', type: 'word', before: '', answer: 'i', after: 'silnice', explanation: 'silnice — píšeme i.' },
  { id: 's-i-3', group: 'S', type: 'word', before: '', answer: 'i', after: 'silo', explanation: 'silo — píšeme i.' },

  // Skupina V
  { id: 'v-y-1', group: 'V', type: 'word', before: '', answer: 'y', after: 'vy', explanation: 'vy (zájmeno) — vyjmenované slovo, píšeme y.' },
  { id: 'v-y-2', group: 'V', type: 'word', before: '', answer: 'y', after: 'vysoký', explanation: 'vysoký — vyjmenované slovo, píšeme y.' },
  { id: 'v-y-3', group: 'V', type: 'word', before: 'z', answer: 'y', after: 'kat', explanation: 'zvykat — vyjmenované slovo, píšeme y.' },
  { id: 'v-y-4', group: 'V', type: 'word', before: '', answer: 'y', after: 'vydra', explanation: 'vydra — vyjmenované slovo, píšeme y.' },
  { id: 'v-y-5', group: 'V', type: 'word', before: 'po', answer: 'y', after: 'k', explanation: 'povyk — vyjmenované slovo, píšeme y.' },
  { id: 'v-y-6', group: 'V', type: 'word', before: 'z', answer: 'y', after: 'k', explanation: 'zvyk — vyjmenované slovo, píšeme y.' },
  { id: 'v-i-1', group: 'V', type: 'word', before: '', answer: 'i', after: 'vidle', explanation: 'vidle — píšeme i.' },
  { id: 'v-i-2', group: 'V', type: 'word', before: '', answer: 'i', after: 'vinice', explanation: 'vinice — píšeme i.' },
  { id: 'v-i-3', group: 'V', type: 'word', before: '', answer: 'i', after: 'viset', explanation: 'viset — píšeme i.' },

  // Skupina Z
  { id: 'z-y-1', group: 'Z', type: 'word', before: 'br', answer: 'y', after: '', explanation: 'brzy — vyjmenované slovo, píšeme y.' },
  { id: 'z-y-2', group: 'Z', type: 'word', before: 'ja', answer: 'y', after: 'k', explanation: 'jazyk — vyjmenované slovo, píšeme y.' },
  { id: 'z-i-1', group: 'Z', type: 'word', before: '', answer: 'i', after: 'zima', explanation: 'zima — píšeme i.' },
  { id: 'z-i-2', group: 'Z', type: 'word', before: '', answer: 'i', after: 'zisk', explanation: 'zisk — píšeme i.' },
]

// Slovní spojení (type: 'phrase')
const phraseTasks: Task[] = [
  { id: 'ph-b-1', group: 'B', type: 'phrase', before: 'starý b', answer: 'y', after: 't', explanation: 'byt — vyjmenované slovo, píšeme y.' },
  { id: 'ph-b-2', group: 'B', type: 'phrase', before: 'hospodářský dob', answer: 'y', after: 'tek', explanation: 'dobytek — vyjmenované slovo, píšeme y.' },
  { id: 'ph-l-1', group: 'L', type: 'phrase', before: 'hbitě pol', answer: 'y', after: 'kat', explanation: 'polykat — vyjmenované slovo, píšeme y.' },
  { id: 'ph-l-2', group: 'L', type: 'phrase', before: 'rychlá l', answer: 'i', after: 'ška', explanation: 'liška — píšeme i.' },
  { id: 'ph-m-1', group: 'M', type: 'phrase', before: 'chytrá m', answer: 'y', after: 'sl', explanation: 'mysl — píšeme y.' },
  { id: 'ph-m-2', group: 'M', type: 'phrase', before: 'poslední m', answer: 'i', after: 'nuta', explanation: 'minuta — píšeme i.' },
  { id: 'ph-p-1', group: 'P', type: 'phrase', before: 'starý p', answer: 'y', after: 'tel', explanation: 'pytel — píšeme y.' },
  { id: 'ph-p-2', group: 'P', type: 'phrase', before: 'divoká op', answer: 'i', after: 'ce', explanation: 'opice — píšeme i.' },
  { id: 'ph-s-1', group: 'S', type: 'phrase', before: 'vlastní s', answer: 'y', after: 'n', explanation: 'syn — píšeme y.' },
  { id: 'ph-s-2', group: 'S', type: 'phrase', before: 'prašná s', answer: 'i', after: 'lnice', explanation: 'silnice — píšeme i.' },
  { id: 'ph-v-1', group: 'V', type: 'phrase', before: 'divoká v', answer: 'y', after: 'dra', explanation: 'vydra — píšeme y.' },
  { id: 'ph-v-2', group: 'V', type: 'phrase', before: 'stará v', answer: 'i', after: 'nice', explanation: 'vinice — píšeme i.' },
  { id: 'ph-z-1', group: 'Z', type: 'phrase', before: 'ještě br', answer: 'y', after: '', explanation: 'brzy — píšeme y.' },
  { id: 'ph-z-2', group: 'Z', type: 'phrase', before: 'silná z', answer: 'i', after: 'ma', explanation: 'zima — píšeme i.' },
]

// Věty (type: 'sentence')
const sentenceTasks: Task[] = [
  { id: 'se-b-1', group: 'B', type: 'sentence', before: 'Naši sousedé b', answer: 'y', after: 'dlí v novém domě.', explanation: 'bydlí — od bydlit, píšeme y.' },
  { id: 'se-b-2', group: 'B', type: 'sentence', before: 'Sedlák vlastnil velké stádo dob', answer: 'y', after: 'tka.', explanation: 'dobytka — píšeme y.' },
  { id: 'se-l-1', group: 'L', type: 'sentence', before: 'V lese jsme potkali rychlou l', answer: 'i', after: 'šku.', explanation: 'lišku — píšeme i.' },
  { id: 'se-l-2', group: 'L', type: 'sentence', before: 'Musíš pol', answer: 'y', after: 'kat pomalu a klidně.', explanation: 'polykat — píšeme y.' },
  { id: 'se-m-1', group: 'M', type: 'sentence', before: 'Řekni mi, co si m', answer: 'y', after: 'slíš.', explanation: 'myslíš — píšeme y.' },
  { id: 'se-m-2', group: 'M', type: 'sentence', before: 'Poslední m', answer: 'i', after: 'nuta zápasu byla nejnapínavější.', explanation: 'minuta — píšeme i.' },
  { id: 'se-p-1', group: 'P', type: 'sentence', before: 'Do p', answer: 'y', after: 'tle jsme naskládali brambory.', explanation: 'pytle — píšeme y.' },
  { id: 'se-p-2', group: 'P', type: 'sentence', before: 'V zoo jsme viděli veselou op', answer: 'i', after: 'ci.', explanation: 'opici — píšeme i.' },
  { id: 'se-s-1', group: 'S', type: 'sentence', before: 'Máme jednoho jediného s', answer: 'y', after: 'na.', explanation: 'syna — píšeme y.' },
  { id: 'se-s-2', group: 'S', type: 'sentence', before: 'Auto jelo po prašné s', answer: 'i', after: 'lnici.', explanation: 'silnici — píšeme i.' },
  { id: 'se-v-1', group: 'V', type: 'sentence', before: 'V řece žije plachá v', answer: 'y', after: 'dra.', explanation: 'vydra — píšeme y.' },
  { id: 'se-v-2', group: 'V', type: 'sentence', before: 'Na kopci roste stará v', answer: 'i', after: 'nice.', explanation: 'vinice — píšeme i.' },
  { id: 'se-z-1', group: 'Z', type: 'sentence', before: 'Přijeli jsme domů příliš brz', answer: 'y', after: '.', explanation: 'brzy — píšeme y.' },
  { id: 'se-z-2', group: 'Z', type: 'sentence', before: 'Letos byla obzvlášť tuhá z', answer: 'i', after: 'ma.', explanation: 'zima — píšeme i.' },
]

export const tasks: Task[] = [...wordTasks, ...phraseTasks, ...sentenceTasks]

export function tasksForGroup(group: string): Task[] {
  if (group === 'MIX') return tasks
  return tasks.filter((t) => t.group === group)
}
