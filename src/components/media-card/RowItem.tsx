import React, { useEffect, useState } from "react";
import Card from "./Card";
import https from "@/https/https";

type RowItemProps = {
  title: string;
  selectValues?: Array<{
    value: string;
    displayValue: string;
  }>;
  singleUrl?: string;
};

const RowItem: React.FC<RowItemProps> = ({
  title,
  selectValues,
  singleUrl,
}) => {
  const [selecedUrl, setSelectedUrl] = useState(
    () => singleUrl || selectValues?.[0]?.value || "",
  );
  console.log(singleUrl);
  const [apiResults, setApiResults] = useState<
    Array<{ image: string; title: string; date: string; id: number }>
  >([]);

  const handleSelectedUrl = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedUrl(e.target.value);
  };

  useEffect(() => {
    const fetchCardValues = async () => {
      const response = await https.get(selecedUrl);

      const result = response.data;
      console.log(result);
      setApiResults(
        result?.results.map((itm: typeof result) => ({
          image: itm.poster_path,
          title: itm.title || itm.name,
          date: itm.release_date || itm.first_air_date,
          id: itm.id,
        })),
      );
    };
    if (selecedUrl) {
      fetchCardValues();
    }
  }, [selecedUrl]);
  return (
    <div className="py-5 pl-[60px]">
      <div className="mb-5 flex items-center">
        <h1 className="text-2xl font-bold">{title}</h1>

        {Array.isArray(selectValues) && selectValues?.length > 0 && (
          <select
            className="ml-5"
            onChange={handleSelectedUrl}
            defaultValue={selectValues ? selectValues[0].value : ""}
          >
            {selectValues?.map((item) => (
              <option value={item.value} key={item.value}>
                {item.displayValue}
              </option>
            ))}
          </select>
        )}
      </div>

      <div className="flex overflow-y-hidden overflow-x-scroll whitespace-nowrap pb-5">
        {apiResults?.length > 0 &&
          apiResults.map((item) => <Card {...item} key={item.id} />)}
      </div>
    </div>
  );
};

export default RowItem;
