"use client";
import Form from "@/app/(dashboard)/dashboard/Form";

function EditPackPage({ params }) {
  return (
    <>
      <Form title={"Edit Sticker Pack"} id={params.id} />
    </>
  );
}

export default EditPackPage;
