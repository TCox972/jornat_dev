import '@fortawesome/fontawesome-free/css/all.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import Vue from 'vue';
import Vuetify from 'vuetify/lib';

import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify);

export default new Vuetify({
    icons: {
        iconfont: 'fa' || 'md' || 'mdi'
    },
    theme: {
        themes: {
            light: {
                primary: colors.lightGreen.darken1,
                secondary: colors.shades.white,
                tertiary: colors.grey.darken4,
                background: colors.grey.lighten2
            }
        }
    }
});
