import * as Types from "../../../src/types";
import { TEST_USERNAME } from "../config";

export const mockContractListResponse: Types.ContractResponse = {
    ParentLogId: "parent-log-id",
    LogId: "log-id",
    StatusCode: "OK",
    Meldungen: [],
    Result: {
        GP: [
            {
                GP: {
                    Art: "KUNDE",
                    Typ: "PERSON",
                    ReferenzID: "test-reference-id",
                    Anzeigetext: "92XXXXXX11",
                    Datenherkunftsart: {
                        Code: "VSAL",
                        Anzeigetext: "VESALES",
                    },
                },
                Username: TEST_USERNAME,
                Anrede: {
                    Code: "0002",
                    Anzeigetext: "Herr",
                },
                Titel: null,
                Name1_Nachname: "User",
                Name2_Vorname: "Test",
                Geburtsdatum: null,
                ZweiterVertragspartner: null,
                Anschrift: {
                    Strasse: "Teststraße",
                    Hausnummer: "1",
                    PLZ: "12345",
                    Ort: "Teststadt",
                    Land: "DE",
                    NameCo: null,
                    Postfach: null,
                },
                Kontaktdaten: [
                    {
                        Code: "EMAILADRESSE",
                        Anzeigetext: "E-Mailadresse",
                        Wert: TEST_USERNAME,
                    },
                    {
                        Code: "TELEFONNUMMER",
                        Anzeigetext: "Telefonnummer",
                        Wert: "+4915111111111",
                    },
                ],
                Vertraege: [
                    {
                        VK: {
                            ReferenzID: "test-contract-id",
                            Anzeigetext: "916XXXXXX231",
                        },
                        Vertragsstatus: {
                            Code: "VERTRAG_AKTIV",
                            Anzeigetext: "Vertrag aktiv",
                        },
                        Sparte: {
                            Code: "GAS",
                            Anzeigetext: "Gas",
                        },
                        Vertragsbeginn: "2024-01-01",
                        Vertragsende: null,
                        Zaehlernummer: "1234567890",
                        Jahresverbrauch: 1000,
                        Produktname: "Test Tarif",
                        AnzahlUngeleseneKundendokumente: null,
                        DokumentenVersandArt: "MAIL",
                        Lieferstelle: {
                            MarktlokationsId: "test-market-location-id",
                            Adresse: {
                                Strasse: "Teststraße",
                                Hausnummer: "1",
                                PLZ: "12345",
                                Ort: "Teststadt",
                                Land: "DE",
                            },
                        },
                        AbweichenderRechnungsempfaenger: null,
                        Vertragszeitscheiben: [],
                        Werte: {
                            NAECHSTE_RECHNUNG: "Derzeit nicht bekannt",
                            ENDE_PREISGARANTIE: "2024-04-06",
                            IST_NATUR: "true",
                            IST_GRUNDVERSORGUNG: "false",
                            IST_SPOT: "false",
                            IST_RLM: "false",
                            IST_IMS: "false",
                        },
                        Produktwechselangebote: [],
                    },
                ],
                Vertragsangebote: [],
                Werte: {},
            },
        ],
    },
};

export const mockContractResponse: Types.ContractResponse = {
    ParentLogId: "parent-log-id",
    LogId: "log-id",
    StatusCode: "OK",
    Meldungen: [],
    Result: {
        GP: [
            {
                GP: {
                    Art: "KUNDE",
                    Typ: "PERSON",
                    ReferenzID: "test-reference-id",
                    Anzeigetext: "92XXXXXX11",
                    Datenherkunftsart: {
                        Code: "VSAL",
                        Anzeigetext: "VESALES",
                    },
                },
                Anrede: {
                    Code: "0002",
                    Anzeigetext: "Herr",
                },
                Titel: null,
                Name1_Nachname: "User",
                Name2_Vorname: "Test",
                Geburtsdatum: null,
                ZweiterVertragspartner: null,
                Anschrift: {
                    NameCo: null,
                    Strasse: "Teststraße",
                    Hausnummer: "1",
                    Postfach: null,
                    PLZ: "12345",
                    Ort: "Teststadt",
                    Land: "DE",
                },
                Kontaktdaten: [
                    {
                        Code: "EMAILADRESSE",
                        Anzeigetext: "E-Mailadresse",
                        Wert: TEST_USERNAME,
                    },
                    {
                        Code: "MOBILENUMMER",
                        Anzeigetext: "Mobilenummer",
                        Wert: "+4915111111111",
                    },
                ],
                Bonitaet: 1,
                Vertraege: [
                    {
                        VK: {
                            ReferenzID: "test-contract-id",
                            Anzeigetext: "916XXXXXX231",
                        },
                        Vertragsstatus: {
                            Code: "VERTRAG_AKTIV",
                            Anzeigetext: "Vertrag aktiv",
                        },
                        Sparte: {
                            Code: "GAS",
                            Anzeigetext: "Gas",
                        },
                        Kundenart: {
                            Code: "PRIVAT",
                            Anzeigetext: "Privat",
                        },
                        Vertragsbeginn: "2023-04-07",
                        Vertragsende: null,
                        AngebotGueltigAb: "2023-04-01",
                        AnzahlUngeleseneKundendokumente: null,
                        Lieferstelle: {
                            MarktlokationsId: "test-market-location-id",
                            Adresse: {
                                Strasse: "Teststraße",
                                Hausnummer: "1",
                                PLZ: "12345",
                                Ort: "Teststadt",
                                Land: "DE",
                            },
                        },
                        AbweichenderRechnungsempfaenger: null,
                        Vertragszeitscheiben: [
                            {
                                ZeitscheibeVon: "2024-05-01",
                                ZeitscheibeBis: null,
                                RelevanteZeitscheibe: true,
                                ZeitscheibenGrund: {
                                    Code: "AKTUELLES_PRODUKT",
                                    Anzeigetext: "Aktuelle Produkt-/Preisdetails",
                                },
                                ProduktName: "Bio12 Gas 15",
                                ProduktCode: "DGH_B12A02",
                                ProduktTyp: "NATUR|ONLINE",
                                ProduktBeschreibung: "Gastarif mit 15% Anteil Biogas für Privatkunden",
                                Preisgarantie: {
                                    Anzahl: 12,
                                    Code: "M",
                                    Anzeigetext: "12 Monate",
                                    Label: "Eingeschränkte Preisgarantie",
                                },
                                Preiszeitscheiben: [
                                    {
                                        PreiszeitscheibeVon: "2024-05-01",
                                        PreiszeitscheibeBis: null,
                                        RelevanteZeitscheibe: true,
                                        ZeitscheibenGrund: {
                                            Code: "AKTUELLES_PRODUKT",
                                            Anzeigetext: "Aktuelle Produkt-/Preisdetails",
                                        },
                                        MwSt: 19,
                                        Preisstaffel: [
                                            {
                                                PSTCode: "PXXP152821",
                                                Energiemenge: {
                                                    Von: 0,
                                                    Bis: 1500000,
                                                    Einheit: "kWh",
                                                    Anzeigetext: "0 - 1.500.000 kWh",
                                                },
                                                RelevanteStaffel: true,
                                                Einmalpreis: {
                                                    Netto: null,
                                                    Brutto: null,
                                                    Einheit: null,
                                                },
                                                Verbrauchspreis: {
                                                    Verbrauchspreis: {
                                                        Netto: 7.98,
                                                        Brutto: 9.49,
                                                    },
                                                    VerbrauchspreisHT: null,
                                                    VerbrauchspreisNT: null,
                                                },
                                                GrundpreisMonat: {
                                                    Netto: 10,
                                                    Brutto: 11.9,
                                                },
                                                GrundpreisJahr: {
                                                    Netto: 120,
                                                    Brutto: 142.8,
                                                },
                                                MaxPreisVario: null,
                                            },
                                        ],
                                    },
                                ],
                                Fristen: {
                                    Vertragslaufzeit: {
                                        Anzahl: 12,
                                        Code: "M",
                                        Anzeigetext: "12 Monate",
                                        Label: "Mindestvertragslaufzeit",
                                    },
                                    Kuendigungsfrist: {
                                        Anzahl: 1,
                                        Code: "M",
                                        Anzeigetext: "1 Monat",
                                        Label: "Kündigungsfrist",
                                    },
                                    Folgelaufzeit: {
                                        Anzahl: 0,
                                        Code: "M",
                                        Anzeigetext: "auf unbestimmte Zeit",
                                        Label: "Vertragsverlängerung",
                                    },
                                    Widerrufsfrist: {
                                        Anzahl: 14,
                                        Code: "T",
                                        Anzeigetext: "14 Tage",
                                        Label: "Widerrufsrecht",
                                    },
                                    Zahlungsziel: {
                                        Anzahl: 14,
                                        Code: "T",
                                        Anzeigetext: "14 Tage",
                                        Label: "Zahlungsziel",
                                    },
                                    KuendigungZum: {
                                        Code: "U",
                                        Anzeigetext: "untermonatlich",
                                        Label: "Nächstmöglicher Kündigungstermin",
                                    },
                                    Bindefrist: {
                                        Anzahl: 18,
                                        Code: "T",
                                        Anzeigetext: "18 Tage",
                                        Label: "Bindefrist",
                                    },
                                },
                                Bonussteuerung: {
                                    BSCode: "BESTAND_P",
                                    Bonuswerte: [
                                        {
                                            Name: "kein Bonus",
                                            Einheit: {
                                                Code: null,
                                                Anzeigetext: null,
                                            },
                                            MwSt: 19,
                                            Staffel: [
                                                {
                                                    BonusID: "BOGP123456",
                                                    StaffelVon: 0,
                                                    StaffelBis: 1500000,
                                                    Bonuswert: {
                                                        Netto: 0,
                                                        Brutto: 0,
                                                    },
                                                    RelevanteStaffel: true,
                                                },
                                            ],
                                            Status: {
                                                Code: "OFFEN",
                                                Anzeigetext: "Offen",
                                            },
                                            Verrechnet: null,
                                            Verrechnungsdatum: null,
                                            VerrechnetMit: null,
                                            Inhalte: {
                                                TextReferenzIds: null,
                                                DokumenteReferenzIds: null,
                                                MedienReferenzIds: null,
                                                ParameterReferenzIds: ["10"],
                                                ContentReferenzIds: null,
                                                SteuerelementeReferenzIds: null,
                                            },
                                        },
                                    ],
                                    Inhalte: null,
                                },
                                Inhalte: {
                                    TextReferenzIds: [
                                        "2",
                                        "3",
                                        "4",
                                        "5",
                                        "6",
                                        "7",
                                        "8",
                                        "9",
                                        "10",
                                        "11",
                                        "12",
                                        "13",
                                        "14",
                                        "15",
                                        "16",
                                        "17",
                                        "18",
                                        "19",
                                        "20",
                                    ],
                                    DokumenteReferenzIds: ["1", "2", "3", "4"],
                                    MedienReferenzIds: ["1"],
                                    ParameterReferenzIds: ["1", "2", "3", "4", "5", "6", "7", "8", "9"],
                                    ContentReferenzIds: null,
                                    SteuerelementeReferenzIds: null,
                                },
                                Werte: {
                                    BONITAET: "20",
                                    DOKUMENTENVERSANDART: "MAIL",
                                    IST_SCHREIBEN_VERTRAGSBINDUNG: "false",
                                    SPANNUNGSEBENE: "NSPO",
                                    BENUTZUNGSSTUNDEN: "0",
                                    ZAEHLERART: "BGZ",
                                    VERBRAUCH_MIN: "0",
                                    VERBRAUCH_MAX: "1500000",
                                    ENDE_PREISGARANTIE: "2024-04-06",
                                },
                            },
                        ],
                        Zaehlerdaten: {
                            Jahresverbrauch: 20100,
                            Zaehlernummer: "1234567890",
                            Zaehlerart: {
                                Code: "ETZ",
                                Anzeigetext: "Eintarifzähler",
                            },
                            IstRLM: false,
                            OffenerAbleseauftrag: null,
                        },
                        Werte: {
                            NETZNUMMER: "107851-5-1-25",
                            VERTRAG_AB_ALT: "2023-04-07",
                            DOKUMENTENVERSANDART: "MAIL",
                            NAECHSTE_RECHNUNG: "Derzeit nicht bekannt",
                        },
                    },
                ],
                Werte: {},
            },
        ],
        Referenzen: {
            Dokumente: [
                {
                    ReferenzID: "1",
                    Dokument: {
                        ID: {
                            SystemId: "APIS",
                            DateiId: "da2784df-9643-430f-b3f1-e4b703e669d3",
                        },
                        Name: "ZERT_106_TÜV_Biogas_bis_31.01.2027",
                        Linkname: "TÜV Zertifikat",
                        Dateierweiterung: "pdf",
                        Kurztext: "ZERT_106_TÜV_Biogas_ab_20241001",
                        Hauptkategorie: "DOKUMENT",
                        Unterkategorie: "ZERTIFIKAT_TUEV",
                        Groesse: 211424,
                        Properties: {},
                    },
                },
                {
                    ReferenzID: "2",
                    Dokument: {
                        ID: {
                            SystemId: "APIS",
                            DateiId: "da2784df-9643-430f-b3f1-e4b703e669d3",
                        },
                        Name: "Widerrufsformular_COMM+NC_Dienstl_Online_05_24",
                        Linkname: "Muster-Widerrufsformular",
                        Dateierweiterung: "pdf",
                        Kurztext: "Widerrufsformular_COMM+NC_Dienstl_Online_05_24",
                        Hauptkategorie: "DOKUMENT",
                        Unterkategorie: "WIDERRUF",
                        Groesse: 43575,
                        Properties: {},
                    },
                },
                {
                    ReferenzID: "3",
                    Dokument: {
                        ID: {
                            SystemId: "APIS",
                            DateiId: "da2784df-9643-430f-b3f1-e4b703e669d3",
                        },
                        Name: "DS_VES_241001",
                        Linkname: "Datenschutzinformationen",
                        Dateierweiterung: "pdf",
                        Kurztext: "DS_VES_241001",
                        Hauptkategorie: "DOKUMENT",
                        Unterkategorie: "DATENSCHUTZ",
                        Groesse: 128139,
                        Properties: {},
                    },
                },
                {
                    ReferenzID: "4",
                    Dokument: {
                        ID: {
                            SystemId: "APIS",
                            DateiId: "da2784df-9643-430f-b3f1-e4b703e669d3",
                        },
                        Name: "Allgemeine Geschäftsbedingungen",
                        Linkname: "Allgemeine Geschäftsbedingungen",
                        Dateierweiterung: "pdf",
                        Kurztext: "AGB_495_Gas_PK_GK_230101",
                        Hauptkategorie: "AGB",
                        Unterkategorie: null,
                        Groesse: 84812,
                        Properties: {},
                    },
                },
            ],
            Texte: [
                {
                    ReferenzID: "1",
                    Text: {
                        ID: "da2784df-9643-430f-b3f1-e4b703e669d3",
                        Kurztext: "DI_TSB_SSB_RF_nsb_PK_GK_NK_01_2019",
                        Langtext:
                            "Als Dankeschön erhalten Sie einen Sofort-Bonus und einen Treue-Bonus. Die Boni werden nur gewährt, wenn Sie nicht unmittelbar vor Lieferbeginn an der vom Vertrag umfassten Lieferstelle von uns mit Energie beliefert werden. Der Sofort-Bonus wird etwa 60 Tage nach Lieferbeginn auf das von Ihnen angegebene Konto ausgezahlt. Die Verrechnung des Treue-Bonus erfolgt einmalig, wenn Sie ununterbrochen 12 Monate ab Lieferbeginn Energie im Rahmen des Liefervertrages bezogen haben. Sofern der Vertrag innerhalb der 12 Monate beendet wird, wird kein Treue-Bonus gewährt. Wird mit Vattenfall danach ein neuer Vertrag mit einer Treue-Bonus-Regelung geschlossen, werden die Treue-Bonus-Zeiten nicht zusammengerechnet. Der Treue-Bonus wird Ihnen nach Ablauf der 12 Monate mit der ersten darauf folgenden Rechnung gutgeschrieben und verrechnet. Kommt der Vertrag aus einem von Ihnen zu vertretenden Grund nicht zustande oder wird der Vertrag während der verbleibenden Mindestvertragslaufzeit aus einem von Ihnen zu vertretenden Grund beendet, müssen Sie den Sofort-Bonus und den Treue-Bonus in voller Höhe an Vattenfall zurückzahlen.",
                        Hauptkategorie: "DI_BONUS",
                        Unterkategorie: "FN_ERKLAERUNG",
                        Properties: {},
                    },
                },
                {
                    ReferenzID: "2",
                    Text: {
                        ID: "da2784df-9643-430f-b3f1-e4b703e669d3",
                        Kurztext: "DI_eingePreisgarantie_12M_GAS_11_24",
                        Langtext:
                            "Für diese Preise gilt eine eingeschränkte Preisgarantie für 12 Monate ab Lieferbeginn. Ausgenommen sind Änderungen der Energiesteuer, der Speicherumlage, der Kosten für den Erwerb und die Abgabe von Emissionszertifikaten nach dem Brennstoffemissionshandelsgesetz (BEHG) sowie der Umsatzsteuer. Ebenfalls ausgenommen sind Preisanpassungen nach § 24 des Energiesicherungsgesetzes (EnSiG) sowie auf Grundlage einer nach § 26 EnSiG erlassenen Verordnung. Ausgenommen sind ferner Preisänderungen, soweit künftig neue Steuern, Abgaben, Umlagen oder sonstige staatlich veranlasste, die Beschaffung, Gewinnung, Erzeugung, Speicherung oder den Verbrauch von Gas sowie die Netznutzung (Übertragung und Verteilung), den Messstellenbetrieb oder die Messung betreffende Mehrbelastungen oder Entlastungen wirksam werden.",
                        Hauptkategorie: "DI_PRODUKT",
                        Unterkategorie: "FN_PREISGARANTIE",
                        Properties: {},
                    },
                },
                {
                    ReferenzID: "3",
                    Text: {
                        ID: "da2784df-9643-430f-b3f1-e4b703e669d3",
                        Kurztext: "DI_Preisbestandteile_GAS_PK_04_24",
                        Langtext: "Preise inkl. 19 % Umsatzsteuer. Geringfügige Rundungsdifferenzen können auftreten.",
                        Hauptkategorie: "DI_PRODUKT",
                        Unterkategorie: "FN_GRUNDPREIS_VERBRAUCHSPREIS",
                        Properties: {},
                    },
                },
                {
                    ReferenzID: "4",
                    Text: {
                        ID: "da2784df-9643-430f-b3f1-e4b703e669d3",
                        Kurztext: "DI_FN_Jahrespreis_mit_Boni_GAS_PK_10_22",
                        Langtext:
                            "Der Jahrespreis ist inkl. jeweils geltender Umsatzsteuer. Geringfügige Rundungsdifferenzen können auftreten. Für die Berechnung des Jahrespreises haben wir die von Ihnen eingegebene Verbrauchsprognose zu Grunde gelegt. Bei der Berechnung des Jahrespreises haben wir zudem Boni, die für das erste Jahr nach Lieferbeginn gewährt werden, berücksichtigt. Für einen Tarif mit Gutschein gilt: Gutscheine sind nicht in den Jahrespreis eingerechnet und werden zusätzlich gewährt. Es handelt sich bei der Angabe des Jahrespreises nicht um eine Zusage hinsichtlich der maximalen Kosten. Vielmehr können die tatsächlichen Kosten von dieser Angabe je nach Verbrauch abweichen.",
                        Hauptkategorie: "DI_PRODUKT",
                        Unterkategorie: "FN_JAHRESPREIS_MIT_BONUS",
                        Properties: {},
                    },
                },
                {
                    ReferenzID: "5",
                    Text: {
                        ID: "da2784df-9643-430f-b3f1-e4b703e669d3",
                        Kurztext: "ISU_Preisbestandteile_GAS_Biogas_PK_04_24",
                        Langtext:
                            "Preise inkl. 19 % Umsatzsteuer. Geringfügige Rundungsdifferenzen können auftreten.\\n.\\n.Ein Hinweis für Sie: Die besonderen Anforderungen an den Nachweis der Biogas-Qualität dieser Gesetze werden nicht erfüllt: § 5 Abs. 3 EWärmeG Baden-Württemberg, §§ 22 Abs. 1 und 40 Abs. 3 Gebäudeenergiegesetz, sowie diesen entsprechende bundes- oder landesgesetzliche Vorschriften.",
                        Hauptkategorie: "FUSSNOTE",
                        Unterkategorie: "PREISBESTAND",
                        Properties: {},
                    },
                },
                {
                    ReferenzID: "6",
                    Text: {
                        ID: "da2784df-9643-430f-b3f1-e4b703e669d3",
                        Kurztext: "ISU_Produktkennzeichnung_SV_01_23",
                        Langtext: "außerhalb der Grundversorgung",
                        Hauptkategorie: "PRODUKTKENNZEICHNUNG",
                        Unterkategorie: null,
                        Properties: {},
                    },
                },
                {
                    ReferenzID: "7",
                    Text: {
                        ID: "da2784df-9643-430f-b3f1-e4b703e669d3",
                        Kurztext: "Tarifvorteile_KSO_Bio Gas_12_24_GAS_PK_NK_BK_4_22",
                        Langtext: "15 % Biogas-Anteil\r\nzertifiziert durch den TÜV NORD\r\nflexibler Online-Tarif",
                        Hauptkategorie: "ProduktInfo",
                        Unterkategorie: null,
                        Properties: {},
                    },
                },
                {
                    ReferenzID: "8",
                    Text: {
                        ID: "da2784df-9643-430f-b3f1-e4b703e669d3",
                        Kurztext: "ISU_Label_Eingeschränkte_Preisgarantie",
                        Langtext: "Eingeschränkte Preisgarantie",
                        Hauptkategorie: "LABEL",
                        Unterkategorie: "PREISGARANTIE",
                        Properties: {},
                    },
                },
                {
                    ReferenzID: "9",
                    Text: {
                        ID: "da2784df-9643-430f-b3f1-e4b703e669d3",
                        Kurztext: "PBSCHR_Naturtarife_GAS_09_20",
                        Langtext: "Ausgezeichnet und sauber",
                        Hauptkategorie: "ProduktBeschreibung",
                        Unterkategorie: null,
                        Properties: {},
                    },
                },
                {
                    ReferenzID: "10",
                    Text: {
                        ID: "da2784df-9643-430f-b3f1-e4b703e669d3",
                        Kurztext: "DI_FN_Widerruf_COMM+NC_Dienstl_Online_5_24",
                        Langtext:
                            "Widerrufsbelehrung\r\nWiderrufsrecht\r\nSie haben das Recht, binnen vierzehn Tagen ohne Angabe von Gründen diesen Vertrag zu widerrufen. Die Widerrufsfrist beträgt vierzehn Tage ab dem Tag des Vertragsschlusses. Um Ihr Widerrufsrecht auszuüben, müssen Sie uns (Vattenfall Europe Sales GmbH, Amerigo-Vespucci-Platz 2, 20457 Hamburg, Telefon 040 657 988 000 oder E-Mail widerruf@vattenfall.de) mittels einer eindeutigen Erklärung (z. B. ein mit der Post versandter Brief oder eine E-Mail) über Ihren Entschluss, diesen Vertrag zu widerrufen, informieren. Sie können dafür das beigefügte Muster-Widerrufsformular verwenden, das jedoch nicht vorgeschrieben ist. Sie können das Muster-Widerrufsformular oder eine andere eindeutige Erklärung auch auf unserer Webseite (online.vattenfall.de/widerruf) elektronisch ausfüllen und übermitteln. Machen Sie von dieser Möglichkeit Gebrauch, so werden wir Ihnen unverzüglich (z. B. per E-Mail) eine Bestätigung über den Eingang eines solchen Widerrufs übermitteln. Zur Wahrung der Widerrufsfrist reicht es aus, dass Sie die Mitteilung über die Ausübung des Widerrufsrechts vor Ablauf der Widerrufsfrist absenden. \r\nWiderrufsfolge\r\nWenn Sie diesen Vertrag widerrufen, haben wir Ihnen alle Zahlungen, die wir von Ihnen erhalten haben, einschließlich der Lieferkosten (mit Ausnahme der zusätzlichen Kosten, die sich daraus ergeben, dass Sie eine andere Art der Lieferung als die von uns angebotene, günstigste Standardlieferung gewählt haben), unverzüglich und spätestens binnen vierzehn Tagen ab dem Tag zurückzuzahlen, an dem die Mitteilung über Ihren Widerruf dieses Vertrags bei uns eingegangen ist. Für diese Rückzahlung verwenden wir dasselbe Zahlungsmittel, das Sie bei der ursprünglichen Transaktion eingesetzt haben, es sei denn, mit Ihnen wurde ausdrücklich etwas anderes vereinbart; in keinem Fall werden Ihnen wegen dieser Rückzahlung Entgelte berechnet. Haben Sie verlangt, dass die Dienstleistungen oder Lieferung von Gas/Strom während der Widerrufsfrist beginnen soll, so haben Sie uns einen angemessenen Betrag zu zahlen, der dem Anteil der bis zu dem Zeitpunkt, zu dem Sie uns von der Ausübung des Widerrufsrechts hinsichtlich dieses Vertrags unterrichten, bereits erbrachten Dienstleistungen im Vergleich zum Gesamtumfang der im Vertrag vorgesehenen Dienstleistungen entspricht.",
                        Hauptkategorie: "DI_BESTELLUNG",
                        Unterkategorie: "FN_WIDERRUFSBELEHRUNG",
                        Properties: {},
                    },
                },
                {
                    ReferenzID: "11",
                    Text: {
                        ID: "da2784df-9643-430f-b3f1-e4b703e669d3",
                        Kurztext: "DI_Produktkennzeichnung_SV_07_22",
                        Langtext: "außerhalb der Grundversorgung",
                        Hauptkategorie: "DI_PRODUKT",
                        Unterkategorie: "TEXT_PRODUKTKENNZEICHNUNG",
                        Properties: {},
                    },
                },
                {
                    ReferenzID: "12",
                    Text: {
                        ID: "da2784df-9643-430f-b3f1-e4b703e669d3",
                        Kurztext: "DI_Hinweis_Mail_06_23",
                        Langtext:
                            "Die Vattenfall Europe Sales GmbH nutzt Ihre E-Mail-Adresse zur Vertragsanbahnung und -abwicklung im Rahmen unserer Online-Services. Darüber hinaus verwenden wir Ihre E-Mail-Adresse, um Sie im Rahmen der gesetzlichen Bestimmungen über eigene, ähnliche Energieprodukte und Dienstleistungen zu informieren. Falls Sie dies nicht wünschen, können Sie dem jederzeit per E-Mail an [werbewiderspruch@vattenfall.de](mailto:werbewiderspruch@vattenfall.de) widersprechen.",
                        Hauptkategorie: "DI_ALLGEMEIN",
                        Unterkategorie: "TEXT_HINWEIS_MAIL",
                        Properties: {},
                    },
                },
                {
                    ReferenzID: "13",
                    Text: {
                        ID: "da2784df-9643-430f-b3f1-e4b703e669d3",
                        Kurztext: "DI_Datenschutz_Hinweis_12_22",
                        Langtext:
                            "Um die Umwelt zu schonen, finden Sie unter [vattenfall.de/datenschutz](https://www.vattenfall.de/datenschutz) unsere aktuellen Datenschutzinformationen.\r\nAuf Wunsch senden wir sie Ihnen auch gern per Post zu.",
                        Hauptkategorie: "DI_ALLGEMEIN",
                        Unterkategorie: "TEXT_HINWEIS_DATENSCHUTZ",
                        Properties: {},
                    },
                },
                {
                    ReferenzID: "14",
                    Text: {
                        ID: "da2784df-9643-430f-b3f1-e4b703e669d3",
                        Kurztext: "DI_CB_OPT_Comm_Noncomm_08_23",
                        Langtext:
                            "#### Benachrichtigungen zu Produkten:\r\nIch bin damit einverstanden, dass mich die Vattenfall Europe Sales GmbH per E-Mail über Produkte und Vorteile zu den Themen Strom, Gas, Wärmepumpe, Solar, Elektromobilität und alle damit verbundenen relevanten Themen, wie z. B. aktuelle Förderungen und Tipps rund um die Installation und Wartung informiert und zu Kundenbefragungen einlädt. Meine Einwilligung in die Nutzung meiner Daten zu Werbezwecken ist für die Vertragserfüllung nicht erforderlich und gilt bis auf Widerruf, den ich jederzeit mit Wirkung für die Zukunft unter [werbewiderspruch@vattenfall.de](mailto:werbewiderspruch@vattenfall.de) oder im [Online Service](https://service.vattenfall.de/login) erklären kann. Weitere Informationen: [Datenschutz|Vattenfall](https://www.vattenfall.de/datenschutz#040b6012-2690-4170-800b-ad8c11586eb0_0_0)",
                        Hauptkategorie: "DI_OPT",
                        Unterkategorie: "CB_EINVERSTAENDNIS_OPT_1",
                        Properties: {
                            "OPT|Wärmepumpe": "NONCOMM|ZWE",
                            "OPT|Kundenbefragungen": "SPARTENUEBERGREIFEND|ZKB",
                            "OPT|Strom": "STROM|ZEM",
                            "OPT|Elektromobilität": "NONCOMM|ZEE",
                            "OPT|Solar": "NONCOMM|ZSE",
                            "OPT|Gas": "GAS|ZEM",
                        },
                    },
                },
                {
                    ReferenzID: "15",
                    Text: {
                        ID: "da2784df-9643-430f-b3f1-e4b703e669d3",
                        Kurztext: "DI_CB_OPT_Newsletter_08_24",
                        Langtext:
                            "#### Benachrichtigungen zu News und Kundenvorteilen:\r\nIch bin damit einverstanden, dass mir die Vattenfall Europe Sales GmbH per E-Mail-Newsletter regelmäßig Informationen zu Energie-Servicethemen zusendet, wie z. B. Energie sparen, Smart Home und Technik, nachhaltige Mobilität, bewusst Leben und Wohnen sowie weiteren wechselnden Angeboten mit exklusiven Vorteilen für Vattenfall Kund:innen bei unseren Kooperationspartnern. Meine Einwilligung in die Nutzung meiner Daten zu Werbezwecken ist für die Vertragserfüllung nicht erforderlich und gilt bis auf Widerruf, den ich jederzeit mit Wirkung für die Zukunft unter [werbewiderspruch@vattenfall.de](mailto:werbewiderspruch@vattenfall.de) oder im [Online Service](https://service.vattenfall.de/login) erklären kann. Weitere Informationen: [Datenschutz|Vattenfall](https://www.vattenfall.de/datenschutz#040b6012-2690-4170-800b-ad8c11586eb0_0_0) ",
                        Hauptkategorie: "DI_OPT",
                        Unterkategorie: "CB_EINVERSTAENDNIS_OPT_2",
                        Properties: {
                            "OPT|Allgemeiner Newsletter": "SPARTENUEBERGREIFEND|ZCN",
                        },
                    },
                },
                {
                    ReferenzID: "16",
                    Text: {
                        ID: "da2784df-9643-430f-b3f1-e4b703e669d3",
                        Kurztext: "DI_Hinweis_Widerrufsrecht_PK_07_22",
                        Langtext:
                            "Ihnen steht ein Widerrufsrecht zu. Bitte nehmen Sie die Widerrufsbelehrung zur Kenntnis.",
                        Hauptkategorie: "DI_BESTELLUNG",
                        Unterkategorie: "TEXT_HINWEIS_WIDERRUFSRECHT",
                        Properties: {},
                    },
                },
                {
                    ReferenzID: "17",
                    Text: {
                        ID: "da2784df-9643-430f-b3f1-e4b703e669d3",
                        Kurztext: "DI_Checkbox_SEPA_07_22",
                        Langtext:
                            "Ich ermächtige die Vattenfall Europe Sales GmbH, Zahlungen von meinem Konto mittels Lastschrift einzuziehen. Zugleich weise ich mein Kreditinstitut an, die von der Vattenfall Europe Sales GmbH von meinem Konto gezogene Lastschrift einzulösen.\r\nHinweis: Ich kann innerhalb von acht Wochen, beginnend mit dem Datum der Belastung, die Erstattung des belasteten Betrages verlangen. Es gelten dabei die mit meinem Kreditinstitut vereinbarten Bedingungen.",
                        Hauptkategorie: "DI_ZAHLUNGSINFORMATION",
                        Unterkategorie: "CB_EINVERSTAENDNIS_SEPA",
                        Properties: {},
                    },
                },
                {
                    ReferenzID: "18",
                    Text: {
                        ID: "da2784df-9643-430f-b3f1-e4b703e669d3",
                        Kurztext: "DI_Produktvorteil_Biogas_GAS_07_22    ",
                        Langtext: "15 % Biogas-Anteil",
                        Hauptkategorie: "DI_PRODUKT",
                        Unterkategorie: "TEXT_PRODUKTVORTEIL",
                        Properties: {},
                    },
                },
                {
                    ReferenzID: "19",
                    Text: {
                        ID: "da2784df-9643-430f-b3f1-e4b703e669d3",
                        Kurztext: "DI_Produktvorteil_TÜV_Zertifiziert_07_22    ",
                        Langtext: "zertifiziert durch den TÜV NORD",
                        Hauptkategorie: "DI_PRODUKT",
                        Unterkategorie: "TEXT_PRODUKTVORTEIL",
                        Properties: {},
                    },
                },
                {
                    ReferenzID: "20",
                    Text: {
                        ID: "da2784df-9643-430f-b3f1-e4b703e669d3",
                        Kurztext: "DI_Hinweis_SEPA_COMM_09_23",
                        Langtext:
                            "Erteilen Sie uns einfach zur Abbuchung Ihrer Zahlungen ein SEPA-Lastschriftmandat. Natürlich können Sie die fälligen Beträge auch überweisen, dann klicken Sie einfach auf Weiter.",
                        Hauptkategorie: "DI_ZAHLUNGSINFORMATION",
                        Unterkategorie: "TEXT_HINWEIS_SEPA",
                        Properties: {},
                    },
                },
            ],
            Medien: [
                {
                    ReferenzID: "1",
                    Medium: {
                        ID: {
                            SystemId: "APIS",
                            DateiId: "da2784df-9643-430f-b3f1-e4b703e669d3",
                        },
                        Name: "icon_natur",
                        Linkname: "Natur",
                        Dateierweiterung: "svg",
                        Kurztext: "Natur_Tarif_11/2021",
                        Hauptkategorie: "ICONS",
                        Unterkategorie: "TARIF",
                        Groesse: 506,
                        Properties: {},
                    },
                },
            ],
            Parameter: [
                {
                    ReferenzID: "1",
                    Parameter: {
                        Name: "1",
                        Wert: "1",
                        Datentyp: "BOOLEAN",
                        Hauptkategorie: "TARIF",
                        Unterkategorie: "VOLLMACHTERFASSUNG_IM_CLIENT_AKTIV",
                        Properties: {},
                    },
                },
                {
                    ReferenzID: "2",
                    Parameter: {
                        Name: "UEBERWEISUNG",
                        Wert: "UEBERWEISUNG",
                        Datentyp: "STRING",
                        Hauptkategorie: "TARIF",
                        Unterkategorie: "ERLAUBTER_ZAHLWEG",
                        Properties: {},
                    },
                },
                {
                    ReferenzID: "3",
                    Parameter: {
                        Name: "Eingeschränkte Preisgarantie Gas",
                        Wert: "Eingeschränkte Preisgarantie",
                        Datentyp: "STRING",
                        Hauptkategorie: "TARIF",
                        Unterkategorie: "PREISGARANTIE_TYP",
                        Properties: {},
                    },
                },
                {
                    ReferenzID: "4",
                    Parameter: {
                        Name: "1",
                        Wert: "1",
                        Datentyp: "BOOLEAN",
                        Hauptkategorie: "TARIF",
                        Unterkategorie: "TARIFDETAILS",
                        Properties: {},
                    },
                },
                {
                    ReferenzID: "5",
                    Parameter: {
                        Name: "SEPA",
                        Wert: "SEPA",
                        Datentyp: "STRING",
                        Hauptkategorie: "TARIF",
                        Unterkategorie: "ERLAUBTER_ZAHLWEG",
                        Properties: {},
                    },
                },
                {
                    ReferenzID: "6",
                    Parameter: {
                        Name: "1",
                        Wert: "1",
                        Datentyp: "BOOLEAN",
                        Hauptkategorie: "TARIF",
                        Unterkategorie: "WIDERRUFSPROZESS_IM_CLIENT_AKTIV",
                        Properties: {},
                    },
                },
                {
                    ReferenzID: "7",
                    Parameter: {
                        Name: "1",
                        Wert: "1",
                        Datentyp: "BOOLEAN",
                        Hauptkategorie: "TARIF",
                        Unterkategorie: "EMAIL_PFLICHT",
                        Properties: {},
                    },
                },
                {
                    ReferenzID: "8",
                    Parameter: {
                        Name: "REGISTER",
                        Wert: "1",
                        Datentyp: "BOOLEAN",
                        Hauptkategorie: "KSO_DATA",
                        Unterkategorie: "REGISTER",
                        Properties: {},
                    },
                },
                {
                    ReferenzID: "9",
                    Parameter: {
                        Name: "1",
                        Wert: "1",
                        Datentyp: "BOOLEAN",
                        Hauptkategorie: "TARIF",
                        Unterkategorie: "GEBURTSDATUM_PFLICHT",
                        Properties: {},
                    },
                },
                {
                    ReferenzID: "10",
                    Parameter: {
                        Name: "NO_BONUS",
                        Wert: "NO_BONUS",
                        Datentyp: "VARCHAR",
                        Hauptkategorie: "BONUSTYP",
                        Unterkategorie: "KATEGORIE",
                        Properties: {},
                    },
                },
            ],
            Content: [],
            Steuerelemente: [],
        },
    },
};
