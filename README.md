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
import VattenfallEuropeSales from "vattenfall-europe-sales-api";
import * as Helpers from "vattenfall-europe-sales-api/dist/helpers";

async function displayMeterReadings() {
    const service = new VattenfallEuropeSales("your-username", "your-password");

    try {
        const contract_ids = Helpers.getContractIDs(await service.getContractList());

        for (const contract_id of contract_ids) {
            console.log(`Meter readings for contract ${contract_id}:`);

            const meter_readings = Helpers.mapMeterReadings(await service.getMeterReadings(contract_id));
            console.log(meter_readings);
        }
    } catch (e) {
        await service.logOut();
        throw e;
    }
}
```
