import { getActivePinia, type Pinia, type Store } from 'pinia'


export const removePinia = () => {

    interface ExtendedPinia extends Pinia {
        _s: Map<string, Store>;
    }

    const pinia = getActivePinia() as ExtendedPinia;
    if (!pinia) {
      throw new Error("There is no stores");
    }
    
    pinia._s.forEach((store) => store.$reset())
}