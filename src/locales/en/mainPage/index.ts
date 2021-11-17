import { mainPageServices } from './services';

export const mainPage = {
  main: {
    ...mainPageServices,
    welcome: {
      header: 'We develop state of art [software] and [digital products] for ambitious companies',
      button: 'get free consultation',
    },
    development: {
      header: 'We excel at quality [software development]',
      subHeader:
        'Our work on the project includes UX/UI design, software development, testing, support, and maintance. We build software in time, applying the latest technologies that optimize our work processes.',
    },
    stats: {
      header: 'We’re excited about [building the future]',
      list: [
        {
          content: 'Projects for startups',
        },
        {
          content: 'Projects for small businesses',
        },
        {
          content: 'Projects for medium-sized enterprises',
        },
      ],
    },
    discuss: {
      header: 'Let’s discuss [your ideas]',
      button: 'send message',
      name: 'Your Name',
      namePlaceholder: 'Name',
      phone: 'Phone',
      phonePlaceholder: 'Your phone number',
      email: 'Your Email',
      emailPlaceholder: 'Email',
      attachFiles: 'Attach files',
      selectFiles: 'Select your files',
      message: 'Message/Question',
      messagePlaceholder: 'Write your message',
      privacyPolicy1: 'I conset to Codnity processing my personal data according to the',
      privacyPolicy2: 'Privacy Policy',
      nda: 'Get NDA',
    },
  },
};
