import { ContractResponse, MeterReadingResponse } from "./types";

/**
 * Extracts and returns an array of contract IDs from the given contract response.
 *
 * @param response - The response containing contract details.
 * @returns An array of extracted contract IDs.
 */
export function getContractIDs(response: ContractResponse): string[] {
    const ids: string[] = [];
    response.Result.GP.forEach((partner) => {
        partner.Vertraege.forEach((contract) => {
            ids.push(contract.VK.ReferenzID);
        });
    });
    return ids;
}

/**
 * Maps meter readings from a given response to a structured record format.
 *
 * @param response - The response containing raw meter reading data.
 * @returns A record where each key is a meter number and the value is an array of readings
 *  with their corresponding date, reading amount, and consumption.
 */
export function mapMeterReadings(response: MeterReadingResponse): Record<
    string,
    {
        date: string;
        reading: number;
        consumption: number | null;
    }[]
> {
    return response.Result.Zaehler.reduce(
        (acc, meter) => {
            acc[meter.Zaehlernummer] = meter.Zaehlwerk.flatMap((reading) =>
                reading.Zaehlerstand.map((detail) => ({
                    date: detail.Ablesedatum,
                    reading: detail.Zaehlerstand,
                    consumption: detail.Verbrauch,
                })),
            );
            return acc;
        },
        {} as Record<string, { date: string; reading: number; consumption: number | null }[]>,
    );
}
