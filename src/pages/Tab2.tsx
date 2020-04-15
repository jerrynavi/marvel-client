import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonGrid, IonRow, IonCol, useIonViewWillEnter } from '@ionic/react';
import './Tab2.css';
import { Comic } from '../interfaces/comic';
import { getFavourites } from '../util';
import ComicCard from '../components/ComicCard';

const Tab2: React.FC = () => {

  const [comics, setComics] = useState(null as Comic[] | null);

  const loadComics = (): void => {
    getFavourites().then((result) => {
      if (result) {
        setComics(result);
      }
    })
  };

  useIonViewWillEnter(() => {
    loadComics();
  });

  return (
    <IonPage>

      <IonHeader>
        <IonToolbar>
          <IonTitle>Favourites</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>

        {(comics) && (
          <IonGrid>
            <IonRow>
              {comics.map((comic) => (
                <IonCol key={comic.id} sizeXs="12" sizeSm="6" sizeMd="4" sizeLg="3" sizeXl="2">
                  <ComicCard comic={comic} />
                </IonCol>
              ))}
            </IonRow>
          </IonGrid>
        )}
      </IonContent>

    </IonPage>
  );
};

export default Tab2;
