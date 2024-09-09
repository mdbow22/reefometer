import Image from "next/image";

export default function Home() {
  return (
    <div className="lg:max-w-7xl flex flex-col justify-between mx-auto min-h-screen gap-16 py-10 font-[family-name:var(--font-geist-sans)] border border-black">
      <main className="w-full flex flex-col px-5 gap-8 row-start-2 items-center">
        <div className="w-full">
          <h1 className="text-4xl font-bold text-[#1F578A]">Reefometer</h1>
        </div>
        <div>Box for tank info</div>
        <div>Box for filters</div>
        <div>Box for Species List and Stock List</div>
        <div>Box for Compatibility Info/Comments/Etc</div>
      </main>
      <footer className="row-start-3 flex flex-col gap-6 flex-wrap items-center justify-center text-sm px-5">
        <div className="lg:w-3/4 text-center italic">
          Disclaimer: While we make every effort to provide accurate
          information, we are not perfect. All information provided here should
          be a starting point in research, not an infallible source of truth. As
          a hobbyist, it’s important to review information from multiple sources
          and get feedback from the community before making final decisions
          about stocking. Want to give us some feedback? Email us!
        </div>
        <div>Copyright &copy; 2024</div>
      </footer>
    </div>
  );
}
