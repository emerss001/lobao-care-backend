import { FastifyPluginAsyncZod } from "fastify-type-provider-zod";
import z from "zod";
import { getTimes } from "../../functions/consultation/get-times";

export const getTimesRoute: FastifyPluginAsyncZod = async (app) => {
    app.get(
        "/get-times",
        {
            schema: {
                querystring: z.object({
                    date: z.string(),
                    service: z.string(),
                }),
            },
        },
        async (request) => {
            const { date, service } = request.query;
            const result = await getTimes({ date, service });

            return result;
        }
    );
};
