import { Timer } from "../components/Timer";
import { Header } from "../components/Header";
export default function Home() {
  return (
    <div>
      <Header />
      <div className="px-10 py-5">
        <Timer time={10} />
      </div>
    </div>
  ); // JSX>
}
