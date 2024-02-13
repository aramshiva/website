import React, { useEffect, useState } from "react";
import { BarChart, Card } from "@tremor/react";
import { ArrowDownRight, ArrowRight, ArrowUpRight } from "lucide-react";
import ReactCountryFlag from "react-country-flag";

const Badge = ({ percentage }: { percentage: number }) => {
    const isPositive = percentage > 0;
    const isNeutral = percentage === 0;
    const isNegative = percentage < 0;

    if (isNaN(percentage)) return null;

    const positiveClassname =
        "bg-green-900/25 text-green-400 ring-green-400/25";
    const neutralClassname = "bg-zinc-900/25 text-zinc-400 ring-zinc-400/25";
    const negativeClassname = "bg-red-900/25 text-red-400 ring-red-400/25";

    return (
        <span
            className={`inline-flex items-center gap-1 rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset ${
                isPositive
                    ? positiveClassname
                    : isNeutral
                      ? neutralClassname
                      : negativeClassname
            }`}
        >
            {isPositive ? <ArrowUpRight className="h-3 w-3" /> : null}
            {isNeutral ? <ArrowRight className="h-3 w-3" /> : null}
            {isNegative ? <ArrowDownRight className="h-3 w-3" /> : null}
            {percentage.toFixed(0)}%
        </span>
    );
};

const AnalyticsDashboard = ({
    avgVisitorsPerDay,
    amtVisitorsToday,
    topCountries,
}) => {
    const [timeseriesPageviews, setTimeseriesPageviews] = useState(null);

    // Fetch timeseries data on component mount
    useEffect(() => {
        const fetchTimeseriesPageviews = async () => {
            // Adjust the request as necessary based on your API structure
            // For simplicity, assuming namespace and dates are predefined or obtained from elsewhere in your component
            const namespace = "yourNamespace"; // Define appropriately
            const date = "yourDate"; // Define appropriately or iterate for multiple days

            const response = await fetch("/api/analytics/retrieve", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    namespace,
                    date,
                }),
            });

            const data = await response.json();
            setTimeseriesPageviews(data); // Adjust according to how you want to use the data
        };

        fetchTimeseriesPageviews();
    }, []); // Empty dependency array means this effect runs once on mount

    return (
        <div className="flex flex-col gap-6">
            <div className="mx-auto grid w-full grid-cols-1 gap-6 sm:grid-cols-2">
                <Card className="w-full">
                    <p className="text-tremor-default text-dark-tremor-content">
                        Avg. visitors/day
                    </p>
                    <p className="text-dark-tremor-content-strong text-3xl font-semibold">
                        {avgVisitorsPerDay}
                    </p>
                </Card>
                <Card className="w-full">
                    <p className="text-tremor-default text-dark-tremor-content flex items-center gap-2.5">
                        Visitors today
                        <Badge
                            percentage={
                                (amtVisitorsToday / Number(avgVisitorsPerDay) -
                                    1) *
                                100
                            }
                        />
                    </p>
                    <p className="text-dark-tremor-content-strong text-3xl font-semibold">
                        {amtVisitorsToday}
                    </p>
                </Card>
            </div>

            <Card className="flex grid-cols-4 flex-col gap-6 sm:grid">
                <h2 className="text-dark-tremor-content-strong sm:left-left w-full text-center text-xl font-semibold">
                    This weeks top visitors:
                </h2>
                <div className="col-span-3 flex flex-wrap items-center justify-between gap-8">
                    {topCountries?.map(([countryCode, number]) => {
                        return (
                            <div
                                key={countryCode}
                                className="text-dark-tremor-content-strong flex items-center gap-3"
                            >
                                <p className="text-tremor-content hidden sm:block">
                                    {countryCode}
                                </p>
                                <ReactCountryFlag
                                    className="text-5xl sm:text-3xl"
                                    svg
                                    countryCode={countryCode}
                                />

                                <p className="text-tremor-content sm:text-dark-tremor-content-strong">
                                    {number}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </Card>

            <Card>
                {timeseriesPageviews ? (
                    <BarChart
                        allowDecimals={false}
                        showAnimation
                        data={timeseriesPageviews.map((day) => ({
                            name: day.date,
                            Visitors: day.events.reduce((acc, curr) => {
                                return acc + Object.values(curr)[0]!;
                            }, 0),
                        }))}
                        categories={["Visitors"]}
                        index="name"
                    />
                ) : null}
            </Card>
        </div>
    );
};

export default AnalyticsDashboard;
