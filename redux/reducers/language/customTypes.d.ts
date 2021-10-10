export interface Action {
  type: string;
}

export type CurrentLan= 'english' | 'spanish';

export interface Technolgy {
    title: string;
    imgRoute: string,
    stars: number,
    expertise: 'Basic' | 'Beginner' | 'Pre-Intermediate' | 'Intermediate' | 'Advanced' | 'Basico' | 'Principiante' | 'Pre-Intermedio' | 'Intermedio' | 'Advanzado';
    expertiseNumber: 10 | 20 | 35 | 55 | 80;
    experience: string;
  }

export type DevSkill = { devTools: Array<Technolgy>, achivements: Array<string>};

export interface Stack {
  front: DevSkill;
  back: DevSkill;
  arch: DevSkill;
}

export interface Data {
  jobWanted: string;
  introduction: string;
  stack: Stack
}

export interface Labels {
  startButton: string;
  introduction: string;
  devCounter: string;
  englishLevel: string;
  menu: {
    contact: string;
    intro: string;
    stack: string;
    experience: string;
    knowledge: string;
  },
  DevSkills: {
    first: string;
    second: string;
    third: string;
  },
  enjoyUsing: string;
  opinionAndUsage: string;
  achievements: string;
}

export interface ReducerState {
  currentLan: CurrentLan;
  data: Data;
  labels: Labels;
}
