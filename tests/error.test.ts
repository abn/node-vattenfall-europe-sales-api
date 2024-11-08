import { beforeEach, describe, expect, it } from "@jest/globals";
import { VattenfallEuropeSales, VattenfallServiceError } from "../src";
import { Config, Responses } from "./helpers";

describe("VattenfallServiceError", () => {
    let service: VattenfallEuropeSales;

    beforeEach(() => {
        service = new VattenfallEuropeSales(Config.TEST_USERNAME, Config.TEST_PASSWORD);
    });

    it("should be created with only message", () => {
        const error = new VattenfallServiceError({ message: "Test error" });
        expect(error.message).toBe("Test error");
        expect(error.data).toBe(undefined);
        expect(error.status_code).toBe(undefined);
    });

    it("should report token expiry errors", () => {
        let error: VattenfallServiceError | null = null;

        try {
            service.raiseOnErrorResponse(Responses.mockTokenExpiredErrorResponse);
        } catch (e) {
            error = e as VattenfallServiceError;
        }

        expect(error).toBeInstanceOf(VattenfallServiceError);
        expect(error?.isTokenExpiryError()).toBe(true);
        expect(error?.isUserError()).toBe(false);
        expect(error?.isTermsOfUseNotAcceptedError()).toBe(false);

        expect(error?.message).toBe("");
        expect(error?.data).toStrictEqual(Responses.mockTokenExpiredErrorResponse.Meldungen[0]);
        expect(error?.status_code).toBe("ACCESS_DENIED");
    });

    it("should report terms of use user error", () => {
        let error: VattenfallServiceError | null = null;

        try {
            service.raiseOnErrorResponse(Responses.mockTermsOfUseUnacceptedErrorResponse);
        } catch (e) {
            error = e as VattenfallServiceError;
        }

        expect(error).toBeInstanceOf(VattenfallServiceError);
        expect(error?.isTokenExpiryError()).toBe(false);
        expect(error?.isUserError()).toBe(true);
        expect(error?.isTermsOfUseNotAcceptedError()).toBe(true);

        const data = Responses.mockTermsOfUseUnacceptedErrorResponse.Meldungen[0];

        expect(error?.message).toBe("");
        expect(error?.data).toStrictEqual(data);
        expect(error?.status_code).toBe("USER_ERROR");

        expect(error?.error_code).toBe(data.Code);
        expect(error?.technical_description).toBe(data.TechnischeBeschreibung);
        expect(error?.user_description).toBe(data.FachlicheBeschreibung);
    });

    it("should crate error with empty Meldungen", () => {
        let error: VattenfallServiceError | null = null;

        try {
            const response = Responses.mockTermsOfUseUnacceptedErrorResponse;
            response.Meldungen = [];
            service.raiseOnErrorResponse(response);
        } catch (e) {
            error = e as VattenfallServiceError;
        }

        expect(error).toBeInstanceOf(VattenfallServiceError);
        expect(error?.data).toBe(undefined);
    });
});
