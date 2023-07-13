import { useLocalStorage } from "@/Hooks";
import Head from "next/head";
// import { useRouter } from "next/router";
import { Button } from "primereact/button";
import React, { Fragment } from "react";

const dashboard = () => {
  // const router = useRouter();

  // const [user] = useLocalStorage("User", "");
  // console.log(user, "_________");
  console.log("URL", process.env.NEXT_PUBLIC_OPEN_URL);
  return (
    <Fragment>
      <Head>
        <title>Dashboard</title>
      </Head>
      <div className="flex justify-content-center text-3xl text-lime-700">
        {/* Welcome {user} */}
        <div>
          <Button
            label="Dashboard"
            severity="success"
            // onClick={() => router.push(process.env.NEXT_PUBLIC_OPEN_URL)}
          />
        </div>
      </div>
    </Fragment>
  );
};

export default dashboard;
