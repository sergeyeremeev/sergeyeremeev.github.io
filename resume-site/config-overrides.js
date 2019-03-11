const rewireStyledComponents = require('react-app-rewire-styled-components');

/* config-overrides.js */
module.exports = function override(config, env) {
    /* eslint-disable no-param-reassign */
    config = rewireStyledComponents(config, env);
    /* eslint-enable no-param-reassign */
    return config;
};
