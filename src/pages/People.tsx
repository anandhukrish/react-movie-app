import PeopleProfile from "@/components/people/PeopleProfile";
import { popularPeopleUrl } from "@/helpers/urls";
import https from "@/https/https";
import React, { useEffect, useState } from "react";

type ReturnTypePeople = {
  profile_path: string;
  name: string;
  id: number;
  known_for: Array<{ title: string }>;
};

const People = () => {
  const [peoples, setPeoples] = useState<ReturnTypePeople[]>([]);
  useEffect(() => {
    const getPeoples = async () => {
      const data = await https.get(popularPeopleUrl);
      setPeoples(data.data.results as ReturnTypePeople[]);
    };
    getPeoples();
  }, []);
  return (
    <section>
      <div className="container mx-auto">
        <h1 className="mb-5 text-2xl font-bold">Popular Peoples</h1>
        <div className="flex flex-wrap justify-between">
          {Array.isArray(peoples) &&
            peoples?.length > 0 &&
            peoples.map((people) => (
              <PeopleProfile
                description={people.known_for}
                img={people.profile_path}
                name={people.name}
                width=""
                key={people.id}
              />
            ))}
        </div>
      </div>
    </section>
  );
};

export default People;
