import call from '../assets/images/call-icon.svg'
import message from '../assets/images/message-icon.svg'

const TheContact = () => {
  return (
    <div className='contact flex items-center gap-6 mr-4 mt-[-85px] sm:mr-6'>
         <div class="call flex justify-between items-center gap-2 sm:gap-4 border-2 rounded-full border-gray-400 p-2 sm:px-6 sm:py-4 sm:rounded-md">
                <img src={call} className="sm:w-6" alt="call icon" />
                <p className="text-sm font-semibold hidden sm:block sm:text-xl">Call</p>
        </div>

        <div class="message border-2 rounded-md border-gray-400 flex items-center gap-2 py-2 px-4 sm:py-4 sm:px-6 sm:gap-4">
                <img src={message} className="sm:w-6" alt="message icon"/>
                <p className="text-sm font-semibold sm:text-lg">Message</p>
        </div>

    </div>
  )
}

export default TheContact