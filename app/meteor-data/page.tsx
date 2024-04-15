"use client";

import MeteorInfo from "../ui/MeteorInfo";
import MainNav from "../ui/MainNav";
import { useEffect, useRef, useState } from "react";

import meteor1 from '../images/asteroid-1-no-bg.png';
import meteor2 from '../images/asteroid-2-no-bg.png';
import PageTitle from "../ui/PageTitle";

export default function MeteorData() {
  const [meteorData, setMeteorData] = useState<any | null>([]);
  const [isLoading, setIsLoading] = useState<Boolean>(false);
  const [heaviest, setHeaviest] = useState<number>(0);

  useEffect(() => {
    async function getMeteorData() {
      setIsLoading(true);

      if (localStorage.getItem('meteor-data')) {
        console.log(JSON.parse(localStorage.getItem('meteor-data')!));
        return;
      }

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
        if (Number(meteorData[i][12]) >= max) {
          max = Number(meteorData[i][12]);
        }
      }

      setHeaviest(max);
    }

    getHeaviest();
  }, [meteorData])

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-12 relative">
      <MainNav active="Meteor Data"/>

      <img src={meteor1.src} className=" absolute top-[3%] right-24 rotate-12 w-225 h-225" alt="Meteor Image"/>
      <img src={meteor2.src} className="min-w-75 min-h-75 absolute top-[9%] left-48 rotate-90 object-fill" alt="Meteor Image"/>
      

      <div className="flex flex-col items-center data-display">
        <PageTitle title="Meteor Data" />

        {isLoading ? <div>Loading data...</div>
         : meteorData.map((meteor: any, index: number) => {
          return (
            <MeteorInfo key={index}>
              <>
                <h4>City: {meteor[8]}</h4>
                <p>{meteor[12]} grams</p>
              </>
            </MeteorInfo>
          );
        })}
      </div>

      <div className="text-xl mt-10">
        <h4>Heaviest meteor weighed: {heaviest}</h4>
      </div>
    </main>
  );
}
