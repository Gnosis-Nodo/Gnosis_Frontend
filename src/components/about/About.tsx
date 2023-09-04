import Lucas from "../../assets/imgs/Lucas.jpeg";
import Juan from "../../assets/imgs/Jp.jpeg";
import Lu from "../../assets/imgs/Lu.jpeg";
import Alex from "../../assets/imgs/Alex.jpeg";

const people = [
    {
      name: 'Lucas Salazar',
      role: 'Co-Founder / CEO',
      imageUrl: Lucas, 
    },

    {
      name: 'Juan Pablo Grisales',
      role: 'Co-Founder / CEO',
      imageUrl: Juan, 
    },

    {
      name: 'Luisa Fernanda Salinas',
      role: 'Co-Founder / CEO',
      imageUrl: Lu, 
    },

    {
      name: 'Alexander García',
      role: 'Co-Founder / CEO',
      imageUrl: Alex, 
    },
    // More people...
  ]
  
  export default function About() {
    return (
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto ml-40 grid max-w-8xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Meet our team</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
            We're a passionate collective of dreamers and doers. Our journey began with a vision: to redefine the future. We're here to break boundaries, challenge norms, and make the impossible possible. <br></br>
            <br />
            From our dedicated founders to our brilliant minds behind the scenes, we're driven by a relentless pursuit of excellence. Our story is one of innovation, dedication, and a commitment to making a difference.
            </p>
          </div>
          <ul role="list" className="pl-20 pt-20 grid gap-x-8 gap-y-14 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
            {people.map((person) => (
              <li key={person.name}>
                <div className="flex items-center gap-x-6">
                  <img className="h-16 w-16 rounded-full" src={person.imageUrl} alt="" />
                  <div>
                    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                    <p className="text-sm font-semibold leading-6 text-indigo-600">{person.role}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
  