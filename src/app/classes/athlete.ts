import {Medals} from './medals';
export interface Athlete {
  name: string;
  sex: string;
  country: string;
  events: AthleteEvent [];
  medals: Medals
}

export interface AthleteEvent {
  name: string;
  medal: string;
}
