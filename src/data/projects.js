import react from '../assets/imgs/react.svg';
import nodejs from '../assets/imgs/nodejs.svg';
import redux from '../assets/imgs/redux.svg';
import router from '../assets/imgs/react-router.svg';
import sequelize from '../assets/imgs/sequelize.svg';
import postgresql from '../assets/imgs/postgresql.svg';
import bootstrap from '../assets/imgs/bootstrap.svg';
import RickAndMortyWiki from '../assets/imgs/RickAndMortyWiki.png';
import CRUD from '../assets/imgs/CRUD.png';
import Pokedex from '../assets/imgs/Pokedex.png';
import Ecommerce from '../assets/imgs/Ecommerce.png';
import AcademloMeals from '../assets/imgs/AcademloMeals.PNG';
import AcademloStore from '../assets/imgs/AcademloStore.png';

export const projects = [
  {
    id: 1,
    name: 'Rick and Morty Wiki',
    image: RickAndMortyWiki,
    category: 1,
    technologies: [react, router],
    urlApp: 'https://sandres-rick-and-morty-wiki.netlify.app',
    urlRepository: 'https://github.com/Sandres24/rick-and-morty-wiki-app.git',
  },
  {
    id: 2,
    name: 'Academlo Meals',
    image: AcademloMeals,
    category: 2,
    technologies: [nodejs, sequelize, postgresql],
    urlApp: '',
    urlRepository: 'https://github.com/Sandres24/academlo_meals_app.git',
  },
  {
    id: 3,
    name: 'CRUD',
    image: CRUD,
    category: 1,
    technologies: [react, router, redux, bootstrap],
    urlApp: 'https://sandres-users-crud-app.netlify.app',
    urlRepository: 'https://github.com/Sandres24/users-crud-app.git',
  },
  {
    id: 4,
    name: 'Academlo Store',
    image: AcademloStore,
    category: 2,
    technologies: [nodejs, sequelize, postgresql],
    urlApp: '',
    urlRepository: 'https://github.com/Sandres24/academlo_store_app.git',
  },
  {
    id: 5,
    name: 'Ecommerce',
    image: Ecommerce,
    category: 1,
    technologies: [react, router, redux],
    urlApp: 'https://sandres-e-commerce-app.netlify.app',
    urlRepository: 'https://github.com/Sandres24/e-commerce-app.git',
  },
  {
    id: 6,
    name: 'Pokedex',
    image: Pokedex,
    category: 1,
    technologies: [react, router, redux],
    urlApp: 'https://sandres-pokedex-app.netlify.app',
    urlRepository: 'https://github.com/Sandres24/pokedex-app.git',
  },
];
