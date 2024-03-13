import icon from '/images/icon-thank-you.svg'

const Congrats = () => {
  return (
    <div className='card flex flex-col items-center bg-white px-3 w-auto mx-6 rounded-xl shadow-lg md:p-0 md:m-0 md:shadow-none md:col-start-13 md:col-span-11
    md:row-start-3 md:row-end-18 lg:col-start-11 lg:col-span-12 lg:row-start-9 lg:row-end-18 py-20 lg:p-0 lg:m-0'>
      <img src={icon} alt='thank you' className='w-[60px] lg:w-[85px] pb-6'/>
      <h1 className='text-lg text-marine-blue font-bold pb-4 lg:text-3xl'>Thank you!</h1>
      <p className='text-center text-base text-cool-gray px-2.5'>Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free
        to email us at support@loremgaming.com.  
       </p>
    </div>
  ) 
}
export default Congrats