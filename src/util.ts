import { Plugins } from '@capacitor/core';
import { Comic } from './interfaces/comic';

const { Storage, Toast } = Plugins;

export const updateFavourites = async (comic: Comic): Promise<void> => {
    
    const saved = await Storage.get({ key: 'savedFavourites' });
    const favourites: Comic[] | null = (saved && saved.value)
        ? JSON.parse(saved.value)
        : null;

    if (!favourites) {
        const comics = [comic];
        await Storage.set({
            key: 'savedFavourites',
            value: JSON.stringify(comics),
        });
        return Toast.show({
            text: 'Added to favourites',
        });
    }

    const copyOfFavourites = favourites.slice();
    const { id } = comic;
    const isSavedIndex = copyOfFavourites.findIndex((c) => c.id === id);

    if (isSavedIndex !== -1) {
        copyOfFavourites.splice(isSavedIndex, 1);
        await Storage.set({
            key: 'savedFavourites',
            value: JSON.stringify(copyOfFavourites),
        });
        return Toast.show({
            text: 'Removed from favourites',
        });
    } else {
        copyOfFavourites.unshift(comic);
        await Storage.set({
            key: 'savedFavourites',
            value: JSON.stringify(copyOfFavourites),
        });
        return Toast.show({
            text: 'Added to favourites',
        });
    }
};


export const getFavourites = async (): Promise<Comic[] | null> => {
    const saved = await Storage.get({
        key: 'savedFavourites',
    });
    return (saved && saved.value)
        ? JSON.parse(saved.value)
        : null;
};

export const checkFavourite = async (id: number): Promise<boolean> => {
    const saved = await Storage.get({
        key: 'savedFavourites',
    });
    const favourites: Comic[] | null = (saved && saved.value)
        ? JSON.parse(saved.value)
        : null;

    if (favourites) {
        const isSavedIndex = favourites.findIndex((c) => c.id === id);
        if (isSavedIndex !== -1) {
            return true;
        }
    }
    return false;
};
