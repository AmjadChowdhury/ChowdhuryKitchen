
import { FaPhoneAlt } from 'react-icons/fa';
import HeadingTitle from '../../Components/HeadingTitle';
import { IoLocation, IoTimeOutline } from 'react-icons/io5';

const Contact = () => {
    return (
        <div>
            <HeadingTitle subHeading={'Visit Us'} heading={'Our Location'}/>

            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                <div className='flex flex-col'>
                    <h2 className='flex justify-center bg-[#D1A054] p-4'>
                        <FaPhoneAlt className=' text-white text-base lg:text-xl'/>
                    </h2>
                    <div className='bg-slate-100 mx-4 pb-4 border-[#D1A054] border-2 border-t-0 flex-1'>
                        <h2 className='text-base lg:text-xl font-bold mb-4 pt-2 text-center text-[#D1A054]'>Phone</h2>
                        <p className='text-base lg:text-xl font-semibold text-center'>+8801747004620</p>
                    </div>
                </div>

                <div className='flex flex-col'>
                    <h2 className='flex justify-center bg-[#D1A054] p-4'>
                        <IoLocation className=' text-white text-base lg:text-xl'/>
                    </h2>
                    <div className='bg-slate-100 mx-4 pb-4 border-[#D1A054] border-2 border-t-0 flex-1'>
                        <h2 className='text-base lg:text-xl font-bold mb-4 pt-2 text-center text-[#D1A054]'>Address</h2>
                        <p className='text-base lg:text-xl font-semibold text-center'>Sussex Drive, Manchester, Greater Manchester, M43 7PD</p>
                    </div>
                </div>

                <div className='flex flex-col'>
                    <h2 className='flex justify-center bg-[#D1A054] p-4'>
                        <IoTimeOutline className=' text-white text-base lg:text-xl'/>
                    </h2>
                    <div className='bg-slate-100 mx-4 pb-4 border-[#D1A054] border-2 border-t-0 flex-1'>
                        <h2 className='text-base lg:text-xl font-bold mb-4 pt-2 text-center text-[#D1A054]'>Working Ours</h2>
                        <p className='text-base lg:text-xl font-semibold text-center'>Mon - Fri: 08:00 - 22:00</p>
                        <p className='text-base lg:text-xl font-semibold text-center'>Sat - Sun: 10:00 - 23:00</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;