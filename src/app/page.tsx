import Card from "@/components/card/Card";

interface IPhrase {
  phrase: string;
  author: string;
}

const HomePage = async () => {
  const data = await fetch('http://localhost:3000/api/random_phrases');
  const phrase = await data.json()
 console.log('phrase: ', phrase );

  return (
    <main className="">
      {/* <form action="/" method="get">
      {!phrase ? 'Cargando...' : 'Otra frase'}
        <button
          type="submit"
          style={{
            padding: "10px 20px",
            marginTop: "20px",
            fontSize: "16px",
            backgroundColor: "#0070f3",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Otra frase
        </button>
      </form> */}
      <Card phrase={phrase} />

    </main>
  );
};

export default HomePage;
