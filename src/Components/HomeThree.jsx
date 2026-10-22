
const HomeThree = ({
  title,
  description,
  image,
  button,
  reverse
}) => {
  return (
    <section
      className={`flex items-center bg-[rgb(102,86,80)] text-white gap-10 px-16 py-20 ${
        reverse ? 'flex-row-reverse' : 'flex-row'
      }`}
    >
      
      <div className="w-1/2">
        <img
          src={image}
          alt={title}
          className="h-96 w-full object-cover"
        />
      </div>

   
      <div className="w-1/2">
        <h2 className="text-4xl font-medium mb-10">
          {title}
        </h2>

        <p className="mt-4 mb-10 text-white">
          {description}
        </p>

        <button
          type="button"
          className="w-fit bg-[rgb(86,155,170)] px-14 py-5 font-medium text-white"
        >
          {button || 'Learn More'}
        </button>
      </div>
    </section>
  )
}

export default HomeThree
