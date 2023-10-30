import { division1 } from '../constants';
import { division2 } from '../constants';

  const TableBody = () => {
    return (
      <div className='mt-8 text-xl font-semibold flex flex-col gap-6 sm:flex-row sm:gap-16 max-w-7xl mx-auto'>
        {/* division1 */}
        <div className="division1 flex flex-col gap-8">
            {division1.map((item, index) => (
            <div key={index} className="item text-center flex flex-col items-center xs:items-start xs:flex-row xs:text-left xs:justify-between mx-8 sm:flex-col sm:gap-2">
              <p className="text-xl font-bold text-gray-400">{item.title}</p>
              <p className="text-gray-900">{item.supportingText}</p>
            </div>
          ))}
        </div>
        <div className="division1 flex flex-col gap-8">
            {division2.map((item, index) => (
            <div key={index} className="item text-center flex flex-col items-center xs:items-start xs:flex-row xs:text-left xs:justify-between mx-8 sm:flex-col sm:gap-2">
              <p className="text-xl font-bold text-gray-400">{item.title}</p>
              <p className="text-gray-900">{item.supportingText}</p>
            </div>
          ))}
        </div>
        

      </div>
    );
}

export default TableBody;