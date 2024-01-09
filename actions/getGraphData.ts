import prisma from "@/libs/prismadb";
import moment from "moment";

export default async function getGraphData() {
  try {
    // Get the start date and the end date
    const startDate = moment().subtract(6, "days").startOf("day");
    const endDate = moment().endOf("day");

    // Query the database to get order data grouped by created date
    const result = await prisma.order.groupBy({
      by: ["createdAt"],
      where: {
        createdAt: {
          gte: startDate.toISOString(),
          lte: endDate.toISOString(),
        },
        status: "complete",
      },
      _sum: {
        amount: true,
      },
    });

    // Initialize the object to aggregate data by day
    const aggregatedData: {
      [day: string]: { day: string; date: string; totalAmount: number };
    } = {};

    // create a clone of the start date  to iterate over each day
    const currentDate = startDate.clone();

    // iterate over each day in the date range
    while (currentDate <= endDate) {
      // Format the day as a string (eg., "Monday")
      const day = currentDate.format("dddd");
      console.log("day>>>>>>>", day, currentDate);

      // Initialize the aggregate data for the day with the day , date and total amount
      aggregatedData[day] = {
        day,
        date: currentDate.format("yyyy-MM-dd"),
        totalAmount: 0,
      };

      // Move to the next day
      currentDate.add(1, "day");
    }

    // Calculate the total amount for each day by summing the order amounts
    result.forEach((entry) => {
      const day = moment(entry.createdAt).format("dddd");
      const amount = entry._sum.amount || 0;
      aggregatedData[day].totalAmount += amount;
    });

    // Convert the aggregatedData object into an array and sort it by date
    const formattedData = Object.values(aggregatedData).sort((a, b) =>
      moment(a.date).diff(moment(b.date))
    );

    // return the formatted data
    return formattedData;
  } catch (error: any) {
    console.log(error);
    throw new Error(error);
  }
}
