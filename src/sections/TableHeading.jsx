
const TableHeading = () => {
  return (
    <div className="table__head border-b-[1px] border-gray-400 pb-6" data-aos="fade-down" data-aos-anchor-placement="top-bottom">
      <div className="tablehead__container max-w-7xl mx-auto relative">
          <div className="table__head--container flex justify-between mx-8 sm:justify-start sm:gap-16">
              <h2 className=" text-xl text-black font-semibold after:absolute after:content-[''] after:w-16 after:h-[2px] after:-bottom-6 after:left-0 after:ml-8 after:bg-black ">Profile</h2>
              <h2 className="text-xl text-gray-300 font-semibold">Gender</h2>
              <h2 className="text-xl text-gray-300 font-semibold">Recognition</h2>
          </div>
      </div>
    </div>

  )
}

export default TableHeading