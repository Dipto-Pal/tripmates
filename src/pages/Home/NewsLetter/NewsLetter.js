import img from '../../../assets/Image/Home/NewsLatter.png'
const NewsLetter = () => {
    return (
        <div className='relative mb-[212px] w-full py-10 h-[300px] lg:h-[400px] rounded-xl bg-fixed bg-center bg-cover bg-no-repeat' style={{ backgroundImage: `url(${img})` }}>
            <div className='absolute top-1/2 -translate-y-1/2 left-0 right-0 text-center px-4'>
                <h1 className='text-[32px] smd:text-[36px] md:text-[42px] lg:text-[56px] font-medium'>Subscribe to Our Newsletter</h1>
                <p className='text-sm smd:text-base md:text-lg lg:text-xl font-text'>And get the latest Price drop News</p>
                <div className='border-2 border-black mt-4 inline-block rounded-xl'>
                    <div className='p-1'>
                        <input className='w-[150px] md:w-[300px] lg:w-[500px] py-2 my-0 px-2 focus:outline-0 rounded-l-xl bg-transparent' type="email" name="email" id="email" placeholder='Enter Your Email' />
                        <button className='py-2 xs:py-[13px] px-3 xs:px-[33px] bg-black text-white rounded-xl border-none hover:bg-primary transition-colors ease-in delay-150'>SUBSCRIBE</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsLetter;