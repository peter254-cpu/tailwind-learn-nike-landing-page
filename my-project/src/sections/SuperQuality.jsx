import { arrowRight } from "../assets/icons"
import { shoe8 } from "../assets/images"
import Button from "../components/Button"

const SuperQuality = () => {
  return (
    <section id="about-us" className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container">
      <div className="flex flex-1 flex-col">
      <h2 className="mt-10 
          font-palanquin 
          text-4xl
          capitalize
          font-bold
          lg:max-w-lg
          "
      >
        We Provide You <span className="text-coral-red">
          Super Quality</span> Shoes
     </h2>
     <p className="mt-4 lg:max-w-lg info-text">
        Ensuring premium comfort and style, our meticulously crafted footwear is deigned to elevate
        your experience, providing you with unmatched quality,innovation, and a touch of elegance.
     </p>
     <p className="mt-6 lg:max-w-lg info-text">our dedication to details and execellence ensures your satisfaction</p>
     <div>
      <Button label="Shop More" iconURL={arrowRight} />
     </div>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <img
          src={shoe8}
          alt="shoe8"
          width={570}
          height={532}
          className="object-contain"


        />
      </div>
    </section>
  )
}

export default SuperQuality
