export interface CountryTS{
    // flags: any
    region: string
    name: {
      
        common: string
    }
    population: number
    subregion: string
    capital:any
    // nativeName:any
    tld: string
    flags:  {
        png: string
    }
    currencies: [{
        
           name: string;
           symbol: string
         
       }]
       ;
    languages: string

    borders: [
        string
    ]
}