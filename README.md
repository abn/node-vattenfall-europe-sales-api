# Vattenfall Europe Sales GmbH API Client

This is a node client libary written in Typescript, which provides methods to interact with the Vattenfall Europe Sales GmbH service's API.

## Installation

```bash
# using npm
npm install vattenfall-europe-sales-api

# using pnpm
pnpm add vattenfall-europe-sales-api
```

## Example Usage

```typescript
import { VattenfallService, VattenfallServiceHelpers } from "vattenfall-europe-sales-api";

async function displayMeterReadings() {
    const service = new VattenfallService("your-username", "your-password");

    try {
        const contract_ids = VattenfallServiceHelpers.getContractIDs(await service.getContractList());

        for (const contract_id of contract_ids) {
            console.log(`Meter readings for contract ${contract_id}:`);

            const meter_readings = VattenfallServiceHelpers.mapMeterReadings(
                await service.getMeterReadings(contract_id),
            );
            console.log(meter_readings);
        }
    } catch (e) {
        await service.logOut();
        throw e;
    }
}
```
