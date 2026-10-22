const Hero = () => {
  return (
    <div
      className="relative flex h-screen w-full items-center bg-cover bg-center bg-no-repeat text-white"
      style={{ backgroundImage: "url('/src/Images-home/HeroT.png')" }}
    >
      <div className="w-full px-6 sm:px-10 lg:px-[3.5%]">
        <h1 className="max-w-[1000px] text-4xl pt-40 font-medium leading-tight text-white sm:text-5xl lg:text-6xl/20">
          Empowering Rural Communities Through Action.
        </h1>
      </div>
    </div>
  )
}

export default Hero
