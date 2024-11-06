import * as Types from "../../../src/types";

export const mockMeterReadingsResponse: Types.MeterReadingResponse = {
    ParentLogId: "parent-log-id",
    LogId: "log-id",
    StatusCode: "OK",
    Meldungen: [],
    Result: {
        Zaehler: [
            {
                Zaehlernummer: "1234567890",
                Zaehlerart: {
                    Code: "DREHKOLBENZAEHLER",
                    Anzeigetext: "Drehkolbenzähler",
                },
                Sparte: {
                    Code: "STROM",
                    Anzeigetext: "Strom",
                },
                Zaehlwerk: [
                    {
                        Zaehlwerksart: {
                            Code: "ARBEITSZAEHLER",
                            Anzeigetext: "Arbeitszähler",
                        },
                        Zaehlerstand: [
                            {
                                Ableseart: {
                                    Code: "SELBSTABLESUNG_ONLINE",
                                    Anzeigetext: "Selbstablesung online",
                                },
                                Ablesedatum: "2024-01-01",
                                Ablesegrund: {
                                    Code: "ZWISCHENABLESUNG",
                                    Anzeigetext: "Zwischenablesung",
                                },
                                Status: {
                                    Code: "PLAUSIBEL",
                                    Anzeigetext: "plausibel",
                                },
                                Verbrauch: 100,
                                Zaehlerstand: 1000,
                            },
                        ],
                    },
                ],
            },
        ],
    },
    OffenerAbleseauftrag: null,
    Jahresverbraeuche: null,
};
