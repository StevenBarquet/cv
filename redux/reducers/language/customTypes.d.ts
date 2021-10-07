export interface Action {
  type: string;
}

export type CurrentLan= 'english' | 'spanish';

export interface Data {
  jobWanted: string;
  introduction: string;
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
    others: string;
  }
}

export interface ReducerState {
  currentLan: CurrentLan;
  data: Data;
  labels: Labels;
}
