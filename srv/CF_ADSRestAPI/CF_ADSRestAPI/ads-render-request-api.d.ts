import { OpenApiRequestBuilder } from '@sap-cloud-sdk/openapi';
import type { RenderInput, FileOutput } from './schema';
/**
 * Representation of the 'ADSRenderRequestApi'.
 * This API is part of the 'CF_ADSRestAPI' service.
 */
export declare const ADSRenderRequestApi: {
    /**
     * Post template and data files to render an interactive, dynamic interactive or print pdf object. TraceLevel set to 1 or 2 adds a [traceString] node to response JSON. In case of rendering errors, [errorPDF] node will be attached to the error response.
     * @param body - Request body.
     * @param queryParameters - Object containing the following keys: templateSource, TraceLevel.
     * @returns The request builder, use the `execute()` method to trigger the request.
     */
    renderingPdfPost: (body: RenderInput, queryParameters?: {
        templateSource?: string | undefined;
        TraceLevel?: number | undefined;
    } | undefined) => OpenApiRequestBuilder<FileOutput>;
};
//# sourceMappingURL=ads-render-request-api.d.ts.map