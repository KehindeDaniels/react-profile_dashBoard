import background  from '../assets/images/Background.png';
import profile from '../assets/images/profile.png';

const TheProfile = () => {
  return (
    <div>
      <img src={background} alt="background img" className="object-cover object-center" />
      <div className="profile_imgage flex flex-col gap-2 -mt-16 sm:-mt-20 ml-6 sm:ml-8">
        <img src={profile} alt="profile Image" className="w-28 h-28 sm:w-36 sm:h-36 border-4 rounded-full border-almostwhite" />
        <h1 class="text-2xl sm:text-3xl font-bold">Eniola Adesewa</h1>
      </div>
    </div>

   
  )
}

export default TheProfile