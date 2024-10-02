import React from 'react'
import { ButtonBg } from '../../components/common/buttons/Buttons';
import { FaPlus } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';

const Listing: React.FC = () => {
    const navigate = useNavigate()
    return (
        <section className='w-full h-full overflow-y-scroll p-4 pb-20'>
            <section className='mb-10 flex justify-between items-center'>
                <section className='text-left py-4'>
                    <h2 className='text-2xl tracking-wide text-[#202224] font-bold'>Listings</h2>
                </section>
                <section>
                    <ButtonBg className='bg-bc px-5 py-2 gap-1' onClick={() => { navigate("/dashboard/listings/add") }}><FaPlus />Add Listing</ButtonBg>
                </section>
            </section>
            <section>
                <section className="w-100 py-5">
                    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                        {/* {rooms.map((propList) => (
                            <PropList propList={propList} />
                        ))} */}
                    </section>
                </section>
            </section>
        </section>
    )
}

export default Listing