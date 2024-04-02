import Link from "next/link";

function Explore() {
  const tags = [
    "Fanart",
    "Cartoon",
    "Cute",
    "Character",
    "Game",
    "Pink",
    "Yellow",
    "Blue",
    "Animal",
    "Cat",
    "Red",
    "White",
    "Green",
    "Food",
    "Black",
    "Anime",
    "Love",
    "Funny",
    "Smile",
    "Happy",
    "Brown",
    "Animals",
    "Purple",
    "Among Us",
    "Orange",
    "Heart",
    "Dog",
    "Logo",
    "SpongeBob",
    "Disney",
    "Meme",
    "Smiling",
    "Marvel",
    "Music",
    "Simpsons",
    "Adventure Time",
    "Bear",
    "We Bare Bears",
    "Sanrio",
    "Egg",
    "Grey",
    "Kitty",
    "Cats",
    "Sign",
    "Kawaii",
    "Holiday",
    "Sleep",
    "Colorful",
    "Space",
    "Sweet",
    "Art",
    "Alien",
    "Eat",
    "Angry",
    "Rick and Morty",
    "Nintendo",
    "Games",
    "Girl",
  ];
  return (
    <div className="my-10 px-6 md:px-12 lg:px-40 flex flex-col">
      <Link href={"/"} className="text-4xl">
        Explore
      </Link>
      <hr className="border-[#814997] border-[3px] rounded-md" />
      <div className="mt-5">
        {tags.map((tag, i) => (
          <Link
            key={i}
            href={`/tags/${tag}`}
            className="text-black font-medium inline-block mx-[10px] leading-6 hover:text-[#814997] hover:scale-[1.2] transition-all duration-100 ease-linear"
          >
            {tag}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Explore;
