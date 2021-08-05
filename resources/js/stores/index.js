import homeStore from "./home";
import Vuex from 'vuex';

const stores = new Vuex.Store({
    modules: {
        home: homeStore,
    }
});

export default stores;
