import Menu from "../Menu";

export default function Header() {
  return (
    <header className="relative px-10 py-5 mb-20 z-20">
      <div className="w-full h-20 fixed  inset-0 backdrop-blur-md z-10"></div>
      <Menu />
    </header>
  );
}
