'use babel';

const DEV = atom.devMode || true;

const NAME = {};
NAME.toString = () => 'Tree View Search Bar';

NAME.kebab = {};
NAME.kebab.toString = () => 'tree-view-search-bar';

export default {
    DEV,
    NAME,
};
