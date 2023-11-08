export default function Banner() {
  return (
    <div className={`hidden md:flex flex-row h-128 mb-4 justify-between w-11/12 max-w-7xl gap-3`}>
      <div className="h-full w-5/12 overflow-hidden flex justify-center items-end">
        <img className={``} src="/up-47.webp" alt="food image" />
      </div>
      <div className="h-full w-7/12 overflow-hidden flex justify-center items-center">
        <img className={`scale-125`} src="/Aba_VillageSalad.webp" alt="salad" />
      </div>
    </div>
  )
}
