import { design } from './design';
import { ideationAndEvaluation } from './ideationAndEvaluation';
import { supportAndManagement } from './supportAndManagement';
import { webDevelopment } from './webDevelopment';

export const servicesPage = {
  servicesPage: {
    ...ideationAndEvaluation,
    ...design,
    ...webDevelopment,
    welcome: {
      header: 'Mūsu pakalpojumi',
      subHeader: 'Codnity Group komanda ir talantīgi Latvijas datorinženieri, kas digitlizēs jebkura lieluma uzņēmumu.',
    },
    backend: {
      header: {
        title: 'Iekšējās sistēmas izstrāde un uzņēmuma aplikācijas',
        subTitle:
          'Ir daudz gatavu uzņēmuma klientu un satura vadības rīku, bet tev starp tiem nav jāmeklē; nekas neder tik labi kā tas, as veidots tieši tev. Mēs radīsim risinājumu tava uzņēmuma vajadzībām.',
      },
    },
    banking: {
      header: {
        title: 'Banku tehnoloģijas',
        subTitle:
          'Finansu tehnoloģijas ir mūsu IT pakalpojumu un produktu specialitāte. Kompānijas dibinātāju pieredze banku un IT lietās paralēli uzkrāta teju trīs desmitos gadu. Tas ļauj mūsu piedāvājumā būt visiem finansu tehnoloģiju risinājumiem. Mūsu produkti ir lietotājam draudzīgi, nozarē inovatīvi un klientam izdevigi. Mēs koncentrējamies uz tava uzņēmuma vajadzībām, tā vietu tirgū un konkurentu vidū. Konsultējam ekspertu līmenī.',
      },
    },
    appDevelopment: {
      header: {
        title: 'Aplikāciju izstrāde',
        subTitle:
          'Ikvienam kabatā ir mobilās aplikācijas. Tur, tuvāk klientam, var būt arī tavs uzņēmums. Mūsu izstrādātās mobilās aplikācijas patīk un noder patērētājam. Viņiem necelsies roka tās izdzēst.',
      },
      services: {
        column1: [
          {
            cellContent: 'iOS',
          },
          {
            cellContent: 'Android',
          },
        ],
        column2: [
          {
            cellContent: 'Starpplatformu izstrāde',
          },
        ],
      },
    },
    ...supportAndManagement,
    platformDevelopment: {
      header: {
        title: 'Platformu izstrāde',
        subTitle:
          'Tirgus un darba platformas maina pasauli. Divas puses savest kopā darījumā kļūs ērtāk un vieglāk. Mēs izstrādāsim tev nepieciešamo platformu.',
      },
    },
  },
};
