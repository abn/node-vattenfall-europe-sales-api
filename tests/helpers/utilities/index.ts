import fetchMock, { FetchMock, RouteResponse } from "fetch-mock";
import type { CallHistoryFilter } from "fetch-mock/dist/esm/CallHistory";
import { VattenfallService } from "../../../src";
import * as Responses from "../responses";

type AllowedFetchMockMethods = keyof FetchMock & ("post" | "postOnce");

/**
 * Mocks a fetch route for a given service (api version), path, and response.
 *
 * @param service - The service instance to fetch the route from.
 * @param path - The path for the route to be mocked.
 * @param response - The response to be returned when the route is fetched.
 * @param authenticated - Indicates whether the request should be authenticated.
 * @param name - The name of the mock route.
 * @param method - The HTTP method to be used for the mock route.
 * @returns The filter string used for mocking the route.
 */
export function mockFetchRoute(
    service: VattenfallService,
    path: string,
    response: RouteResponse,
    authenticated: boolean = false,
    name: string = "test_case",
    method: AllowedFetchMockMethods = "post",
): string {
    const filter = `path: /${service.api_version}${path}`;

    fetchMock.removeRoutes({ names: [name] });
    fetchMock[method](filter, response, {
        name: name,
        headers: {
            "Ocp-Apim-Subscription-Key": Responses.mockServicePropertiesResponse.DI_SUBSCRIPTION_KEY,
            "Content-Type": "application/json",
            ...(authenticated ? { "davis-token": "test-access-token" } : {}),
        },
        missingHeaders: !authenticated ? ["davis-token"] : [],
    });

    return filter;
}

/**
 * Extracts and returns request data from the provided {@link RequestInit} instance if
 * provided, otherwise from the last API call that matches the provided filter
 * in the call history.
 *
 * @typeParam D - The type of data expected in the request body.
 * @param filter - An optional filter to apply to fetch
 * calls from the call history.
 * @param init - Optional request initialization data. If not
 * provided, the method fetches the last call from the call history that matches
 * the filter.
 *
 * @returns The extracted request data if available, otherwise null.
 */
export function extractRequestData<D>(filter?: CallHistoryFilter, init?: RequestInit): null | D {
    if (init === undefined) {
        const call = fetchMock.callHistory.lastCall(filter);
        if (!call) return null;

        init = call.args[1] as RequestInit;
    }

    if (!init.body) return null;

    const body = JSON.parse(init.body.toString());
    return body.Request ? (body.Request as D) : null;
}
