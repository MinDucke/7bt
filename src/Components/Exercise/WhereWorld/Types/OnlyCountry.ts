export interface OnlyCountryTS {
  name: {
    common: string;
    // nativeName: { common: string}
  };
  population: number;
  region: string;
  subregion: string;
  capital: any;
  tld: string;
  currencies:  any
    //  {
    //   name: string;
    // symbol: string;
    //  }
  ;
  // nativeName:any

  languages: string
   
  ;
  flags: string;
  borders: [string];
}
