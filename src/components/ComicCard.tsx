import React, { FC, useState, useEffect } from 'react';
import { Comic } from '../interfaces/comic';
import { IonImg, IonCard, IonCardTitle, IonCardSubtitle, IonCardHeader, IonCardContent, IonButton, IonIcon } from '@ionic/react';
import { star, starOutline } from 'ionicons/icons';
import * as utils from '../util';

type Props = {
    comic: Comic;
}

const ComicCard: FC<Props> = (props): JSX.Element => {
    const { comic } = props;
    const [isFavourite, setIsFavourite] = useState(false);

    const checkFavourite = (): void => {
        utils.checkFavourite(comic.id).then((value: boolean) => {
            setIsFavourite(value);
        });
    }


    useEffect(() => {
        checkFavourite();
    });

    return (
        <IonCard>

            <div
                style={{
                    height: '250px',
                    overflow: 'hidden',
                }}
            >
                <IonImg
                    src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
                />
            </div>

            <IonCardHeader>
                <IonCardSubtitle>
                    {comic.title}
                </IonCardSubtitle>
                <IonCardTitle>
                    <h3>
                        {comic.series.name}
                    </h3>
                </IonCardTitle>

            </IonCardHeader>

            <IonCardContent>
                <IonButton
                    onClick={(): void => {
                        utils.updateFavourites(comic).finally(() => {
                            checkFavourite();
                        });
                    }}
                >
                    <IonIcon
                        icon={(isFavourite) ? star : starOutline} color="light" />
                    {(isFavourite)
                        ? 'Remove'
                        : 'Add'
                    }
                </IonButton>
            </IonCardContent>

        </IonCard>
    );
}

export default ComicCard;
