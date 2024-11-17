import fastify from "fastify";
import { getProducts } from "../functions/products/get-products";
import fastifyCors from "@fastify/cors";
import { serializerCompiler, validatorCompiler, ZodTypeProvider } from "fastify-type-provider-zod";
import { getProductsRoute } from "./routes/get-products";
import { createConsultationsRoute } from "./routes/create-consultations";
import { getTimesRoute } from "./routes/get-times";

const app = fastify().withTypeProvider<ZodTypeProvider>();
app.register(fastifyCors, { origin: "*" });

app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);

// Rotas da apliação
app.register(getProductsRoute);
app.register(createConsultationsRoute);
app.register(getTimesRoute);

app.listen({ port: 3636 }).then(() => {
    console.log("HTTP server running");
});
