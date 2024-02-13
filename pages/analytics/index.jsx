import React, { useEffect, useState } from "react";
import AnalyticsDashboard from "../../components/AnalyticsDashboard";
import { getDate } from "../../utils";

const Page = () => {
    const TRACKING_DAYS = 7;
    const [pageviews, setPageviews] = useState([]);
    const [topCountries, setTopCountries] = useState([]);
    const [amtVisitorsToday, setAmtVisitorsToday] = useState(0);
    const [avgVisitorsPerDay, setAvgVisitorsPerDay] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Assuming '/api/analytics/retrieveDays' accepts POST requests with parameters for namespace and nDays
                const response = await fetch("/api/analytics/retrieve", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        namespace: "pageview",
                        nDays: TRACKING_DAYS,
                    }),
                });

                if (!response.ok) {
                    throw new Error(`Error: ${response.statusText}`);
                }

                const data = await response.json();

                if (Array.isArray(data)) {
                    setPageviews(data);

                    // Post-processing of data to calculate totalPageviews, avgVisitorsPerDay, amtVisitorsToday, and topCountries
                    let total = 0;
                    let todayVisitors = 0;
                    const countriesMap = new Map();

                    if (data.length > 0) {
                        data.forEach((day) => {
                            const dayVisitors = day.events.reduce(
                                (acc, curr) => acc + Object.values(curr)[0],
                                0,
                            );
                            total += dayVisitors;

                            if (day.date === getDate()) {
                                todayVisitors = dayVisitors;
                            }

                            day.events.forEach((event) => {
                                const country = Object.keys(event)[0];
                                const visitors = Object.values(event)[0];
                                if (countriesMap.has(country)) {
                                    countriesMap.set(
                                        country,
                                        countriesMap.get(country) + visitors,
                                    );
                                } else {
                                    countriesMap.set(country, visitors);
                                }
                            });
                        });
                    }

                    const topCountriesArray = Array.from(countriesMap.entries())
                        .sort((a, b) => b[1] - a[1])
                        .slice(0, 5);
                    setPageviews(total);
                    setAmtVisitorsToday(todayVisitors);
                    setAvgVisitorsPerDay((total / TRACKING_DAYS).toFixed(1));
                } else {
                    throw new Error("Invalid data format");
                }
            } catch (error) {
                console.error("Error fetching pageviews:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className={"bg-[#020817] dark"}>
            <div className="flex min-h-screen w-full items-center justify-center py-12">
                <div className="relative mx-auto w-full max-w-6xl text-white">
                    {pageviews.length > 0 ? (
                        <AnalyticsDashboard
                            avgVisitorsPerDay={avgVisitorsPerDay}
                            amtVisitorsToday={amtVisitorsToday}
                            timeseriesPageviews={pageviews}
                            topCountries={topCountries}
                        />
                    ) : (
                        <p>Loading...</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Page;
