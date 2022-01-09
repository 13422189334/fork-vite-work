import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { store, key } from './store';
import { directive } from '/@/utils/directive';
import { i18n } from '/@/i18n/index';
import other from '/@/utils/other';

import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import '/@/theme/index.scss';
import mitt from 'mitt';
import screenShort from 'vue-web-screen-shot';
import VueGridLayout from 'vue-grid-layout';

const app = createApp(App);

directive(app);
other.elSvg(app);

app
	.use(router)
	.use(store, key)
	.use(ElementPlus, { i18n: i18n.global.t, size: other.globalComponentSize })
	.use(i18n)
	.use(screenShort, { enableWebRtc: false })
	.use(VueGridLayout)
	.mount('#app');

// Vue2.x使用EventBus进行组件通信，而Vue3.x推荐使用mitt.js。vue3.x的全局实例，要挂载在config.globalProperties上
app.config.globalProperties.mittBus = mitt();
