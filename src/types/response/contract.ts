import { BooleanString } from "../common";
import { CodeDescription, Response } from "./common";

export interface ContractResponse extends Response {
    Result: {
        GP: ContractPartner[]; // Contract Partners
        Referenzen?: References; // References
    };
}

export interface ContractPartner {
    GP: GeneralPartner; // BusinessPartner
    Username?: string; // Username
    Anrede: CodeDescription; // Salutation
    Titel: null | string; // Title
    Name1_Nachname: string; // LastName
    Name2_Vorname: string; // FirstName
    Geburtsdatum: null | string; // BirthDate
    ZweiterVertragspartner: null | unknown; // SecondContractPartner
    Anschrift: Address & {
        // Address
        NameCo: null | string; // CareOfName
        Postfach: null | string; // POBox
    };
    Kontaktdaten: ContactInfo[]; // ContactInformation
    Bonitaet?: number; // CreditRating
    Vertraege: Contract[]; // Contracts
    Vertragsangebote?: unknown[]; // ContractOffers
    Werte: Record<string, unknown>; // Values
}

export interface GeneralPartner {
    Art: string; // Type
    Typ: string; // Type
    ReferenzID: string; // ReferenceID
    Anzeigetext: string; // DisplayText
    Datenherkunftsart: CodeDescription; // DataSourceType
}

export interface Contract {
    VK: {
        ReferenzID: string; // ReferenceID
        Anzeigetext: string; // DisplayText
    };
    Vertragsstatus: CodeDescription; // ContractStatus
    Sparte: CodeDescription; // Division
    Kundenart?: CodeDescription; // CustomerType
    Vertragsbeginn: string; // ContractStart
    Vertragsende: null | string; // ContractEnd
    Zaehlernummer?: string; // MeterNumber
    Jahresverbrauch?: number; // AnnualConsumption
    Produktname?: string; // ProductName
    AngebotGueltigAb?: string; // OfferValidFrom
    AnzahlUngeleseneKundendokumente: null | unknown; // UnreadCustomerDocumentsCount
    Lieferstelle: {
        // DeliveryPoint
        MarktlokationsId: string; // MarketLocationID
        Adresse: Address; // Address
    };
    AbweichenderRechnungsempfaenger?: null | unknown; // DifferentBillRecipient
    Vertragszeitscheiben?: ContractPeriod[]; // ContractTimeSlices
    Zaehlerdaten?: MeterData; // MeterData
    Werte: ContractValues; // Values
    DokumentenVersandArt?: string; // DocumentDispatchMethod
    Produktwechselangebote?: unknown[]; // ProductChangeOffers
}

export interface ContractPeriod {
    ZeitscheibeVon: string; // TimeSliceFrom
    ZeitscheibeBis: null | string; // TimeSliceTo
    RelevanteZeitscheibe: boolean; // RelevantTimeSlice
    ZeitscheibenGrund: CodeDescription; // TimeSliceReason
    ProduktName: string; // ProductName
    ProduktCode: string; // ProductCode
    ProduktTyp: string; // ProductType
    ProduktBeschreibung: string; // ProductDescription
    Preisgarantie: Warranty; // PriceWarranty
    Preiszeitscheiben: PricePeriod[]; // PriceTimeSlices
    Fristen: Record<
        // Deadlines
        | "Vertragslaufzeit" // ContractDuration
        | "Kuendigungsfrist" // NoticePeriod
        | "Folgelaufzeit" // Follow-upDuration
        | "Widerrufsfrist" // WithdrawalPeriod
        | "Zahlungsziel" // PaymentTerm
        | "KuendigungZum" // TerminationTo
        | "Bindefrist", // BindingPeriod
        TimeLimit
    >;
    Bonussteuerung: BonusControl; // BonusControl
    Inhalte: ContractReferenceContent; // Contents
    Werte: ContractPeriodValues; // Values
}

export interface Warranty {
    Anzahl?: number; // Number
    Code: string; // Code
    Anzeigetext: string; // DisplayText
    Label: string; // Label
}

export interface PricePeriod {
    PreiszeitscheibeVon: string; // PriceTimeSliceFrom
    PreiszeitscheibeBis: null | string; // PriceTimeSliceTo
    RelevanteZeitscheibe: boolean; // RelevantTimeSlice
    ZeitscheibenGrund: CodeDescription; // TimeSliceReason
    MwSt: number; // VAT (Value Added Tax)
    Preisstaffel: PriceStep[]; // PriceTier
}

export type Unit = null | CodeDescription | "kWh"; // Unit

export interface PriceStep {
    PSTCode: string; // PriceStepCode
    Energiemenge: EnergyAmount; // EnergyAmount
    RelevanteStaffel: boolean; // RelevantTier
    Einmalpreis: NettoBrutto & {
        // OneTimePrice
        Einheit: Unit; // Unit
    };
    Verbrauchspreis: ConsumptionPrice; // ConsumptionPrice
    GrundpreisMonat: NettoBrutto; // BasePriceMonth
    GrundpreisJahr: NettoBrutto; // BasePriceYear
    MaxPreisVario: null | unknown; // MaxPriceVario
}

export interface EnergyAmount {
    Von: number; // From
    Bis: number; // To
    Einheit: Unit; // Unit
    Anzeigetext: string; // DisplayText
}

export interface ConsumptionPrice {
    Verbrauchspreis: NettoBrutto; // ConsumptionPrice
    VerbrauchspreisHT: null | NettoBrutto; // HighTariffConsumptionPrice
    VerbrauchspreisNT: null | NettoBrutto; // LowTariffConsumptionPrice
}

export interface BonusControl {
    BSCode: string; // BonusControlCode
    Bonuswerte: BonusValue[]; // BonusValues
    Inhalte: ContractReferenceContent; // Contents
}

export interface BonusValue {
    Name: string; // Name
    Einheit: Unit; // Unit
    MwSt: number; // VAT (Value Added Tax)
    Staffel: BonusStep[]; // Tier
    Status: CodeDescription; // Status
    Verrechnet: null | unknown; // Settled
    Verrechnungsdatum: null | unknown; // SettlementDate
    VerrechnetMit: null | string; // SettledWith
    Inhalte: ContractReferenceContent; // Contents
}

export interface BonusStep {
    BonusID: string; // BonusID
    StaffelVon: number; // TierFrom
    StaffelBis: number; // TierTo
    Bonuswert: NettoBrutto; // BonusValue
    RelevanteStaffel: boolean; // RelevantTier
}

export interface ContractPeriodValues {
    BONITAET: string; // CreditRating
    DOKUMENTENVERSANDART: string; // DocumentDispatchMethod
    IST_SCHREIBEN_VERTRAGSBINDUNG: BooleanString; // IsContractualBindingLetter
    SPANNUNGSEBENE: string; // VoltageLevel
    BENUTZUNGSSTUNDEN: string; // UsageHours
    ZAEHLERART: string; // MeterType
    VERBRAUCH_MIN: string; // ConsumptionMin
    VERBRAUCH_MAX: string; // ConsumptionMax
    ENDE_PREISGARANTIE: string; // EndOfPriceWarranty
}

export interface MeterData {
    Jahresverbrauch: number; // AnnualConsumption
    Zaehlernummer: string; // MeterNumber
    Zaehlerart: CodeDescription; // MeterType
    IstRLM: boolean; // IsRLM (Remote Load Management)
    OffenerAbleseauftrag: null | unknown; // OpenReadingOrder
}

export interface ContractValues {
    NETZNUMMER?: string; // NetworkNumber
    VERTRAG_AB_ALT?: string; // ContractFromOld
    DOKUMENTENVERSANDART?: string; // DocumentDispatchMethod
    NAECHSTE_RECHNUNG?: string; // NextBill
    ENDE_PREISGARANTIE?: string; // EndOfPriceWarranty
    IST_NATUR?: BooleanString; // Is Natural Gas?
    IST_GRUNDVERSORGUNG?: BooleanString; // Is Basic Supply?
    IST_SPOT?: BooleanString;
    IST_RLM?: BooleanString;
    IST_IMS?: BooleanString;
}

export type TimeLimit = {
    Anzahl?: number; // Number
    Code: string; // Code
    Anzeigetext: string; // DisplayText
    Label: string; // Label
};

export type ContractReferenceContent = null | {
    // Contents
    TextReferenzIds: null | string[]; // TextReferenceIds
    DokumenteReferenzIds: null | string[]; // DocumentReferenceIds
    MedienReferenzIds: null | string[]; // MediaReferenceIds
    ParameterReferenzIds: null | string[]; // ParameterReferenceIds
    ContentReferenzIds: null | string[]; // ContentReferenceIds
    SteuerelementeReferenzIds: null | string[]; // ControlElementReferenceIds
};

export interface ReferenceItem {
    ReferenzID: string; // ReferenceID
}

export type ReferenceItemContent = {
    Kurztext: string; // ShortText
    Langtext?: string; // LongText
    Hauptkategorie: null | string; // MainCategory
    Unterkategorie: null | string; // SubCategory
    Properties: Record<string, unknown>; // Properties
};

export type ReferenceItemLinkedContent = ReferenceItemContent & {
    ID: {
        SystemId: string; // SystemID
        DateiId: string; // FileID
    };
    Name: string; // Name
    Linkname: string; // LinkName
    Dateierweiterung: string; // FileExtension
    Groesse: number; // Size
};

export interface ReferenceDocument extends ReferenceItem {
    Dokument: ReferenceItemLinkedContent; // Document
}

export interface ReferenceText extends ReferenceItem {
    Text: ReferenceItemContent & {
        ID: string; // ID
    };
}

export interface ReferenceMedia extends ReferenceItem {
    Medium: ReferenceItemLinkedContent; // Medium
}

export interface ReferenceParameter extends ReferenceItem {
    Parameter: Omit<ReferenceItemContent, "Kurztext" | "Langtext"> & {
        Name: string; // Name
        Wert: string; // Value
        Datentyp: "BOOLEAN" | "STRING" | "VARCHAR"; // DataType
    };
}

export interface References {
    Dokumente: ReferenceDocument[]; // Documents
    Texte: ReferenceText[]; // Texts
    Medien: ReferenceMedia[]; // Media
    Parameter: ReferenceParameter[]; // Parameters
    Content: unknown[]; // Content
    Steuerelemente: unknown[]; // ControlElements
}

export type Address = {
    Strasse: string; // Street
    Hausnummer: string; // HouseNumber
    PLZ: string; // PostalCode
    Ort: string; // City
    Land: string; // Country
};

export type ContactInfoEmail = {
    Code: "EMAILADRESSE"; // EMAILADDRESS
    Anzeigetext: "E-Mailadresse"; // EmailAddress
    Wert: string; // Value
};

export type ContactInfoMobile = {
    Code: "MOBILENUMMER"; // MOBILEPHONE
    Anzeigetext: "Mobilenummer"; // MobileNumber
    Wert: string; // Value
};

export type ContactInfoTelephone = {
    Code: "TELEFONNUMMER"; // TELEPHONE
    Anzeigetext: "Telefonnummer"; // TelephoneNumber
    Wert: string; // Value
};

export type ContactInfo = ContactInfoEmail | ContactInfoMobile | ContactInfoTelephone;

export type NettoBrutto = {
    Netto: null | number; // Net
    Brutto: null | number; // Gross
};
