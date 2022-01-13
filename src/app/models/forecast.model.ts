export interface ForecastModel {
    Date: string
    Day: {Icon: number, IconPhrase: string, HasPrecipitation: boolean, LocalSource: {Id: number,
        Name: string,
        WeatherCode: string}}
    EpochDate: number
    Link: string
    MobileLink: string
    Night: {Icon: number, IconPhrase: string, HasPrecipitation: boolean, LocalSource: {Id: number,
        Name: string,
        WeatherCode: string}}
    Sources?: string
    Temperature: {
        Minimum: {
            Unit: string,
            UnitType: number,
            Value: number
            }
        Maximum: {     
            Unit: string,
            UnitType: number,
            Value: number
            }
    }
}
