import { Typography } from "@mui/material";
import { useRouter } from "next/router";
import { useState } from "react";

const ReceiveData = () => {
  const router = useRouter();

  const [id, setId]: any = useState(router.query.id);
  const [title, setTitle]: any = useState(router.query.title);

  return (
    <>
      <Typography sx={{ fontSize: "32px" }}>ReceiveData</Typography>
      <div>Id: {id}</div>
      <div>Title: {title}</div>
    </>
  );
};

export async function getServerSideProps(context: any) {
  return {
    props: {}, // will be passed to the page component as props
  };
}

export default ReceiveData;
