import { CodeDescription, Response } from "./common";

export type MeterReadingDetail = {
    Ableseart: CodeDescription | { Code: "SELBSTABLESUNG_ONLINE"; Anzeigetext: "Selbstablesung online" }; // ReadingType
    Ablesedatum: string; // ReadingDate
    Ablesegrund:
        | CodeDescription
        | { Code: "ZWISCHENABLESUNG"; Anzeigetext: "Zwischenablesung" }
        | { Code: "TURNUSABLESUNG"; Anzeigetext: "Turnusablesung" }
        | { Code: "EINZUGABLESUNG"; Anzeigetext: "Einzugsablesung" }; // ReadingReason
    Status: CodeDescription | { Code: "PLAUSIBEL"; Anzeigetext: "plausibel" }; // Status
    Verbrauch: number | null; // Consumption
    Zaehlerstand: number; // MeterReading
};

export type MeterReading = {
    Zaehlwerksart: CodeDescription; // MeterType
    Zaehlerstand: MeterReadingDetail[]; // MeterReadingDetail
};

type Meters = {
    Zaehlernummer: string; // MeterNumber
    Zaehlerart: CodeDescription; // MeterType
    Sparte: CodeDescription; // Division
    Zaehlwerk: MeterReading[]; // Meter
};

export interface MeterReadingResponse extends Response {
    Result: {
        Zaehler: Meters[]; // Meters
    };
    OffenerAbleseauftrag: unknown | null; // OpenReadingOrder
    Jahresverbraeuche: unknown | null; // AnnualConsumption
}
