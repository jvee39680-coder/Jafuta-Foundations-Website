const VisionTwo = ({
    heading,
    paragraph,
}) => {
    return (
        
        <section className="bg-[rgb(243,239,239)] pl-20   h-130">
            

            <div className="w-70 pt-5 mt-40 shadow-gray-600   mr-15  bg-white  h-80 ">
                <p className="text-2xl text-center pb-5 font-medium">{heading}</p>
                <hr className="w-30 ml-25 pb-5" />
                <p className=" text-lg pl-15 pr-15">{paragraph}</p>
            </div>

        </section>
    )
}
export default VisionTwo;