"use client";
import ErrorMessage from "@/components/ErrorMessage";
import { useEffect } from "react";

type RootErrorPageProps = {
  error: Error;
  reset: () => {};
};

export default function RootErrorPage({ error }: RootErrorPageProps) {
  /*useEffect(() => {
    console.log(error);
  }, [error]);*/

  return (
    <ErrorMessage
      pageTitle="Internal Server Error"
      contentTitle="501"
      content="Ocorreu um erro. Tene novamente mais tarde"
    />
  );
}
