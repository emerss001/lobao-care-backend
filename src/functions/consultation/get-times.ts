import prisma from "../../lib/prisma";

interface getTimesRequest {
    date: string;
    service: string;
}

export async function getTimes({ date, service }: getTimesRequest) {
    const allTimes = await prisma.consultationTime.findMany({
        orderBy: {
            time: "asc",
        },
    });

    const dateObj = new Date(date);
    const occupiedTimes = await prisma.consultation.findMany({
        where: {
            date: dateObj,
            service,
        },
        select: {
            time: true,
        },
    });

    const occupiedTimesList = occupiedTimes.map((consultation) => consultation.time);
    const availableTimes = allTimes.filter((time) => !occupiedTimesList.includes(time.time));

    return availableTimes;
}
