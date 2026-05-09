import Renderer from './render.js';
import Updater from './updater.js';

import HomeTemplate from '../templates/home.js';
import AboutTemplate from "../templates/about.js";
import ServicesTemplate from "../templates/services.js";
import ContactTemplate from "../templates/contact.js";

const styles = await fetch('./assets/styles.json').then(r => r.json());
const basic_info = await fetch('./assets/info.json').then(r => r.json());

const templates = {
  home: HomeTemplate,
  about: AboutTemplate,
  services: ServicesTemplate,
  contact: ContactTemplate
};

const updater = new Updater(basic_info);

const renderer = new Renderer(styles, templates, updater);

renderer.init();

