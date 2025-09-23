import SquareGrid from "@/components/BackgroundSquare/BackgroundSquare";
import StarRain from "@/components/RainOfWhites/RainOfWhites";
import ContentPage from "@/app/(pages)/(ContentPage)/page";

export default function Home() {
  return (
    <div>
      <StarRain />
      <SquareGrid />
      <ContentPage />
    </div>
  );
}
