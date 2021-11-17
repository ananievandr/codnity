import { mainPageServices } from './services';

export const mainPage = {
  main: {
    ...mainPageServices,
    welcome: {
      header: 'Mēs izstrādājam jaunākos programatūras un digitālo produktu risinājumus ambicioziem klientiem',
      button: 'Pieteikties bezmaksas konsultācijai',
    },
    development: {
      header: 'Mūsu programmatūras izstrāde izceļas ar kvalitāti',
      subHeader:
        'Mums darbs pie tava projekta ietver UX/UI dizainu, programmatūras izstrādi, testēšanu, atbalstu un uzturēšanu. Mūsu programmatūra - un vienlaikus tavs projekts -vienmēr ir tehnoloģiski jauni.',
    },
    stats: {
      header: 'Esam priecīgi būvēt nākotni',
      list: [
        {
          content: 'Start-up projekti',
        },
        {
          content: 'Projekti mazajiem uzņēmumiem',
        },
        {
          content: 'Projekti vidēja izmēra uzņēmumiem',
        },
      ],
    },
    discuss: {
      header: 'Izstāsti mums savas idejas',
      button: 'Nosūtīt ziņu',
      name: 'Tavs vārds',
      namePlaceholder: 'Vārds',
      phone: 'Telefons',
      phonePlaceholder: 'Tavs telefons',
      email: 'Tavs e-pasts',
      emailPlaceholder: 'E-pasts',
      attachFiles: 'Pievieno failus',
      selectFiles: 'Izvēlēties failus',
      message: 'Ziņa/jautājums',
      messagePlaceholder: 'Rakstīt ziņu',
      privacyPolicy1: 'Dodu atļauju Codnity apstrādāt manus personas datus atbilstoši',
      privacyPolicy2: 'privātuma noteikumiem',
      nda: 'Saņemt Vienošanos par informācijas neizpaušanu',
    },
  },
};
