import prisma from "../../lib/prisma";

interface createConsultationRequest {
    responsibleName: string;
    phone: string;
    email?: string | null;
    namePet: string;
    speciePet: string;
    date: Date | string;
    service: string;
    time: string;
}

export async function createConsultation(params: createConsultationRequest) {
    const result = await prisma.consultation.create({
        data: {
            responsibleName: params.responsibleName,
            phone: params.phone,
            email: params.email,
            namePet: params.namePet,
            speciePet: params.speciePet,
            date: new Date(params.date),
            service: params.service,
            time: params.time,
        },
    });

    return result;
}
