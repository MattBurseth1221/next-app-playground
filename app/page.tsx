"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [meteorData, setMeteorData] = useState<any | null>([]);
  const [isLoading, setIsLoading] = useState<Boolean>(false);
  const [heaviest, setHeaviest] = useState<number>(0);

  useEffect(() => {
    async function getMeteorData() {
      setIsLoading(true);

      const response = await fetch(
        "https://data.nasa.gov/api/views/gh4g-9sfh/rows.json"
      )
        .then((res) => res.json())
        .then((res) => res.data)
        .catch((e) => console.log(e));

      setMeteorData(response.slice(0, 100));
      setIsLoading(false);
    }

    getMeteorData();
  }, []);

  useEffect(() => {
    function getHeaviest() {
      if (!meteorData) {
        return;
      }

      let max = 0;
      for (let i = 0; i < meteorData.length; i++) {
        console.log(meteorData[i][12]);

        if (Number(meteorData[i][12]) >= max) {
          max = Number(meteorData[i][12]);
          console.log("max set at: " + max);
        }
      }

      setHeaviest(max);
    }

    getHeaviest();
  }, [meteorData])

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col items-center data-display">
        <h2 className="text-xl mb-10 border-spacing-5 border-2 p-5">Meteor Data</h2>

        {isLoading ? <div>Loading data...</div>
         : meteorData.map((meteor: any, index: number) => {
          return (
            <div key={index} className="flex flex-col items-center p-5">
              <h4>City: {meteor[8]}</h4>
              <p>Mass in grams: {meteor[12]}</p>
            </div>
          );
        })}
      </div>

      <div className="text-xl mt-10">
        <h4>Heaviest meteor weighed: {heaviest}</h4>
      </div>
    </main>
  );
}
