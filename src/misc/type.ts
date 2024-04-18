export type Data = {
    id: string;
    name: string;
    brewery_type: string;
    address_1: string;
    address_2: string | null;
    address_3: string | null;
    city: string;
    state_province: string;
    postal_code: string;
    country: string;
    longitude: string;
    latitude: string;
    phone: string;
    website_url: string;
    state: string;
    street: string;
};

export type BreweryListProps = { 
    breweries: Data[];
};

export type SearchFieldProps = {
    onSearch: (query: string) => void;
};

export type BreweryCardProps = { 
    brewery: Data;
};

export type SortFetchParams = { 
    type?: string;
    page?: number;
};

export type BrewerySortTypeProps = {
    onSelectBrewerySortType: (type: string) => void;
};

export type BreweryDetailProps = { 
    id: string | undefined;
};

export type Form = {
    username: string;
    email: string;
    phone?: string;
    feedback: string;
  };
   