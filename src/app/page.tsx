import Card from "@/components/card/Card";

interface IPhrase {
  phrase: string;
  author: string;
}

const HomePage = async () => {
  const data = await fetch("http://localhost:3000/api/random_phrases");
  const phrase = await data.json();
  //  console.log('phrase: ', phrase );

  return (
    <main className="">
      <Card phrase={phrase} />
    </main>
  );
};

export default HomePage;
