# Vattenfall Europe Sales GmbH API Client

This is a node client libary written in Typescript, which provides methods to interact with the Vattenfall Europe Sales GmbH service's API.

## Installation

```bash
npm install vattenfall-europe-sales
```

## Example Usage

```typescript
import { VattenfallEuropeSales } from "./src";
import * as Helpers from "./src/helpers";

async function displayMeterReadings() {
    const service = new VattenfallEuropeSales("your-username", "your-password");
    service.setDebugLogging(true);

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
