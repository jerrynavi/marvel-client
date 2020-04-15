import React, { FC, useState, useEffect } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonSpinner, IonGrid, IonRow, IonCol } from '@ionic/react';
import './Tab1.css';
import ComicCard from '../components/ComicCard';
import { Comic } from '../interfaces/comic';
import { getComics } from '../services/api';

const Tab1: FC = () => {

  const [comics, setComics] = useState(null as Comic[] | null);
  const [loading, setLoading] = useState(false);

  const fetchComics = () => {
    setLoading(true);

    getComics().then((response) => {
      if (response && response.results) {
        setComics(response.results);
      }
    }).finally(() => {
      setLoading(false);
    });
  };

  useEffect(() => {
    fetchComics();
  }, [])

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        {(loading) && (
          <div className="ion-text-center ion-padding">
            <IonSpinner name="crescent" />
          </div>
        )}

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

export default Tab1;
