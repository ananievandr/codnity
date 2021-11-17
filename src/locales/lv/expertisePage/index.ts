import { indusriesList } from './industries';

export const expertisePage = {
  expertise: {
    welcome: {
      header: 'Mēs protam to, kas dos pozitīvu pienesumu tavam biznesam',
    },
    tools: {
      header: 'Zināšanas un rīki',
      subHeader:
        'Izstrādes procesā lietojam rīkus un zināšanas, kas palīdz sasniegt iecerēto sekmīgi un klientam saprotami.',
    },
    technologies: {
      header: 'Plašs tehnologiju klāsts',
      subHeader:
        'Gadu gaitā uzkrātā web un mobilās izstrādes pieredze mums palīdz konsultēt klientu un piedāvāt piemērotāko tehnoloģiju un risinājumu kopumu.',
    },
    industries: {
      header: 'Pārbaudītu zināšanu nozares',
      ...indusriesList,
    },
  },
};
