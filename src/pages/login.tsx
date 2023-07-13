import React, { useRef } from "react";
import { setCookie } from "cookies-next";
import { Toast } from "primereact/toast";
import { Button } from "primereact/button";
import { useRouter } from "next/router";
import { useLocalStorage } from "@/Hooks";
import Head from "next/head";
import NewCard from "@/components/NewCard";
import CardSecond from "@/components/CardSecond";
import PrimeMenu from "@/components/PrimeMenu";

const login = () => {
  const router = useRouter();
  const toast = useRef<Toast>(null);
  const [, setUser] = useLocalStorage("User", "");

  return (
    <div className="container">
      <Toast ref={toast} />
      <Head>
        <title>Login</title>
      </Head>

      <div className="">
        <h3>Login</h3>
        <Button
          label="Dashboard"
          severity="success"
          onClick={() => router.replace("/dashboard")}
        />
        <Button
          label="Login"
          severity="warning"
          onClick={() => {
            setCookie("Allow", true);
            setUser("Maulik Savaliya");
            toast.current?.show({
              severity: "success",
              summary: "Success",
              detail: "Login Successfully",
              life: 3000,
            });
          }}
        />
      </div>
      <NewCard />
      <PrimeMenu />
    </div>
  );
};

export default login;
