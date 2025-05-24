import { Injectable } from '@angular/core';

interface FootballRule {
  description: string;
}

interface Tournament {
  name: string;
  frequency: string;
}

@Injectable({
  providedIn: 'root'
})
export class FootballDataService {
  private footballData = {
    title: 'Футбол',
    history: 'Футбол в современном виде появился в XIX веке в Англии. В 1863 году была создана Футбольная ассоциация, разработавшая первые официальные правила игры.',
    rules: [
      { description: 'Играют две команды по 11 человек.' },
      { description: 'Матч длится 90 минут (два тайма по 45 минут).' },
      { description: 'Гол засчитывается, если мяч полностью пересёк линию ворот.' },
      { description: 'Штрафные удары, пенальти и офсайды регулируют ход игры.' }
    ],
    tournaments: [
      { name: 'Чемпионат мира по футболу (ФИФА)', frequency: 'раз в 4 года' },
      { name: 'Лига чемпионов УЕФА', frequency: 'крупнейший европейский клубный турнир' },
      { name: 'Кубок Америки', frequency: 'главный турнир для Южной Америки' }
    ]
  };

  getFootballData() {
    return this.footballData;
  }
}