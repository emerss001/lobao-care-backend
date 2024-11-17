import { FastifyPluginAsyncZod } from "fastify-type-provider-zod";
import z from "zod";
import { createConsultation } from "../../functions/consultation/create-consultation";

export const createConsultationsRoute: FastifyPluginAsyncZod = async (app) => {
    app.post(
        "/create-consultations",
        {
            schema: {
                body: z.object({
                    responsibleName: z.string(),
                    phone: z.string(),
                    email: z.string().nullable(),
                    namePet: z.string(),
                    speciePet: z.string(),
                    date: z.string(),
                    service: z.string(),
                    time: z.string(),
                }),
            },
        },
        async (request) => {
            const body = request.body;

            const consultation = await createConsultation(body);

            return consultation.id;
        }
    );
};
