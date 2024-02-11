import React, { useEffect, useState } from "react";
import AnalyticsDashboard from "../../components/AnalyticsDashboard";
import { getDate } from "../../utils";
import { analytics } from "../../utils/analytics";

const Page = () => {
   const TRACKING_DAYS = 7;
   const [pageviews, setPageviews] = useState([]);

   useEffect(() => {
      const fetchData = async () => {
         try {
            const data = await analytics.retrieveDays(
               "pageview",
               TRACKING_DAYS,
            );
            setPageviews(data);
         } catch (error) {
            console.error("Error fetching pageviews:", error);
         }
      };

      fetchData();
   }, []);

   const totalPageviews = pageviews.reduce((acc, curr) => {
      return (
         acc +
         curr.events.reduce((acc, curr) => {
            return acc + Object.values(curr)[0]!;
         }, 0)
      );
   }, 0);

   const avgVisitorsPerDay = (totalPageviews / TRACKING_DAYS).toFixed(1);

   const amtVisitorsToday = pageviews
      .filter((ev) => ev.date === getDate())
      .reduce((acc, curr) => {
         return (
            acc +
            curr.events.reduce((acc, curr) => acc + Object.values(curr)[0]!, 0)
         );
      }, 0);

   const topCountriesMap = new Map<string, number>();

   for (let i = 0; i < pageviews.length; i++) {
      const day = pageviews[i];
      if (!day) continue;

      for (let j = 0; j < day.events.length; j++) {
         const event = day.events[j];
         if (!event) continue;

         const key = Object.keys(event)[0]!;
         const value = Object.values(event)[0]!;

         const parsedKey = JSON.parse(key);
         const country = parsedKey?.country;

         if (country) {
            if (topCountriesMap.has(country)) {
               const prevValue = topCountriesMap.get(country)!;
               topCountriesMap.set(country, prevValue + Number(value)); // Fix: Convert value to number
            } else {
               topCountriesMap.set(country, Number(value)); // Fix: Convert value to number
            }
         }
      }
   }

   const topCountries = Array.from(topCountriesMap.entries())
      .sort((a, b) => {
         if (a[1] > b[1]) return -1;
         else return 1;
      })
      .slice(0, 5);

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
