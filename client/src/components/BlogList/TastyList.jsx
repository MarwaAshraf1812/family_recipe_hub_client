import TastyCard from "./TastyCard.jsx";

export default function TastyList() {
  const recipes = [
    {
      image: "https://s3-alpha-sig.figma.com/img/eeb4/75f7/e48878fc5d01496e4a42246aaa891c80?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AHmFRDVxaX2lkax3lMpY52RyPLpzEV6~BXIS3UdAxQd-vuUsDKAoVu7YAnQKsGUh5W7roccK~0miidmfaoerscpvFWgz4llsBVRTHx8O9aD0FSY2u2~JntSVkqjjpFHH27A5Xy0dze0o-LlGDY0hJFHC9wVidFc2gaPuuYbEbBoCZWCcEDpIS-iuRfDktAh5d2Beuw4V5-JzbKqK9hgbOJOsfy2L-upU2b2KRKRxQw-MezgUuCpd2N4-lo~j0rNditN4fOI-mNdqb2n1MC--EtTiUVmx16aKU-OSdJDErKmwL6Ktzg-ROkH~YwLoA-UZ7o4DCQkAqNy5VpVUVJZgYg__",
      title: "Chicken Meatballs with Cream Cheese",
      author: "Andreas Paula",
    },
    {
      image: "https://knoww.cc/wp-content/uploads/2019/05/9987-8.jpg",
      title: "Traditional Bolognaise Ragu",
      author: "Courtney Henry",
    },
    {
      image: "https://s3-alpha-sig.figma.com/img/0822/6ca6/474db938f387803398cf9968865f6c19?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=J24kxpbeL6dv~C10DzgQH4YXdJqa-HuNBGbMwVYlbjMduUDb6JNnDS-HoI-kwSOvQZ5xx2hSRF7fF3U2JqkE~JMU6YzxJ~CIElcjgdDPU-d4TGTaXy6geHBxyv7ToTctKIn~JmusNT4MnpvdQ8lRGtQSW60c48akwQ2PxKqIzfbfyM5OOfBETi7BjsbzN-DjH1KjcGfz6TdqijdznJa17DZLHPdGrCN2001ZcfzQqe~L0jjumnOv9uxHSIM1XM8oCb~WuUoqDEt1j~T-1-cW50Q9MuTMZunFcTRWRP9-kQutPWLImXpJ7Zbx8DI9P7QbY9UC1MnOCfU7Dzy8hed2zA__",
      title: "Pork and Chive Chinese Dumplings",
      author: "Dianne Russell",
    },
    {
      image: "https://abtkar.cc/wp-content/uploads/2019/08/2758-2.jpg",
      title: "The Creamiest Creamy Chicken an...",
      author: "Leslie Alexander",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto mt-8 px-4">
      <h2 className="lg:text-2xl md:text-3xl text-2xl font-bold text-gray-900  mb-10 text-center lg:text-left">Tasty Recipes</h2>
      <div className="grid xl:grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap-6">
        {recipes.map((recipe, i) => (
          <TastyCard
            key={i}
            image={recipe.image}
            title={recipe.title}
            author={recipe.author}
          />
        ))}
      </div>
    </div>
  );
}
