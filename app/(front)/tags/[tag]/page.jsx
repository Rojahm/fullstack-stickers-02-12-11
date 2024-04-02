import PackPageHero from "../../sticker-packs/PackPageHero";

function TagPage({ params }) {
  return (
    <>
      <PackPageHero title={`STICKERS OF ${params.tag}`} />
      <div className="my-10 px-6 md:px-12 lg:px-40 flex flex-col">
        <h1 className="text-2xl">Stickers on the subject of {params.tag}</h1>
        <hr className="border-[#814997] border-[3px] rounded-md" />
      </div>
    </>
  );
}

export default TagPage;
