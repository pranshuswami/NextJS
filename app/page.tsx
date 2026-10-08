import Image from "next/image";
import Card from "@/components/Card"

export default function Home() {
  return (
    <>
    <h1>Hello World</h1>

    <Card title="my card 1" description="this is a simple card component 1"/>
    <Card title="my card 2" description="this is a simple card component 2"/>
    </>
  );
}
