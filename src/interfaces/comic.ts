interface TextObject {
    type: string;
    language: string;
    text: string;
}

interface Url {
    type: string;
    url: string;
}

interface SeriesSummary {
    resourceURI: string;
    name: string;
}

interface ComicSummary {
    resourceURI: string;
    name: string;
}

interface ComicDate {
    type: string;
    date: Date;
}

interface ComicPrice {
    type: string;
    price: number;
}

interface Image {
    path: string;
    extension: string;
}

interface CreatorList {
    available: number;
    returned: number;
    collectionURI: string;
    items: CreatorSummary[];
}

interface CreatorSummary {
    resourceURI: string;
    name: string;
    role: string;
}

interface CharacterList {
    available: number;
    returned: number;
    collectionURI: string;
    items: CharacterSummary[];
}

interface CharacterSummary {
    resourceURI: string;
    name: string;
    role: string;
}

interface StoryList {
    available: number;
    returned: number;
    collectionURI: string;
    items: StorySummary[];
}

interface StorySummary {
    resourceURI: string;
    name: string;
    type: string;
}

interface EventList {
    available: number;
    returned: number;
    collectionURI: string;
    items: EventSummary[];
}

interface EventSummary {
    resourceURI: string;
    name: string;
}

export interface Comic {
    id: number;
    digitalId: number;
    title: string;
    issueNumber: number;
    variantDescription: string;
    description: string;
    modified: Date;
    isbn: string;
    upc: string;
    diamondCode: string;
    ean: string;
    issn: string;
    format: string;
    pageCount: number;
    textObjects: TextObject[];
    resourceURI: string;
    urls: Url[];
    series: SeriesSummary;
    variants: ComicSummary[];
    collections: ComicSummary[];
    collectedIssues: ComicSummary[];
    dates: ComicDate[];
    prices: ComicPrice[];
    thumbnail: Image;
    images: Image[];
    creators: CreatorList;
    characters: CharacterList;
    stories: StoryList;
    events: EventList;
}