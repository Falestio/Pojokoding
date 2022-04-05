// https://www.zemna.net/articles/how-to-use-codeblocks-syntax-highlighting-in-nuxtjs-content/

import Prism from 'prismjs';

// Set vue SFC to markdown
Prism.languages.vue = Prism.languages.markup;

export default Prism;
