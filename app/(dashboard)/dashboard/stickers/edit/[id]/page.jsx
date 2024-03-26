import Form from "../../../Form";

function EditPackPage({ params }) {
  const id = params.id;

  return (
    <>
      <Form title={"Edit Sticker"} id={id} />
    </>
  );
}

export default EditPackPage;
